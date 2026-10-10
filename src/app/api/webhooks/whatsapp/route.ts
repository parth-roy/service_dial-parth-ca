import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { LeadInquiry } from "@/models";

// Verification challenge for Meta / WhatsApp Cloud API webhook setup
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const expectedToken =
    process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN || "service_dial_wa_verify_2026";

  if (mode === "subscribe" && token === expectedToken) {
    console.log("[WhatsApp Webhook Verified Successfully]");
    return new Response(challenge, { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

// Inbound webhook event processor for WhatsApp Business API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if this is an event notification from WhatsApp
    if (body.object === "whatsapp_business_account" || body.entry) {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const messages = value?.messages;

      if (messages && messages.length > 0) {
        const msg = messages[0];
        const senderPhone = msg.from; // e.g. "919876543210"
        const messageText = msg.text?.body || "";
        const messageId = msg.id;

        console.log(`[WhatsApp Inbound Received from ${senderPhone}]:`, messageText);

        try {
          await dbConnect();

          // Reconcile or upsert LeadInquiry
          await LeadInquiry.findOneAndUpdate(
            { "submittedInformation.phone": senderPhone },
            {
              $set: {
                contactChannel: "WhatsApp",
                serviceContext: "WhatsApp Business Inbound",
                intakeStatus: "Working",
                "submittedInformation.phone": senderPhone,
                "submittedInformation.lastMessage": messageText,
                "submittedInformation.lastMessageId": messageId,
                "submittedInformation.lastMessageAt": new Date(),
              },
              $setOnInsert: {
                consentProvenance: {
                  optInTimestamp: new Date(),
                  termsVersion: "wa-chat-optin-2026",
                },
              },
            },
            { upsert: true, new: true }
          );
        } catch (dbErr) {
          console.error("[WhatsApp Webhook DB Sync Error]:", dbErr);
        }
      }

      // Return 200 OK to acknowledge receipt as required by WhatsApp Cloud API
      return NextResponse.json({ status: "EVENT_RECEIVED" });
    }

    return NextResponse.json({ status: "IGNORED" });
  } catch (error: any) {
    console.error("[WhatsApp Webhook Error]:", error);
    // Always return 200 to prevent WhatsApp from disabling the webhook endpoint
    return NextResponse.json({ status: "EVENT_RECEIVED", error: error.message });
  }
}
