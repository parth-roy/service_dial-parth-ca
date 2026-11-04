"use client";

import { useState, useMemo } from "react";

export default function WbPtCalculator() {
  const [grossSalary, setGrossSalary] = useState<number>(35000);
  const [employeeCount, setEmployeeCount] = useState<number>(1);
  const [isFebruary, setIsFebruary] = useState<boolean>(false);

  const calculation = useMemo(() => {
    let monthlyPt = 0;
    let slabName = "";

    // West Bengal Salaried PT Slabs (Notification No. 1607-F.T.)
    if (grossSalary <= 10000) {
      monthlyPt = 0;
      slabName = "Up to ₹10,000 (Nil / 100% Exempt)";
    } else if (grossSalary <= 15000) {
      monthlyPt = 110;
      slabName = "₹10,001 to ₹15,000 (₹110 / month)";
    } else if (grossSalary <= 25000) {
      monthlyPt = 130;
      slabName = "₹15,001 to ₹25,000 (₹130 / month)";
    } else {
      // Over ₹25,000: March to January = ₹200, February = ₹300 (to meet ₹2,500 annual constitutional cap)
      monthlyPt = isFebruary ? 300 : 200;
      slabName = isFebruary
        ? "Above ₹25,000 (February Spike: ₹300)"
        : "Above ₹25,000 (Regular: ₹200 / month)";
    }

    // Annual calculation (11 months regular + 1 month February)
    let annualPt = 0;
    if (grossSalary <= 10000) {
      annualPt = 0;
    } else if (grossSalary <= 15000) {
      annualPt = 110 * 12; // 1,320
    } else if (grossSalary <= 25000) {
      annualPt = 130 * 12; // 1,560
    } else {
      annualPt = 200 * 11 + 300; // 2,500 maximum annual cap
    }

    const totalMonthlyOutgo = monthlyPt * Math.max(1, employeeCount);
    const totalAnnualOutgo = annualPt * Math.max(1, employeeCount);

    return {
      monthlyPt,
      annualPt,
      slabName,
      totalMonthlyOutgo,
      totalAnnualOutgo,
    };
  }, [grossSalary, employeeCount, isFebruary]);

  return (
    <div className="bg-white rounded-3xl border border-sd-border shadow-md p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-sd-pink bg-sd-pink/10 border border-sd-pink/20 px-2.5 py-0.5 rounded-full">
            Notification No. 1607-F.T.
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-sd-text mt-1">
            West Bengal Salaried PT Calculator (2026 Slabs)
          </h2>
        </div>
        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          Article 276(2) Compliant
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Input Form */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Monthly Gross Salary (INR)
              </label>
              <span className="text-lg font-black text-sd-pink font-mono">
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
              className="w-full accent-sd-pink cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹5,000</span>
              <span>₹25,000 (Top Bracket)</span>
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
                  className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold outline-none focus:border-sd-pink"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Number of Employees
              </label>
              <input
                type="number"
                min={1}
                max={50000}
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Math.max(1, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold outline-none focus:border-sd-pink"
              />
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
            <div>
              <strong className="text-xs font-bold text-slate-800 block">
                February Tax Spike (Annual Cap Adjustment)
              </strong>
              <p className="text-[11px] text-slate-500">
                Under WB rules, February deducts ₹300 for &gt;₹25k salaries to touch ₹2,500/yr.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isFebruary}
                onChange={(e) => setIsFebruary(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sd-pink"></div>
            </label>
          </div>

          {/* Quick Slabs Reference Table */}
          <div className="pt-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
              Official WB Salaried PT Slabs:
            </span>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl border bg-slate-50 border-slate-200">
                <span className="block text-[10px] text-slate-500">&le; ₹10k</span>
                <strong className="font-bold text-slate-700">₹0 (Nil)</strong>
              </div>
              <div className="p-2.5 rounded-xl border bg-slate-50 border-slate-200">
                <span className="block text-[10px] text-slate-500">₹10k–₹15k</span>
                <strong className="font-bold text-slate-700">₹110/mo</strong>
              </div>
              <div className="p-2.5 rounded-xl border bg-slate-50 border-slate-200">
                <span className="block text-[10px] text-slate-500">₹15k–₹25k</span>
                <strong className="font-bold text-slate-700">₹130/mo</strong>
              </div>
              <div className="p-2.5 rounded-xl border bg-rose-50 border-rose-200">
                <span className="block text-[10px] text-rose-700">&gt; ₹25k</span>
                <strong className="font-bold text-rose-800">₹200/mo</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0b1f3f] rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-rose-400 block mb-1">
              Active Applicable Slab
            </span>
            <h3 className="text-base font-bold text-white mb-4">
              {calculation.slabName}
            </h3>

            <div className="space-y-4 py-4 border-y border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-300">Monthly PT / Associate:</span>
                <strong className="text-2xl font-black text-rose-400 font-mono">
                  ₹{calculation.monthlyPt}
                </strong>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Annual PT / Associate:</span>
                <strong className="font-bold text-white font-mono">
                  ₹{calculation.annualPt.toLocaleString("en-IN")}
                </strong>
              </div>
              {employeeCount > 1 && (
                <>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10">
                    <span className="text-slate-300">Org Monthly Remittance ({employeeCount} staff):</span>
                    <strong className="font-bold text-emerald-400 font-mono text-sm">
                      ₹{calculation.totalMonthlyOutgo.toLocaleString("en-IN")}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">Org Annual PT Outgo:</span>
                    <strong className="font-bold text-emerald-400 font-mono text-sm">
                      ₹{calculation.totalAnnualOutgo.toLocaleString("en-IN")}
                    </strong>
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 space-y-1.5 text-[11px] text-slate-300">
              <p>🏛️ <strong>Payment Portal:</strong> GRIPS IFMS West Bengal</p>
              <p>📋 <strong>Head of Account:</strong> 0028-00-107-001-03</p>
              <p>📅 <strong>Monthly Due Date:</strong> 21st of following month</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <a
              href="/contact"
              className="w-full block text-center py-2.5 px-4 rounded-xl bg-sd-pink hover:bg-sd-pink-dark text-white font-bold text-xs transition-colors shadow-md"
            >
              Consult a WB Payroll Specialist →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
