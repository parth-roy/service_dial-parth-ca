"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { submitContactLead } from "@/app/contact/actions";

interface ModuleOption {
  id: string;
  name: string;
  description: string;
  basePrice: number; // monthly increment in INR
  recommended: boolean;
}

const AVAILABLE_MODULES: ModuleOption[] = [
  {
    id: "core_payroll",
    name: "Core Cloud Payroll & Salary Disbursement",
    description: "Automated gross-to-net computation, bank payout advice files, tax calculation, and digital pay-slips.",
    basePrice: 6000,
    recommended: true,
  },
  {
    id: "epfo_esic",
    name: "EPFO & ESIC Statutory Compliance & ECR Generation",
    description: "Monthly ECR generation, wage ceiling threshold tracking (₹25k limit ready), UAN seeding, and challan reconciliation.",
    basePrice: 4500,
    recommended: true,
  },
  {
    id: "wb_pt_lwf",
    name: "West Bengal Professional Tax (2026 Slabs) & LWF",
    description: "West Bengal PT deduction & return filing (Form III-A), plus bi-annual Labour Welfare Fund remittances (July 15 & Jan 15).",
    basePrice: 3500,
    recommended: true,
  },
  {
    id: "clra_contractor",
    name: "CLRA & Contract Labour Compliance Auditing",
    description: "Vendor compliance audits, Form XVI registers, minimum wage adherence, and interstate migrant worker tracking.",
    basePrice: 5000,
    recommended: false,
  },
  {
    id: "tax_form16",
    name: "TDS on Salary (24Q) & Annual Form 16 Part A/B",
    description: "Quarterly TDS e-filing (Form 24Q), investment proof verification, and automated digital Form 16 generation.",
    basePrice: 3000,
    recommended: false,
  },
];

