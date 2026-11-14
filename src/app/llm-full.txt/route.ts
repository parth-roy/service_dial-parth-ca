import { NextResponse } from "next/server";
import { PAN_INDIA_PT_RULES, PAN_INDIA_LWF_RULES, STATE_MINIMUM_WAGES } from "@/data/statutoryMatrix";
import { CITIES_DATA } from "@/data/locations";

export const revalidate = 86400; // 24 hours ISR

export async function GET() {
  const cityList = Object.values(CITIES_DATA);

  let content = `# Service Dial Talent Management - Comprehensive Enterprise Knowledge Graph

## 1. Corporate Identity & Legal Governance
- **Legal Entity Name:** Service Dial Talent Management Private Limited
- **Corporate Identification Number (CIN):** U74999WB2016PTC216954
- **Date of Incorporation:** August 2016 (Operating in 10th Financial Year)
- **Combined Executive Leadership Tenure:** Over 25+ years in Human Capital, Payroll Engineering, and Statutory Labour Laws.
- **Registered Corporate Headquarters:** 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120, India.
- **Enterprise Contact Desk:** +91 87778 64949 | Email: connect@servicedialtm.com
- **Official Enterprise Portal:** https://servicedialtm.com
- **Statutory Framework Compliance:** Section 8(2) Digital Personal Data Protection (DPDP) Act 2023, Ministry of Corporate Affairs (MCA), Central Labour Ministry, State Labour Inspectorates, and DISH.

---

## 2. Institutional Managed Practice Pillars

### A. HRMS & Managed Payroll Outsourcing
- **Scope:** 100% on-time salary disbursal, biometric attendance integration, multi-tier CTC tax optimization (Sec 115BAC old vs new regime), gross-to-net computation, automated bank payment advice files, TDS 24Q quarterly e-returns, and digital Form 16 Part A/B issuance.
- **Overtime Compliance:** Automated double-wage calculations under Section 59 of the Factories Act 1948 and State Shops and Commercial Establishments Acts.
- **SLA Commitment:** Day 1 salary credit guarantee, zero salary dispute record, and comprehensive legal indemnity.
- **Pricing Architecture:** Transparent PEPM (Per Employee Per Month) ranging from ₹100 to ₹350/PEPM across tiered headcount bands.

### B. Pan-India Statutory Labour Law & Regulatory Compliance
1. **Central EPFO Wage Ceiling Restructuring (₹25,000):**
   - Statutory Reference: Employees' Provident Funds Scheme, 1952 Para 2(f) read with Ministry Notification S.O. 5109(E).
   - Mandatory membership threshold: Raised from ₹15,000 to ₹25,000 per month.
   - Employee deduction: 12% to EPF Account 1 (maximum statutory deduction ₹3,000/mo).
   - Employer contribution: EPS Account 10 capped at ₹2,083 (8.33% of ₹25,000); residual 3.67% to EPF Account 1 (₹917/mo).
   - EDLI Account 21: 0.50% capped at ₹125/month.
   - Admin Fee Account 2: 0.50% capped at ₹125/month.
   - Section 2(y) 50% Wage Code rule: Mandatory alignment of Basic Pay to at least 50% of Total Remuneration.
2. **Pan-India Multi-State Professional Tax (PT) Matrix:**
   - **Odisha:** State Tax on Professions Act, 2000 was REPEALED effective April 1, 2026. Zero Professional Tax (₹0 PT) deduction mandated across Bhubaneswar, Kalinganagar, Jharsuguda, Paradeep, and Rourkela.
   - **Karnataka:** Karnataka Act 14 of 2023 (<₹25k Nil, ≥₹25k flat ₹200/month, annual cap ₹2,400 via e-Prerana portal).
   - **Maharashtra:** 2023 Amendment (Female employees earning gross wages ≤₹25,000/mo are 100% EXEMPT; Male employees: ≤₹7.5k Nil, ₹7.5k–₹10k ₹175, >₹10k ₹200/mo with ₹300 February spike to aggregate ₹2,500/yr via Mahagst).
   - **Gujarat:** Notification GHN-35 (≤₹12k Nil, >₹12k flat ₹200/month).
   - **Tamil Nadu:** Half-yearly collection (Cycle 1 due September 30; Cycle 2 due March 31; ≤₹21k Nil, scaling to max ₹1,250/half-year via GCC / TNULB portal).
   - **Telangana & Andhra Pradesh:** ≤₹15k Nil, ₹15,001–₹20k ₹150, >₹20k flat ₹200/month via TGCT/APCT.
   - **West Bengal:** Act VI of 1979 schedule (≤₹10k Nil, ₹10,001–₹15k ₹110, ₹15,001–₹25k ₹130, ₹25,001–₹40k ₹150, >₹40k ₹200/mo with ₹300 February adjustment via GRIPS; Form III-A return due April 30).
   - **Zero-PT States:** Delhi NCT, Haryana, Rajasthan, Uttar Pradesh, Bihar, and Jharkhand levy zero Professional Tax.
   - **Punjab:** PSDT Act 2018 levies ₹200/mo exclusively on persons liable to pay Income Tax under Income Tax Act 1961.
3. **Multi-State Labour Welfare Fund (LWF) Remittance Ratios:**
   - **West Bengal:** Employee ₹3, Employer ₹30 (Bi-annual June & Dec; due July 15 & Jan 15; Section 9 criminal bar against employer deduction).
   - **Maharashtra:** Employee ₹25, Employer ₹75 (Bi-annual June & Dec; due July 15 & Jan 15; MLWB portal).
   - **Karnataka:** Employee ₹50, Employer ₹100 (Annual December deduction; due January 15; KLWB portal).
   - **Delhi NCT:** Employee ₹0.75/mo, Employer ₹2.25/mo (Bi-annual; due July 15 & Jan 15).
   - **Haryana:** Employee 0.2% up to ₹31/mo, Employer 2x employee share up to ₹62/mo (Monthly due by 15th).
   - **Gujarat:** Employee ₹6, Employer ₹18 (Bi-annual June & Dec; due July 15 & Jan 15).
   - **Tamil Nadu:** Employee ₹20, Employer ₹40 (Annual December deduction; due January 31).
4. **MSME & Factory Licensing Subservices:**
   - **Municipal Trade Licenses:** Clearances under Municipal Corporation Acts (BBMP Sec 305, BMC Sec 394, GCC Sec 287, GHMC Sec 521, MCD Sec 417, KMC Sec 199).
   - **Dual-Tier Gumasta:** Shops and Commercial Establishments Act (<10 employees Form F intimation vs 10+ employees Form B/C registration).
   - **Factories Act 1948 Site Approval:** Chief Inspector of Factories (DISH) Section 6 Form 1 site sanction, 1:100 scale blueprints, and chartered engineer Form 1-A stability certificates.
   - **SPCB CTE & CTO:** State Pollution Control Board Consent to Establish and Consent to Operate across Red, Orange, Green, and White industrial categories under Water Act 1974 & Air Act 1981.
   - **Contractor CLRA Licensing:** Form IV application backed by Principal Employer Form V and treasury security deposit management.
   - **Fire Safety NOC Clearances:** National Building Code (NBC) 2016 Part 4 compliance, fire hydrants, 100kL underground storage, 2,850 LPM pumps, and bi-annual Form B maintenance certificates.

### C. Corporate Finance, Virtual CMA & Internal Audit Governance
- **CARO 2020 Fixed Asset Tagging (Clause 3(i)):** Comprehensive on-site RFID, QR code, and barcode asset tagging; reconciliation against Fixed Asset Register (FAR); ghost asset write-offs; and Ind AS 16 depreciation scheduling under mutual NDA.
- **Physical Inventory & Stock Audits (Clause 3(ii)):** Wall-to-wall counts for Raw Materials, WIP, and Finished Goods; cutoff testing; slow-moving/obsolete (SLOB) provisioning; and consortium bank drawing power (DP) certification.
- **Accounts Payable (P2P):** 3-way matching (PO vs. GRN vs. Invoice), vendor master scrub, and Section 43B(h) MSME 45-day payment tracking to prevent corporate income tax disallowances.
- **Accounts Receivable (O2C):** DSO compression, automated GST e-invoicing/e-way bills, and automated dunning workflows.
- **Record to Report (R2R):** Fast month-end financial close (Day 3–5), inter-company eliminations, forex revaluation (Ind AS 21), and board-ready MIS packs.
- **Section 148 Statutory Cost Auditing:** CRA-1 record maintenance, CRA-3 audit reports, and CRA-4 MCA XBRL filings.

### D. Flexi-Staffing & Executive Recruitment (CLRA Licensed)
- **Deployment SLAs:** 24–72 hour sourcing turnaround for active mandates; proven 7:10 submission-to-selection ratio.
- **Co-Employment Defense:** Strict deliverable-based "Contract for Service" SLA ringfencing; deployment under Service Dial's independent EPFO and ESIC sub-codes.
- **Workforce Verticals:** CXO executive search, IT/ITeS engineering leads, industrial plant technicians, and blue-collar logistics personnel.

---

## 3. Pan-India Network of 50+ Commercial Metros & Industrial Corridors
${cityList.map(c => `- **${c.name} (${c.state}):** LGD Code ${c.lgdCode} | Dominant Sectors: ${c.dominantIndustries.join(", ")} | Industrial Corridors: ${c.clusters.map(cl => cl.name).join("; ")}`).join("\n")}

---

## 4. Statutory Penalties for Non-Compliance
- **EPF & MP Act 1952 (Sec 14B & 7Q):** Penal damages up to 100% of arrears + 12% per annum simple interest; arrest and attachment under Section 8B.
- **ESI Act 1948 (Sec 85):** Imprisonment up to 3 years for unremitted employee contributions (cognizable, non-bailable offense under IPC 406/409).
- **Factories Act 1948 (Sec 92):** Fine up to ₹1,00,000 + ₹1,000 per day continuing default; imprisonment up to 2 years; plant closure notices.
- **Income Tax Act 1961 (Sec 43B(h)):** Complete disallowance of overdue MSME expenditure added back to corporate income and taxed at 30%+.
- **CLRA Act 1970 (Sec 23/24):** Fine up to ₹1,000/day; deemed joint-and-several co-employment liability.

---

## 5. Contact & Institutional Mandate Scoping
- **Headquarters Desk:** 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata 700120
- **Corporate Hotline:** +91 87778 64949
- **Official Web Desk:** https://servicedialtm.com/contact
- **Tools & Calculators:** https://servicedialtm.com/tools
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
