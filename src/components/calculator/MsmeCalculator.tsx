"use client";

import { useState, useMemo } from "react";

export default function MsmeCalculator() {
  const [invoiceDateStr, setInvoiceDateStr] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [invoiceAmount, setInvoiceAmount] = useState<number>(250000);
  const [enterpriseType, setEnterpriseType] = useState<"micro" | "small" | "medium" | "trader">("micro");
  const [hasWrittenAgreement, setHasWrittenAgreement] = useState<boolean>(true);
  const [agreedDays, setAgreedDays] = useState<number>(45);

  const analysis = useMemo(() => {
    // Under Section 43B(h):
    // Medium enterprises and Retail/Wholesale traders (NIC 45, 46, 47) are exempt from 43B(h).
    const isExempt = enterpriseType === "medium" || enterpriseType === "trader";

    // Allowed statutory days
    let allowedDays = 15;
    if (hasWrittenAgreement) {
      allowedDays = Math.min(Math.max(1, agreedDays), 45); // Max 45 days under Section 15 of MSMED Act
    }

    const invDate = new Date(invoiceDateStr);
    const dueDate = new Date(invDate);
    dueDate.setDate(dueDate.getDate() + allowedDays);

    const today = new Date();
    // normalize times
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const diffMs = dueDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    const isOverdue = daysRemaining < 0;
    const isApproaching = daysRemaining >= 0 && daysRemaining <= 7;

    // Disallowance risk: Corporate tax at ~25.17% (Section 115BAA) or ~30% standard
    const potentialTaxHit = Math.round(invoiceAmount * 0.2517);

    // Section 16 MSMED Interest: 3 times the RBI repo rate (current repo 6.5% -> 19.5% compounded monthly)
    const overdueDaysCount = isOverdue ? Math.abs(daysRemaining) : 0;
    const penalInterest = isOverdue
      ? Math.round(invoiceAmount * (0.195 / 365) * overdueDaysCount)
      : 0;

    return {
      isExempt,
      allowedDays,
      dueDateFormatted: dueDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      daysRemaining,
      isOverdue,
      isApproaching,
      potentialTaxHit,
      penalInterest,
      overdueDaysCount,
    };
  }, [invoiceDateStr, invoiceAmount, enterpriseType, hasWrittenAgreement, agreedDays]);

  return (
    <div className="bg-white rounded-3xl border border-sd-border shadow-md p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-sd-pink bg-sd-pink/10 border border-sd-pink/20 px-2.5 py-0.5 rounded-full">
            Income Tax Act Sec 43B(h)
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-sd-text mt-1">
            MSME 15/45-Day Payment Gatekeeper &amp; Tax Disallowance Simulator
          </h2>
        </div>
        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          MSMED Act 2006
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Vendor Invoice Date
              </label>
              <input
                type="date"
                value={invoiceDateStr}
                onChange={(e) => setInvoiceDateStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold outline-none focus:border-sd-pink bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Invoice Amount (INR)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400 font-bold text-sm">₹</span>
                <input
                  type="number"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold outline-none focus:border-sd-pink"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Supplier Enterprise Category (from Udyam Certificate)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setEnterpriseType("micro")}
                className={`p-2.5 rounded-xl border font-bold text-left cursor-pointer transition-all ${
                  enterpriseType === "micro"
                    ? "bg-rose-50 border-rose-400 text-rose-900"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                }`}
              >
                <span className="block text-[10px] text-slate-400">Turnover &le; ₹5 Cr</span>
                Micro (Covered)
              </button>
              <button
                type="button"
                onClick={() => setEnterpriseType("small")}
                className={`p-2.5 rounded-xl border font-bold text-left cursor-pointer transition-all ${
                  enterpriseType === "small"
                    ? "bg-rose-50 border-rose-400 text-rose-900"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                }`}
              >
                <span className="block text-[10px] text-slate-400">Turnover &le; ₹50 Cr</span>
                Small (Covered)
              </button>
              <button
                type="button"
                onClick={() => setEnterpriseType("medium")}
                className={`p-2.5 rounded-xl border font-bold text-left cursor-pointer transition-all ${
                  enterpriseType === "medium"
                    ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                }`}
              >
                <span className="block text-[10px] text-slate-400">Turnover &le; ₹250 Cr</span>
                Medium (Exempt)
              </button>
              <button
                type="button"
                onClick={() => setEnterpriseType("trader")}
                className={`p-2.5 rounded-xl border font-bold text-left cursor-pointer transition-all ${
                  enterpriseType === "trader"
                    ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                }`}
              >
                <span className="block text-[10px] text-slate-400">Retail / Wholesale</span>
                Trader (Exempt)
              </button>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <strong className="text-xs font-bold text-slate-800 block">
                  Written Contract / PO with Payment Terms?
                </strong>
                <p className="text-[11px] text-slate-500">
                  Without written agreement, law mandates payment within strictly 15 days.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasWrittenAgreement}
                  onChange={(e) => setHasWrittenAgreement(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sd-pink"></div>
              </label>
            </div>

            {hasWrittenAgreement && (
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">
                  Agreed Credit Days (Max 45 Days Allowed by Law):
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={90}
                    value={agreedDays}
                    onChange={(e) => setAgreedDays(Number(e.target.value))}
                    className="w-16 px-2 py-1 rounded-lg border border-slate-300 text-xs font-bold text-center"
                  />
                  <span className="text-xs text-slate-500">days</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0b1f3f] rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
                Statutory Status
              </span>
              {analysis.isExempt ? (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded font-bold">
                  Exempt from Sec 43B(h)
                </span>
              ) : analysis.isOverdue ? (
                <span className="text-[10px] bg-rose-500/30 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded font-extrabold animate-pulse">
                  ⚠️ SECTION 43B(h) VIOLATION!
                </span>
              ) : analysis.isApproaching ? (
                <span className="text-[10px] bg-amber-500/30 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
                  ⚡ DUE WITHIN 7 DAYS
                </span>
              ) : (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded font-bold">
                  ✓ COMPLIANT TIMELINE
                </span>
              )}
            </div>

            <div className="space-y-3 py-3 border-y border-white/10 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Statutory Due Date:</span>
                <strong className="text-sm font-bold text-white font-mono">
                  {analysis.dueDateFormatted}
                </strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Max Permissible Window:</span>
                <strong className="font-bold text-white">
                  {analysis.allowedDays} Days from Invoice
                </strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Timeline Counter:</span>
                <strong
                  className={`font-mono text-sm font-bold ${
                    analysis.isOverdue
                      ? "text-rose-400"
                      : analysis.isApproaching
                      ? "text-amber-300"
                      : "text-emerald-400"
                  }`}
                >
                  {analysis.isOverdue
                    ? `${analysis.overdueDaysCount} Days OVERDUE`
                    : `${analysis.daysRemaining} Days Remaining`}
                </strong>
              </div>

              {!analysis.isExempt && (
                <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-rose-300">Potential Tax Disallowance:</span>
                    <strong className="font-mono text-rose-400 font-bold">
                      ₹{analysis.potentialTaxHit.toLocaleString("en-IN")}
                    </strong>
                  </div>
                  {analysis.isOverdue && (
                    <div className="flex justify-between items-center">
                      <span className="text-amber-300">MSMED Penal Interest (19.5%):</span>
                      <strong className="font-mono text-amber-400 font-bold">
                        ₹{analysis.penalInterest.toLocaleString("en-IN")}
                      </strong>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 leading-relaxed">
              💡 <strong>CMA Rule:</strong> Payments must clear before the fiscal year-end (March 31) to claim expense deduction in the same financial year.
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <a
              href="/contact"
              className="w-full block text-center py-2.5 px-4 rounded-xl bg-sd-pink hover:bg-sd-pink-dark text-white font-bold text-xs transition-colors shadow-md"
            >
              Outsource AP &amp; 43B(h) Gatekeeping →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
