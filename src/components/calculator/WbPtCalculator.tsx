"use client";

import { useState, useMemo } from "react";
import CalculatorQuickLeadForm from "./CalculatorQuickLeadForm";
import {
  PAN_INDIA_PT_RULES,
  calculateMonthlyPT,
} from "@/data/statutoryMatrix";

export default function WbPtCalculator() {
  const [selectedState, setSelectedState] = useState<string>("west-bengal");
  const [grossSalary, setGrossSalary] = useState<number>(35000);
  const [employeeCount, setEmployeeCount] = useState<number>(1);
  const [isFebruary, setIsFebruary] = useState<boolean>(false);
  const [isFemale, setIsFemale] = useState<boolean>(false);

  const stateRule = PAN_INDIA_PT_RULES[selectedState] || PAN_INDIA_PT_RULES["west-bengal"];

  const calculation = useMemo(() => {
    const result = calculateMonthlyPT(selectedState, grossSalary, isFemale, isFebruary);
    const monthlyPt = result.taxAmount;

    // Estimate annual outgo based on state rules
    let annualPt = 0;
    if (!stateRule.hasPt) {
      annualPt = 0;
    } else if (selectedState === "west-bengal" || selectedState === "maharashtra") {
      // 11 regular months + 1 february adjusted month
      const regMonth = calculateMonthlyPT(selectedState, grossSalary, isFemale, false).taxAmount;
      const febMonth = calculateMonthlyPT(selectedState, grossSalary, isFemale, true).taxAmount;
      annualPt = regMonth * 11 + febMonth;
    } else {
      annualPt = monthlyPt * 12;
    }

    const totalMonthlyOutgo = monthlyPt * Math.max(1, employeeCount);
    const totalAnnualOutgo = annualPt * Math.max(1, employeeCount);

    return {
      monthlyPt,
      annualPt,
      slabName: result.notes,
      totalMonthlyOutgo,
      totalAnnualOutgo,
      actName: result.actName,
      statutoryStatus: result.statutoryStatus,
    };
  }, [selectedState, grossSalary, isFemale, isFebruary, employeeCount, stateRule]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {/* Top Header with State Selection */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b80f68] bg-[#b80f68]/10 border border-[#b80f68]/20 px-2.5 py-0.5 rounded-full inline-block">
            {stateRule.statutoryStatus === "REPEALED"
              ? "ODISHA PT REPEALED (APRIL 2026)"
              : stateRule.statutoryStatus === "NO_PT_STATE"
              ? "ZERO PT JURISDICTION"
              : stateRule.governingAct.split("(")[0]}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            {stateRule.stateName} Professional Tax Calculator
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="state-select" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Switch State:
          </label>
          <select
            id="state-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-900 outline-none focus:border-[#b80f68]"
          >
            <option value="west-bengal">West Bengal (Act VI of 1979)</option>
            <option value="karnataka">Karnataka (Act 14 of 2023 - ₹25k Cap)</option>
            <option value="maharashtra">Maharashtra (2023 Gender Exemption)</option>
            <option value="gujarat">Gujarat (Notif. GHN-35)</option>
            <option value="telangana">Telangana (TGCT)</option>
            <option value="andhra-pradesh">Andhra Pradesh (APCT)</option>
            <option value="tamil-nadu">Tamil Nadu (Half-Yearly GCC/TNULB)</option>
            <option value="madhya-pradesh">Madhya Pradesh (Vritti Kar)</option>
            <option value="odisha">Odisha (Repealed / Abolished 2026)</option>
            <option value="delhi">Delhi NCT (Zero PT)</option>
            <option value="haryana">Haryana (Zero PT)</option>
            <option value="rajasthan">Rajasthan (Zero PT)</option>
            <option value="uttar-pradesh">Uttar Pradesh (Zero PT)</option>
            <option value="punjab">Punjab (PSDT 2018 - IT Payers Only)</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Input Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Statutory Alert Banner for Special States */}
          {selectedState === "odisha" && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
              <strong className="block font-bold">🎉 STATUTORY NOTICE: ODISHA PT REPEALED</strong>
              <p>
                The Odisha State Tax on Professions Act, 2000 was abolished and repealed by the Government of Odisha effective April 1, 2026. Professional Tax deduction is strictly ₹0 across all salary slabs.
              </p>
            </div>
          )}

          {stateRule.statutoryStatus === "NO_PT_STATE" && (
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900 space-y-1">
              <strong className="block font-bold">ℹ️ ZERO PROFESSIONAL TAX JURISDICTION</strong>
              <p>
                {stateRule.stateName} does not levy Professional Tax on salaried employees or commercial employers. Deductions are strictly ₹0.
              </p>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Monthly Gross Salary (INR)
              </label>
              <span className="text-lg font-black text-[#b80f68] font-mono">
                ₹{grossSalary.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min={5000}
              max={150000}
              step={1000}
              value={grossSalary}
              onChange={(e) => setGrossSalary(Number(e.target.value))}
              className="w-full accent-[#b80f68] cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹5,000</span>
              <span>₹25,000 (Major Exemption Threshold)</span>
              <span>₹1,50,000+</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Direct Salary Input
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400 font-bold text-sm">₹</span>
                <input
                  type="number"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(Number(e.target.value))}
                  className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold outline-none focus:border-[#b80f68]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Number of Employees (Headcount)
              </label>
              <input
                type="number"
                min={1}
                max={50000}
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Math.max(1, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold outline-none focus:border-[#b80f68]"
              />
            </div>
          </div>

          {/* Conditional Options: Gender Toggle for Maharashtra */}
          {selectedState === "maharashtra" && (
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 flex items-center justify-between">
              <div>
                <strong className="text-xs font-bold text-purple-950 block">
                  Female Employee (Maharashtra 2023 Exemption)
                </strong>
                <p className="text-[11px] text-purple-700">
                  Female employees earning gross monthly wages up to ₹25,000 are 100% EXEMPT (₹0 PT).
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFemale}
                  onChange={(e) => setIsFemale(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2e0d82]"></div>
              </label>
            </div>
          )}

          {/* Conditional Options: February Spike for WB & Maharashtra */}
          {(selectedState === "west-bengal" || selectedState === "maharashtra") && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <strong className="text-xs font-bold text-slate-800 block">
                  February Month Deduction (Annual Cap Adjustment)
                </strong>
                <p className="text-[11px] text-slate-500">
                  February deducts an adjusted rate (₹300) to aggregate exactly ₹2,500 under Article 276(2).
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFebruary}
                  onChange={(e) => setIsFebruary(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b80f68]"></div>
              </label>
            </div>
          )}

          {/* State Specific Slabs Table */}
          <div className="pt-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
              Statutory Slabs for {stateRule.stateName}:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs">
              {stateRule.slabs.map((s, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border ${
                    s.monthlyTax > 0 ? "bg-rose-50/50 border-rose-200" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <span className="block text-[10px] text-slate-500">
                    {s.maxWageMonthly
                      ? `₹${s.minWageMonthly.toLocaleString("en-IN")}–₹${s.maxWageMonthly.toLocaleString("en-IN")}`
                      : `> ₹${s.minWageMonthly.toLocaleString("en-IN")}`}
                  </span>
                  <strong className={`font-bold ${s.monthlyTax > 0 ? "text-rose-700" : "text-slate-700"}`}>
                    ₹{s.monthlyTax}/mo {s.februaryTax ? `(Feb ₹${s.februaryTax})` : ""}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Plaque */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#1b0a38] to-[#0a1b2e] rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase font-mono tracking-widest text-rose-400">
                {stateRule.stateName} Mandate
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/20">
                {calculation.statutoryStatus}
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-4 leading-snug">
              {calculation.slabName}
            </h3>

            <div className="space-y-4 py-4 border-y border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-300">Monthly PT / Employee:</span>
                <strong className="text-3xl font-black text-rose-400 font-mono">
                  ₹{calculation.monthlyPt}
                </strong>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Annual PT / Employee:</span>
                <strong className="font-bold text-white font-mono text-sm">
                  ₹{calculation.annualPt.toLocaleString("en-IN")}
                </strong>
              </div>

              {employeeCount > 1 && (
                <>
                  <div className="flex justify-between items-center text-xs pt-3 border-t border-white/10">
                    <span className="text-slate-300">Total Monthly Outgo ({employeeCount} staff):</span>
                    <strong className="font-bold text-emerald-400 font-mono text-base">
                      ₹{calculation.totalMonthlyOutgo.toLocaleString("en-IN")}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">Total Annual Outgo:</span>
                    <strong className="font-bold text-emerald-400 font-mono text-base">
                      ₹{calculation.totalAnnualOutgo.toLocaleString("en-IN")}
                    </strong>
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 space-y-1.5 text-[11px] text-slate-300">
              <p>🏛️ <strong>Portal:</strong> {stateRule.portalName}</p>
              <p>📋 <strong>Filing Form:</strong> {stateRule.monthlyReturnForm}</p>
              <p>📅 <strong>Due Date:</strong> {stateRule.monthlyPaymentDueDate}</p>
              <p>⚖️ <strong>Penalty Surcharge:</strong> {stateRule.penaltyClauses.lateFilingPenalty}</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <CalculatorQuickLeadForm
              service="HRMS & Payroll Management"
              heading={`Multi-State ${stateRule.stateName} Payroll Scoping`}
              ctaLabel={`Audit ${stateRule.stateName} Payroll`}
              contextSummary={`Multi-State PT Calculator | State: ${stateRule.stateName} | Gross Salary: ₹${grossSalary.toLocaleString("en-IN")} | Staff: ${employeeCount} | Monthly PT: ₹${calculation.monthlyPt} | Total Monthly: ₹${calculation.totalMonthlyOutgo.toLocaleString("en-IN")}`}
              analyticsChannel="multistate_pt_calculator"
              variant="dark"
              analyticsMeta={{ state: selectedState, headcount: employeeCount, monthly_pt: calculation.totalMonthlyOutgo }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
