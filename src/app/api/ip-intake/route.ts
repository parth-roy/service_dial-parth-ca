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
        await LeadInquiry.create({
          contactChannel,
          submittedInformation,
          serviceContext: serviceContext || assetSlug,
          consentProvenance: {
            optInTimestamp: new Date(),
            termsVersion: "v1.0-2026",
          },
          intakeStatus: "New",
          intentId: intentDoc._id,
        });
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
