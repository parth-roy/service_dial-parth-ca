export interface ServicePillar {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitleSuffix: string;
  metaDescriptionTemplate: string;
  blufSummaryTemplate: string;
  capabilities: { title: string; description: string }[];
  slaMetrics: { label: string; value: string; detail: string }[];
  localFaqTemplates: {
    questionTemplate: string;
    answerTemplate: string;
  }[];
}

export const SERVICES_CATALOG: Record<string, ServicePillar> = {
  "staffing-and-recruitment": {
    slug: "staffing-and-recruitment",
    name: "Staffing & Recruitment",
    shortName: "Staffing",
    tagline: "Premium · IT · Leadership / CXO · General & Blue Collar",
    metaTitleSuffix: "Staffing & Recruitment Agency",
    metaDescriptionTemplate:
      "Specialized staffing and recruitment agency in {city}, {state}. Source verified tech, CXO, and volume workforce talent with a 24–72 hour average turnaround.",
    blufSummaryTemplate:
      "Service Dial delivers specialized recruitment and executive search in {city}, sourcing qualified candidates within a 24 to 72-hour SLA and maintaining a documented 7:10 submission-to-selection ratio under strict NDA confidentiality.",
    capabilities: [
      {
        title: "IT & Tech Sourcing",
        description:
          "Specialized recruitment for AI/ML, Cloud Architecture, SAP, Big Data (Hadoop, Kafka), and full-stack software engineering across regional tech parks.",
      },
      {
        title: "Executive & CXO Search",
        description:
          "Discreet leadership hiring for VP, CTO, CFO, and Country Head mandates with comprehensive candidate background verification and market mapping.",
      },
      {
        title: "Volume & Contract Staffing",
        description:
          "Agile deployment of contract workforce for manufacturing belts, warehousing, and commercial support operations with zero statutory disruption.",
      },
      {
        title: "Diversity & Inclusion Hiring",
        description:
          "Structured talent campaigns to achieve diversity benchmarks without compromising technical excellence or timeline mandates.",
      },
    ],
    slaMetrics: [
      { label: "Average Sourcing Window", value: "24–72 Hours", detail: "First qualified candidate profiles delivered for review" },
      { label: "Submission-to-Selection Ratio", value: "7:10", detail: "Rigorous technical screening minimizes interview overhead" },
      { label: "Average Onboarding Timeline", value: "15–25 Days", detail: "Proactive offer-to-joining engagement and retention tracking" },
      { label: "Confidentiality Standard", value: "100% NDA", detail: "No public job leaks; discreet targeted candidate approach" },
    ],
    localFaqTemplates: [
      {
        questionTemplate: "What is Service Dial's turnaround time for tech hiring in {city}?",
        answerTemplate:
          "For technical mandates in {city}, Service Dial delivers initial verified candidate shortlists within 24 to 72 hours. Our local industry database and passive candidate network across major tech hubs allow rapid shortlisting for niche skills including SAP, Cloud, and Data Science.",
      },
      {
        questionTemplate: "How does Service Dial ensure candidate confidentiality for leadership roles in {city}?",
        answerTemplate:
          "Every executive recruitment mandate in {city} is protected by a bilateral non-disclosure agreement (NDA). We do not post open executive job ads publicly. Candidates are mapped quietly from target Tier 1 and Tier 2 organizations and engaged through discreet private consultations.",
      },
      {
        questionTemplate: "Does Service Dial handle statutory workforce compliance for contract staff in {city}?",
        answerTemplate:
          "Yes. All contract and volume staff placed in {city} are fully integrated into our statutory compliance framework, adhering to {localCompliance}.",
      },
    ],
  },

  "hrms-and-payroll": {
    slug: "hrms-and-payroll",
    name: "HRMS & Payroll Management",
    shortName: "Payroll & HRMS",
    tagline: "Accurate · Fully Compliant · Automated Process Management",
    metaTitleSuffix: "Payroll Outsourcing & HRMS Services",
    metaDescriptionTemplate:
      "End-to-end payroll outsourcing and HRMS solutions in {city}, {state}. Statutory PF, ESI, and tax filings with 100% error-free SLA compliance.",
    blufSummaryTemplate:
      "Service Dial provides enterprise payroll outsourcing and HRMS software integration in {city}, guaranteeing 100% statutory adherence across PF, ESI, Professional Tax, and state labor regulations with zero calculation errors.",
    capabilities: [
      {
        title: "End-to-End Payroll Processing",
        description:
          "Accurate monthly payroll computation, tax withholding, reimbursements, bonus processing, and Full & Final (FnF) settlements.",
      },
      {
        title: "HRMS Software Integration",
        description:
          "Seamless synchronization of time-tracking, attendance, leave management, and employee self-service portals with core payroll engines.",
      },
      {
        title: "Vendor Compliance Auditing",
        description:
          "Independent monthly verification of third-party contractor challans, PF deposits, and minimum wage compliance to protect principal employers.",
      },
      {
        title: "Statutory Filing & Reporting",
        description:
          "Timely deposit and electronic filing of EPF, ESIC, Professional Tax, Labor Welfare Fund, and Form 16 / 24Q TDS returns.",
      },
    ],
    slaMetrics: [
      { label: "Payroll Accuracy SLA", value: "99.98%", detail: "Rigorous multi-layer validation prevents disbursement errors" },
      { label: "Statutory Filing Adherence", value: "100%", detail: "Zero late filing penalties across PF, ESI, and state PT" },
      { label: "Query Resolution SLA", value: "< 24 Hours", detail: "Dedicated helpdesk for employee payroll inquiries" },
      { label: "Employee Scalability", value: "10 to 10,000+", detail: "Flexible architecture supporting rapid enterprise expansion" },
    ],
    localFaqTemplates: [
      {
        questionTemplate: "How does Service Dial manage regional payroll regulations in {city}?",
        answerTemplate:
          "In {city}, payroll computations are calibrated to reflect regional legislation, including {localCompliance}. We update tax slabs and minimum wage schedules immediately upon government notification.",
      },
      {
        questionTemplate: "Can our existing HRMS connect with Service Dial's payroll systems in {city}?",
        answerTemplate:
          "Yes. Our payroll architecture easily integrates with leading HRMS solutions, Oracle HCM, SAP, and custom biometric attendance software deployed at your {city} offices.",
      },
      {
        questionTemplate: "What reports do we receive during each payroll cycle in {city}?",
        answerTemplate:
          "Clients receive comprehensive payroll registers, bank disbursement advice, department-wise cost center reports, PF/ESI challan proofs, and variance analytics for CFO and HR leadership review.",
      },
    ],
  },

  "finance-and-audit": {
    slug: "finance-and-audit",
    name: "Finance & Audit",
    shortName: "Finance & Audit",
    tagline: "Accounts Payable · Accounts Receivable · R2R · Internal Audit",
    metaTitleSuffix: "Finance & Accounting Outsourcing",
    metaDescriptionTemplate:
      "Enterprise finance, accounting, and internal audit outsourcing in {city}, {state}. AP, AR, Record to Report, and statutory audit readiness.",
    blufSummaryTemplate:
      "Service Dial provides outsourced finance, accounting, and internal audit services in {city}, streamlining AP/AR cycles, automating bank reconciliations, and ensuring clean books under Indian Accounting Standards.",
    capabilities: [
      {
        title: "Accounts Payable (AP) Automation",
        description:
          "Three-way invoice matching, vendor invoice validation, dispute management, payment run scheduling, and aged payable reporting.",
      },
      {
        title: "Accounts Receivable (AR) Management",
        description:
          "Customer billing, credit control, collection follow-ups, dispute resolution, and DSO (Days Sales Outstanding) reduction.",
      },
      {
        title: "Record to Report (R2R)",
        description:
          "General ledger accounting, inter-company reconciliations, fixed asset registers, and month-end financial statement preparation.",
      },
      {
        title: "Internal Audit & Risk Controls",
        description:
          "Comprehensive internal control reviews, process gap assessments, and audit preparation to ensure inspection readiness.",
      },
    ],
    slaMetrics: [
      { label: "Invoice Processing Turnaround", value: "24–48 Hours", detail: "Rapid automated three-way matching and verification" },
      { label: "Month-End Close Acceleration", value: "Day 3–5", detail: "Structured ledger reconciliation enables faster reporting" },
      { label: "Reconciliation Coverage", value: "100%", detail: "Continuous bank, vendor, and customer balance reconciliations" },
      { label: "Information Security", value: "Enterprise Grade", detail: "Strict access control and NDA protection for financial ledgers" },
    ],
    localFaqTemplates: [
      {
        questionTemplate: "How does outsourced finance support our business operations in {city}?",
        answerTemplate:
          "By partnering with Service Dial in {city}, enterprises reduce back-office overhead by up to 40% while gaining senior financial controllership, automated AP/AR tracking, and flawless monthly closings.",
      },
      {
        questionTemplate: "Which accounting ERPs does Service Dial support for {city} enterprises?",
        answerTemplate:
          "Our accounting specialists operate across SAP, Oracle NetSuite, Tally Prime, Zoho Books, QuickBooks, and Microsoft Dynamics, adapting directly to your current workflow.",
      },
      {
        questionTemplate: "How do you ensure data confidentiality and financial security?",
        answerTemplate:
          "All financial engagements are governed by strict NDAs, encrypted cloud channels, dual-authorization approval workflows, and role-based ledger access.",
      },
    ],
  },

  "compliance-services": {
    slug: "compliance-services",
    name: "Compliance Services",
    shortName: "Compliance",
    tagline: "Labour Law · Statutory Registrations · Regulatory Risk Mitigation",
    metaTitleSuffix: "Labour Law & Statutory Compliance Consultant",
    metaDescriptionTemplate:
      "Expert labour law and statutory compliance advisory in {city}, {state}. Comprehensive inspection readiness, register maintenance, and code audits.",
    blufSummaryTemplate:
      "Service Dial protects organizations in {city} from statutory exposure through proactive labor law audits, digital statutory register maintenance, and seamless liaison with regulatory authorities.",
    capabilities: [
      {
        title: "Labour Law & Code Advisory",
        description:
          "Strategic transition planning across the four Labour Codes: Wages, Industrial Relations, Social Security, and Occupational Safety.",
      },
      {
        title: "Statutory Register Maintenance",
        description:
          "Digital maintenance of mandatory employment registers, muster rolls, overtime records, and wage slips as per state-specific guidelines.",
      },
      {
        title: "Factory & Establishment Audits",
        description:
          "Comprehensive on-site and remote audits of commercial offices and industrial facilities to identify and remediate regulatory vulnerabilities.",
      },
      {
        title: "Vendor Empanelment Audits",
        description:
          "Rigorous vetting of staffing vendors, security contractors, and facility managers to insulate principal employers from joint liability.",
      },
    ],
    slaMetrics: [
      { label: "Statutory Audit Readiness", value: "365 Days", detail: "Inspection-ready digital documentation maintained in real time" },
      { label: "Regulatory Penalty Exposure", value: "0%", detail: "Proactive compliance updates eliminate penalty risk" },
      { label: "Notice Resolution SLA", value: "< 48 Hours", detail: "Expert representation and prompt legal response formulation" },
      { label: "Pan-India Coverage", value: "36 States / UTs", detail: "Single-window governance across central and state jurisdictions" },
    ],
    localFaqTemplates: [
      {
        questionTemplate: "What specific statutory compliances are mandatory for offices in {city}?",
        answerTemplate:
          "Enterprises in {city} must maintain compliance under {localCompliance}, in addition to central statutes such as EPF, ESIC, Gratuity Act, Maternity Benefit Act, and POSH.",
      },
      {
        questionTemplate: "How does Service Dial shield principal employers in {city} from vendor default?",
        answerTemplate:
          "We perform structured monthly vendor audits, checking individual challan ECRs, minimum wage disbursements, and statutory receipts before approving vendor invoice clearances.",
      },
      {
        questionTemplate: "What happens if a labor department inspection notice is received in {city}?",
        answerTemplate:
          "Our compliance consultants draft immediate responses, gather certified documentation, and represent your company before local regulatory officials to resolve queries swiftly.",
      },
    ],
  },
};
