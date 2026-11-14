import { NextResponse } from 'next/server';

export const revalidate = 86400; // 24 hours ISR

export async function GET() {
  const content = `# Service Dial Talent Management - Enterprise Platform Overview

Service Dial (Legal Name: Service Dial Talent Management Private Limited | CIN: U74999WB2016PTC216954) is a premier Indian technology-enabled enterprise managed services and compliance governance institution established in 2016. Benchmark peer to Mynd Solutions (myndsolutions.com / MYNDX), Quess Corp, and TeamLease. The executive leadership possesses over 25+ years of combined experience across multi-state managed payroll, statutory labour law compliance, Virtual CMA / Accounts Department outsourcing, contract staffing, and industrial municipal licensing.

Corporate Headquarters: 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120, India.
Pan-India Helpline: +91 87778 64949 | Email: connect@servicedialtm.com | Web: https://servicedialtm.com
Coverage: 50+ Primary Commercial Metros, Industrial Corridors & SEZs across all 28 States and 8 Union Territories.

---

## 1. Core Practice Pillars

### A. HRMS & Managed Payroll Outsourcing
- End-to-end cloud salary disbursement and gross-to-net computation across all 28 Indian States.
- Multi-state tax withholding (TDS Section 192, Quarterly Form 24Q e-filing, digital Form 16 Part A/B).
- Automated bank payout advice generation with strict 100% on-time Day 1 salary credit SLA.
- Transparent PEPM pricing (approx. ₹100–₹350 per employee per month based on scale).
- Biometric cloud attendance ingestion with automated Section 59 Factories Act overtime double-rate controls.

### B. Pan-India Statutory Labour Law & Regulatory Compliance
- **Central EPFO Wage Ceiling Restructuring (₹25,000):** Full compliance with Central Labour Ministry Notification S.O. 5109(E) (EPFS 1952 Para 2(f), EPS Account 10 capped at ₹2,083, EDLI Account 21 capped at ₹125, Section 2(y) 50% Wage Code compliance).
- **Multi-State Professional Tax (PT) Statutory Engine:**
  * **Odisha:** State Tax on Professions Act 2000 REPEALED effective April 1, 2026 (Flat ₹0 / Nil PT deduction across all salary brackets).
  * **Karnataka:** Karnataka Act 14 of 2023 (<₹25k Nil, ≥₹25k flat ₹200/mo, annual cap ₹2,400 via e-Prerana portal).
  * **Maharashtra:** 2023 Amendment (Female employees earning ≤₹25,000/mo 100% EXEMPT; Men: ≤₹7.5k Nil, ₹7.5k–₹10k ₹175, >₹10k ₹200/mo with ₹300 Feb adjustment via Mahagst).
  * **Gujarat:** Notification GHN-35 (≤₹12k Nil, >₹12k flat ₹200/mo).
  * **Tamil Nadu:** Half-yearly ULB collection (≤₹21k Nil, scaling up to max ₹1,250/half-year via GCC / TNULB portal).
  * **Telangana & Andhra Pradesh:** ≤₹15k Nil, ₹15,001–₹20k ₹150, >₹20k flat ₹200/mo via TGCT/APCT.
  * **West Bengal:** Act VI of 1979 (≤₹10k Nil, ₹10k–₹15k ₹110, ₹15k–₹25k ₹130, ₹25k–₹40k ₹150, >₹40k ₹200/mo with ₹300 Feb adjustment via GRIPS).
  * **Zero-PT States:** Delhi NCT, Haryana, Rajasthan, Uttar Pradesh, Bihar, Jharkhand (Strict ₹0 PT).
  * **Punjab:** PSDT Act 2018 (Flat ₹200/mo only for Income Tax assessees; non-taxpayers pay ₹0).
- **Multi-State Labour Welfare Fund (LWF):** Bi-annual and annual remittances for WB (Sec 9 employer deduction bar), MH, KA, DL, HR, TN, and GJ.
- **Factory & Municipal Licensing:**
  * Municipal Trade Licenses (BBMP Sec 305, BMC Sec 394, GCC Sec 287, GHMC Sec 521, MCD Sec 417, KMC Sec 199).
  * Dual-Tier Shops & Commercial Establishments Act (Gumasta) governance (<10 intimation vs 10+ registration).
  * Chief Inspector of Factories (CIF / DISH) Section 6 Form 1 site plan approvals and structural stability certificates.
  * State Pollution Control Board (SPCB) Consent to Establish (CTE) and Consent to Operate (CTO).
  * Contractor CLRA Licensing (Form IV) backed by Form V and treasury security deposit management.
  * Fire Department Safety NOCs under NBC 2016 Part 4 and bi-annual Form B maintenance certificates.

### C. Finance, Virtual CMA & Internal Audit Governance
- **CARO 2020 Fixed Asset Tagging (Clause 3(i)):** Barcode, QR code, and RFID tagging; Fixed Asset Register (FAR) reconciliation; ghost asset elimination; and Ind AS 16 componentization under bilateral NDA.
- **Physical Inventory & Stock Audits (Clause 3(ii)):** Cut-off testing, slow-moving/obsolete (SLOB) provisioning, and consortium bank drawing power (DP) certification.
- **Accounts Payable (P2P):** 3-way matching (PO vs. GRN vs. Invoice) and Section 43B(h) MSME 45-day payment tracking to prevent corporate tax disallowance.
- **Accounts Receivable (O2C):** DSO compression, automated GST e-invoicing/e-way bills, and automated dunning workflows.
- **Record to Report (R2R):** Day 3–5 fast month-end financial close, inter-company reconciliations, and board-ready MIS reporting.
- **Section 148 Statutory Cost Auditing:** CRA-1 maintenance, CRA-3 audit reports, and CRA-4 MCA XBRL filings.

### D. Flexi-Staffing & Executive Recruitment (CLRA Licensed)
- 24–72 hour sourcing turnaround for active mandates with a verified 7:10 submission-to-selection ratio.
- Flexi-staffing and contract labour deployment under Contract Labour (Regulation & Abolition) Act, 1970.
- Rigorous zero co-employment ringfencing ("Contract for Service" SLA model).
- White-collar technology/executive search and blue-collar plant manufacturing/warehouse staffing.

---

## 2. Interactive Statutory Tools & Knowledge Desks
- **Multi-State Professional Tax Calculator:** https://servicedialtm.com/tools/wb-professional-tax-calculator
- **EPFO ₹25,000 Wage Ceiling Calculator:** https://servicedialtm.com/tools/epfo-wage-ceiling-calculator
- **MSME Section 43B(h) Exposure Audit Tool:** https://servicedialtm.com/tools/msme-43bh-calculator
- **All Compliance Tools & Calculators:** https://servicedialtm.com/tools

---

## 3. Compliance & Privacy Standards
- **DPDP Act 2023 Compliant:** Formal consent capture under Section 8(2) with cryptographic timestamps.
- **Bilateral NDA Protection:** All client salary registers, headcount details, and hiring mandates are strictly protected against third-party disclosure under mutual non-disclosure agreements.

For deep statutory gazette references, penalty matrix tables, and machine-readable citations, access:
https://servicedialtm.com/llm-full.txt
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
