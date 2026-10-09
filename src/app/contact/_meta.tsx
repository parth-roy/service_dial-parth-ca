import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Service Dial – Start a Confidential Conversation",
  description:
    "Get in touch with Service Dial for staffing, payroll, finance, or compliance requirements. All inquiries are NDA-protected. Response within 24 hours.",
  alternates: { canonical: "https://servicedialtm.com/contact" },
};

// Re-export the client page wrapped with metadata
export { default } from "./ContactForm";
