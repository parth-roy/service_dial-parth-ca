"use client";

import React, { useState } from "react";
import WhatsAppCTA from "./WhatsAppCTA";

interface PricingCalculatorProps {
  defaultGovtFeeIndividual?: number;
  defaultGovtFeeCorporate?: number;
  defaultProFeeIndividual?: number;
  defaultProFeeCorporate?: number;
  cityName?: string;
  stateName?: string;
  intentTitle?: string;
}

export default function PricingCalculator({
  defaultGovtFeeIndividual = 4500,
  defaultGovtFeeCorporate = 9000,
  defaultProFeeIndividual = 1499,
  defaultProFeeCorporate = 2999,
  cityName = "India",
  stateName = "",
  intentTitle = "Trademark Registration",
}: PricingCalculatorProps) {
  // State
  const [entityType, setEntityType] = useState<"individual" | "corporate">("individual");
  const [classCount, setClassCount] = useState<number>(1);
  const [includeSearchClearance, setIncludeSearchClearance] = useState<boolean>(true);

  // Calculations
  const isIndividualOrMSME = entityType === "individual";
  const govtFeePerClass = isIndividualOrMSME ? defaultGovtFeeIndividual : defaultGovtFeeCorporate;
  const proFeePerClass = isIndividualOrMSME ? defaultProFeeIndividual : defaultProFeeCorporate;
  const searchClearanceFee = includeSearchClearance ? 499 : 0;

  const totalGovtFee = govtFeePerClass * classCount;
  const totalProFee = (proFeePerClass * classCount) + searchClearanceFee;
  const gstAmount = Math.round(totalProFee * 0.18);
  const grandTotal = totalGovtFee + totalProFee + gstAmount;

  return (
    <div className="bg-white border border-sd-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-sd-border">
        <div>
          <span className="text-xs font-semibold text-sd-pink uppercase tracking-wider">
            Interactive Fee Transparency Engine
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-sd-text mt-1">
            Official Trademark Cost Calculator {cityName !== "India" ? `for ${cityName}` : ""}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            IP India TM-A Official Slabs
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Entity Type Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-sd-text mb-3">
              1. Select Your Applicant Entity Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setEntityType("individual")}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isIndividualOrMSME
                    ? "border-sd-pink bg-sd-pink/5 ring-1 ring-sd-pink"
                    : "border-sd-border hover:border-sd-border/80 bg-sd-bg"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-sd-text">Individual / MSME / Startup</span>
                  {isIndividualOrMSME && (
                    <span className="w-2.5 h-2.5 rounded-full bg-sd-pink" />
                  )}
                </div>
                <p className="text-xs text-sd-muted mt-1.5 leading-relaxed">
                  Sole proprietors, individuals, DPIIT-recognized startups & Udyam certificate holders.
                </p>
                <span className="inline-block mt-2 font-mono text-xs font-semibold text-emerald-700">
                  Govt Fee: ₹4,500 / class
                </span>
              </button>

              <button
                type="button"
                onClick={() => setEntityType("corporate")}
                className={`p-4 rounded-xl border text-left transition-all ${
                  !isIndividualOrMSME
                    ? "border-sd-pink bg-sd-pink/5 ring-1 ring-sd-pink"
                    : "border-sd-border hover:border-sd-border/80 bg-sd-bg"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-sd-text">Company / LLP / Society</span>
                  {!isIndividualOrMSME && (
                    <span className="w-2.5 h-2.5 rounded-full bg-sd-pink" />
                  )}
                </div>
                <p className="text-xs text-sd-muted mt-1.5 leading-relaxed">
                  Private Limited, Public Limited, LLPs, Partnerships without MSME certification.
                </p>
                <span className="inline-block mt-2 font-mono text-xs font-semibold text-sd-muted">
                  Govt Fee: ₹9,000 / class
                </span>
              </button>
            </div>
          </div>

          {/* 2. Number of Nice Classes */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-sd-text">
                2. Number of Trademark Classes
              </label>
              <span className="text-xs text-sd-muted">
                Selected: <strong className="text-sd-text font-mono">{classCount} {classCount === 1 ? "Class" : "Classes"}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setClassCount(num)}
                  className={`flex-1 py-2.5 rounded-xl border font-bold text-sm transition-all ${
                    classCount === num
                      ? "bg-sd-pink text-white border-sd-pink shadow-sm"
                      : "bg-white text-sd-text border-sd-border hover:border-sd-pink/50"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <p className="text-xs text-sd-muted mt-2">
              Multi-class filings incur statutory government fees per each individual Nice class (1–45).
            </p>
          </div>

          {/* 3. Pre-filing Comprehensive Search Toggle */}
          <div className="p-4 bg-sd-bg border border-sd-border rounded-xl flex items-center justify-between">
            <div className="pr-4">
              <span className="text-xs font-bold text-sd-text block">
                Vienna Classification & Phonetic Similarity Audit
              </span>
              <p className="text-xs text-sd-muted mt-0.5">
                Prior-filing clearance to detect conflicting trademarks and minimize Section 9/11 examination objections.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIncludeSearchClearance(!includeSearchClearance)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out shrink-0 ${
                includeSearchClearance ? "bg-sd-pink" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  includeSearchClearance ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Breakdown & Total Column */}
        <div className="lg:col-span-5 bg-sd-bg-2 border border-sd-border rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sd-muted mb-4 pb-2 border-b border-sd-border">
              Cost Segregation Summary
            </h4>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-sd-text">
                  Government Statutory Fee ({classCount}x)
                  <span className="block text-[11px] text-sd-muted font-normal">
                    Direct IP India e-filing fee (No GST)
                  </span>
                </span>
                <span className="font-mono font-bold text-sd-text">
                  ₹{totalGovtFee.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sd-text">
                  Professional Advisory & Drafting
                  <span className="block text-[11px] text-sd-muted font-normal">
                    Form TM-A drafting & classification
                  </span>
                </span>
                <span className="font-mono text-sd-text">
                  ₹{totalProFee.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sd-text">
                  Applicable GST (18%)
                  <span className="block text-[11px] text-sd-muted font-normal">
                    Levied only on professional advisory
                  </span>
                </span>
                <span className="font-mono text-sd-text">
                  ₹{gstAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="pt-4 border-t border-sd-border flex items-baseline justify-between">
                <div>
                  <span className="font-bold text-base text-sd-text block">Total Investment</span>
                  <span className="text-[11px] text-emerald-700 font-medium">All inclusive, no hidden charges</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold font-mono text-sd-pink">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-sd-border">
            <WhatsAppCTA
              cityName={cityName}
              stateName={stateName}
              intentTitle={intentTitle}
              classCount={classCount}
              entityType={isIndividualOrMSME ? "Individual/MSME" : "Corporate"}
              totalGovtFee={totalGovtFee}
              grandTotal={grandTotal}
              buttonText="Confirm Filing via WhatsApp"
            />
            <p className="text-[11px] text-center text-sd-muted mt-2">
              🔒 Confidential consultation governed by bilateral NDA protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
