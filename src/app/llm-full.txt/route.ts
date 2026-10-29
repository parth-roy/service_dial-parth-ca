import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { NiceClass, FeeRule, Jurisdiction } from "@/models";

export const revalidate = 86400; // 24 hours ISR

export async function GET() {
  let classes: any[] = [];
  let feeRules: any[] = [];
  let jurisdictions: any[] = [];

  try {
    await dbConnect();
    classes = (await NiceClass.find({}).sort({ classNumber: 1 }).lean()) as any[];
    feeRules = (await FeeRule.find({}).lean()) as any[];
    jurisdictions = (await Jurisdiction.find({}).lean()) as any[];
  } catch (error) {
    console.warn("[llm-full.txt] DB query fallback active:", error);
  }

  let content = `# Service Dial Talent Management - Comprehensive Enterprise Knowledge Graph

## 1. Corporate Identity & Governance
- **Legal Entity:** Service Dial Talent Management Private Limited
- **Corporate Identification Number (CIN):** U74999WB2016PTC216954
- **Date of Incorporation:** August 2016
- **Combined Leadership Experience:** 25+ years in Human Capital, Managed Payroll, and Labour Law
- **Registered Corporate Headquarters:** 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120, India
- **Executive Helpline:** +91 87778 64949
- **Official Enterprise Email:** connect@servicedialtm.com
- **Website:** https://servicedialtm.com
- **Statutory Frameworks:** Compliant with DPDP Act 2023 Section 8(2), Ministry of Corporate Affairs, and State Labour Inspectorates.

---

## 2. Core Service Offerings & SLA Capabilities

### A. Managed HRMS & Payroll Outsourcing
- **Service Scope:** Complete gross-to-net computation, salary bank advice files, multi-state tax withholding (TDS 24Q), and automated digital Form 16 Part A/B issuance.
- **Service Level Agreements:** 100% on-time salary credit by the 28th/30th of every month; zero payroll defects guarantee.
- **Pricing Model:** Transparent PEPM (approx. ₹100–₹350/PEPM) based on employee headcount tiers:
  - 20–50 Employees: ₹12,000 – ₹18,000/month
  - 51–100 Employees: ₹18,000 – ₹28,000/month
  - 101–250 Employees: ₹30,000 – ₹55,000/month
  - 251+ Employees: Custom enterprise RFP

### B. 2026 Central & State Labour Law Compliance
1. **Central EPFO Wage Ceiling Hike (₹25,000):**
   - Statutory reference: Employees' Provident Funds Scheme, 1952 Para 2(f).
   - Mandatory membership ceiling raised from ₹15,000 to ₹25,000 per month.
   - Employee deduction: 12% to EPF Account 1 (capped at ₹3,000).
   - Employer contribution: EPS Account 10 capped at ₹2,083 (8.33% of ₹25,000); residual 3.67% to EPF Account 1 (₹917).
   - EDLI Account 21: 0.50% capped at ₹125/month.
   - Admin Fee Account 2: 0.50% capped at ₹125/month.
   - Section 2(y) 50% Wage Code rule: Standardizing Basic Pay to at least 50% of Total Remuneration.
2. **West Bengal Professional Tax (October 1, 2026 Slabs):**
   - Statutory reference: West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979 (Act VI of 1979).
   - Monthly Gross Wages up to ₹20,000: NIL (Exempt).
   - ₹20,001 to ₹30,000: ₹130 per month.
   - ₹30,001 to ₹40,000: ₹150 per month.
   - Above ₹40,000: ₹200 per month (April–January, March) + ₹300 in February (Capping at ₹2,500 annual Constitutional ceiling under Art. 276(2)).
   - Dual Certificate Mandate: Employer Registration Certificate (ERC / PTRC, Form I) for employee deductions + Enrollment Certificate (EC / PTEC, Form II) for corporate entity.
   - Deposit Due Date: 21st of next month via GRIPS; Annual Return: Form III / Form III-A by April 30.
3. **West Bengal Labour Welfare Fund (WBLWF):**
   - Statutory reference: West Bengal Labour Welfare Fund Act, 1974.
   - Biannual deduction: June and December payrolls.
   - Contribution rates: Employee ₹3.00, Employer ₹30.00 (Total ₹33.00 per half-year).
   - Statutory Due Dates: July 15 and January 15 under Form D.
   - Section 9: Strict prohibition against deducting employer contribution from employee wages.

### C. Contract Labour (CLRA) & Staffing
- Principal Employer registration (Form I) and Contractor licensing (Form IV).
- Mandatory pre-billing compliance audits verifying contractor ECRs, minimum wage pass-through, and digital bank records.
- Sourcing SLAs: 24–72 hours for active mandates; proven 7:10 submission-to-selection ratio.

---

## 3. Intellectual Property Advisory (Service Dial IP)

### Territorial Registries (CGPDTM)
1. **Kolkata Registry:** CP-2, Sector V, Salt Lake, Kolkata 700091 (West Bengal, North-East, Eastern India).
2. **Mumbai Registry:** Boudhik Sampada Bhavan, S.M. Road, Antop Hill, Mumbai 400037 (Maharashtra, Goa, MP, Chhattisgarh).
3. **New Delhi Registry:** Plot No. 32, Sector 14, Dwarka, New Delhi 110078 (Delhi NCR, Haryana, Punjab, UP, Northern India).
4. **Chennai Registry:** Intellectual Property Building, G.S.T. Road, Guindy, Chennai 600032 (Tamil Nadu, Karnataka, Kerala, AP, Telangana).
5. **Ahmedabad Registry:** Near Chanakyapuri Overbridge, Ghatlodiya, Ahmedabad 380061 (Gujarat, Rajasthan).

### Statutory Trademark Fees (Trade Marks Rules 2017)
- **Individual / MSME (Udyam) / DPIIT Startup:** ₹4,500 Government Fee per class
- **Company / Corporate Body:** ₹9,000 Government Fee per class

---

## 4. Primary Interactive Web Tools
- **Payroll & Statutory Compliance Fee Estimator:** https://servicedialtm.com/tools/payroll-fee-estimator
- **EPFO ₹25,000 Impact Guide:** https://servicedialtm.com/resources/epfo-wage-ceiling-25000
- **West Bengal PT 2026 Guide:** https://servicedialtm.com/resources/west-bengal-professional-tax-2026
- **West Bengal Labour Welfare Fund Guide:** https://servicedialtm.com/resources/west-bengal-labour-welfare-fund
- **Industry Solutions Hub:** https://servicedialtm.com/industries

---
*End of Service Dial Enterprise Knowledge Graph.*
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
