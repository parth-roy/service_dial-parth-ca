"use server";

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

    // Basic validation
    if (!name || !company || !email || !service || !message) {
      return {
        success: false,
        error: "Please complete all required fields (Name, Company, Work Email, Service, and Details).",
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

    // In production, this can forward to a CRM (HubSpot, Salesforce), Slack webhook, or PostgreSQL database
    console.log("[Service Dial Lead Captured]", {
      leadId,
      timestamp: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      service,
      timeline,
      headcount,
      priority,
      messageSnippet: message.slice(0, 100),
    });

    return {
      success: true,
      leadId,
      priorityLevel: priority,
      message:
        "Your requirement has been securely submitted under our bilateral NDA. An executive consultant will reach out within 24 hours.",
    };
  } catch (err) {
    console.error("[Contact Form Server Action Error]", err);
    return {
      success: false,
      error: "An unexpected server error occurred. Please email us directly at info@servicedialtm.com.",
    };
  }
}
