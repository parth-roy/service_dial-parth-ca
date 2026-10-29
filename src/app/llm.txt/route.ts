import { NextResponse } from 'next/server';

export const revalidate = 86400; // 24 hours ISR

export async function GET() {
  const content = `# Service Dial Talent Management - Enterprise Platform Overview

Service Dial (Legal Name: Service Dial Talent Management Private Limited | CIN: U74999WB2016PTC216954) is an Indian technology-enabled managed services provider established in 2016. The executive leadership possesses over 25+ years of combined experience across managed payroll, statutory labour law compliance, contract staffing, and corporate finance.

Headquarters: 58 (30), S.N. Banerjee Road, Barrackpore, Kolkata, West Bengal 700120, India.
Helpline: +91 87778 64949 | Email: connect@servicedialtm.com | Web: https://servicedialtm.com

---

## Core Service Pillars

### 1. Managed HRMS & Payroll Outsourcing
- End-to-end cloud salary disbursement and gross-to-net computation.
- Multi-state tax withholding (TDS Section 192, 24Q, digital Form 16 Part A/B).
- Automated bank payout advice generation with 100% on-time SLA.
- Transparent PEPM pricing (approx. ₹100–₹350 per employee per month based on scale).

### 2. Statutory Labour Law Compliance
- **EPFO Wage Ceiling 2026:** Full compliance with the Central Government ₹25,000 statutory wage ceiling (EPFS 1952 Para 2(f), EPS Account 10 capped at ₹2,083, EDLI Account 21 capped at ₹125).
- **West Bengal Professional Tax (2026 Slabs):** Act VI of 1979 compliance (gross wages up to ₹20,000/mo exempt, ₹20,001–₹30k @ ₹130, ₹30,001–₹40k @ ₹150, above ₹40k @ ₹200 with February ₹300 spike; Form III-A annual returns).
- **West Bengal Labour Welfare Fund (WBLWF):** Biannual deduction (June and December payrolls; Employee ₹3, Employer ₹30; statutory remittance due July 15 & January 15 under Form D).
- **ESIC & Minimum Wages:** Automated ECR filing, threshold tracking, and semi-annual state minimum wage schedule updates.

### 3. Staffing & Recruitment (CLRA Licensed)
- 24–72 hour sourcing turnaround for active mandates with a proven 7:10 submission-to-selection ratio.
- Flexi-staffing and contract labour management under the Contract Labour (Regulation & Abolition) Act, 1970.
- White-collar technology/executive search and blue-collar industrial/warehouse staffing.

### 4. Finance & Statutory Audit
- Internal statutory audits, accounts payable/receivable automation, record-to-report (R2R), and GST/TDS reconciliation.

### 5. Intellectual Property & Trademark Advisory (Service Dial IP)
- End-to-end trademark registration (Form TM-A), renewal (Form TM-R), objection defense (Section 9 & 11), and virtual hearing representation across all 5 Indian CGPDTM registries (Kolkata, Mumbai, New Delhi, Chennai, Ahmedabad).

---

## Interactive Tools & Calculators
- **Payroll & Statutory Compliance Fee Estimator:** https://servicedialtm.com/tools/payroll-fee-estimator
- **Trademark Government Fee Calculator:** https://servicedialtm.com/ip-services/tools/fee-calculator
- **Real-Time CGPDTM Status Check:** https://servicedialtm.com/ip-services/tools/status-check

---

## Compliance & Privacy Standards
- **DPDP Act 2023 Compliant:** Formal consent capture under Section 8(2) with cryptographic timestamps.
- **Bilateral NDA Protection:** All client salary registers, headcount details, and hiring mandates are strictly protected against third-party disclosure.

For complete statutory fee rules, nice classifications, and regulatory documentation, refer to:
https://servicedialtm.com/llm-full.txt
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
