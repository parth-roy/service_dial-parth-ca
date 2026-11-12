"use client";

import { useState, useMemo } from "react";
import CalculatorQuickLeadForm from "./CalculatorQuickLeadForm";

export default function EpfoCeilingCalculator() {
  const [basicDaSalary, setBasicDaSalary] = useState<number>(25000);
  const [employeeCount, setEmployeeCount] = useState<number>(50);

  const split = useMemo(() => {
    // Old Ceiling: capped at 15,000
    const oldWage = Math.min(basicDaSalary, 15000);
    const oldEmployeePf = Math.round(oldWage * 0.12); // 1,800
    const oldEmployerEps = Math.round(oldWage * 0.0833); // 1,250
    const oldEmployerPf = Math.round(oldWage * 0.0367); // 550
    const oldEdli = Math.round(oldWage * 0.005); // 75
    const oldAdmin = Math.round(oldWage * 0.005); // 75
    const oldTotalEmployer = oldEmployerEps + oldEmployerPf + oldEdli + oldAdmin; // 1,950

    // New Ceiling: capped at 25,000
    const newWage = Math.min(basicDaSalary, 25000);
    const newEmployeePf = Math.round(newWage * 0.12); // 3,000
    const newEmployerEps = Math.round(newWage * 0.0833); // 2,083
    const newEmployerPf = Math.round(newWage * 0.0367); // 917
    const newEdli = Math.round(newWage * 0.005); // 125
    const newAdmin = Math.round(newWage * 0.005); // 125
    const newTotalEmployer = newEmployerEps + newEmployerPf + newEdli + newAdmin; // 3,250

    const employeeDelta = newEmployeePf - oldEmployeePf;
    const employerDelta = newTotalEmployer - oldTotalEmployer;

    const orgMonthlyIncrease = employerDelta * employeeCount;
    const orgAnnualIncrease = orgMonthlyIncrease * 12;

    return {
      oldWage,
      newWage,
      oldEmployeePf,
      newEmployeePf,
      oldEmployerEps,
      newEmployerEps,
      oldEmployerPf,
      newEmployerPf,
      oldEdli,
      newEdli,
      oldAdmin,
      newAdmin,
      oldTotalEmployer,
      newTotalEmployer,
      employeeDelta,
      employerDelta,
      orgMonthlyIncrease,
      orgAnnualIncrease,
    };
  }, [basicDaSalary, employeeCount]);

  return (
    <div className="bg-white rounded-3xl border border-sd-border shadow-md p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-sd-pink bg-sd-pink/10 border border-sd-pink/20 px-2.5 py-0.5 rounded-full">
            Notification S.O. 5109(E)
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-sd-text mt-1">
            EPFO ₹25,000 Wage Ceiling Split &amp; CTC Impact Simulator
          </h2>
        </div>
        <span className="text-xs font-semibold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
          ₹15,000 vs. ₹25,000 Delta
        </span>
      </div>

      {/* Input Slider Controls */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Monthly Basic + DA Salary
            </label>
            <span className="text-base font-black text-sd-pink font-mono">
              ₹{basicDaSalary.toLocaleString("en-IN")}
            </span>
          </div>
          <input
            type="range"
            min={15000}
            max={75000}
            step={1000}
            value={basicDaSalary}
            onChange={(e) => setBasicDaSalary(Number(e.target.value))}
            className="w-full accent-sd-pink cursor-pointer h-2 bg-slate-200 rounded-lg"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>₹15,000</span>
            <span>₹25,000 (New Cap)</span>
            <span>₹75,000+</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Eligible Workforce Headcount
            </label>
            <span className="text-base font-black text-navy font-mono">
              {employeeCount} Employees
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={5000}
            step={5}
            value={employeeCount}
            onChange={(e) => setEmployeeCount(Number(e.target.value))}
            className="w-full accent-navy cursor-pointer h-2 bg-slate-200 rounded-lg"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>5 Staff</span>
            <span>500 Staff</span>
            <span>5,000+ Staff</span>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Old ₹15,000 Ceiling */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">
            Previous Ceiling
          </span>
          <h3 className="text-base font-black text-slate-700 mb-3">
            ₹15,000 Wage Cap
          </h3>
          <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-3">
            <div className="flex justify-between">
              <span>Employee PF (12%):</span>
              <strong className="font-mono text-slate-800">₹{split.oldEmployeePf}</strong>
            </div>
            <div className="flex justify-between">
              <span>Employer EPS (8.33%):</span>
              <strong className="font-mono text-slate-800">₹{split.oldEmployerEps}</strong>
            </div>
            <div className="flex justify-between">
              <span>Employer EPF (3.67%):</span>
              <strong className="font-mono text-slate-800">₹{split.oldEmployerPf}</strong>
            </div>
            <div className="flex justify-between">
              <span>EDLI &amp; Admin (1.0%):</span>
              <strong className="font-mono text-slate-800">₹{split.oldEdli + split.oldAdmin}</strong>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200 text-xs font-bold text-slate-900">
              <span>Total Employer Outgo:</span>
              <strong className="font-mono text-slate-900">₹{split.oldTotalEmployer}</strong>
            </div>
          </div>
        </div>

        {/* New ₹25,000 Ceiling */}
        <div className="bg-rose-50/70 rounded-2xl p-5 border-2 border-rose-200">
          <span className="text-[10px] font-bold uppercase tracking-widest text-rose-600 block mb-1">
            2026 Mandate
          </span>
          <h3 className="text-base font-black text-rose-900 mb-3">
            ₹25,000 Wage Cap
          </h3>
          <div className="space-y-2 text-xs text-slate-700 border-t border-rose-200 pt-3">
            <div className="flex justify-between">
              <span>Employee PF (12%):</span>
              <strong className="font-mono text-rose-950 font-bold">₹{split.newEmployeePf}</strong>
            </div>
            <div className="flex justify-between">
              <span>Employer EPS (8.33%):</span>
              <strong className="font-mono text-rose-950 font-bold">₹{split.newEmployerEps}</strong>
            </div>
            <div className="flex justify-between">
              <span>Employer EPF (3.67%):</span>
              <strong className="font-mono text-rose-950 font-bold">₹{split.newEmployerPf}</strong>
            </div>
            <div className="flex justify-between">
              <span>EDLI &amp; Admin (1.0%):</span>
              <strong className="font-mono text-rose-950 font-bold">₹{split.newEdli + split.newAdmin}</strong>
            </div>
            <div className="flex justify-between pt-2 border-t border-rose-200 text-xs font-black text-rose-900">
              <span>Total Employer Outgo:</span>
              <strong className="font-mono text-rose-900 text-sm">₹{split.newTotalEmployer}</strong>
            </div>
          </div>
        </div>

        {/* Financial Delta & Budget Impact */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0b1f3f] rounded-2xl p-5 text-white flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 block mb-1">
              Statutory Cost Increase
            </span>
            <h3 className="text-base font-black text-white mb-3">
              Corporate Budget Variance
            </h3>
            <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-3">
              <div className="flex justify-between">
                <span>Employer Outgo / Worker:</span>
                <strong className="font-mono text-rose-400 font-bold">+₹{split.employerDelta}/mo</strong>
              </div>
              <div className="flex justify-between">
                <span>Employee Take-Home Cut:</span>
                <strong className="font-mono text-amber-300 font-bold">-₹{split.employeeDelta}/mo</strong>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 text-xs font-bold">
                <span>Total Org Monthly Delta:</span>
                <strong className="font-mono text-rose-400 text-sm">
                  +₹{split.orgMonthlyIncrease.toLocaleString("en-IN")}
                </strong>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span>Total Org Annual Delta:</span>
                <strong className="font-mono text-emerald-400 text-sm">
                  +₹{split.orgAnnualIncrease.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <CalculatorQuickLeadForm
              service="Statutory Compliance & Audits"
              heading="Get CTC Restructuring Sheet"
              ctaLabel="Send EPFO Impact Report"
              contextSummary={`EPFO ₹25k Calculator Lead | Basic+DA: ₹${basicDaSalary.toLocaleString("en-IN")} | Workforce: ${employeeCount} | Monthly Variance: +₹${split.orgMonthlyIncrease.toLocaleString("en-IN")} | Annual Variance: +₹${split.orgAnnualIncrease.toLocaleString("en-IN")}`}
              analyticsChannel="epfo_calculator"
              variant="dark"
              analyticsMeta={{ headcount: employeeCount, annual_delta: split.orgAnnualIncrease }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
