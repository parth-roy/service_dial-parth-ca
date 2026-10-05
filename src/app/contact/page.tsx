import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact – Start a Confidential Conversation | Service Dial",
  description:
    "Get in touch with Service Dial for staffing, payroll, finance, or compliance requirements. All inquiries are NDA-protected from first contact. Response within 24 hours.",
  alternates: { canonical: "https://servicedial.in/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
