"use server";

import dbConnect from "@/lib/mongodb";
import { LeadInquiry } from "@/models/Conversion";
import { headers } from "next/headers";
import fs from "node:fs/promises";
import path from "node:path";

export interface ContactSubmissionState {
  success: boolean;
  message?: string;
  leadId?: string;
  priorityLevel?: "URGENT_SLA_72H" | "STANDARD_ENTERPRISE" | "STRATEGIC_PLANNING";
  error?: string;
}

export async function submitContactLead(
  formData: FormData
): Promise<ContactSubmissionState> {
  try {
    const name = (formData.get("name") as string)?.trim();
    const company = (formData.get("company") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim() || "";
    const service = (formData.get("service") as string)?.trim();
    const timeline = (formData.get("timeline") as string)?.trim() || "15_30_days";
    const headcount = (formData.get("headcount") as string)?.trim() || "10_50";
    const message = (formData.get("message") as string)?.trim();

    // DPDP & Attribution fields
    const dpdpConsent = formData.get("dpdp_consent") === "true" || formData.get("dpdp_consent") === "on";
    const termsVersion = (formData.get("terms_version") as string)?.trim() || "DPDP-2023-V1.0";
    const utmSource = (formData.get("utm_source") as string)?.trim() || "";
    const utmMedium = (formData.get("utm_medium") as string)?.trim() || "";
    const utmCampaign = (formData.get("utm_campaign") as string)?.trim() || "";
    const utmTerm = (formData.get("utm_term") as string)?.trim() || "";
    const utmContent = (formData.get("utm_content") as string)?.trim() || "";
    const referrer = (formData.get("referrer") as string)?.trim() || "";

    // Basic validation
    if (!name || !company || !email || !service || !message) {
      return {
        success: false,
        error: "Please complete all required fields (Name, Company, Work Email, Service, and Details).",
      };
    }

    if (!dpdpConsent) {
      return {
        success: false,
        error: "DPDP Act 2023 statutory consent is required to process enterprise inquiries.",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please provide a valid business email address.",
      };
    }

    // Lead Qualification Scoring (BANT & MEDDPICC aligned)
    let priority: "URGENT_SLA_72H" | "STANDARD_ENTERPRISE" | "STRATEGIC_PLANNING" =
      "STANDARD_ENTERPRISE";

    if (timeline === "urgent_72h" || headcount === "200_1000" || headcount === "1000_plus") {
      priority = "URGENT_SLA_72H";
    } else if (timeline === "strategic_planning") {
      priority = "STRATEGIC_PLANNING";
    }

    const leadId = `SD-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // Get IP and User Agent from request headers for audit trail
    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const userAgent = headerList.get("user-agent") || "unknown";

    const leadPayload = {
      leadId,
      contactChannel: "Direct Form" as const,
      submittedInformation: {
        name,
        company,
        email,
        phone,
        service,
        timeline,
        headcount,
        message,
      },
      serviceContext: service,
      consentProvenance: {
        optInTimestamp: new Date(),
        termsVersion,
        dpdpConsentGiven: true,
        ipAddress,
        userAgent,
      },
      utmParams: {
        source: utmSource || undefined,
        medium: utmMedium || undefined,
        campaign: utmCampaign || undefined,
        term: utmTerm || undefined,
        content: utmContent || undefined,
        referrer: referrer || undefined,
      },
      priorityLevel: priority,
      intakeStatus: "New" as const,
    };

    // Persist to MongoDB
    try {
      await dbConnect();
      await LeadInquiry.create(leadPayload);
      console.log(`[Service Dial DB] Lead ${leadId} persisted to MongoDB successfully.`);
    } catch (dbErr) {
      console.error("[Service Dial DB Persistence Error - Failover Active]", dbErr);
      try {
        const failoverDir = path.join(process.cwd(), ".failover_leads");
        await fs.mkdir(failoverDir, { recursive: true });
        const filePath = path.join(failoverDir, "lead_inquiries.jsonl");
        await fs.appendFile(filePath, JSON.stringify(leadPayload) + "\n", "utf-8");
        console.log(`[Service Dial DB] Lead ${leadId} safely archived to local failover queue.`);
      } catch (fileErr) {
        console.error("[Service Dial Failover File Write Error]", fileErr);
      }
    }

    // Forward to Google Sheets Webhook if configured (Website_Form_Leads tab)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("http")) {
      try {
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheet: "Website_Form_Leads",
            leadId,
            name,
            company,
            email,
            phone,
            service,
            timeline,
            headcount,
            priority,
            message,
            sourceUrl: referrer || "https://servicedialtm.com/contact",
            dpdpConsent: true,
          }),
          signal: AbortSignal.timeout(5000),
        }).catch((err) => console.warn("[Google Sheets Contact Sync Notice]:", err?.message));
      } catch {}
    }

    console.log("[Service Dial Lead Captured]", {
      leadId,
      timestamp: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      service,
      priority,
    });

    return {
      success: true,
      leadId,
      priorityLevel: priority,
      message:
        "Your requirement has been securely submitted under our bilateral NDA and DPDP Act data protection standards. An executive consultant will reach out within 24 hours.",
    };
  } catch (err) {
    console.error("[Contact Form Server Action Error]", err);
    return {
      success: false,
      error: "An unexpected server error occurred. Please contact us directly at connect@servicedialtm.com or +91 87778 64949.",
    };
  }
}
