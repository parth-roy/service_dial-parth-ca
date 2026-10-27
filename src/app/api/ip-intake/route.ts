import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { ConversionIntent, LeadInquiry } from "@/models/Conversion";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      sessionId,
      assetSlug,
      eventType = "WhatsApp_Click",
      contactChannel = "WhatsApp",
      submittedInformation,
      serviceContext,
    } = body;

    if (!assetSlug) {
      return NextResponse.json(
        { error: "assetSlug is required" },
        { status: 400 }
      );
    }

    const effectiveSessionId =
      sessionId || `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    let intentId = null;

    try {
      await dbConnect();

      // 1. Record ConversionIntent telemetry
      const intentDoc = await ConversionIntent.create({
        sessionId: effectiveSessionId,
        assetSlug,
        eventType,
        clickedAt: new Date(),
      });
      intentId = intentDoc._id;

      // 2. If user submitted form info directly, record LeadInquiry
      if (submittedInformation && Object.keys(submittedInformation).length > 0) {
        const leadId = `SD-IP-${Date.now().toString(36).toUpperCase()}-${Math.floor(
          1000 + Math.random() * 9000
        )}`;

        await LeadInquiry.create({
          leadId,
          contactChannel: contactChannel || "Direct Form",
          submittedInformation,
          serviceContext: serviceContext || assetSlug,
          consentProvenance: {
            optInTimestamp: new Date(),
            termsVersion: "v1.0-2026",
            dpdpConsentGiven: true,
          },
          intakeStatus: "New",
          intentId: intentDoc._id,
        });

        // Forward to Google Sheets Webhook if configured
        const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
        if (webhookUrl && webhookUrl.startsWith("http")) {
          try {
            fetch(webhookUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                sheet: "Website_Form_Leads",
                leadId,
                name: submittedInformation.name || submittedInformation.fullName || "",
                company: submittedInformation.company || "",
                email: submittedInformation.email || "",
                phone: submittedInformation.phone || "",
                service: serviceContext || "Trademark & IP Legal Protection",
                timeline: "Immediate",
                headcount: submittedInformation.headcount || "1-10 Employees",
                priority: "STANDARD_ENTERPRISE",
                message: `[IP Intake] Asset: ${assetSlug}. Details: ${JSON.stringify(submittedInformation)}`,
                sourceUrl: `https://servicedialtm.com${assetSlug}`,
                dpdpConsent: true,
              }),
              signal: AbortSignal.timeout(5000),
            }).catch((err) => console.warn("[IP Intake Sheets Sync Notice]:", err?.message));
          } catch {}
        }
      }
    } catch (dbError) {
      // Fail-open: Telemetry or database failure MUST NOT prevent customer contact
      console.error("[IP Intake DB Error - Failing Open]:", dbError);
      return NextResponse.json({
        success: true,
        failOpen: true,
        sessionId: effectiveSessionId,
        message: "Logged with fallback; proceeding with contact.",
      });
    }

    return NextResponse.json({
      success: true,
      intentId,
      sessionId: effectiveSessionId,
    });
  } catch (error) {
    console.error("[IP Intake Request Error]:", error);
    // Even on bad body, return success with fail-open to never block frontend redirect
    return NextResponse.json({
      success: true,
      failOpen: true,
      error: "Malformed request; proceeding to channel.",
    });
  }
}
