// src/data/subservices.ts
// ============================================================
// Service Dial — Enterprise B2B 24 Micro-Services Architecture
// Modeled after Mynd Solutions (MYNDX) Virtual CMA Accounts Department
// Statutory Compliance, Fixed Asset CARO 2020, Inventory Audit,
// AP 3-Way Matching, MSME 43B(h), R2R, Section 148 Cost Audit & Payroll
// ============================================================

export interface SubService {
  slug: string;
  pillarSlug: "finance-and-audit" | "hrms-and-payroll" | "staffing-and-recruitment" | "compliance-services";
  pillarName: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  blufSummary: string;
  regulatoryFramework: string[];
  keyCapabilities: { title: string; description: string }[];
  deliverables: string[];
  slaMetrics: { label: string; value: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

export const SUBSERVICES_CATALOG: Record<string, SubService> = {
  // ─── 1. FINANCE & CMA VIRTUAL ACCOUNTS DEPARTMENT (8) ─────────────────────────
  "fixed-asset-verification-and-tagging": {
    slug: "fixed-asset-verification-and-tagging",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Fixed Asset Tagging & Physical Verification (CARO 2020)",
    shortTitle: "Fixed Asset Tagging",
    badge: "CARO 2020 Clause 3(i)",
    tagline: "End-to-End Asset Tagging, Barcode/RFID Affixation & Fixed Asset Register (FAR) Reconciliation",
    metaTitle: "Fixed Asset Verification & Tagging Services | CARO 2020 Audit",
    metaDescription: "Comprehensive fixed asset physical verification, barcode/RFID tagging, and FAR reconciliation under CARO 2020 Clause 3(i). Delivered by certified CMAs & CAs across India.",
    blufSummary: "Service Dial executes end-to-end fixed asset management across multi-location manufacturing plants and corporate facilities. We affix tamper-evident metallic barcode/RFID tags, conduct 100% on-site physical audits, reconcile book values against physical counts, eliminate ghost assets, and ensure full statutory compliance under CARO 2020 Clause 3(i).",
    regulatoryFramework: [
      "Companies (Auditor's Report) Order (CARO 2020) Clause 3(i)(a), (b), (c)",
      "Schedule II of the Companies Act 2013 (Useful Life & Depreciation)",
      "Ind AS 16 / AS 10 (Property, Plant and Equipment)",
      "Income Tax Act 1961 Section 32 (Block of Assets & Depreciation Allowance)",
    ],
    keyCapabilities: [
      {
        title: "On-Site Physical Barcode & RFID Tagging",
        description: "Affixing serialized, weather-resistant aluminum anodized barcodes or ruggedized UHF RFID tags to all plant machinery, tooling, IT equipment, and furniture across nationwide facilities."
      },
      {
        title: "100% Fixed Asset Register (FAR) Reconciliation",
        description: "Granular line-by-line reconciliation matching physical serial numbers, make/model, and GPS floor locations against historical capitalized SAP/ERP asset registers."
      },
      {
        title: "Ghost Asset Identification & Impairment Reporting",
        description: "Detecting scrapped, untraceable, or retired assets to write off accumulated depreciation, lower local property insurance premiums, and prevent statutory audit qualifications."
      },
      {
        title: "Title Deeds Verification for Immovable Properties",
        description: "CARO Clause 3(i)(c) audit verifying title deeds of all freehold and leasehold immovable properties are held in the corporate name of the company."
      }
    ],
    deliverables: [
      "Updated & Reconciled Fixed Asset Register (FAR) in Excel / ERP-ready format",
      "Comprehensive Physical Verification Report certified by practicing CMA/CA",
      "Discrepancy Reconciliation Statement (Book vs. Physical Variance)",
      "Asset Impairment & Recommended Write-Off Advisory Pack",
      "Digital Photo & Geo-Tagged Asset Master Database"
    ],
    slaMetrics: [
      { label: "Asset Tagging Throughput", value: "350–500 Assets/Day", detail: "Multi-member field audit squads equipped with 2D laser scanners" },
      { label: "Reconciliation Accuracy", value: "99.9% Variance Match", detail: "Triangulated against purchase invoices, capitalization vouchers & FAR" },
      { label: "CARO Compliance Guarantee", value: "100% Audit-Proof", detail: "Complete working papers ready for statutory auditor scrutiny" }
    ],
    faqs: [
      {
        question: "Why is physical fixed asset verification mandatory under CARO 2020?",
        answer: "Under Clause 3(i)(b) of CARO 2020, statutory auditors must report whether fixed assets have been physically verified by management at reasonable intervals (typically annually or once every 3 years) and whether any material discrepancies were noticed and properly dealt with in the books of accounts."
      },
      {
        question: "What types of tags does Service Dial use for industrial machinery?",
        answer: "For harsh industrial, chemical, or foundry environments, we deploy tamper-evident anodized aluminum metal barcode tags or ruggedized UHF RFID tags with heat-resistant 3M industrial adhesives or mechanical rivet mounting."
      },
      {
        question: "Can you update our Fixed Asset Register directly inside our ERP?",
        answer: "Yes. Our team can ingest and enrich asset masters directly in SAP S/4HANA (FI-AA module), Oracle NetSuite, Microsoft Dynamics 365, or TallyPrime, including asset componentization and depreciation re-computation."
      }
    ]
  },

  "inventory-and-stock-audit": {
    slug: "inventory-and-stock-audit",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Inventory & Perpetual Stock Audit Services",
    shortTitle: "Inventory Stock Audit",
    badge: "CARO 2020 Clause 3(ii)",
    tagline: "Physical Stocktake, Raw Material/WIP Counts, SLOB Analysis & Working Capital Reconciliation",
    metaTitle: "Inventory & Stock Audit Services | CARO 2020 Physical Stocktake",
    metaDescription: "Professional inventory auditing, perpetual stock verification, and working capital reconciliation under CARO 2020 Clause 3(ii). Protect banking limits and stop inventory shrinkage.",
    blufSummary: "Service Dial conducts objective, third-party physical stock audits for raw materials, work-in-progress (WIP), finished goods, and maintenance spares. We provide 10% discrepancy reporting for CARO 2020 Clause 3(ii), identify slow-moving and obsolete (SLOB) inventory, verify warehouse cut-off controls, and validate working capital stock statements submitted to consortium banks.",
    regulatoryFramework: [
      "CARO 2020 Clause 3(ii)(a) (Physical Verification & 10% Material Discrepancies)",
      "CARO 2020 Clause 3(ii)(b) (Working Capital Limits > ₹5 Crore & Quarterly Stock Statements)",
      "Ind AS 2 / AS 2 (Valuation of Inventories at Lower of Cost or Net Realizable Value)",
      "RBI Master Circular on Consortium Advances & Stock Audits",
    ],
    keyCapabilities: [
      {
        title: "Perpetual & Period-End Physical Stocktakes",
        description: "Blind counts and barcode-assisted scanning across central warehouses, plant floor silos, retail outlets, and 3PL CFA distribution centers."
      },
      {
        title: "Working Capital Consortium Bank Audit",
        description: "Independent stock and book-debt audit certifying drawing power calculations for corporate bank credit facilities exceeding ₹5 Crores."
      },
      {
        title: "SLOB (Slow, Obsolete & Damaged) Stock Valuation",
        description: "Ageing analysis categorizing inventory into fast-moving, slow-moving, non-moving, and expired batches with net realizable value (NRV) write-down estimates."
      },
      {
        title: "Cut-Off Testing & Movement Gatepass Triangulation",
        description: "Rigorous verification of Goods Receipt Notes (GRN), Delivery Challans, and Inward/Outward gatepasses at period close to prevent double counting or unrecorded issues."
      }
    ],
    deliverables: [
      "Signed Physical Stock Verification & Discrepancy Certificate",
      "Stock Aging Matrix & SLOB Provisioning Schedule",
      "ERP vs. Physical Count Variance Analysis Report",
      "Consortium Bank Stock Statement Audit Review Dossier",
      "Warehouse Internal Control & Shrinkage Prevention Recommendations"
    ],
    slaMetrics: [
      { label: "Stocktake Completion Window", value: "24–48 Hours", detail: "Rapid weekend or non-operational hour turnaround to minimize plant stoppage" },
      { label: "Discrepancy Threshold", value: "Exact 10% Benchmark", detail: "Automated flag on any SKU category exceeding CARO 10% statutory limit" },
      { label: "Audit Coverage", value: "100% High-Value SKUs", detail: "A-category items counted 100%; statistical B/C category sampling" }
    ],
    faqs: [
      {
        question: "What is the 10% discrepancy rule under CARO 2020 Clause 3(ii)?",
        answer: "CARO 2020 mandates that statutory auditors must specifically state whether discrepancies of 10% or more in the aggregate for each class of inventory were noticed during physical verification, and whether they have been properly accounted for in the financial books."
      },
      {
        question: "Do you audit Work-in-Progress (WIP) on the factory floor?",
        answer: "Yes. Our industrial CMAs conduct stage-wise WIP verification using Bill of Materials (BOM) yield calculations, machine stage estimation, and chemical assay/dip measurements for bulk liquid and bulk solid tanks."
      },
      {
        question: "How do you handle multi-city distribution warehouses simultaneously?",
        answer: "With our pan-India auditor footprint across Kolkata, Mumbai, Delhi NCR, Chennai, Bengaluru, and Pune, we execute simultaneous cut-off stocktakes across all client hubs on the exact same closing date."
      }
    ]
  },

  "accounts-payable-outsourcing": {
    slug: "accounts-payable-outsourcing",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Accounts Payable Outsourcing & MSME 43B(h) Gatekeeping",
    shortTitle: "Accounts Payable (AP)",
    badge: "MSME Sec 43B(h) Compliant",
    tagline: "3-Way Matching (PO-GRN-Invoice), GSTR-2B ITC Protection & Strict 15/45-Day MSME Payables Gatekeeping",
    metaTitle: "Accounts Payable Outsourcing & MSME 43B(h) Services | Service Dial",
    metaDescription: "Outsourced accounts payable processing with automated 3-way matching, GSTR-2B ITC reconciliation, and strict MSME 43B(h) 15/45-day payment scheduling to prevent tax disallowances.",
    blufSummary: "Service Dial transforms enterprise accounts payable into a high-precision, fraud-resistant operation. We handle digital invoice ingestion, rigorous 3-way matching (PO vs. GRN vs. Vendor Invoice), GSTR-2B input tax credit validation, vendor dispute management, and strict Section 43B(h) MSME payment scheduling to guarantee zero income tax disallowances.",
    regulatoryFramework: [
      "Income Tax Act 1961 Section 43B(h) (Mandatory 15/45-Day Payment to MSME Vendors)",
      "CGST Act 2017 Section 16(2)(aa) & Rule 36(4) (GSTR-2B Inward Credit Validation)",
      "Section 16(4) (180-Day Rule for Vendor Payment & ITC Reversal with 18% Interest)",
      "Section 194Q & 206C(1H) (TDS/TCS on Goods Purchases)",
    ],
    keyCapabilities: [
      {
        title: "Automated 3-Way Matching (PO-GRN-Invoice)",
        description: "Zero-error verification comparing unit rates, line-item quantities, freight terms, and discount structures across Purchase Order, Goods Receipt Note, and Tax Invoice before payment approval."
      },
      {
        title: "MSME Section 43B(h) Statutory Gatekeeping",
        description: "Automated tracking of vendor Udyam certificates, classifying Micro and Small enterprises, and enforcing 15-day (without agreement) and 45-day (with written agreement) payment schedules."
      },
      {
        title: "Real-Time GSTR-2B ITC Triangulation",
        description: "Validating that vendor invoices appear in auto-populated GSTR-2B before releasing payment, eliminating blocked input tax credit and protecting working capital."
      },
      {
        title: "Vendor Statement of Account (SOA) Reconciliation",
        description: "Monthly ledger reconciliation with active suppliers, resolving credit note adjustments, price variances, and pending debit notes to maintain pristine supplier relations."
      }
    ],
    deliverables: [
      "Daily / Weekly Vendor Payment Approval Runs (ERP-Ready Batch Files)",
      "MSME 43B(h) Compliance Dashboard with Early Payment Alerts",
      "GSTR-2B vs. Purchase Register ITC Reconciliation Sheets",
      "Aged Creditors Analysis (0-15, 16-30, 31-45, 45+ Days) with Disputed Holds",
      "Vendor Balance Confirmation Certificates for Statutory Audit"
    ],
    slaMetrics: [
      { label: "Invoice Processing Turnaround", value: "< 24 Hours", detail: "From document receipt to voucher generation in ERP" },
      { label: "3-Way Match Accuracy", value: "99.98% Exact Match", detail: "Zero unauthorized price or quantity variances approved" },
      { label: "MSME 43B(h) Penalty Rate", value: "Zero Disallowances", detail: "Proactive treasury scheduling prevents all Section 43B(h) tax penalties" }
    ],
    faqs: [
      {
        question: "How does Service Dial protect us from MSME Section 43B(h) disallowances?",
        answer: "Section 43B(h) disallows business deductions for any payment due to Micro and Small enterprises that is delayed beyond 15 days (or 45 days under written contract). We classify your vendor master with validated Udyam registration numbers, calculate exact maturity dates, and prioritize these runs in weekly treasury payout schedules."
      },
      {
        question: "What happens if a vendor charges GST but fails to file GSTR-1?",
        answer: "Under CGST Section 16(2)(aa), you cannot claim ITC unless the supplier files GSTR-1. Our system holds the GST component of the payment until the invoice reflects in GSTR-2B, protecting your company from tax loss."
      },
      {
        question: "Can Service Dial integrate with our in-house ERP?",
        answer: "Yes. We work directly within your SAP, NetSuite, Dynamics, Zoho Books, or Tally instance via secure VPN/RDP or API connector, requiring zero server migration on your side."
      }
    ]
  },

  "accounts-receivable-and-credit-control": {
    slug: "accounts-receivable-and-credit-control",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Accounts Receivable & DSO Credit Control",
    shortTitle: "Accounts Receivable (AR)",
    badge: "Order-to-Cash (O2C)",
    tagline: "Accelerating Cash Flow, DSO Compression, Billing Automation & Structured Dispute Resolution",
    metaTitle: "Accounts Receivable & DSO Credit Control Services | Service Dial",
    metaDescription: "Accelerate B2B cash collections and compress Days Sales Outstanding (DSO) by 25-40%. Systematic billing, automated dunning, customer reconciliations, and dispute resolution.",
    blufSummary: "Service Dial's Order-to-Cash (O2C) practice compresses Days Sales Outstanding (DSO) and unlocks locked working capital. We execute customer credit vetting, error-free automated e-invoicing, structured multi-channel dunning, ledger reconciliations, and proactive dispute tracking to accelerate operating cash flow.",
    regulatoryFramework: [
      "Companies Act 2013 Schedule III (Ageing Schedule for Trade Receivables > 6 Months)",
      "Ind AS 109 / AS 30 (Financial Instruments — Expected Credit Loss [ECL] Modeling)",
      "E-Invoicing Rules under Rule 48(4) of CGST Rules",
      "Micro, Small and Medium Enterprises Development (MSMED) Act 2006 (Delayed Payments Chapter)",
    ],
    keyCapabilities: [
      {
        title: "B2B Credit Vetting & Risk Scoring",
        description: "Assessing prospective customer balance sheets, MCA filings, GST compliance scores, and credit bureau reports to establish safe credit limits and payment terms."
      },
      {
        title: "Error-Free E-Invoicing & Rapid Dispatch",
        description: "Instant generation of IRN (Invoice Reference Number) e-invoices with signed QR codes, purchase order cross-referencing, and proof-of-delivery (POD) attachment."
      },
      {
        title: "Structured Multi-Tier Dunning Cadence",
        description: "Professional, relationship-preserving payment follow-ups (automated reminders at T-7, T-3, Day 0, followed by personalized credit officer outreach at Day +7, +15, +30)."
      },
      {
        title: "Dispute Triage & Rapid Reconciliation",
        description: "Identifying rate discrepancies, short shipments, and tax deduction disputes within 48 hours to prevent payment withholdings."
      }
    ],
    deliverables: [
      "Dynamic Ageing Matrix (Not Due, 0-30, 31-60, 61-90, 90-180, 180+ Days)",
      "Daily Cash Inflow Tracking & Bank Reconciliation Dossier",
      "Customer Dispute Escalation Log with Actionable Root Cause Analysis",
      "Expected Credit Loss (ECL) Calculation Model for Statutory Auditors",
      "Formal Customer Balance Confirmation Mailers & Reconciliations"
    ],
    slaMetrics: [
      { label: "DSO Reduction Average", value: "25% to 40% Compression", detail: "Typical client DSO drops from 75+ days down to 42–48 days within 90 days" },
      { label: "Dispute Resolution SLA", value: "< 72 Hours Triage", detail: "Billing mismatches addressed and corrected within 3 business days" },
      { label: "Unallocated Cash Rate", value: "< 0.5% of Ledger", detail: "All customer remittances tagged to specific invoice numbers daily" }
    ],
    faqs: [
      {
        question: "How does Service Dial follow up on overdue customer invoices without harming relationships?",
        answer: "We act as your dedicated corporate credit management desk. Our approach is consultative and professional: we verify whether the invoice was received correctly, ensure all tax credits were claimed by the customer, and resolve logistical documentation hurdles before escalating credit terms."
      },
      {
        question: "How do you assist with the statutory Trade Receivables Ageing Schedule under Schedule III?",
        answer: "We furnish the mandatory Schedule III matrix categorizing receivables into Undisputed (considered good), Undisputed (considered doubtful), Disputed (considered good), and Disputed (considered doubtful) across the exact statutory tenure bands."
      },
      {
        question: "Can you help recover old written-off or disputed corporate debts?",
        answer: "Yes. Our senior dispute resolution team conducts deep historical ledger reconciliations, produces missing PODs and tax invoices, and coordinates structured settlement plans or formal legal notices under the MSMED Act."
      }
    ]
  },

  "record-to-report-r2r-services": {
    slug: "record-to-report-r2r-services",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Record-to-Report (R2R) & Rapid Month-End Financial Close",
    shortTitle: "Record to Report (R2R)",
    badge: "Day 3–5 Period Close",
    tagline: "Rapid Month-End Financial Closing, General Ledger Substantiation, Intercompany Elimination & Board MIS",
    metaTitle: "Record to Report (R2R) Services | Rapid Month-End Close | Service Dial",
    metaDescription: "Accelerate financial closing from 20 days down to Day 3-5. Complete General Ledger substantiation, intercompany eliminations, Ind AS accounting, and management MIS.",
    blufSummary: "Service Dial's Record-to-Report (R2R) practice accelerates corporate financial close cycles from typical 15–20 day delays down to Day 3 to 5 business day rapid closes. We handle journal entry controls, fixed asset and lease accounting, intercompany reconciliations, balance sheet account substantiations, and executive MIS reporting.",
    regulatoryFramework: [
      "Companies Act 2013 Section 129 (Financial Statements Truth and Fairness)",
      "Ind AS 1 / AS 1 (Presentation of Financial Statements)",
      "Ind AS 116 (Leases Accounting & Right-of-Use Asset Amortization)",
      "CARO 2020 Clause 3(ix) (Default in Repayment of Loans and Borrowings)",
    ],
    keyCapabilities: [
      {
        title: "Standardized Period-End Close Checklist",
        description: "Executing a structured 120-point month-end close calendar with strict maker-checker controls covering payroll, provisions, depreciation, and tax accruals."
      },
      {
        title: "Intercompany Reconciliation & Elimination",
        description: "Reconciling intercompany trading balances, loan interest, management fees, and shared service allocations across group subsidiaries with zero mismatch."
      },
      {
        title: "100% Balance Sheet Account Substantiation",
        description: "Monthly reconciliation dossier backing every single balance sheet line item (bank, cash, advances, deposits, provisions) with external proof and schedules."
      },
      {
        title: "C-Suite & Board MIS Reporting",
        description: "Dynamic reporting packs delivering EBITDA bridge analysis, business-unit contribution margins, cash burn analytics, and budget vs. actual variance narratives."
      }
    ],
    deliverables: [
      "Day-3 Flash P&L and Revenue Highlights",
      "Day-5 Fully Closed Audited Financial Statements (P&L, Balance Sheet, Cash Flow)",
      "Comprehensive Balance Sheet Substantiation Dossier (Blackline Standard)",
      "Intercompany Elimination & Reconciliation Matrix",
      "Executive Board MIS Presentation with Variance Commentary"
    ],
    slaMetrics: [
      { label: "Close Cycle Speed", value: "Day 3 to Day 5 Close", detail: "Financials finalized within 5 working days of month-end" },
      { label: "Reconciliation Coverage", value: "100% BS Accounts", detail: "Zero unverified or open suspense ledger accounts carried forward" },
      { label: "Year-End Audit Compression", value: "60% Faster Audit", detail: "Clean closing dossiers drastically reduce external auditor field queries" }
    ],
    faqs: [
      {
        question: "How do you compress financial close timelines to Day 3–5?",
        answer: "We decouple transactional processing from close processing. By automating continuous daily AP/AR reconciliations, pre-closing recurring journals on Day -2, and standardizing account substantiation templates, month-end becomes an aggregation process rather than an investigation."
      },
      {
        question: "Do you handle Ind AS 116 Lease Accounting schedules?",
        answer: "Yes. We maintain computerized Right-of-Use (ROU) asset schedules and lease liability amortizations under Ind AS 116, accounting for modifications, indexations, and discount rates."
      },
      {
        question: "How do your R2R services benefit CFOs during external audit season?",
        answer: "Statutory auditors receive complete, pre-reviewed audit folders with working papers, lead schedules, and third-party confirmations, reducing audit fees and eliminating qualification surprises."
      }
    ]
  },

  "cost-audit-and-variance-analysis": {
    slug: "cost-audit-and-variance-analysis",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Cost Audit & Standard Costing Variance Analysis",
    shortTitle: "Cost Audit & Analysis",
    badge: "Companies Act Sec 148",
    tagline: "Form CRA-1 Cost Records, CRA-3 Statutory Cost Audit, BOM Variances & Factory Unit Cost Optimization",
    metaTitle: "Cost Audit & Variance Analysis | Section 148 CRA-1 & CRA-3 | Service Dial",
    metaDescription: "Statutory cost audit compliance under Section 148, CRA-1 cost records maintenance, CRA-3 audit filing, and industrial standard costing variance analysis by certified CMAs.",
    blufSummary: "Service Dial's certified Cost and Management Accountants (CMAs) design, maintain, and audit statutory cost accounting records under Companies Act Section 148. We construct product-wise Bill of Materials (BOM) cost sheets, perform factory capacity utilization audits, analyze direct material/labor variances, and optimize manufacturing unit production costs.",
    regulatoryFramework: [
      "Companies Act 2013 Section 148 (Central Government Power to Direct Cost Audit)",
      "Companies (Cost Records and Audit) Rules 2014 (Form CRA-1, CRA-2, CRA-3, CRA-4)",
      "Cost Accounting Standards (CAS 1 to CAS 24) issued by ICAI (Cost)",
      "Directorate General of Foreign Trade (DGFT) Standard Input-Output Norms (SION)",
    ],
    keyCapabilities: [
      {
        title: "Statutory Cost Records Maintenance (Form CRA-1)",
        description: "Structuring and maintaining mandatory cost accounting books for regulated industries (pharmaceuticals, chemicals, steel, electricity) and non-regulated sectors exceeding ₹35 Cr turnover."
      },
      {
        title: "Statutory Cost Audit & Filing (Form CRA-3 & CRA-4)",
        description: "Conducting independent statutory cost audits for companies exceeding ₹50 Cr / ₹100 Cr turnover thresholds and filing XBRL cost audit reports with the Ministry of Corporate Affairs (MCA)."
      },
      {
        title: "Bill of Materials (BOM) & Material Yield Variance Audit",
        description: "Auditing actual consumption vs. standard BOM formulas to pinpoint shopfloor material wastages, chemical yield losses, and scrap generation beyond technical norms."
      },
      {
        title: "Capacity Utilization & Idle Plant Cost Accounting",
        description: "Quantifying machine hour rates (MHR), labor hour rates (LHR), and segregating normal vs. abnormal idle plant capacity costs to prevent distortion of inventory valuation."
      }
    ],
    deliverables: [
      "Statutory Cost Records Register in Form CRA-1",
      "Statutory Cost Audit Report in Form CRA-3 with Full Annexures",
      "MCA XBRL Cost Audit Filing Acknowledgment (Form CRA-4)",
      "Detailed Product-Wise Standard vs. Actual Cost Sheet (BOM Breakdown)",
      "Factory Capacity Utilization & Operational Cost Optimization Roadmap"
    ],
    slaMetrics: [
      { label: "Cost Record Maintenance", value: "Monthly Closed Registers", detail: "Real-time cost ledger balancing aligned with financial accounting books" },
      { label: "CRA-3 Filing Compliance", value: "100% Within Due Date", detail: "Filed within 180 days of financial year closure without penalty" },
      { label: "Cost Saving Identification", value: "3% to 8% Unit Cost Reduction", detail: "Targeted actionable leakage reduction across utilities, scrap, and idle labor" }
    ],
    faqs: [
      {
        question: "Which companies are legally required to maintain cost records in Form CRA-1?",
        answer: "Under the Companies (Cost Records and Audit) Rules 2014, any company operating in regulated sectors (telecom, electricity, pharma, petroleum, sugar, fertilizers) with overall turnover ≥ ₹35 Crores, or non-regulated manufacturing sectors with turnover ≥ ₹35 Crores, must maintain statutory cost records."
      },
      {
        question: "When does statutory Cost Audit (Form CRA-3) become mandatory?",
        answer: "Cost audit is mandatory if overall turnover exceeds ₹50 Crores for regulated sectors (with product turnover ≥ ₹25 Cr) or exceeds ₹100 Crores for non-regulated sectors (with product turnover ≥ ₹35 Cr)."
      },
      {
        question: "How does cost auditing help plant management beyond statutory compliance?",
        answer: "A cost audit reveals exact per-unit production costs across raw materials, utilities (power, steam, compressed air), direct labor, and overheads. It exposes unrecorded scrap leaks, machine idle time, and product lines that are quietly eroding company profit margins."
      }
    ]
  },

  "internal-financial-controls-and-sop": {
    slug: "internal-financial-controls-and-sop",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Internal Financial Controls (IFC) & SOP Architecture",
    shortTitle: "IFC & Finance SOPs",
    badge: "Companies Act Sec 134(5)(e)",
    tagline: "Risk Control Matrices (RCM), Enterprise SOP Drafting, Maker-Checker Governance & Process Walkthroughs",
    metaTitle: "Internal Financial Controls (IFC) & SOP Design | Service Dial",
    metaDescription: "Design, document, and test Internal Financial Controls (IFC) under Section 134(5)(e) and Section 143(3)(i). Complete Risk Control Matrices (RCM) and finance SOP manuals.",
    blufSummary: "Service Dial builds robust, audit-proof Internal Financial Controls (IFC) frameworks and operational Standard Operating Procedures (SOPs). We construct granular Risk Control Matrices (RCMs), segregate conflicting maker-checker responsibilities, test operating control effectiveness, and guarantee clean IFC audit reporting under Companies Act Section 143(3)(i).",
    regulatoryFramework: [
      "Companies Act 2013 Section 134(5)(e) (Directors' Responsibility Statement on IFC)",
      "Companies Act 2013 Section 143(3)(i) (Auditor's Duty to Report on Adequacy of IFC)",
      "ICAI Guidance Note on Audit of Internal Financial Controls Over Financial Reporting",
      "COSO Internal Control — Integrated Framework (2013)",
    ],
    keyCapabilities: [
      {
        title: "Enterprise Finance SOP Manual Drafting",
        description: "Authoring clear, step-by-step corporate standard operating procedures covering Procure-to-Pay (P2P), Order-to-Cash (O2C), Record-to-Report (R2R), Fixed Assets, Inventory, Treasury, and Payroll."
      },
      {
        title: "Process Flowcharts & RACI Matrices",
        description: "Visual Swimlane process mapping defining Responsible, Accountable, Consulted, and Informed (RACI) stakeholders for every commercial transaction."
      },
      {
        title: "Risk Control Matrix (RCM) Development",
        description: "Documenting financial reporting risks, identifying automated vs. manual preventive and detective controls, and assigning testing criteria."
      },
      {
        title: "Control Testing (Design & Operating Effectiveness)",
        description: "Executing sample walkthroughs and substantive testing to uncover control breakdowns, unauthorized overrides, and fraud vulnerabilities before statutory audits."
      }
    ],
    deliverables: [
      "Complete Set of Corporate Finance & Operational SOP Manuals",
      "Enterprise Risk Control Matrix (RCM) with Walkthrough Documentation",
      "Delegation of Financial Authority (DOA) Matrix",
      "Internal Control Deficiency & Management Remediation Report",
      "Board Audit Committee IFC Certification Dossier"
    ],
    slaMetrics: [
      { label: "SOP Documentation Speed", value: "4–6 Weeks Complete Manual", detail: "End-to-end process mapping with stakeholder workshops" },
      { label: "Control Testing Rigor", value: "100% Core Financial Cycles", detail: "All material accounting processes evaluated against ICAI guidelines" },
      { label: "Audit Qualification Rate", value: "Zero IFC Adverse Opinions", detail: "Comprehensive remediation ensures clean auditor sign-off" }
    ],
    faqs: [
      {
        question: "Why do statutory auditors issue an opinion on Internal Financial Controls (IFC)?",
        answer: "Under Section 143(3)(i) of the Companies Act 2013, the statutory auditor must state whether the company has adequate internal financial controls over financial reporting in place and the operating effectiveness of such controls as of the balance sheet date."
      },
      {
        question: "What is the difference between Design Effectiveness and Operating Effectiveness?",
        answer: "Design effectiveness checks whether the control, as designed, will prevent or detect material errors. Operating effectiveness verifies through testing whether the control actually operated as intended throughout the financial year."
      },
      {
        question: "Can Service Dial help remediate controls that failed in a previous audit?",
        answer: "Yes. We re-engineer flawed workflows, implement automated maker-checker approvals in your ERP, train department leads, and re-test the control to establish audit remediation evidence."
      }
    ]
  },

  "virtual-cfo-services": {
    slug: "virtual-cfo-services",
    pillarSlug: "finance-and-audit",
    pillarName: "Finance & Audit",
    title: "Virtual CFO & Strategic Financial Controller Services",
    shortTitle: "Virtual CFO",
    badge: "Executive Financial Leadership",
    tagline: "Dynamic Cash Forecasting, Working Capital Management, Banking Consortium Reviews & Board Advisory",
    metaTitle: "Virtual CFO & Financial Controller Services India | Service Dial",
    metaDescription: "Senior Virtual CFO and Financial Controller services by practicing CMAs and CAs. Strategic cash runway modeling, banking renewals, ERP implementation, and Board MIS.",
    blufSummary: "Service Dial delivers seasoned Virtual CFO and Financial Controller leadership on a flexible, high-impact retainer model. Led by certified CMAs and CAs, we oversee banking consortium renewals, structure 13-week rolling cash flow forecasts, optimize working capital cycles, lead ERP governance, and guide founders and boards on capital allocation.",
    regulatoryFramework: [
      "Companies Act 2013 Section 203 (Key Managerial Personnel Governance)",
      "RBI Master Directions on Lending to Commercial Real Estate & Working Capital",
      "SEBI (LODR) Regulations 2015 (Corporate Governance Standards)",
      "Direct & Indirect Tax Statutory Compliance Oversight",
    ],
    keyCapabilities: [
      {
        title: "Dynamic 13-Week Rolling Cash Flow Forecasting",
        description: "Granular weekly visibility into operational cash generation, vendor payment cliffs, tax outflows, and debt service obligations to eliminate liquidity shocks."
      },
      {
        title: "Banking Consortium & Debt Syndication Management",
        description: "Preparing Credit Monitoring Arrangement (CMA) data packs, negotiating competitive interest rates, renewing letter of credit (LC) and bank guarantee (BG) limits."
      },
      {
        title: "Working Capital Optimization (NWC Compression)",
        description: "Aligning payable terms, receivable collections, and inventory turnover to compress net working capital requirements and minimize bank overdraft costs."
      },
      {
        title: "ERP Migration & Finance Systems Governance",
        description: "Serving as executive project sponsor for ERP implementations (SAP, NetSuite, Zoho, Dynamics), ensuring chart of accounts integrity, cost center mapping, and user testing."
      }
    ],
    deliverables: [
      "13-Week Dynamic Cash Flow Model (Updated Weekly)",
      "Comprehensive Bank CMA Data Reports for Working Capital Renewals",
      "Monthly Board & Management Review Packs with Actionable Financial Insights",
      "Capex Feasibility & Return on Investment (ROI) Appraisal Dossiers",
      "Comprehensive Statutory Compliance Risk Scorecards"
    ],
    slaMetrics: [
      { label: "Executive Engagement Model", value: "Dedicated Senior CMA/CA Lead", detail: "Direct weekly advisory calls and continuous email/Slack oversight" },
      { label: "Cash Forecast Variance", value: "< 5% Actual vs. Forecast", detail: "High-precision liquidity modeling prevents emergency borrowing" },
      { label: "Cost vs. Full-Time CFO", value: "60% Cost Efficiency", detail: "Enterprise-grade financial leadership without executive CTC overhead" }
    ],
    faqs: [
      {
        question: "When should an enterprise hire a Virtual CFO instead of a full-time CFO?",
        answer: "A Virtual CFO is ideal for mid-market companies ($2M to $50M revenue) that require sophisticated financial modeling, debt structuring, and internal governance, but do not need or cannot justify the ₹50L+ annual cost of a full-time executive."
      },
      {
        question: "Does your Virtual CFO represent our company during bank meetings?",
        answer: "Yes. Our senior CMAs and CAs lead technical discussions with consortium bank managers, explaining CMA data projections, inventory cover, and DSCR metrics during annual credit renewal cycles."
      },
      {
        question: "Can your team oversee our junior internal accountants?",
        answer: "Absolutely. We provide direct supervisory governance over your existing bookkeepers and accounts team, establishing daily task checklists, review workflows, and training them on best practices."
      }
    ]
  },

  // ─── 2. HRMS & MANAGED PAYROLL OUTSOURCING (5) ──────────────────────────────
  "managed-payroll-outsourcing": {
    slug: "managed-payroll-outsourcing",
    pillarSlug: "hrms-and-payroll",
    pillarName: "HRMS & Payroll",
    title: "Managed Enterprise Payroll Outsourcing (Gross-to-Net)",
    shortTitle: "Managed Payroll",
    badge: "99.99% Accuracy SLA",
    tagline: "End-to-End Gross-to-Net Computation, Reimbursements, Tax Withholding & Multi-State Banking Payouts",
    metaTitle: "Managed Payroll Outsourcing Services India | Service Dial",
    metaDescription: "End-to-end enterprise payroll outsourcing for 50 to 50,000+ employees. 100% error-free gross-to-net computation, direct bank salary uploads, and statutory compliance.",
    blufSummary: "Service Dial executes end-to-end payroll processing for multi-location corporate and industrial workforces across India. We compute gross-to-net salaries, administer flexible benefit plans (FBP), verify tax exemption proofs, process Full & Final (FnF) settlements, and generate automated bank transfer files with a documented 99.99% calculation accuracy SLA.",
    regulatoryFramework: [
      "Code on Wages 2019 / Payment of Wages Act 1936",
      "Income Tax Act 1961 Section 192 (TDS on Salary & New vs. Old Tax Regime Rules)",
      "Payment of Gratuity Act 1972",
      "Payment of Bonus Act 1965",
    ],
    keyCapabilities: [
      {
        title: "Multi-Tier Gross-to-Net Computation",
        description: "Automated processing of basic salary, HRA, special allowances, overtime, shift allowances, performance bonuses, and loan deductions across multi-branch payrolls."
      },
      {
        title: "Tax Withholding & Regime Optimization (New vs Old)",
        description: "Dynamic tax computation enabling employees to switch or optimize between New Tax Regime (Section 115BAC) and Old Tax Regime with verified deduction claims (80C, 80D, 24b)."
      },
      {
        title: "Batch Bank Payout Integration",
        description: "Generating encrypted, pre-formatted corporate banking upload files (HDFC, ICICI, SBI, Axis, Kotak) for same-day direct salary credits with automated failure alerts."
      },
      {
        title: "Full & Final (FnF) Settlement Processing",
        description: "Comprehensive separation processing: leave encashment, notice pay adjustments, statutory gratuity, PF transfers, and digital Form 16 issuance within strict statutory timelines."
      }
    ],
    deliverables: [
      "Pre-Formatted Bank Salary Disbursal Files (NEFT/RTGS batch upload)",
      "Password-Protected Digital Employee Pay Slips via Email & ESS Portal",
      "Monthly Payroll Register & Detailed Department Cost Allocation Reports",
      "Form 16 Part A & Part B for All Employees",
      "FnF Calculation Statements & Signed Clearance Receipts"
    ],
    slaMetrics: [
      { label: "Calculation Accuracy", value: "99.99% Error-Free", detail: "Triangulated through dual-level maker-checker audit algorithms" },
      { label: "Payroll Turnaround", value: "48-Hour Processing Window", detail: "From attendance cut-off receipt to bank payout file generation" },
      { label: "Query Resolution SLA", value: "< 24 Hours", detail: "Dedicated helpdesk resolving employee tax and slip inquiries" }
    ],
    faqs: [
      {
        question: "How do you handle employees who switch between the Old and New Tax Regimes?",
        answer: "Our engine tracks employee tax declarations at the start of the fiscal year and allows dynamic mid-year updates, recalculating TDS withholding under Section 192 automatically to prevent year-end tax shocks."
      },
      {
        question: "Can Service Dial disburse salaries across multiple bank accounts?",
        answer: "Yes. We format direct corporate banking batch files compatible with all major commercial banks in India (SBI, HDFC, ICICI, Axis, PNB, etc.) for automated single-click execution by your authorized signatories."
      },
      {
        question: "What security measures protect our employee salary data?",
        answer: "All payroll databases are encrypted at rest (AES-256) and in transit (TLS 1.3), hosted in ISO 27001-certified Indian data centers with strict role-based access controls."
      }
    ]
  },

  "statutory-payroll-compliance": {
    slug: "statutory-payroll-compliance",
    pillarSlug: "hrms-and-payroll",
    pillarName: "HRMS & Payroll",
    title: "Statutory Payroll Compliance (EPFO, ESIC, WB PT 2026)",
    shortTitle: "Statutory Compliance",
    badge: "2026 Statutory Updates",
    tagline: "EPFO ₹25,000 Wage Ceiling Split, West Bengal Revised PT Slabs (Oct 2026) & Multi-State LWF Returns",
    metaTitle: "Statutory Payroll Compliance | EPFO ₹25,000 & WB PT 2026 | Service Dial",
    metaDescription: "Stay 100% compliant with the 2026 EPFO ₹25,000 wage ceiling hike, West Bengal revised PT slabs (Notification 1607-F.T.), ESIC, and bi-annual LWF filings. Zero penalties guaranteed.",
    blufSummary: "Service Dial provides end-to-end statutory payroll compliance shielding employers from regulatory liabilities. We implement the latest 2026 labor mandates including the EPFO ₹25,000 wage ceiling transition, West Bengal Salaried PT overhaul (4 revised tiers under Notification 1607-F.T. effective 1 Oct 2026), ESIC Form 5 submissions, and multi-state Labour Welfare Fund returns.",
    regulatoryFramework: [
      "EPFO Notification S.O. 5109(E) (Hike of Wage Ceiling from ₹15,000 to ₹25,000)",
      "West Bengal State PT Notification No. 1607-F.T. (Revised Slabs Effective 1 Oct 2026)",
      "Employees' State Insurance Act 1948 (₹21,000 Wage Limit & Bi-Annual Form 5 Returns)",
      "State Labour Welfare Fund (LWF) Acts (June & December Deductions)",
    ],
    keyCapabilities: [
      {
        title: "EPFO ₹25,000 Wage Ceiling Impact Modeling",
        description: "Re-benchmarking employee salary structures to account for the mandatory ₹25,000 EPFO ceiling hike, computing revised 12% PF contributions and managing opt-out caps."
      },
      {
        title: "West Bengal Revised PT 2026 Automation",
        description: "Applying the newly enacted 4-tier salaried PT slabs: ₹0 up to ₹10,000; ₹110 for ₹10,001–₹15,000; ₹130 for ₹15,001–₹25,000; and ₹200 for > ₹25,000."
      },
      {
        title: "Monthly ECR Filing & Challan Generation",
        description: "Generating unified EPFO Electronic Challan cum Return (ECR) text files, ESIC monthly contribution schedules, and direct TRRN receipt generation before statutory deadlines."
      },
      {
        title: "Bi-Annual LWF & Annual Return Management",
        description: "Executing June and December state Labour Welfare Fund deductions, submitting Form A/D returns, and maintaining statutory registers (Form 1, 2, 3)."
      }
    ],
    deliverables: [
      "Monthly EPFO Electronic Challan cum Return (ECR) & TRRN Payment Receipts",
      "Monthly ESIC Contribution Challans & Medical Card (Pehchan) Issuance Dossier",
      "State-Wise Professional Tax Challans & Monthly/Annual Return Filings",
      "Bi-Annual Labour Welfare Fund (LWF) Deposit Receipts & Forms",
      "Statutory Audit Dossier with Form 7A / ESIC Inspection Ready Papers"
    ],
    slaMetrics: [
      { label: "Filing Deadline Guarantee", value: "By 12th of Every Month", detail: "Challans submitted well ahead of statutory 15th cutoff to prevent system traffic delays" },
      { label: "UAN Generation SLA", value: "< 24 Hours", detail: "Instant Aadhaar-linked UAN generation for all new associates" },
      { label: "Statutory Penalty Record", value: "Zero Late Fees / Damages", detail: "100% on-time record across thousands of associate filings" }
    ],
    faqs: [
      {
        question: "How will the EPFO ₹25,000 wage ceiling hike affect corporate employer CTC?",
        answer: "The increase from ₹15,000 to ₹25,000 raises mandatory employer PF contribution from ₹1,800 to ₹3,000 per month (an extra ₹1,200/month or ₹14,400/year per eligible employee). We restructure CTC allowances to maintain cost-neutrality or budget compliance."
      },
      {
        question: "What are the new West Bengal Salaried PT slabs effective 1 October 2026?",
        answer: "Under Notification No. 1607-F.T., the slabs are: Gross salary up to ₹10,000 = Nil; ₹10,001 to ₹15,000 = ₹110/month; ₹15,001 to ₹25,000 = ₹130/month; and Greater than ₹25,000 = ₹200/month."
      },
      {
        question: "What happens if our company receives an EPFO Section 7A inquiry notice?",
        answer: "Our statutory legal specialists represent your organization, prepare wage-component reconciliation registers, and furnish Supreme Court-backed jurisprudence (Vivekananda Vidyamandir judgment on basic wages vs. special allowances) to defend your stance."
      }
    ]
  },

  "cloud-hrms-software": {
    slug: "cloud-hrms-software",
    pillarSlug: "hrms-and-payroll",
    pillarName: "HRMS & Payroll",
    title: "Cloud HRMS Platform & Biometric Attendance Integration",
    shortTitle: "Cloud HRMS Software",
    badge: "SaaS Enterprise HRMS",
    tagline: "Mobile Employee Self-Service (ESS), Geofenced Punching, Leave Workflows & Automated Shift Rosters",
    metaTitle: "Cloud HRMS Software & Biometric Integration | Service Dial",
    metaDescription: "Enterprise cloud HRMS software with geofenced mobile punching, biometric hardware sync, automated shift rostering, leave workflows, and digital pay slip access.",
    blufSummary: "Service Dial provides a modern, fully-integrated Cloud HRMS platform designed for corporate and frontline manufacturing workforces. Features include geofenced mobile clock-in/out, direct biometric device synchronization, automated multi-shift rostering, paperless leave and expense approvals, and real-time attendance analytics directly connected to payroll computation.",
    regulatoryFramework: [
      "The Information Technology Act 2000 (Data Privacy & Encryption)",
      "Digital Personal Data Protection (DPDP) Act 2023",
      "Factories Act 1948 (Muster Roll & Shift Interval Records)",
      "State Shops and Establishments Acts (Digital Attendance Records)",
    ],
    keyCapabilities: [
      {
        title: "Mobile ESS App with Geofencing & Face Recognition",
        description: "Enables field staff and hybrid employees to punch in via smartphone app with GPS geofence validation and AI facial anti-spoofing verification."
      },
      {
        title: "Biometric Hardware API Synchronization",
        description: "Real-time automated polling from ZKTeco, Matrix, Biomax, and eSSL biometric fingerprint/face scanners directly into cloud attendance records."
      },
      {
        title: "Automated Multi-Shift Rostering & Rotations",
        description: "Dynamic shift allocation supporting continuous 24/7 manufacturing plants, rotational weekly offs, night-shift allowances, and grace-period rules."
      },
      {
        title: "Paperless Leave & Claim Approval Workflows",
        description: "Configurable multi-level approval hierarchies for casual, sick, earned leaves, outdoor duties, and expense reimbursements with receipt OCR scanning."
      }
    ],
    deliverables: [
      "Dedicated Enterprise Cloud HRMS Instance (Web & Mobile Apps for iOS/Android)",
      "Custom Shift Policy, Leave Rules & Overtime Logic Setup",
      "Biometric Device Integration & Data Polling Service",
      "Employee & Manager Self-Service Onboarding Packs",
      "Real-Time Management Dashboard & Attendance Heatmaps"
    ],
    slaMetrics: [
      { label: "Platform Uptime SLA", value: "99.95% Availability", detail: "High-availability cloud infrastructure with geo-redundant backups" },
      { label: "Biometric Sync Latency", value: "< 60 Seconds", detail: "Punches reflect in cloud ledger within one minute of scanning" },
      { label: "Implementation Timeline", value: "7 to 14 Days", detail: "From employee master upload to full company-wide go-live" }
    ],
    faqs: [
      {
        question: "Can employees access their pay slips and tax declarations from their phones?",
        answer: "Yes. Our Employee Self-Service (ESS) mobile app gives each associate secure access to download past pay slips, view EPF UAN and ESIC numbers, log leave requests, and submit investment proofs."
      },
      {
        question: "How does the system prevent buddy punching on mobile devices?",
        answer: "Mobile attendance is locked to defined office or site geofences (latitude/longitude radius) and utilizes live camera selfie capture with liveness detection to eliminate proxy punches."
      },
      {
        question: "Can our existing biometric machines work with your HRMS?",
        answer: "Yes. Our cloud middleware integrates with 98% of commercial biometric devices (eSSL, Matrix, ZKTeco, Biomax) via local push/pull utility or direct database synchronization."
      }
    ]
  },

  "executive-and-expat-payroll": {
    slug: "executive-and-expat-payroll",
    pillarSlug: "hrms-and-payroll",
    pillarName: "HRMS & Payroll",
    title: "Executive & Expatriate Confidential Payroll Services",
    shortTitle: "Executive & Expat Payroll",
    badge: "100% Confidential CXO",
    tagline: "Discreet Leadership Compensation, Shadow Payroll, Tax Equalization & Cross-Border DTAA Advisory",
    metaTitle: "Executive & Expatriate Payroll Services India | Service Dial",
    metaDescription: "Discreet confidential payroll for CXOs, board members, and foreign expatriates. Shadow payroll, tax equalization, ESOP valuation, and cross-border DTAA compliance.",
    blufSummary: "Service Dial delivers specialized, ultra-confidential payroll management for board executives, corporate CXOs, and foreign expatriates working in India. We operate outside standard internal HR visibility, providing encrypted salary disbursements, multi-currency shadow payroll, tax equalization under Double Taxation Avoidance Agreements (DTAA), and perquisite valuations.",
    regulatoryFramework: [
      "Income Tax Act 1961 Section 9(1)(ii) (Income Deemed to Accrue in India)",
      "Double Taxation Avoidance Agreements (DTAA) Articles 15 & 23",
      "Foreign Exchange Management Act (FEMA) 1999 (Current Account Remittances)",
      "Companies Act 2013 Section 197 (Managerial Remuneration Ceiling Audits)",
    ],
    keyCapabilities: [
      {
        title: "Restricted-Access Confidential CXO Payroll",
        description: "Operating off-grid from general corporate HRMS platforms with dedicated senior CMA oversight, protecting sensitive promoter and C-level compensation from leaks."
      },
      {
        title: "Expatriate Shadow Payroll & Tax Equalization",
        description: "Computing hypothetical home-country taxes vs. Indian tax liabilities to ensure expatriate executives maintain agreed net take-home remuneration."
      },
      {
        title: "ESOP, Car Lease & Perquisite Valuation",
        description: "Accurate computation of perquisite taxes under Rule 3 for rent-free accommodation, motor vehicles, employee stock options (ESOPs), and retention bonuses."
      },
      {
        title: "DTAA Relief & Tax Residency Certifications",
        description: "Securing Tax Residency Certificates (TRC), Form 10F documentation, and computing Foreign Tax Credit (FTC) under Form 67 to prevent double taxation."
      }
    ],
    deliverables: [
      "Encrypted Executive Salary Disbursal Dossier (Single-Signoff VIP Run)",
      "Tax Equalization & Shadow Payroll Computation Sheets",
      "Form 16 Part A & Part B with Perquisite Annexures",
      "DTAA Exemption & Foreign Tax Credit Working Papers",
      "Managerial Remuneration Compliance Certificate under Section 197"
    ],
    slaMetrics: [
      { label: "Confidentiality Standard", value: "Zero Internal Exposure", detail: "Data restricted exclusively to designated CEO/CFO signatories" },
      { label: "Tax Optimization Precision", value: "100% DTAA Adherence", detail: "Zero inadvertent dual-taxation leakage on overseas perquisites" },
      { label: "VIP Query Response", value: "< 2 Hours Priority SLA", detail: "Direct access to designated Senior Partner for executive queries" }
    ],
    faqs: [
      {
        question: "Why should executive payroll be separated from standard corporate payroll?",
        answer: "If CXO salaries are processed on general company HRMS portals, internal accountants and HR executives gain visibility over leadership compensation and bonus figures, causing internal friction and compromising sensitive corporate negotiations."
      },
      {
        question: "How do you handle foreign currency remittances for expatriates?",
        answer: "We compute gross Indian rupee tax liabilities while generating FEMA-compliant Form 15CA/CB certifications for net salary repatriation to foreign bank accounts through authorized dealer banks."
      },
      {
        question: "Do you audit managerial remuneration limits under Section 197?",
        answer: "Yes. For public limited companies, we track executive compensation against the 11% overall net profit ceiling and individual 5%/10% thresholds, preparing board resolutions where shareholder approval is required."
      }
    ]
  },

  "industrial-time-and-overtime-management": {
    slug: "industrial-time-and-overtime-management",
    pillarSlug: "hrms-and-payroll",
    pillarName: "HRMS & Payroll",
    title: "Industrial Shift & Factories Act Overtime Management",
    shortTitle: "Industrial Overtime Audit",
    badge: "Factories Act Sec 59",
    tagline: "Double-Rate Overtime Computation, Shift Balancing, Ghost Hour Elimination & Inspectorate Audit Packs",
    metaTitle: "Industrial Shift & Factories Act Overtime Management | Service Dial",
    metaDescription: "Factories Act Section 59 double-rate overtime auditing, industrial shift balancing, ghost hour fraud elimination, and inspection-ready muster roll maintenance.",
    blufSummary: "Service Dial manages complex industrial time-tracking, shift rosters, and overtime calculations for manufacturing plants, assembly units, and heavy engineering facilities. We audit punch records against machine running logs to eliminate phantom overtime fraud, enforce Factories Act Section 59 double-rate wage calculations, and maintain flawless statutory muster rolls.",
    regulatoryFramework: [
      "The Factories Act 1948 Section 51 (Weekly Hours Cap of 48 Hours)",
      "The Factories Act 1948 Section 54 (Daily Hours Cap of 9 Hours)",
      "The Factories Act 1948 Section 59 (Extra Wages for Overtime at Twice Ordinary Rate)",
      "The Factories Act 1948 Section 64 (Exemptions & Cumulative Overtime Quarterly Caps)",
    ],
    keyCapabilities: [
      {
        title: "Section 59 Double-Rate Overtime Engine",
        description: "Automated calculation of overtime wages at exactly twice the ordinary rate (Basic + DA + Cash Value of Food Concessions) strictly excluding statutory bonus or HRA."
      },
      {
        title: "Phantom Overtime Fraud Detection",
        description: "Cross-referencing worker biometric out-punches against shopfloor machine power-down logs, supervisor job cards, and security gate turnstiles to stop overtime leakage."
      },
      {
        title: "Quarterly Statutory Overtime Cap Monitoring",
        description: "Tracking aggregate overtime hours to ensure workers do not exceed the statutory 50-hour to 75-hour quarterly ceiling prescribed under state Factory Rules."
      },
      {
        title: "Statutory Form 10 Overtime Muster Roll",
        description: "Daily maintenance of certified Overtime Muster Roll in Form 10, complete with worker signatures/thumb impressions ready for Labor Inspector verification."
      }
    ],
    deliverables: [
      "Factories Act Form 10 Certified Overtime Register",
      "Machine-Tied Overtime Variance & Fraud Elimination Report",
      "Department-Wise Overtime Spend & Line Balancing Analysis",
      "Quarterly Overtime Ceiling Compliance Audit Dossier",
      "Factory Inspectorate Defense Documentation Pack"
    ],
    slaMetrics: [
      { label: "Overtime Fraud Reduction", value: "15% to 30% Cost Saving", detail: "Eliminating unapproved punches and phantom floor stay hours" },
      { label: "Form 10 Compliance", value: "100% Inspection-Ready", detail: "Updated daily with exact statutory wage splits" },
      { label: "Shift Roster Adherence", value: "≥ 99.2% Fill Rate", detail: "Proactive reliever scheduling prevents mandatory machine downtime" }
    ],
    faqs: [
      {
        question: "What components of salary are included in 'Ordinary Rate of Wages' for Section 59 overtime?",
        answer: "Under Section 59(2), ordinary rate of wages means basic wages plus dearness allowance (DA) and the cash equivalent of food grain concessions. It strictly excludes bonus, house rent allowance (HRA), conveyance, and overtime wages."
      },
      {
        question: "How do you prevent factory floor supervisors from falsely approving excessive overtime?",
        answer: "Our system requires dual-layer authorization: biometric punch timestamps must match machine shift operation cards and undergo automated anomaly checks before payroll credit is finalized."
      },
      {
        question: "What is the legal limit on overtime hours in a manufacturing plant?",
        answer: "Under Section 64 of the Factories Act, total working hours including overtime cannot exceed 60 hours in any week, and aggregate overtime hours cannot exceed 50 hours in any quarter (extended to 115–125 hours in certain amended states)."
      }
    ]
  },

  // ─── 3. CORPORATE & INDUSTRIAL STAFFING (5) ─────────────────────────────────
  "contract-and-flexi-staffing": {
    slug: "contract-and-flexi-staffing",
    pillarSlug: "staffing-and-recruitment",
    pillarName: "Staffing & Recruitment",
    title: "Third-Party Payroll (TPP) & Flexi-Staffing Solutions",
    shortTitle: "Flexi-Staffing & TPP",
    badge: "100% CLRA Shield",
    tagline: "Agile Temp-to-Perm Staffing, Associate Onboarding & Complete Principal Employer Indemnification",
    metaTitle: "Third-Party Payroll (TPP) & Flexi-Staffing Services | Service Dial",
    metaDescription: "Outsource associate staffing on Service Dial third-party payroll (TPP). 100% CLRA Form V compliance, Day-1 insurance, and zero co-employment exposure for corporates.",
    blufSummary: "Service Dial acts as the Employer of Record (EOR) for corporate and commercial associates under Third-Party Payroll (TPP). We onboard, administer, and manage flexi-staff across sales, logistics, administrative, and customer support functions, assuming 100% statutory employer responsibilities and completely shielding client organizations from co-employment liabilities.",
    regulatoryFramework: [
      "Contract Labour (Regulation & Abolition) Act 1970 (Form V & Form VI Licensing)",
      "Employees' Provident Funds and Miscellaneous Provisions Act 1952",
      "Employees' State Insurance Act 1948",
      "Payment of Gratuity Act 1972 & Payment of Bonus Act 1965",
    ],
    keyCapabilities: [
      {
        title: "Rapid Digital Associate Onboarding",
        description: "Paperless KYC onboarding within 24 hours: Aadhaar, PAN, bank passbook, police verification, and employment contract issuance via digital signature."
      },
      {
        title: "100% Statutory Employer Liability Absorption",
        description: "Service Dial assumes all legal responsibilities as direct employer, managing PF, ESIC, LWF, Gratuity funding, and statutory bonus disbursements."
      },
      {
        title: "Day-1 Medical & Accidental Insurance Cover",
        description: "Every flexi-staff associate is covered under ESIC or Group Medical & Personal Accident Insurance from their very first hour of site deployment."
      },
      {
        title: "Zero Co-Employment Legal Indemnification",
        description: "Ironclad contractual indemnification protecting principal employers against associate labor claims, unionization disputes, or regularization demands."
      }
    ],
    deliverables: [
      "Principal Employer Form-V Statutory Licensing Portfolio",
      "Monthly Paid Statutory Challans (EPF, ESIC, PT) with Associate-Wise Splits",
      "Digital Appointment Letters & Non-Disclosure Agreements",
      "Associate Health Cards & Insurance Policy Certificates",
      "Clearance & Relieving Letters on Project Demobilization"
    ],
    slaMetrics: [
      { label: "Onboarding SLA", value: "24–48 Hours", detail: "From candidate selection to verified deployment on client site" },
      { label: "Salary Disbursal Guarantee", value: "1st of Every Month", detail: "Direct bank credit regardless of client billing processing cycles" },
      { label: "Compliance Pass Rate", value: "100% Clean Audits", detail: "Full statutory dossier furnished with every monthly commercial invoice" }
    ],
    faqs: [
      {
        question: "What is the difference between direct hiring and Third-Party Payroll (TPP)?",
        answer: "Under direct hiring, your company is the direct employer of record and bears long-term severance, retirement, PF/ESIC liabilities, and headcount caps. Under TPP, Service Dial is the legal employer; we handle all statutory administration, letting you scale headcount flexibly without expanding your internal payroll books."
      },
      {
        question: "How do you protect principal employers from labor court regularization claims?",
        answer: "We structure our service contracts under Section 12 of the CLRA Act, rotate associates across project mandates, issue independent Service Dial appointment letters, and ensure all employment directives flow through designated Service Dial account supervisors."
      },
      {
        question: "Can we convert a high-performing flexi-associate to our permanent payroll?",
        answer: "Yes. We offer transparent temp-to-perm conversion protocols after an initial tenure period without punitive exit charges."
      }
    ]
  },

  "plant-engineering-workforce-staffing": {
    slug: "plant-engineering-workforce-staffing",
    pillarSlug: "staffing-and-recruitment",
    pillarName: "Staffing & Recruitment",
    title: "Plant Engineering & Manufacturing Workforce Staffing",
    shortTitle: "Industrial Plant Staffing",
    badge: "Technical Trades",
    tagline: "Certified CNC/Lathe Operators, Welders, Quality Inspectors & Warehouse Production Crews",
    metaTitle: "Industrial Plant & Manufacturing Workforce Staffing | Service Dial",
    metaDescription: "Deploy certified machine operators, CNC machinists, welders, and production line labor for manufacturing and engineering plants. Form 35 medical fitness and Factories Act compliant.",
    blufSummary: "Service Dial supplies specialized technical trades and machine-handling workforces to automotive, engineering, woodworking, steel, and FMCG manufacturing plants across India. From certified CNC and lathe operators to edge banding technicians, TIG/MIG welders, and quality inspectors, every associate is vetted for trade certifications, machine proficiency, and safety discipline.",
    regulatoryFramework: [
      "The Factories Act 1948 & State Factory Rules",
      "Apprentices Act 1961 (Trade Apprentice Management)",
      "National Council for Vocational Training (NCVT / ITI Standards)",
      "Form 35 Medical Fitness Standards (Factory Certifying Surgeon)",
    ],
    keyCapabilities: [
      {
        title: "Technical Trade Skill Assessments",
        description: "Hands-on machine testing assessing operator capability on CNC milling, lathe turning, multi-boring, beam saw cutting, and edge banding before plant deployment."
      },
      {
        title: "Mandatory Pre-Deployment Medical Fitness (Form 35)",
        description: "Comprehensive physical examinations, audiometry, vision testing, and occupational disease screening certified by registered factory certifying surgeons."
      },
      {
        title: "Industrial Safety & 5S Induction Training",
        description: "Rigorous 16-hour safety briefings on personal protective equipment (PPE), emergency stop operations, chemical handling, and shopfloor housekeeping."
      },
      {
        title: "Embedded Floor Supervision & Roster Management",
        description: "Supplying dedicated on-site shift supervisors to monitor line balance, piece-rate tallies, and manage immediate worker replacements for absent operators."
      }
    ],
    deliverables: [
      "Pre-Screened Technical Trade Candidate Resumes & Assessment Records",
      "Form 35 Certified Medical Fitness Reports",
      "Daily Production Station Shift Roster Dossiers",
      "PPE Issuance & Tooling Sign-Off Registers",
      "Monthly Machine Operator Productivity & Scrap Variance Summaries"
    ],
    slaMetrics: [
      { label: "Operator Mobilization Window", value: "3 to 5 Days", detail: "Certified machine operators deployed to plant floor" },
      { label: "Station Fill Rate", value: "≥ 99.0% Punctuality", detail: "On-site bench reserves prevent assembly line stoppages" },
      { label: "Safety Compliance", value: "Zero Uncertified Deployments", detail: "100% adherence to factory safety gear and health certifications" }
    ],
    faqs: [
      {
        question: "What machinery brands and types can your machine operators operate?",
        answer: "Our technicians have verified experience across major European and Asian machine makes: Homag, Biesse, SCM, Haas, Fanuc, Mazak, and LMW machinery for panel processing, metal cutting, and precision machining."
      },
      {
        question: "Do you supply ITI-certified tradesmen?",
        answer: "Yes. We source certified ITI/Diploma holders across Machinist, Fitter, Turner, Welder, Electrician, and Tool & Die Maker disciplines."
      },
      {
        question: "How do you handle worker turnover in high-stress manufacturing environments?",
        answer: "We maintain pre-screened talent pools in nearby industrial clusters (e.g., Dankuni, Kalyani, Manesar, Bhiwandi), enabling same-day relief deployments when an operator resigns or goes on extended leave."
      }
    ]
  },

  "corporate-technical-recruitment": {
    slug: "corporate-technical-recruitment",
    pillarSlug: "staffing-and-recruitment",
    pillarName: "Staffing & Recruitment",
    title: "Corporate Technical & Financial Talent Recruitment",
    shortTitle: "Technical & Finance Hiring",
    badge: "Domain Expert Screening",
    tagline: "Qualified CMAs, CAs, SAP Consultants, IT Developers & Senior Corporate Operations Talent",
    metaTitle: "Corporate Technical & Financial Recruitment Agency | Service Dial",
    metaDescription: "Specialized recruitment for certified CMAs, CAs, SAP functional leads, software engineers, and corporate finance professionals. 24-72 hour vetted talent shortlists.",
    blufSummary: "Service Dial's corporate recruitment desk specializes in sourcing hard-to-find financial, accounting, technical, and supply chain professionals. Unlike generic headhunters, our candidates are screened by practicing CMAs and senior software architects, ensuring only technically validated, culturally aligned candidates reach hiring managers.",
    regulatoryFramework: [
      "The Employment Exchanges (Compulsory Notification of Vacancies) Act 1959",
      "Equal Remuneration Act 1976 / Code on Wages 2019",
      "Strict Bilateral Non-Disclosure Agreements (NDAs)",
    ],
    keyCapabilities: [
      {
        title: "Domain-Specific Technical Vetting",
        description: "Practical assessment of accounting knowledge (Ind AS, GSTR-2B, CARO 2020) and technical stacks (SAP FICO, S/4HANA, Python, Cloud Architecture) conducted by senior practitioners."
      },
      {
        title: "24 to 72-Hour Rapid Shortlist Delivery",
        description: "Leveraging our proprietary database of passive corporate talent across Kolkata, Mumbai, Delhi NCR, Bengaluru, Hyderabad, and Pune."
      },
      {
        title: "Comprehensive Background & Credentials Verification",
        description: "Checking educational degrees, professional institute memberships (ICAI, ICMAI), previous employer references, and salary slip authentications."
      },
      {
        title: "Offer-to-Joining Engagement Management",
        description: "Proactive counter-offer mitigation and weekly candidate touchpoints to eliminate ghosting and achieve an industry-leading 88%+ joining ratio."
      }
    ],
    deliverables: [
      "Curated Shortlist of 3 to 5 Pre-Interviewed Candidates per Mandate",
      "Detailed Technical Competency & Case Study Scorecard",
      "Candidate Educational & Employment Verification Dossier",
      "Salary Benchmarking & Market Compensation Report",
      "Formal Placement Letter & 90-Day Free Replacement Guarantee"
    ],
    slaMetrics: [
      { label: "First Profile Delivery", value: "24–72 Hours", detail: "First batch of fully vetted, interview-ready profiles submitted" },
      { label: "Submission-to-Interview", value: "3 out of 4 Selected", detail: "Deep technical screening eliminates hiring manager interview fatigue" },
      { label: "Offer Acceptance Ratio", value: "≥ 88% Joining Rate", detail: "Continuous candidate counselling prevents last-minute reneges" }
    ],
    faqs: [
      {
        question: "How do your recruitment consultants evaluate chartered or cost accountants?",
        answer: "Our interview panels include qualified practicing CMAs and CAs who test candidates on actual closing scenarios, CARO 2020 reporting nuances, Section 43B(h) payment rules, and ERP navigation before submitting their profiles to you."
      },
      {
        question: "What is your replacement policy if a placed candidate leaves?",
        answer: "We provide an ironclad 90-day replacement guarantee. If a placed candidate resigns or is terminated for cause within 90 calendar days of joining, we source a qualified replacement at zero additional fee."
      },
      {
        question: "Can you help recruit confidential replacements for existing personnel?",
        answer: "Yes. We execute fully confidential mandates under bilateral NDAs, mapping passive industry professionals without public job advertisements or market leaks."
      }
    ]
  },

  "executive-search-cxo-hiring": {
    slug: "executive-search-cxo-hiring",
    pillarSlug: "staffing-and-recruitment",
    pillarName: "Staffing & Recruitment",
    title: "Executive Search & CXO Leadership Headhunting",
    shortTitle: "Executive Search / CXO",
    badge: "Retained Search Only",
    tagline: "Discreet Headhunting for CFOs, Plant Heads, Chief Human Resource Officers & Vice Presidents",
    metaTitle: "Executive Search & CXO Headhunting Services India | Service Dial",
    metaDescription: "Retained executive search and discreet CXO leadership hiring for Chief Financial Officers, Plant Directors, CHROs, and Managing Directors across India.",
    blufSummary: "Service Dial's Retained Executive Search practice partners with enterprise boards, private equity funds, and founder-led mid-market corporates to recruit transformational C-level leadership. We headhunt Chief Financial Officers (CFOs), Plant Heads, Chief Human Resource Officers (CHROs), and Country Managers through discreet, peer-to-peer executive consultation.",
    regulatoryFramework: [
      "Companies Act 2013 Section 203 (KMP Appointment Protocols)",
      "Strict Non-Disclosure & Bilateral Exclusivity Agreements",
      "Corporate Governance Best Practices for Board Committees",
    ],
    keyCapabilities: [
      {
        title: "Discreet Market Mapping & Competitor Intelligence",
        description: "Constructing confidential industry talent maps identifying high-performing leaders across direct competitors and target sector leaders."
      },
      {
        title: "Peer-to-Peer Executive Consultation",
        description: "Engaging passive C-level candidates through discreet, off-the-record strategic discussions rather than generic recruitment pitches."
      },
      {
        title: "Leadership Competency & Cultural Alignment",
        description: "Evaluating strategic vision, crisis management track records, capital allocation acumen, and compatibility with promoter/board values."
      },
      {
        title: "Complex Compensation & Equity Structuring",
        description: "Advising on executive remuneration packages: base pay, phantom equity, ESOP vesting schedules, performance bonuses, and golden handshakes."
      }
    ],
    deliverables: [
      "Confidential Sector Talent Landscape & Market Mapping Report",
      "Detailed Leadership Dossiers on Top 3 Shortlisted Executives",
      "360-Degree Executive Reference & Integrity Checks (Superiors, Peers, Subordinates)",
      "Executive Compensation Structuring & Offer Term Sheet Pack",
      "Onboarding Integration & 180-Day Executive Transition Governance"
    ],
    slaMetrics: [
      { label: "Search Mandate Completion", value: "45 to 60 Days", detail: "From mandate sign-off to signed executive offer acceptance" },
      { label: "Candidate Confidentiality", value: "100% NDA Protection", detail: "Client identity disclosed only to shortlisted, NDAd candidates" },
      { label: "Leadership Retention Rate", value: "95% at 24 Months", detail: "Exceptional longevity due to deep cultural compatibility screening" }
    ],
    faqs: [
      {
        question: "How does Service Dial maintain confidentiality during a sensitive CXO search?",
        answer: "We never advertise executive roles on job boards or social media. We conduct discreet private outreach, never revealing client identity until a candidate has signed a binding bilateral NDA and cleared an initial credential screen."
      },
      {
        question: "What leadership roles does your Executive Search practice specialize in?",
        answer: "We focus on mission-critical corporate pillars: Chief Financial Officers (CFO), Vice Presidents of Finance, Chief Human Resource Officers (CHRO), Plant Directors / Operations Heads, Chief Technology Officers (CTO), and Chief Supply Chain Officers (CSCO)."
      },
      {
        question: "How do you conduct executive reference checks?",
        answer: "We perform comprehensive 360-degree background audits, speaking directly with former board members, direct superiors, audit committee chairs, and former subordinates to verify leadership style, integrity, and regulatory governance history."
      }
    ]
  },

  "recruitment-process-outsourcing-rpo": {
    slug: "recruitment-process-outsourcing-rpo",
    pillarSlug: "staffing-and-recruitment",
    pillarName: "Staffing & Recruitment",
    title: "Enterprise Recruitment Process Outsourcing (RPO)",
    shortTitle: "Enterprise RPO",
    badge: "Scalable Talent Engine",
    tagline: "Dedicated On-Site & Offshore Talent Acquisition Engines for Hyper-Growth Enterprises",
    metaTitle: "Recruitment Process Outsourcing (RPO) Services India | Service Dial",
    metaDescription: "Outsource end-to-end corporate talent acquisition with Service Dial RPO. Dedicated recruiter pods, applicant tracking systems, employer branding, and reduced cost-per-hire.",
    blufSummary: "Service Dial's Enterprise RPO deploys dedicated recruiter pods, advanced Applicant Tracking Systems (ATS), and recruitment marketing engines directly into client organizations. We manage the entire talent lifecycle—from requisition intake and talent sourcing to interview scheduling, background checks, and offer rollout—reducing cost-per-hire by up to 35% while slashing time-to-fill.",
    regulatoryFramework: [
      "Equal Opportunity Employment Standards",
      "Digital Personal Data Protection (DPDP) Act 2023 (Candidate Data Security)",
      "State Labor Codes & Employment Exchange Notification Compliance",
    ],
    keyCapabilities: [
      {
        title: "Dedicated Embedded Recruiter Pods",
        description: "Deploying experienced, branded recruiters who operate as an extension of your internal HR team, utilizing your email domains and corporate branding."
      },
      {
        title: "Cloud ATS & AI Sourcing Integration",
        description: "Provisioning modern Applicant Tracking Systems to build searchable proprietary candidate talent pools and automate interview workflows."
      },
      {
        title: "Candidate Experience & Employer Branding",
        description: "Crafting structured candidate journeys that communicate employer value propositions (EVP), boosting Glassdoor ratings and offer acceptance rates."
      },
      {
        title: "Vendor Management & Multi-Agency Consolidation",
        description: "Rationalizing and governing third-party staffing vendors under unified SLA rate cards, eliminating redundant placement fees."
      }
    ],
    deliverables: [
      "Custom Enterprise ATS Configuration with Real-Time Pipeline Dashboards",
      "Weekly Talent Pipeline Reports (Requisitions, Applications, Shortlists, Offers)",
      "Time-to-Fill & Cost-per-Hire Monthly Analytics Scorecard",
      "Proprietary Candidate Talent Vault Re-Usable for Future Requisitions",
      "Quarterly Talent Acquisition Business Reviews (QBR)"
    ],
    slaMetrics: [
      { label: "Cost-per-Hire Reduction", value: "25% to 35% Savings", detail: "Replacing expensive ad-hoc contingency agency commissions" },
      { label: "Time-to-Fill Compression", value: "Under 21 Days Average", detail: "Dedicated recruiter focus accelerates shortlisting and interviewing" },
      { label: "Hiring Manager Satisfaction", value: "≥ 92% Positive Rating", detail: "Measured through quarterly post-placement feedback surveys" }
    ],
    faqs: [
      {
        question: "How does RPO differ from working with multiple staffing agencies?",
        answer: "Staffing agencies charge 8.33% to 15% per hire and compete to push resumes. An RPO is a long-term strategic partnership where dedicated recruiters optimize your entire hiring engine, employer brand, and talent pipeline at a fraction of the cost per hire."
      },
      {
        question: "Can an RPO model scale up or down based on our hiring volumes?",
        answer: "Yes. Our agile pods allow you to expand from 2 recruiters to 10 during plant expansion phases, and scale back during steady-state operations without severance overheads."
      },
      {
        question: "Do we retain ownership of the candidate database created during the RPO?",
        answer: "100% yes. All candidate profiles, resumes, interview notes, and pipeline data remain your company's exclusive proprietary intellectual property."
      }
    ]
  },

  // ─── 4. STATUTORY COMPLIANCE & REGULATORY RISK (6) ──────────────────────────
  "contractor-labour-clra-compliance": {
    slug: "contractor-labour-clra-compliance",
    pillarSlug: "compliance-services",
    pillarName: "Compliance Services",
    title: "Contractor Labour (CLRA) Principal Employer Governance",
    shortTitle: "CLRA Governance",
    badge: "Principal Employer Shield",
    tagline: "Form-V Registration, Form-VI Licensing, Contractor Challan Audits & Zero Co-Employment Exposure",
    metaTitle: "Contractor Labour (CLRA) Compliance Services | Service Dial",
    metaDescription: "Shield your company under Contract Labour (Regulation & Abolition) Act 1970. Form V registration, third-party vendor challan verification, and zero co-employment protection.",
    blufSummary: "Service Dial delivers comprehensive principal employer governance under the Contract Labour (Regulation & Abolition) Act 1970. We obtain and amend Principal Employer Registration Certificates (Form I), issue Form V certificates, audit third-party contractor PF/ESIC payments before bill clearance, and maintain centralized statutory registers to guarantee zero co-employment liability.",
    regulatoryFramework: [
      "Contract Labour (Regulation & Abolition) Act 1970 & Central/State Rules",
      "CLRA Form I (Registration of Establishment as Principal Employer)",
      "CLRA Form V (Form of Certificate by Principal Employer to Contractor)",
      "CLRA Form VI (Grant of License to Contractor by Licensing Officer)",
      "Ease of Compliance Rules 2017 (Unified Registers Form A, B, C, D, E)",
    ],
    keyCapabilities: [
      {
        title: "Principal Employer Registration (Form I) Management",
        description: "Securing initial registration certificates from the Registering Officer and executing amendments for expanded contractor worker headcount limits."
      },
      {
        title: "Contractor License Governance (Form V & Form VI)",
        description: "Issuing formal Form V certificates, monitoring contractor Form VI licenses, and preventing unauthorized deployments that create direct employer liabilities."
      },
      {
        title: "Pre-Billing Statutory Challan Verification",
        description: "Auditing contractor monthly invoices against bank wage credit scrolls, electronic PF ECR files, and ESIC challans before principal employer disbursement."
      },
      {
        title: "Unified Register Maintenance (Forms A to E)",
        description: "Maintaining digital, inspection-ready employee registers, wage registers, deduction schedules, and overtime books prescribed under the Ease of Compliance Rules."
      }
    ],
    deliverables: [
      "Principal Employer Registration Certificate & Endorsement Dossier",
      "Monthly Contractor Compliance Certification & Clearance Slip",
      "Unified Form A (Employee Register) & Form B (Wage Register)",
      "Contractor License Validity & Headcount Tracking Ledger",
      "Statutory Audit Defense Pack for Labour Department Inspections"
    ],
    slaMetrics: [
      { label: "Contractor Audit Turnaround", value: "< 48 Hours", detail: "Monthly vendor invoice verification completed prior to finance payment runs" },
      { label: "Co-Employment Exposure", value: "Zero Legal Claims", detail: "Strict documentation ensures contractor staff cannot claim permanent absorption" },
      { label: "Inspection Readiness", value: "100% Audit-Proof", detail: "All registers updated and digitally signed by authorized site marshalls" }
    ],
    faqs: [
      {
        question: "Why is a Form V certificate critical under the CLRA Act?",
        answer: "A contractor cannot obtain a legal labor license (Form VI) without a valid Form V issued by the principal employer. Deploying more than 20/50 contract workers without a Form VI license makes the contract illegal and exposes the principal employer to direct criminal prosecution."
      },
      {
        question: "Can our company be held liable if a contractor defaults on PF or ESIC payments?",
        answer: "Yes. Under Section 21(4) of the CLRA Act, if a contractor fails to pay wages or statutory dues, the principal employer is legally obligated to pay them directly and recover from the contractor's bills."
      },
      {
        question: "How do you audit contractor wage payments?",
        answer: "We mandate that contractors submit direct bank payment credit scrolls. We reconcile bank statements line-by-line against wage registers to ensure workers received exact minimum wages without illegal kickbacks."
      }
    ]
  },

  "factories-act-licensing-compliance": {
    slug: "factories-act-licensing-compliance",
    pillarSlug: "compliance-services",
    pillarName: "Compliance Services",
    title: "Factories Act Licensing, Factory Plan Approvals & Safety Audits",
    shortTitle: "Factories Act Licensing",
    badge: "Industrial Regulatory",
    tagline: "Form-2 Factory Licensing, Layout Approvals, Safety Committee Governance & Form 21 Annual Filings",
    metaTitle: "Factories Act Licensing & Compliance Services India | Service Dial",
    metaDescription: "End-to-end Factories Act compliance: factory plan approvals, Form 2 license renewals, horsepower/manpower limit revisions, safety committee audits, and annual returns.",
    blufSummary: "Service Dial manages complete industrial regulatory compliance under The Factories Act 1948 and state factory directorates. We manage plant architectural plan approvals, Form-2 factory license grants and annual renewals, horse power/headcount expansion endorsements, safety committee governance, hazardous process disclosures, and statutory annual return filings (Form 21/22).",
    regulatoryFramework: [
      "The Factories Act 1948 & State Factories Rules",
      "Form 1 (Application for Permission to Construct/Extend Factory)",
      "Form 2 (Application for License & Notice of Occupation)",
      "Form 21 (Annual Return Filings for Manufacturing Units)",
      "National Building Code & Fire Safety Regulations",
    ],
    keyCapabilities: [
      {
        title: "Factory Blueprint & Layout Plan Approvals (Form 1)",
        description: "Liaising with the Directorate of Factories to secure statutory layout approvals, verifying ventilation, emergency exit widths, and fire hydrant placements."
      },
      {
        title: "Factory License Grant, Renewal & Endorsement (Form 2)",
        description: "Managing timely annual or multi-year factory license renewals, horsepower upgrades, and workforce limit endorsements to avoid stop-work notices."
      },
      {
        title: "Health & Safety Welfare Audits (Chapters III, IV, V)",
        description: "Ensuring compliance with clean drinking water provisions, industrial canteen standards, first aid rooms, crèche facilities, and air quality standards."
      },
      {
        title: "Statutory Safety Committee & Accident Reporting",
        description: "Forming mandatory joint safety committees, conducting quarterly safety minutes, and managing statutory Form 18 accident reports within 48 hours."
      }
    ],
    deliverables: [
      "Approved Factory Building Plans Signed by Chief Inspector of Factories",
      "Valid Factory License (Form 2) with Current Horsepower/Manpower Endorsements",
      "Safety Committee Meeting Minutes & Hazard Identification Registers",
      "Statutory Annual Return (Form 21) Submission Receipts",
      "Factory Inspection Rectification & Compliance Closure Letters"
    ],
    slaMetrics: [
      { label: "License Renewal SLA", value: "30 Days Before Expiry", detail: "Preventing penalty fees and plant operational stoppages" },
      { label: "Plan Approval Liaison", value: "45–60 Day Turnaround", detail: "Complete coordination through state factory inspectorates" },
      { label: "Accident Reporting SLA", value: "< 24 Hours", detail: "Statutory Form 18 filed within mandatory legal windows" }
    ],
    faqs: [
      {
        question: "When is an establishment legally required to register under The Factories Act?",
        answer: "Any manufacturing premises employing 10 or more workers with the aid of power, or 20 or more workers without the aid of power, must register and obtain a factory license before commencing commercial operations."
      },
      {
        question: "What happens if installed machinery horsepower exceeds the licensed limit?",
        answer: "Operating with unendorsed horsepower is a punishable offense under Section 92, carrying fines and risk of factory seal. We file Form 2 amendments to regularize connected electrical load before inspections occur."
      },
      {
        question: "Do you help design and conduct mandatory factory safety committee meetings?",
        answer: "Yes. For factories employing 250+ workers (or 50+ in hazardous units), we establish the joint management-worker safety committee, structure meeting agendas, and record minutes required under Section 41."
      }
    ]
  },

  "gst-compliance-and-audit": {
    slug: "gst-compliance-and-audit",
    pillarSlug: "compliance-services",
    pillarName: "Compliance Services",
    title: "GST Compliance, GSTR-2B Triangulation & Annual 9/9C Audit",
    shortTitle: "GST Compliance & 9/9C",
    badge: "Tax Optimization",
    tagline: "Eliminate Input Tax Credit (ITC) Blockage, Automated 2B Triangulation, GSTR-1/3B & Annual 9/9C Working Papers",
    metaTitle: "Corporate GST Compliance & Annual 9/9C Audit Services | Service Dial",
    metaDescription: "Stop ITC leakage with automated GSTR-2B triangulation. Monthly GSTR-1 & 3B filings, Section 16(4) compliance, and certified Annual Return GSTR-9 and GSTR-9C audits.",
    blufSummary: "Service Dial delivers enterprise-grade Goods and Services Tax (GST) compliance, litigation management, and audit reconciliation. We execute automated GSTR-2B vs. Purchase Register reconciliations to stop ITC leakage, file error-free monthly GSTR-1 and GSTR-3B returns, manage e-invoicing and e-way bill lifecycles, and prepare certified Annual Returns in Form GSTR-9 and Reconciliation Statements in GSTR-9C.",
    regulatoryFramework: [
      "Central Goods and Services Tax (CGST) Act 2017",
      "Section 16(2)(aa) & Rule 36(4) (GSTR-2B Mandatory Matching for ITC Claims)",
      "Section 16(4) (Statutory Time Limits for Claiming Annual ITC)",
      "Section 35(5) & Section 44 (Annual Return Form GSTR-9 & Reconciliation GSTR-9C)",
    ],
    keyCapabilities: [
      {
        title: "Automated GSTR-2B vs. Purchase Register Triangulation",
        description: "Algorithmic matching comparing vendor invoice numbers, dates, GSTINs, and tax amounts to identify non-compliant suppliers before payment release."
      },
      {
        title: "Monthly GSTR-1 & GSTR-3B Preparation and Filing",
        description: "Reconciling sales ledgers against e-invoicing portals, populating outward supplies, calculating net tax payable, and filing error-free monthly returns."
      },
      {
        title: "Section 16(4) Year-End ITC Reclamation Campaigns",
        description: "Aggressive pre-November vendor outreach to push delayed suppliers to file missing GSTR-1 invoices before annual ITC deadlines lapse."
      },
      {
        title: "Annual Return GSTR-9 & Reconciliation Statement GSTR-9C",
        description: "Preparing comprehensive table-by-table working papers reconciling audited financial statement turnover against GST portal filings, resolving spillover adjustments."
      }
    ],
    deliverables: [
      "Monthly GSTR-1 & GSTR-3B Filing Acknowledgments & ARN Receipts",
      "Automated Monthly ITC Triangulation Mismatch Reports (Vendor Escalation Sheets)",
      "GSTR-9 Annual Return Dossier & Form GSTR-9C Working Papers",
      "E-Invoicing and E-Way Bill Reconciliation Registers",
      "GST Department Scrutiny Notice (ASMT-10 / DRC-01) Formal Rebuttals"
    ],
    slaMetrics: [
      { label: "Filing Precision", value: "100% Before 11th & 20th", detail: "GSTR-1 filed by 11th; GSTR-3B filed by 20th to prevent late fees" },
      { label: "ITC Leakage Reduction", value: "Zero Unclaimed Eligible ITC", detail: "Rigorous follow-up recovers 99.5%+ of all legitimate tax credits" },
      { label: "Notice Response SLA", value: "< 7 Days", detail: "Comprehensive factual replies drafted for all departmental notices" }
    ],
    faqs: [
      {
        question: "Why is GSTR-2B triangulation so critical for corporate cash flow?",
        answer: "If your suppliers fail to file their GSTR-1, the tax credit does not appear in your GSTR-2B. Claiming it in GSTR-3B triggers automatic tax demands under DRC-01B with 18% interest; omitting it forces your company to pay cash taxes twice. Our automated matching prevents this leakage."
      },
      {
        question: "Who is required to file the Annual Reconciliation Statement in Form GSTR-9C?",
        answer: "Every registered taxpayer whose aggregate turnover exceeds ₹5 Crores in a financial year must submit a self-certified Reconciliation Statement in Form GSTR-9C along with their Annual Return in Form GSTR-9."
      },
      {
        question: "How do you handle multi-state GST registrations for national corporates?",
        answer: "We operate a centralized tax desk managing all state-specific GSTINs under a unified calendar, ensuring consistent HSN coding, input service distributor (ISD) transfers, and standardized reporting."
      }
    ]
  },

  "tds-tcs-compliance-and-filing": {
    slug: "tds-tcs-compliance-and-filing",
    pillarSlug: "compliance-services",
    pillarName: "Compliance Services",
    title: "Corporate TDS/TCS Compliance, 24Q/26Q e-Filing & 194C Audits",
    shortTitle: "TDS / TCS Compliance",
    badge: "Direct Tax Governance",
    tagline: "Quarterly 24Q/26Q e-Filing, Section 194C/194J Audits, TRACES Default Resolution & Instant Form 16/16A",
    metaTitle: "Corporate TDS/TCS Compliance & 24Q/26Q Filing Services | Service Dial",
    metaDescription: "Corporate TDS & TCS compliance: quarterly 24Q and 26Q e-filing, Section 194C contractor withholding audits, TRACES default clearance, and digitally signed Form 16/16A.",
    blufSummary: "Service Dial manages end-to-end Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) operations for corporate entities. We execute precise withholding under Section 192 (salaries), 194C (contractors), 194J (professional fees), 194I (rent), and 194Q (goods purchases), prepare quarterly 24Q, 26Q, and 27Q e-returns, resolve TRACES demand notices, and issue digitally signed Form 16/16A certificates.",
    regulatoryFramework: [
      "Income Tax Act 1961 Chapter XVII-B (Deduction of Tax at Source)",
      "Section 194C (Payments to Contractors & Sub-Contractors)",
      "Section 194Q & Section 206C(1H) (TDS/TCS on Purchase and Sale of Goods)",
      "Section 206AB & Section 206CCA (Higher Withholding Rates for Non-Filers)",
    ],
    keyCapabilities: [
      {
        title: "Section 194C & 194J Commercial Withholding Audits",
        description: "Categorizing vendor invoices accurately to apply correct withholding rates (1% individual contractor, 2% corporate contractor, 2% technical fees, 10% professional services)."
      },
      {
        title: "Automated Non-Filer Checks (Section 206AB)",
        description: "Checking supplier PANs against the Income Tax Compliance Portal to identify non-filers subject to double withholding rates (minimum 5%) before payment."
      },
      {
        title: "Quarterly e-TDS Return Filing (Forms 24Q, 26Q, 27Q)",
        description: "Generating validated File Validation Utility (FVU) text files, depositing monthly challans via OLTAS, and securing official quarterly filing acknowledgments."
      },
      {
        title: "TRACES Demand Resolution & Justification Reports",
        description: "Clearing short-deduction, short-payment, and late-interest default notices issued on the TRACES portal, filing correction statements to zero-out demands."
      }
    ],
    deliverables: [
      "Quarterly e-TDS Filing Receipts (Provisional Receipts from TIN-FC / Protean)",
      "Digitally Signed Form 16 (Part A & B for Employees) and Form 16A (Vendors)",
      "TRACES Justification Report & Demand Clearance Certificates",
      "Section 194Q vs. GSTR-2B Purchase Triangulation Sheets",
      "Lower Deduction Certificate (Section 197) Validity Tracking Schedule"
    ],
    slaMetrics: [
      { label: "Filing SLA", value: "100% Before 31st", detail: "Quarterly returns submitted well before quarterly due dates" },
      { label: "Form 16/16A Generation", value: "< 48 Hours", detail: "Generated immediately upon TRACES file processing" },
      { label: "TRACES Default Resolution", value: "Zero Outstanding Demands", detail: "Proactive correction filings eliminate interest and penalty demands" }
    ],
    faqs: [
      {
        question: "How do you distinguish between Section 194C (Contractor) and Section 194J (Professional)?",
        answer: "Applying the wrong section creates substantial tax exposure: 194C carries a 1% or 2% rate, while 194J requires 10% for professional services (and 2% for technical services). We review the underlying contract scope to ensure legally defensible tax deduction."
      },
      {
        question: "What is Section 194Q and how does it interact with Section 206C(1H)?",
        answer: "Section 194Q requires buyers with turnover > ₹10 Crores to deduct 0.1% TDS on goods purchases from a vendor exceeding ₹50 Lakhs in a fiscal year. Section 194Q takes statutory precedence over vendor TCS under Section 206C(1H)."
      },
      {
        question: "How do you clear old historical TDS default notices on TRACES?",
        answer: "We download the official TRACES Justification Report, identify PAN mismatch errors, missing challan mappings, or late filing fees, and submit Online Correction Statements (C1, C2, C3, C9) to extinguish the outstanding liability."
      }
    ]
  },

  "posh-compliance-and-ic-training": {
    slug: "posh-compliance-and-ic-training",
    pillarSlug: "compliance-services",
    pillarName: "Compliance Services",
    title: "POSH Act Compliance, Internal Committee (IC) & Training",
    shortTitle: "POSH Compliance",
    badge: "Workplace Governance",
    tagline: "Internal Committee (IC) Constitution, External Member Empanelling, Sensitivity Workshops & Annual Reporting",
    metaTitle: "Corporate POSH Compliance & External Member Services | Service Dial",
    metaDescription: "100% legal compliance under POSH Act 2013: Internal Committee (IC) constitution, certified external members, employee sensitization training, and District Officer annual filings.",
    blufSummary: "Service Dial delivers complete workplace compliance under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013. We author customized organizational POSH policies, empanel certified independent External Members on your Internal Committee (IC), conduct employee and manager sensitization workshops, and file the statutory Annual Compliance Report with the District Officer.",
    regulatoryFramework: [
      "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013",
      "The POSH Rules 2013 & Supreme Court Guidelines (Aureliano Fernandes v. State of Goa 2023)",
      "Section 4 (Mandatory Constitution of Internal Committee)",
      "Section 21 & Section 22 (Submission of Annual Report to District Officer / Employer Reporting in Director's Report)",
    ],
    keyCapabilities: [
      {
        title: "Internal Committee (IC) Formal Constitution",
        description: "Drafting the formal IC appointment order, ensuring statutory composition: Presiding Officer (senior woman employee), minimum 50% women members, and a qualified independent external member."
      },
      {
        title: "Certified Independent External Member Provision",
        description: "Empanelling certified legal practitioners and NGO advocates with deep dispute resolution experience to maintain unbiased, legally defensible inquiry proceedings."
      },
      {
        title: "Employee & Manager Sensitization Workshops",
        description: "Conducting interactive online and on-premise training sessions covering acceptable workplace conduct, consent, micro-aggressions, and formal complaint filing procedures."
      },
      {
        title: "Inquiry Governance & Quasi-Judicial Reporting",
        description: "Guiding the IC through formal inquiry procedures, maintaining principles of natural justice, examining cross-examinations, and preparing confidential inquiry findings reports."
      }
    ],
    deliverables: [
      "Customized Corporate POSH Policy Document (Tailored to Multi-Site Workplaces)",
      "Formal Internal Committee (IC) Constitution Order & Gazette Notice",
      "Employee & Manager POSH Sensitization Training Certifications",
      "Annual POSH Report Prepared for Mandatory Submission to the District Officer",
      "Directors' Report Compliance Statement under Section 134 of the Companies Act"
    ],
    slaMetrics: [
      { label: "Policy & IC Setup Window", value: "< 7 Days", detail: "Complete policy roll-out and IC constitution order execution" },
      { label: "Complaint Inquiry SLA", value: "Concluded < 90 Days", detail: "Strict adherence to statutory inquiry timelines under Section 11" },
      { label: "Annual Report Filing", value: "100% Before 31st January", detail: "Submitted to designated District Local Complaints Committee" }
    ],
    faqs: [
      {
        question: "Which companies are legally required to constitute an Internal Committee (IC)?",
        answer: "Under Section 4 of the POSH Act, every employer having 10 or more employees at any workplace, branch, factory, or regional office must constitute an Internal Committee by written order."
      },
      {
        question: "Why is an External Member mandatory on the Internal Committee?",
        answer: "The law mandates that at least one member must be an independent expert from an NGO or an association committed to women's causes, or a person familiar with sexual harassment issues, to ensure management cannot exert undue influence over inquiries."
      },
      {
        question: "What are the legal consequences of non-compliance with the POSH Act?",
        answer: "Non-compliance carries an immediate fine of up to ₹50,000 for the first violation. Repeat violations can result in double fines and permanent cancellation of corporate business licenses or commercial registrations."
      }
    ]
  },

  "pan-india-labour-law-advisory": {
    slug: "pan-india-labour-law-advisory",
    pillarSlug: "compliance-services",
    pillarName: "Compliance Services",
    title: "Pan-India Multi-State Labour Law & Industrial Relations Advisory",
    shortTitle: "Labour Law Advisory",
    badge: "Multi-State Advisory",
    tagline: "Minimum Wage Gazette Tracking Across 28 States, Shops & Establishments, Domestic Inquiries & Union Mitigation",
    metaTitle: "Pan-India Labour Law Advisory & Industrial Relations | Service Dial",
    metaDescription: "Comprehensive multi-state labor law advisory across 28 states & 8 UTs. Bi-annual minimum wage gazette tracking, employment contracts, domestic inquiries, and labor audit defense.",
    blufSummary: "Service Dial provides continuous, multi-state labor law advisory and industrial relations representation across 28 Indian states and 8 union territories. We track biannual minimum wage gazette updates, draft watertight executive employment agreements and non-compete clauses, advise on workforce restructuring, conduct formal domestic disciplinary inquiries, and represent employers during labor enforcement proceedings.",
    regulatoryFramework: [
      "The Minimum Wages Act 1948 & State Specific Gazette Notifications (Zone A / B / C)",
      "Industrial Disputes Act 1947 (Retrenchment, Layoff & Closure Procedures)",
      "Industrial Employment (Standing Orders) Act 1946",
      "State Shops and Commercial Establishments Acts across 28 States",
    ],
    keyCapabilities: [
      {
        title: "Continuous Multi-State Minimum Wage Gazette Monitoring",
        description: "Real-time tracking of variable dearness allowance (VDA) and basic minimum wage gazettes across every state, issuing immediate client advisories to adjust pay grids."
      },
      {
        title: "Employment Contracts & Non-Compete Covenants",
        description: "Drafting robust employment agreements, confidentiality covenants, non-solicitation clauses, and intellectual property assignment protections tailored to Indian courts."
      },
      {
        title: "Domestic Disciplinary Inquiries & Charge Sheets",
        description: "Drafting formal show-cause notices, charge sheets, appointing impartial inquiry officers, and conducting natural-justice disciplinary proceedings for workplace misconduct."
      },
      {
        title: "Labor Department Representation & Inspection Defense",
        description: "Representing client management before conciliation officers, labor commissioners, and inspectors, defending show-cause notices with documented legal precedents."
      }
    ],
    deliverables: [
      "Monthly Pan-India Minimum Wage & Regulatory Change Bulletins",
      "Complete Suite of Customized Employment Contract Templates",
      "Domestic Disciplinary Inquiry Proceedings & Formal Findings Dossiers",
      "State Shops & Commercial Establishments Registration and Renewal Certificates",
      "Comprehensive Labor Law Statutory Audit & Risk Heatmap Report"
    ],
    slaMetrics: [
      { label: "Gazette Notification SLA", value: "< 24 Hours of Gazette", detail: "Immediate circular issued upon state government minimum wage publication" },
      { label: "Legal Opinion Turnaround", value: "< 48 Hours", detail: "Clear, actionable written advisory on complex labor disputes" },
      { label: "Multi-State Coverage", value: "All 28 States & 8 UTs", detail: "Unified compliance governance across all Indian operational corridors" }
    ],
    faqs: [
      {
        question: "How frequently do state minimum wage rates change in India?",
        answer: "Most states (including West Bengal, Maharashtra, Delhi NCR, Karnataka, Tamil Nadu) revise their Variable Dearness Allowance (VDA) twice a year (typically in April and October). Failing to update wage grids immediately exposes the employer to claims for 10x penalty damages under Section 20 of the Minimum Wages Act."
      },
      {
        question: "Are non-compete clauses legally enforceable in India?",
        answer: "Under Section 27 of the Indian Contract Act 1872, covenants in restraint of trade post-employment are generally void. However, non-solicitation of clients, non-poaching of employees, and trade secret confidentiality covenants are legally enforceable when carefully drafted. We ensure your agreements hold up in court."
      },
      {
        question: "How should an employer manage a domestic inquiry for serious employee misconduct?",
        answer: "The inquiry must strictly adhere to principles of natural justice: issuing a specific charge sheet, granting adequate time to reply, appointing an unbiased external inquiry officer, providing witness cross-examination rights, and recording formal findings before any termination action is taken."
      }
    ]
  }
};

export function getSubServiceBySlug(slug: string): SubService | undefined {
  return SUBSERVICES_CATALOG[slug];
}

export function getSubServicesByPillar(pillarSlug: string): SubService[] {
  return Object.values(SUBSERVICES_CATALOG).filter((s) => s.pillarSlug === pillarSlug);
}
