"use client";

import React, { useState } from "react";

interface WhatsAppCTAProps {
  cityName?: string;
  stateName?: string;
  intentTitle?: string;
  classCount?: number;
  entityType?: string;
  totalGovtFee?: number;
  grandTotal?: number;
  buttonText?: string;
  className?: string;
}

export default function WhatsAppCTA({
  cityName = "India",
  stateName = "",
  intentTitle = "Trademark Registration",
  classCount = 1,
  entityType = "Individual/MSME",
  totalGovtFee,
  grandTotal,
  buttonText = "Chat on WhatsApp",
  className = "",
}: WhatsAppCTAProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const assetSlug = typeof window !== "undefined" ? window.location.pathname : "/ip-services";

    // 1. Log telemetry to durable intake endpoint (Fail-Open)
    try {
      await fetch("/api/ip-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assetSlug,
          eventType: "WhatsApp_Click",
          contactChannel: "WhatsApp",
          serviceContext: `${intentTitle} - ${cityName}`,
          submittedInformation: {
            cityName,
            stateName,
            intentTitle,
            classCount,
            entityType,
            totalGovtFee,
            grandTotal,
          },
        }),
      });
    } catch (err) {
      // Fail-open: Never let analytics failure prevent client contact
      console.warn("[WhatsAppCTA Telemetry Error - Failing Open]:", err);
    }

    // 2. Build pre-filled WhatsApp message URL
    const messageLines = [
      `Hello Service Dial IP Advisory,`,
      `I am inquiring about *${intentTitle}* for my business in *${cityName}${stateName ? `, ${stateName}` : ""}*.`,
      `• Entity Category: ${entityType}`,
      `• Trademark Classes: ${classCount}`,
      grandTotal ? `• Projected Total: ₹${grandTotal.toLocaleString("en-IN")}` : "",
      `Please provide guidance on the filing procedure, required documents, and timeline.`,
    ].filter(Boolean);

    const encodedMessage = encodeURIComponent(messageLines.join("\n"));
    const whatsappUrl = `https://wa.me/919999999999?text=${encodedMessage}`;

    // 3. Open WhatsApp in new tab or navigate
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    setLoading(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-xl shadow transition-all duration-150 cursor-pointer disabled:opacity-75 ${className}`}
    >
      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
      {loading ? "Connecting to Advisor..." : buttonText}
    </button>
  );
}
