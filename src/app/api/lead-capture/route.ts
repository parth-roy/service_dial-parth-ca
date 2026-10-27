import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { LeadInquiry } from "@/models/Conversion";
import fs from "node:fs/promises";
import path from "node:path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      fullName,
      phone,
      contactNumber,
      email,
      businessEmail,
      company,
      companyName,
      channel = "WhatsApp",
      service = "HRMS & Payroll Management",
      headcount,
      message,
      sourceUrl,
      dpdpConsent = true,
      utmParams,
    } = body;

    const cleanName = (name || fullName || "").trim();
    const cleanPhone = (phone || contactNumber || "").replace(/\s+/g, "").trim();
    const cleanEmail = (email || businessEmail || "").trim();
    const cleanCompany = (company || companyName || "").trim();
    const cleanService = (service || "HRMS & Payroll Management").trim();
    const cleanHeadcount = (headcount || "").trim();
    const cleanMessage = (message || "").trim();
    const cleanChannel: "WhatsApp" | "Call" | "Email" | "Direct Form" =
      channel === "Call" || channel === "Phone"
        ? "Call"
        : channel === "Email" || channel === "mail"
        ? "Email"
        : channel === "Direct Form"
        ? "Direct Form"
        : "WhatsApp";

    // Extract client IP and User Agent for DPDP compliance audit trail
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const leadId = `SD-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    const leadPayload = {
      leadId,
      contactChannel: cleanChannel,
      submittedInformation: {
        name: cleanName,
        phone: cleanPhone,
        email: cleanEmail,
        company: cleanCompany,
        service: cleanService,
        headcount: cleanHeadcount,
        message: cleanMessage,
        sourceUrl: sourceUrl || "https://servicedialtm.com",
      },
      serviceContext: cleanService,
      consentProvenance: {
        optInTimestamp: new Date(),
        termsVersion: "DPDP-2023-V1.0",
        dpdpConsentGiven: Boolean(dpdpConsent),
        ipAddress,
        userAgent,
      },
      utmParams: utmParams || {},
      priorityLevel: "STANDARD_ENTERPRISE" as const,
      intakeStatus: "New" as const,
    };

    // ── 1. Persist to MongoDB with Failover Recovery ─────────────────────────
    try {
      await dbConnect();
      await LeadInquiry.create(leadPayload);
      console.log(`[Service Dial DB] Lead ${leadId} persisted to MongoDB successfully.`);
    } catch (dbErr) {
      console.error("[Service Dial DB Error - Writing to Failover File]", dbErr);
      try {
        const failoverDir = path.join(process.cwd(), ".failover_leads");
        await fs.mkdir(failoverDir, { recursive: true });
        const filePath = path.join(failoverDir, "lead_inquiries.jsonl");
        await fs.appendFile(
          filePath,
          JSON.stringify({ ...leadPayload, recordedAt: new Date().toISOString() }) + "\n",
          "utf-8"
        );
        console.log(`[Service Dial DB] Lead ${leadId} archived to local failover queue.`);
      } catch (fileErr) {
        console.error("[Service Dial Failover File Write Error]", fileErr);
      }
    }

    // ── 2. Sync to Google Sheets Webhook (Non-blocking) ──────────────────────
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("http")) {
      const targetSheet =
        cleanChannel === "Call"
          ? "Call_Leads"
          : cleanChannel === "Email"
          ? "Email_Leads"
          : "WhatsApp_Leads";

      const sheetsPayload = {
        sheet: targetSheet,
        leadId,
        channel: cleanChannel,
        name: cleanName,
        phone: cleanPhone,
        email: cleanEmail,
        company: cleanCompany,
        service: cleanService,
        headcount: cleanHeadcount,
        message: cleanMessage,
        sourceUrl: sourceUrl || "https://servicedialtm.com",
        dpdpConsent: Boolean(dpdpConsent),
      };

      // Non-blocking fetch with 5s timeout
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetsPayload),
        signal: AbortSignal.timeout(5000),
      })
        .then(async (res) => {
          if (!res.ok) {
            console.warn(`[Google Sheets Webhook Non-200]: Status ${res.status}`);
          }
        })
        .catch((sheetErr) => {
          console.warn("[Google Sheets Webhook Sync Notice]:", sheetErr?.message || sheetErr);
        });
    }

    return NextResponse.json({
      success: true,
      leadId,
      channel: cleanChannel,
      message: "Lead inquiry captured successfully.",
    });
  } catch (error: any) {
    console.error("[Lead Capture API Error - Fail-Safe Handled]:", error);
    // Never fail the user: return failOpen so frontend dispatches to WhatsApp/Call/Mail
    return NextResponse.json({
      success: true,
      failOpen: true,
      error: error?.message || "Internal error handled with failover.",
    });
  }
}