export default function PayrollFeeEstimator() {
  const [employeeCount, setEmployeeCount] = useState<number>(45);
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "core_payroll",
    "epfo_esic",
    "wb_pt_lwf",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionState, setSubmissionState] = useState<{
    loading: boolean;
    success: boolean;
    leadId?: string;
    error?: string;
  }>({ loading: false, success: false });

  // Generate unique IDs for form controls (accessibility)
  const employeeCountInputId = useId();
  const leadNameInputId = useId();
  const leadCompanyInputId = useId();
  const leadEmailInputId = useId();
  const leadPhoneInputId = useId();

  // Pricing calculation logic calibrated against B2B audit benchmarks
  const calculatePricing = () => {
    let baseTierMonthly = 0;
    let pepmMultiplier = 0;

    if (employeeCount <= 20) {
      baseTierMonthly = 9500;
      pepmMultiplier = 250;
    } else if (employeeCount <= 50) {
      // 21-50 employees: ~₹12k-₹18k
      baseTierMonthly = 12000;
      pepmMultiplier = 160;
    } else if (employeeCount <= 100) {
      // 51-100 employees: ~₹18k-₹28k
      baseTierMonthly = 18500;
      pepmMultiplier = 140;
    } else if (employeeCount <= 250) {
      // 101-250 employees: ~₹30k-₹55k
      baseTierMonthly = 31000;
      pepmMultiplier = 120;
    } else {
      // 251+ employees
      baseTierMonthly = 52000;
      pepmMultiplier = 100;
    }

    // Module calculation
    const moduleAddonTotal = selectedModules.reduce((sum, modId) => {
      const mod = AVAILABLE_MODULES.find((m) => m.id === modId);
      return sum + (mod ? mod.basePrice : 0);
    }, 0);

    // Scaling factor for modules based on volume
    const volumeFactor = Math.max(1, Math.log10(employeeCount / 10));
    const estimatedMonthly = Math.round(
      baseTierMonthly + (employeeCount * pepmMultiplier * 0.4) + (moduleAddonTotal * volumeFactor * 0.5)
    );

    // Approximate PEPM (Per Employee Per Month)
    const pepm = Math.round(estimatedMonthly / employeeCount);

    // Estimated in-house cost (Internal Compliance Officer + HRMS Software license: min ₹55,000/mo)
    const inHouseCost = Math.max(55000, employeeCount * 450 + 40000);
    const estimatedMonthlySavings = Math.max(0, inHouseCost - estimatedMonthly);

    return {
      estimatedMonthly,
      pepm,
      inHouseCost,
      estimatedMonthlySavings,
      annualSavings: estimatedMonthlySavings * 12,
    };
  };

  const { estimatedMonthly, pepm, estimatedMonthlySavings, annualSavings } =
    calculatePricing();

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length === 1) return; // Keep at least one
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionState({ loading: true, success: false });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("service", "HRMS & Payroll Management");
    formData.set("headcount", `${employeeCount}_employees`);
    formData.set(
      "message",
      `[Fee Estimator Lead] Headcount: ${employeeCount} employees. Modules: ${selectedModules.join(", ")}. Estimated Quote: ₹${estimatedMonthly.toLocaleString("en-IN")}/month (PEPM: ₹${pepm}).`
    );
    formData.set("dpdp_consent", "true");
    formData.set("terms_version", "DPDP-2023-V1.0");

    const res = await submitContactLead(formData);
    if (res.success) {
      setSubmissionState({ loading: false, success: true, leadId: res.leadId });
    } else {
      setSubmissionState({
        loading: false,
        success: false,
        error: res.error || "Submission failed. Please contact us directly.",
      });
    }
  };

  return (
    <div className="rounded-2xl border border-sd-border bg-white shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-sd-dark via-[#1a1429] to-sd-dark p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-sd-pink/20 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sd-pink border border-white/15 text-xs font-semibold mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Transparent B2B Fee Modeling · 2026 Regulatory Ready</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Payroll & Statutory Compliance Fee Estimator
            </h2>
            <p className="text-white/70 text-sm mt-1 max-w-xl">
              Model your organization&apos;s exact monthly fee for outsourced, zero-defect payroll and West Bengal labour law compliance.
            </p>
          </div>
          <div className="text-right sm:block">
            <span className="text-xs uppercase tracking-wider text-white/60 block">Statutory Indemnity</span>
            <span className="text-emerald-400 font-bold text-sm">100% Risk Protected</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8">
        {/* Left Column: Sliders & Module Selection */}
        <div className="lg:col-span-7 space-y-6">
          {/* Employee Count Slider */}
          <div className="bg-sd-bg-2 p-5 rounded-xl border border-sd-border">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor={employeeCountInputId} className="text-sm font-bold text-sd-text">
                Active Employee & Contractor Headcount
              </label>
              <div className="flex items-center gap-2">
                <input
                  id={employeeCountInputId}
                  type="number"
                  aria-label="Active Employee and Contractor Headcount"
                  min={5}
                  max={1000}
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Math.max(5, Math.min(1000, Number(e.target.value) || 5)))}
                  className="w-20 text-center py-1.5 px-2 bg-white border border-sd-border rounded-lg font-black text-sd-pink text-base focus:outline-none focus:ring-2 focus:ring-sd-pink"
                />
                <span className="text-xs font-bold text-sd-muted">Employees</span>
              </div>
            </div>

            <input
              type="range"
              aria-label="Headcount range slider"
              min={5}
              max={500}
              step={5}
              value={employeeCount > 500 ? 500 : employeeCount}
              onChange={(e) => setEmployeeCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sd-pink"
            />

            <div className="flex justify-between text-[11px] text-sd-muted mt-2 font-medium">
              <span>5 (SME)</span>
              <span>50 (Growth)</span>
              <span>150 (Mid-Market)</span>
              <span>300 (Corporate)</span>
              <span>500+ (Enterprise)</span>
            </div>
          </div>

          {/* Module Selector */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-sd-text">
                Select Statutory & Operational Modules
              </span>
              <span className="text-xs text-sd-pink font-semibold">
                {selectedModules.length} selected
              </span>
            </div>

            <div className="space-y-2.5">
              {AVAILABLE_MODULES.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isSelected
                        ? "border-sd-pink/60 bg-sd-pink/5 ring-1 ring-sd-pink/30"
                        : "border-sd-border bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      aria-label={mod.name}
                      checked={isSelected}
                      onChange={() => toggleModule(mod.id)}
                      className="mt-1 h-4 w-4 rounded border-sd-border text-sd-pink focus:ring-sd-pink cursor-pointer shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sd-text">
                          {mod.name}
                        </span>
                        {mod.recommended && (
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            Core Compliance
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-sd-muted mt-0.5 leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Price Summary Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 p-6 rounded-2xl border border-sd-border">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sd-pink mb-1">
              Estimated Monthly Retainer
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-sd-text">
                ₹{estimatedMonthly.toLocaleString("en-IN")}
              </span>
              <span className="text-xs font-semibold text-sd-muted">/ month + GST</span>
            </div>
            <div className="mt-1 text-xs text-sd-muted font-medium flex items-center gap-1.5">
              <span>Approx.</span>
              <strong className="text-sd-text font-bold">₹{pepm}</strong>
              <span>per employee / month (PEPM)</span>
            </div>

            {/* Savings Callout */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 mb-1">
                <span>📈</span>
                <span>Substantial In-House Cost Reduction</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Retaining an in-house payroll officer & HRMS licensing costs approx.{" "}
                <strong>₹{calculatePricing().inHouseCost.toLocaleString("en-IN")}/mo</strong>. Outsourcing to Service Dial saves approx.{" "}
                <strong className="text-emerald-950 font-black">
                  ₹{estimatedMonthlySavings.toLocaleString("en-IN")}/mo
                </strong>{" "}
                (approx. <strong>₹{annualSavings.toLocaleString("en-IN")}/year</strong>).
              </p>
            </div>

            {/* Included Guarantees */}
            <div className="mt-6 space-y-2 border-t border-sd-border pt-4">
              <div className="text-xs font-bold text-sd-text mb-2">Service Dial SLA Inclusions:</div>
              {[
                "100% On-Time Salary Payout Advice Guarantee",
                "EPFO & ESIC ECR Filing before the 15th of every month",
                "West Bengal PT (Form III-A) & LWF Bi-Annual Assurance",
                "Dedicated Compliance Account Manager & Direct Phone Access",
                "Statutory Audit Assistance (Labour Inspectorate Support)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-sd-muted">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-sd-pink hover:bg-sd-pink-dark transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Download Formal Proposal & Audit Quote →</span>
            </button>
            <p className="text-center text-[11px] text-sd-muted mt-2">
              Instant lock-in quote · Governed by Bilateral NDA & DPDP Act
            </p>
          </div>
        </div>
      </div>

      {/* Quote Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-sd-border relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-sd-muted hover:text-sd-text font-bold text-lg"
            >
              ✕
            </button>

            {submissionState.success ? (
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 font-black text-2xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-black text-sd-text mb-2">
                  Proposal Request Dispatched
                </h3>
                <p className="text-xs text-sd-muted mb-4">
                  Tracking ID: <span className="font-mono font-bold text-sd-text">{submissionState.leadId}</span>. Our payroll operations director will review your headcount structure ({employeeCount} staff) and send a detailed SLA proposal within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmissionState({ loading: false, success: false });
                  }}
                  className="px-6 py-2 rounded-lg bg-sd-bg-2 border border-sd-border text-xs font-bold text-sd-text hover:bg-slate-100"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-black text-sd-text mb-1">
                  Request Official Managed Services Proposal
                </h3>
                <p className="text-xs text-sd-muted mb-4">
                  We will calibrate this quote (₹{estimatedMonthly.toLocaleString("en-IN")}/mo for {employeeCount} staff) with our legal compliance guarantee.
                </p>

                {submissionState.error && (
                  <div className="p-3 mb-4 rounded-lg bg-red-50 text-red-600 text-xs border border-red-200">
                    {submissionState.error}
                  </div>
                )}

                <form onSubmit={handleModalSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor={leadNameInputId} className="block text-xs font-bold text-sd-text mb-1">
                      Contact Name *
                    </label>
                    <input
                      id={leadNameInputId}
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sen"
                      className="w-full text-xs rounded-lg border border-sd-border p-2.5 focus:border-sd-pink focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor={leadCompanyInputId} className="block text-xs font-bold text-sd-text mb-1">
                      Organization Name *
                    </label>
                    <input
                      id={leadCompanyInputId}
                      required
                      type="text"
                      name="company"
                      placeholder="e.g. Apex Industrial Solutions"
                      className="w-full text-xs rounded-lg border border-sd-border p-2.5 focus:border-sd-pink focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor={leadEmailInputId} className="block text-xs font-bold text-sd-text mb-1">
                        Business Email *
                      </label>
                      <input
                        id={leadEmailInputId}
                        required
                        type="email"
                        name="email"
                        placeholder="rahul@apex.com"
                        className="w-full text-xs rounded-lg border border-sd-border p-2.5 focus:border-sd-pink focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor={leadPhoneInputId} className="block text-xs font-bold text-sd-text mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id={leadPhoneInputId}
                        required
                        type="tel"
                        name="phone"
                        placeholder="+91 98300 12345"
                        className="w-full text-xs rounded-lg border border-sd-border p-2.5 focus:border-sd-pink focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-sd-border text-[11px] text-sd-muted">
                    🔒 Processed under Section 8(2) DPDP Act 2023. Bilateral NDA strictly observed.
                  </div>

                  <button
                    type="submit"
                    disabled={submissionState.loading}
                    className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-sd-pink hover:bg-sd-pink-dark transition-all disabled:opacity-50"
                  >
                    {submissionState.loading ? "Generating Proposal..." : "Confirm & Send Custom RFP →"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
