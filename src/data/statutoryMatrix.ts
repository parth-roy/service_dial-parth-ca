/**
 * ==============================================================================
 * SERVICE DIAL TALENT MANAGEMENT PVT LTD (CIN: U74999WB2016PTC216954)
 * PAN-INDIA MULTI-STATE STATUTORY COMPLIANCE & LABOUR MATRIX ENGINE
 * ==============================================================================
 *
 * Single Source of Truth for:
 * 1. Multi-State Professional Tax (PT) Slabs, Acts & Schedules (28 States & UTs)
 * 2. Multi-State Labour Welfare Fund (LWF) Statutory Ratios & Due Dates
 * 3. State Minimum Wage Gazette Rates (Unskilled to Highly Skilled)
 * 4. Regional Regulatory Inspectorates (DLC, DISH, EPFO, ESIC, Municipal bodies)
 *
 * Calibrated for 2026/2027 statutory amendments:
 * - Odisha PT Act 2000 repealed effective April 1, 2026 (Flat ₹0 / Nil PT)
 * - Karnataka Act 14 of 2023 (<₹25k Nil, ≥₹25k flat ₹200/mo, annual cap ₹2,400)
 * - Maharashtra 2023 Amendment (Women earning ≤₹25,000/mo 100% exempt)
 * - Gujarat Notification GHN-35 (<₹12k Nil, ≥₹12k flat ₹200/mo)
 * - Central Labour Ministry EPFO Wage Ceiling Restructuring to ₹25,000
 */

export interface ProfessionalTaxSlab {
  minWageMonthly: number;
  maxWageMonthly: number | null; // null represents Infinity / Above
  monthlyTax: number;
  februaryTax?: number; // States like MH and WB collect adjusted tax in Feb to meet annual cap
  notes?: string;
}

export interface StateProfessionalTax {
  stateSlug: string;
  stateName: string;
  governingAct: string;
  hasPt: boolean;
  isRepealed?: boolean;
  statutoryStatus: "ACTIVE" | "REPEALED" | "NO_PT_STATE";
  portalName: string;
  portalUrl: string;
  monthlyReturnForm: string;
  annualReturnForm: string;
  monthlyPaymentDueDate: string;
  annualReturnDueDate: string;
  slabs: ProfessionalTaxSlab[];
  specialProvisions: string[];
  penaltyClauses: {
    lateFilingPenalty: string;
    interestRatePerMonth: string;
    prosecutionSection: string;
  };
}

export interface LabourWelfareFundRule {
  stateSlug: string;
  stateName: string;
  governingAct: string;
  hasLwf: boolean;
  employeeShareMonthly: number | string;
  employerShareMonthly: number | string;
  remittanceFrequency: "Monthly" | "Bi-Annual" | "Annual" | "Not Applicable";
  statutoryCutoffDates: string[];
  statutoryReturnForm: string;
  portalName: string;
  portalUrl: string;
  specialRules: string;
}

export interface MinimumWageTiers {
  stateSlug: string;
  stateName: string;
  gazetteOrderNo: string;
  effectivePeriod: string;
  zone: string;
  unskilledMonthly: number;
  unskilledDaily: number;
  semiSkilledMonthly: number;
  semiSkilledDaily: number;
  skilledMonthly: number;
  skilledDaily: number;
  highlySkilledMonthly: number;
  highlySkilledDaily: number;
  overtimeMultiplier: string; // e.g. "200% of standard hourly wage (2x)"
  wageCeilingEpfoApplicable: boolean;
}

export interface InspectorateAddress {
  officeName: string;
  jurisdiction?: string;
  department?: string;
  physicalAddress: string;
  contactDesk?: string;
  onlinePortalUrl: string;
}

export interface LocalInspectorateDirectory {
  citySlug: string;
  cityName: string;
  stateSlug: string;
  stateName: string;
  industrialCorridors: string[];
  dlcInspectorate: InspectorateAddress; // Deputy Labour Commissioner
  dishInspectorate: InspectorateAddress; // Directorate of Industrial Safety & Health (Factories Act)
  epfoRegionalOffice: InspectorateAddress;
  esicSubRegionalOffice: InspectorateAddress;
  municipalLicensingBody: InspectorateAddress;
}

// ==============================================================================
// 1. PAN-INDIA MULTI-STATE PROFESSIONAL TAX (PT) REPOSITORY
// ==============================================================================

export const PAN_INDIA_PT_RULES: Record<string, StateProfessionalTax> = {
  karnataka: {
    stateSlug: "karnataka",
    stateName: "Karnataka",
    governingAct: "Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976 (Amended by Act 14 of 2023)",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "e-Prerana Commercial Taxes Portal",
    portalUrl: "https://ptax.kar.nic.in",
    monthlyReturnForm: "Form 5-A (Monthly E-Return & Challan)",
    annualReturnForm: "Form 5-B (Annual Reconciliation Statement)",
    monthlyPaymentDueDate: "20th of succeeding calendar month",
    annualReturnDueDate: "May 30th following the end of financial year",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 24999, monthlyTax: 0, notes: "Exempt under Karnataka Act 14 of 2023 amendment" },
      { minWageMonthly: 25000, maxWageMonthly: null, monthlyTax: 200, notes: "Flat ₹200/month. Annual statutory ceiling capped at ₹2,400" },
    ],
    specialProvisions: [
      "Prior threshold of ₹15,000 raised to ₹25,000 via Karnataka Gazette Act 14 of 2023.",
      "Salary earned by senior citizens (age ≥60) or persons with 40%+ permanent disability is exempt.",
      "Employers failing to obtain PT-Enrollment Certificate (EC) face statutory fine under Section 5(5).",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹250 default penalty + ₹5 per day of continued default under Section 7(3)",
      interestRatePerMonth: "1.25% per month (15% per annum) on outstanding dues under Section 11",
      prosecutionSection: "Section 18 summary prosecution before Metropolitan Magistrate Court",
    },
  },

  maharashtra: {
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    governingAct: "Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975 (Amended 2023)",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "Mahagst Department of Goods and Services Tax",
    portalUrl: "https://mahagst.gov.in",
    monthlyReturnForm: "Form III-B (E-Return with Mahagst Challan)",
    annualReturnForm: "Form III-E (Annual Employer Return)",
    monthlyPaymentDueDate: "Last day of succeeding month (e.g. April salary by May 31st)",
    annualReturnDueDate: "March 31st for annual return filers",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 7500, monthlyTax: 0, notes: "Nil tax for all employees" },
      { minWageMonthly: 7501, maxWageMonthly: 10000, monthlyTax: 175, notes: "Male employees only. Female employees earning ≤₹25k are 100% exempt" },
      { minWageMonthly: 10001, maxWageMonthly: null, monthlyTax: 200, februaryTax: 300, notes: "₹200/mo (March–January) and ₹300 in February to aggregate annual ₹2,500" },
    ],
    specialProvisions: [
      "CRITICAL GENDER EXEMPTION: Per 2023 Budget Amendment, female employees earning gross monthly wages up to ₹25,000 are 100% EXEMPT (₹0 PT). Female employees earning above ₹25,000 pay regular ₹200/mo (₹300 in Feb).",
      "Mentally challenged or physically handicapped individuals (40%+ disability per Section 27A) are fully exempt.",
      "Dual registration mandatory: Professional Tax Registration Certificate (PTRC) for employee deductions and Professional Tax Enrolment Certificate (PTEC) for company entity liability.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹1,000 statutory delay penalty under Section 6(3) for delayed Form III-B",
      interestRatePerMonth: "1.25% per month (15% p.a.) compounding interest under Section 9",
      prosecutionSection: "Section 20 imprisonment up to 6 months or fine up to ₹5,000 for wilful evasion",
    },
  },

  gujarat: {
    stateSlug: "gujarat",
    stateName: "Gujarat",
    governingAct: "Gujarat Panchayats, Municipalities, Municipal Corporations and State Tax on Professions, Trades, Callings and Employments Act, 1976 (Amended Notif. GHN-35, 2022)",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "Gujarat Commercial Tax & Municipal Corporation Portals (AMC/SMC/VMC)",
    portalUrl: "https://commercialtax.gujarat.gov.in",
    monthlyReturnForm: "Form 5-A (Monthly Return)",
    annualReturnForm: "Form 5-B (Annual Return)",
    monthlyPaymentDueDate: "15th of succeeding month",
    annualReturnDueDate: "September 30th",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 12000, monthlyTax: 0, notes: "Exempt under Notification GHN-35 (dated 11-04-2022)" },
      { minWageMonthly: 12001, maxWageMonthly: null, monthlyTax: 200, notes: "Flat ₹200/month. Annual statutory liability ₹2,400" },
    ],
    specialProvisions: [
      "Effective April 2022, all prior incremental slabs (₹6k-₹9k, ₹9k-₹12k) were unified into a single exemption up to ₹12,000.",
      "Administered decentralised through local municipal bodies: Ahmedabad (AMC), Surat (SMC), Vadodara (VMC), Rajkot (RMC), and district panchayats.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹5 per day of delay up to a maximum of ₹1,000 under Section 9",
      interestRatePerMonth: "1.5% per month (18% p.a.) on unpaid tax amounts under Section 10",
      prosecutionSection: "Section 16 non-compliance penalty compounding up to 3x evaded sum",
    },
  },

  "tamil-nadu": {
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    governingAct: "Tamil Nadu Municipal Laws (Amendment) Act, 1992 & Town Panchayats Act",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "Greater Chennai Corporation & Tamil Nadu Urban Local Bodies (TNULB)",
    portalUrl: "https://tnurbantree.tn.gov.in",
    monthlyReturnForm: "Half-Yearly Form A Employer Return",
    annualReturnForm: "Consolidated Annual Form B",
    monthlyPaymentDueDate: "Remitted half-yearly: Cycle 1 due by 30th September; Cycle 2 due by 31st March",
    annualReturnDueDate: "April 30th following fiscal year end",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 3500, monthlyTax: 0, notes: "Half-yearly wage ≤₹21,000: Nil tax" },
      { minWageMonthly: 3501, maxWageMonthly: 5000, monthlyTax: 22.5, notes: "Half-yearly wage ₹21,001–₹30,000: ₹135/half-year (effective ~₹22.50/mo)" },
      { minWageMonthly: 5001, maxWageMonthly: 7500, monthlyTax: 52.5, notes: "Half-yearly wage ₹30,001–₹45,000: ₹315/half-year (effective ~₹52.50/mo)" },
      { minWageMonthly: 7501, maxWageMonthly: 10000, monthlyTax: 115, notes: "Half-yearly wage ₹45,001–₹60,000: ₹690/half-year (effective ~₹115/mo)" },
      { minWageMonthly: 10001, maxWageMonthly: 12500, monthlyTax: 170.83, notes: "Half-yearly wage ₹60,001–₹75,000: ₹1,025/half-year (effective ~₹170.83/mo)" },
      { minWageMonthly: 12501, maxWageMonthly: null, monthlyTax: 208.33, notes: "Half-yearly wage >₹75,000: Flat ₹1,250/half-year (max annual ₹2,500)" },
    ],
    specialProvisions: [
      "Tamil Nadu assesses PT on a half-yearly gross remuneration basis (April–September and October–March).",
      "Most corporate payroll engines deduct average ₹208.33/mo monthly from gross pay and remit lump-sum in September and March.",
      "Applicable across Greater Chennai Corporation (GCC), Coimbatore, Madurai, Tiruchirappalli, Tiruppur, Salem, and Hosur Municipality.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "2% per month simple interest on delayed remittances",
      interestRatePerMonth: "1% to 2% discretionary warrant penalty under Municipal Corporation Act",
      prosecutionSection: "Distraint warrant against office premises under Tamil Nadu City Municipal Corporation Act",
    },
  },

  telangana: {
    stateSlug: "telangana",
    stateName: "Telangana",
    governingAct: "Telangana Tax on Professions, Trades, Callings and Employments Act, 1987",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "Telangana Commercial Taxes Department (TGCT)",
    portalUrl: "https://tgct.gov.in",
    monthlyReturnForm: "Form V (Monthly E-Return & Challan)",
    annualReturnForm: "Form V-A (Annual Reconciliation Return)",
    monthlyPaymentDueDate: "10th of succeeding calendar month",
    annualReturnDueDate: "May 31st following fiscal year end",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 15000, monthlyTax: 0, notes: "Exempt up to ₹15,000/month" },
      { minWageMonthly: 15001, maxWageMonthly: 20000, monthlyTax: 150, notes: "₹150/month" },
      { minWageMonthly: 20001, maxWageMonthly: null, monthlyTax: 200, notes: "Flat ₹200/month (Annual ceiling ₹2,400)" },
    ],
    specialProvisions: [
      "Strict 10th of succeeding month remittance window (one of the earliest PT payment deadlines in India).",
      "Applies across IT corridor of HITEC City/Gachibowli (GHMC area) as well as Medchal, Patancheru, and Warangal.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹10 per day of delay under Section 7",
      interestRatePerMonth: "1.5% per month (18% p.a.) on unpaid dues under Section 11",
      prosecutionSection: "Section 21 compound penalty and attachment of corporate bank accounts via treasury orders",
    },
  },

  "andhra-pradesh": {
    stateSlug: "andhra-pradesh",
    stateName: "Andhra Pradesh",
    governingAct: "Andhra Pradesh Tax on Professions, Trades, Callings and Employments Act, 1987",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "Andhra Pradesh Commercial Taxes Portal (APCT)",
    portalUrl: "https://apct.gov.in",
    monthlyReturnForm: "Form V (Monthly Return)",
    annualReturnForm: "Form V-A (Annual Return)",
    monthlyPaymentDueDate: "10th of succeeding month",
    annualReturnDueDate: "May 31st",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 15000, monthlyTax: 0, notes: "Nil tax up to ₹15,000" },
      { minWageMonthly: 15001, maxWageMonthly: 20000, monthlyTax: 150, notes: "₹150/month" },
      { minWageMonthly: 20001, maxWageMonthly: null, monthlyTax: 200, notes: "Flat ₹200/month (Annual ceiling ₹2,400)" },
    ],
    specialProvisions: [
      "Applies across industrial zones of Visakhapatnam, Sri City SEZ (Tirupati district), Kakinada, and Vijayawada.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹10 per day of default",
      interestRatePerMonth: "1.5% per month interest under Section 11",
      prosecutionSection: "Section 21 summary proceedings",
    },
  },

  "west-bengal": {
    stateSlug: "west-bengal",
    stateName: "West Bengal",
    governingAct: "West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979 (Act VI of 1979)",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "WB Commercial Taxes Directorate & GRIPS Portal",
    portalUrl: "https://wbprofessionaltax.gov.in",
    monthlyReturnForm: "Form III (Monthly E-Return & GRIPS Challan)",
    annualReturnForm: "Form III-A (Consolidated Annual Return)",
    monthlyPaymentDueDate: "21st of succeeding calendar month",
    annualReturnDueDate: "April 30th following fiscal year end",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 10000, monthlyTax: 0, notes: "Gross wages up to ₹10,000 are 100% exempt" },
      { minWageMonthly: 10001, maxWageMonthly: 15000, monthlyTax: 110, notes: "₹110/month" },
      { minWageMonthly: 15001, maxWageMonthly: 25000, monthlyTax: 130, notes: "₹130/month" },
      { minWageMonthly: 25001, maxWageMonthly: 40000, monthlyTax: 150, notes: "₹150/month" },
      { minWageMonthly: 40001, maxWageMonthly: null, monthlyTax: 200, februaryTax: 300, notes: "₹200/mo (March–January) and ₹300 in February to aggregate annual ₹2,500" },
    ],
    specialProvisions: [
      "Dual mandatory registration: Certificate of Registration (ERC) for employee payroll deductions and Certificate of Enrolment (EC) for employer entity trade standing.",
      "February adjustment rule: ₹300 deducted in February for employees earning above ₹40,000 to meet constitutional ceiling of ₹2,500 under Article 276(2).",
      "Form III-A annual e-filing with digital tax reconciliation is strictly required before issuing Form 16.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹200 per month delay penalty under Section 6(3)",
      interestRatePerMonth: "1% per month on delayed remittances under Section 8",
      prosecutionSection: "Section 17 fine up to ₹1,000 and simple imprisonment up to 6 months",
    },
  },

  odisha: {
    stateSlug: "odisha",
    stateName: "Odisha",
    governingAct: "Odisha State Tax on Professions, Trades, Callings and Employments Act, 2000 (REPEALED)",
    hasPt: false,
    isRepealed: true,
    statutoryStatus: "REPEALED",
    portalName: "Odisha Commercial Taxes (Legacy Archive)",
    portalUrl: "https://odishatax.gov.in",
    monthlyReturnForm: "NOT_APPLICABLE (Act Repealed)",
    annualReturnForm: "NOT_APPLICABLE (Act Repealed)",
    monthlyPaymentDueDate: "NOT_APPLICABLE — Zero PT Liability",
    annualReturnDueDate: "NOT_APPLICABLE — Zero PT Liability",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: null, monthlyTax: 0, notes: "REPEALED: Flat ₹0 PT deduction across all salary slabs in Odisha effective April 1, 2026" },
    ],
    specialProvisions: [
      "CRITICAL 2026 STATUTORY UPDATE: The Odisha State Tax on Professions, Trades, Callings and Employments Act, 2000 was abolished and repealed by the Government of Odisha effective April 1, 2026.",
      "All employers, industrial manufacturing plants (Kalinganagar, Jharsuguda, Paradeep), IT companies, and corporate offices in Odisha are legally relieved from deducting or depositing Professional Tax.",
      "Any payroll software still deducting PT from employees stationed in Odisha represents an erroneous deduction requiring immediate payroll correction and CTC adjustment.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "None (Statute Abolished)",
      interestRatePerMonth: "None",
      prosecutionSection: "None",
    },
  },

  "madhya-pradesh": {
    stateSlug: "madhya-pradesh",
    stateName: "Madhya Pradesh",
    governingAct: "Madhya Pradesh Vritti Kar Adhiniyam, 1995",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "MP Commercial Tax Directorate",
    portalUrl: "https://mptax.mp.gov.in",
    monthlyReturnForm: "Form VIII (Monthly Return)",
    annualReturnForm: "Form IX (Annual Return)",
    monthlyPaymentDueDate: "10th of succeeding month (or quarterly if tax < ₹2,500)",
    annualReturnDueDate: "April 30th",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: 18750, monthlyTax: 0, notes: "Annual salary up to ₹2,25,000 is 100% exempt" },
      { minWageMonthly: 18751, maxWageMonthly: 25000, monthlyTax: 125, notes: "Annual ₹2,25,001 to ₹3,00,000: ₹1,500/year (₹125/mo)" },
      { minWageMonthly: 25001, maxWageMonthly: 33333, monthlyTax: 166.67, notes: "Annual ₹3,00,001 to ₹4,00,000: ₹2,000/year (~₹166.67/mo)" },
      { minWageMonthly: 33334, maxWageMonthly: null, monthlyTax: 208, februaryTax: 212, notes: "Annual >₹4,00,000: ₹2,500/year (₹208/mo with ₹212 in Feb)" },
    ],
    specialProvisions: [
      "Applies across Indore (Pithampur industrial belt), Bhopal (Mandideep), Dewas, and Gwalior.",
      "Assessed on annual projected salary divided into monthly installments.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹50 per day up to ₹2,500",
      interestRatePerMonth: "1.5% per month on unpaid amounts",
      prosecutionSection: "Section 28 criminal complaint before Judicial Magistrate",
    },
  },

  // Non-PT States (Explicitly zero statutory PT liability)
  delhi: {
    stateSlug: "delhi",
    stateName: "Delhi (NCT)",
    governingAct: "NO PROFESSIONAL TAX LEGISLATION IN NCT OF DELHI",
    hasPt: false,
    statutoryStatus: "NO_PT_STATE",
    portalName: "Not Applicable",
    portalUrl: "https://labour.delhi.gov.in",
    monthlyReturnForm: "NOT_APPLICABLE",
    annualReturnForm: "NOT_APPLICABLE",
    monthlyPaymentDueDate: "NOT_APPLICABLE — Zero PT State",
    annualReturnDueDate: "NOT_APPLICABLE — Zero PT State",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: null, monthlyTax: 0, notes: "Delhi does not impose Professional Tax on employees or corporate employers" },
    ],
    specialProvisions: [
      "The Government of NCT of Delhi does not have a Professional Tax enactment.",
      "Salary disbursals in Okhla, Connaught Place, Bawana, or Nehru Place have ₹0 PT deduction.",
    ],
    penaltyClauses: { lateFilingPenalty: "None", interestRatePerMonth: "None", prosecutionSection: "None" },
  },

  haryana: {
    stateSlug: "haryana",
    stateName: "Haryana",
    governingAct: "NO PROFESSIONAL TAX LEGISLATION IN HARYANA",
    hasPt: false,
    statutoryStatus: "NO_PT_STATE",
    portalName: "Not Applicable",
    portalUrl: "https://hrylabour.gov.in",
    monthlyReturnForm: "NOT_APPLICABLE",
    annualReturnForm: "NOT_APPLICABLE",
    monthlyPaymentDueDate: "NOT_APPLICABLE — Zero PT State",
    annualReturnDueDate: "NOT_APPLICABLE — Zero PT State",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: null, monthlyTax: 0, notes: "Haryana does not levy Professional Tax" },
    ],
    specialProvisions: [
      "Gurugram (Cyber City, Udyog Vihar), Manesar (IMT Auto Hub), Faridabad, and Sonipat have ₹0 Professional Tax liability.",
    ],
    penaltyClauses: { lateFilingPenalty: "None", interestRatePerMonth: "None", prosecutionSection: "None" },
  },

  rajasthan: {
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    governingAct: "NO PROFESSIONAL TAX LEGISLATION IN RAJASTHAN",
    hasPt: false,
    statutoryStatus: "NO_PT_STATE",
    portalName: "Not Applicable",
    portalUrl: "https://rajfab.rajasthan.gov.in",
    monthlyReturnForm: "NOT_APPLICABLE",
    annualReturnForm: "NOT_APPLICABLE",
    monthlyPaymentDueDate: "NOT_APPLICABLE — Zero PT State",
    annualReturnDueDate: "NOT_APPLICABLE — Zero PT State",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: null, monthlyTax: 0, notes: "Rajasthan does not levy Professional Tax" },
    ],
    specialProvisions: [
      "Industrial hubs in Neemrana (Japanese Zone), Bhiwadi, Jaipur (Sitapura/VKIA) have ₹0 PT deduction.",
    ],
    penaltyClauses: { lateFilingPenalty: "None", interestRatePerMonth: "None", prosecutionSection: "None" },
  },

  "uttar-pradesh": {
    stateSlug: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    governingAct: "NO PROFESSIONAL TAX LEGISLATION IN UTTAR PRADESH",
    hasPt: false,
    statutoryStatus: "NO_PT_STATE",
    portalName: "Not Applicable",
    portalUrl: "https://up.gov.in",
    monthlyReturnForm: "NOT_APPLICABLE",
    annualReturnForm: "NOT_APPLICABLE",
    monthlyPaymentDueDate: "NOT_APPLICABLE — Zero PT State",
    annualReturnDueDate: "NOT_APPLICABLE — Zero PT State",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: null, monthlyTax: 0, notes: "Uttar Pradesh does not levy Professional Tax" },
    ],
    specialProvisions: [
      "Noida, Greater Noida, Kanpur, Lucknow, and Ghaziabad have ₹0 Professional Tax liability on salaried employees.",
    ],
    penaltyClauses: { lateFilingPenalty: "None", interestRatePerMonth: "None", prosecutionSection: "None" },
  },

  punjab: {
    stateSlug: "punjab",
    stateName: "Punjab",
    governingAct: "Punjab State Development Tax Act, 2018",
    hasPt: true,
    statutoryStatus: "ACTIVE",
    portalName: "Punjab Excise and Taxation Portal",
    portalUrl: "https://tax.punjab.gov.in",
    monthlyReturnForm: "Form PSDT-1",
    annualReturnForm: "Form PSDT-2",
    monthlyPaymentDueDate: "End of succeeding month",
    annualReturnDueDate: "April 30th",
    slabs: [
      { minWageMonthly: 0, maxWageMonthly: null, monthlyTax: 200, notes: "Levied at flat ₹200/month ONLY on persons paying Income Tax (under Income Tax Act 1961). Persons not liable to Income Tax pay ₹0." },
    ],
    specialProvisions: [
      "Unlike other states, Punjab's tax (PSDT) is tied directly to Income Tax assessment status rather than absolute gross monthly wages.",
      "Applicable across industrial corridors of Ludhiana, Jalandhar, and Mandi Gobindgarh.",
    ],
    penaltyClauses: {
      lateFilingPenalty: "₹50 per day of delay under Section 11",
      interestRatePerMonth: "1.5% per month on delayed remittances",
      prosecutionSection: "Section 18 penalties",
    },
  },
};

// ==============================================================================
// 2. PAN-INDIA LABOUR WELFARE FUND (LWF) STATUTORY MATRIX
// ==============================================================================

export const PAN_INDIA_LWF_RULES: Record<string, LabourWelfareFundRule> = {
  "west-bengal": {
    stateSlug: "west-bengal",
    stateName: "West Bengal",
    governingAct: "West Bengal Labour Welfare Fund Act, 1974 (Read with Section 9)",
    hasLwf: true,
    employeeShareMonthly: "₹3 (deducted in June & December)",
    employerShareMonthly: "₹30 (matching employer contribution)",
    remittanceFrequency: "Bi-Annual",
    statutoryCutoffDates: ["July 15 (for June half-year cycle)", "January 15 (for December half-year cycle)"],
    statutoryReturnForm: "Form D (Statement of Employee & Employer Remittances)",
    portalName: "WB Labour Welfare Board (wblwb.org)",
    portalUrl: "https://wblwb.org",
    specialRules: "CRITICAL SECTION 9 BAR: Section 9 explicitly prohibits employers from deducting the employer's share (₹30) from employee salaries. Both shares must be remitted directly to the Board under criminal liability for non-compliance.",
  },

  maharashtra: {
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    governingAct: "Maharashtra Labour Welfare Fund Act, 1953 (Amended 2024 Gazette)",
    hasLwf: true,
    employeeShareMonthly: "₹25 (for salary >₹3,000/mo, deducted in June & December)",
    employerShareMonthly: "₹75 (tripled employer share matching 1:3 ratio)",
    remittanceFrequency: "Bi-Annual",
    statutoryCutoffDates: ["July 15 (for June cycle)", "January 15 (for December cycle)"],
    statutoryReturnForm: "Form A-1 (Bi-Annual Return)",
    portalName: "Maharashtra Labour Welfare Board (MLWB Portal)",
    portalUrl: "https://public.mlwb.in",
    specialRules: "Revised statutory rates: Employees earning >₹3,000 pay ₹25, employer pays ₹75 (Total ₹100 per eligible employee every half-year). Failure to remit results in 18% compound interest and labor inspectorate notices.",
  },

  karnataka: {
    stateSlug: "karnataka",
    stateName: "Karnataka",
    governingAct: "Karnataka Labour Welfare Fund Act, 1965 (Amended 2024 Gazette Notif.)",
    hasLwf: true,
    employeeShareMonthly: "₹50 (deducted annually in December)",
    employerShareMonthly: "₹100 (matching 1:2 employer ratio)",
    remittanceFrequency: "Annual",
    statutoryCutoffDates: ["January 15 following the December deduction"],
    statutoryReturnForm: "Form D (Annual Welfare Statement)",
    portalName: "Karnataka Labour Welfare Board Portal",
    portalUrl: "https://klwb.karnataka.gov.in",
    specialRules: "Rates updated to ₹50 employee / ₹100 employer annually (Total ₹150). Remitted once a year on or before January 15th via online payment gateway.",
  },

  delhi: {
    stateSlug: "delhi",
    stateName: "Delhi (NCT)",
    governingAct: "Delhi Labour Welfare Fund Act, 1965",
    hasLwf: true,
    employeeShareMonthly: "₹0.75 per month (remitted bi-annually: ₹4.50)",
    employerShareMonthly: "₹2.25 per month (remitted bi-annually: ₹13.50)",
    remittanceFrequency: "Bi-Annual",
    statutoryCutoffDates: ["July 15 (for Jan–June cycle)", "January 15 (for July–Dec cycle)"],
    statutoryReturnForm: "Form A (Statement of Contributions)",
    portalName: "Delhi Labour Welfare Board",
    portalUrl: "https://labourcis.delhi.gov.in",
    specialRules: "Applies to all shops, commercial establishments, and factories employing 5 or more persons in the NCT of Delhi.",
  },

  haryana: {
    stateSlug: "haryana",
    stateName: "Haryana",
    governingAct: "Punjab Labour Welfare Fund Act, 1965 (as applicable to Haryana)",
    hasLwf: true,
    employeeShareMonthly: "0.2% of salary up to max ₹31/month",
    employerShareMonthly: "Twice the employee share (up to max ₹62/month)",
    remittanceFrequency: "Monthly",
    statutoryCutoffDates: ["15th of each succeeding month"],
    statutoryReturnForm: "Form A Monthly E-Remittance",
    portalName: "Haryana Labour Department Portal",
    portalUrl: "https://hrylabour.gov.in",
    specialRules: "Monthly remittance cycle (unlike most other states which are bi-annual or annual). Mandatory for all establishments in Gurugram, Manesar, and Faridabad.",
  },

  gujarat: {
    stateSlug: "gujarat",
    stateName: "Gujarat",
    governingAct: "Gujarat Labour Welfare Fund Act, 1953",
    hasLwf: true,
    employeeShareMonthly: "₹6 (deducted in June & December)",
    employerShareMonthly: "₹18 (matching employer share)",
    remittanceFrequency: "Bi-Annual",
    statutoryCutoffDates: ["July 15 (for June cycle)", "January 15 (for December cycle)"],
    statutoryReturnForm: "Form A (Bi-Annual Return)",
    portalName: "Gujarat Labour Welfare Board (GLWB)",
    portalUrl: "https://glwb.gujarat.gov.in",
    specialRules: "Applies to all registered factories and commercial establishments with 10+ employees.",
  },

  "tamil-nadu": {
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    governingAct: "Tamil Nadu Labour Welfare Fund Act, 1972",
    hasLwf: true,
    employeeShareMonthly: "₹20 (deducted annually in December)",
    employerShareMonthly: "₹40 (matching 1:2 ratio)",
    remittanceFrequency: "Annual",
    statutoryCutoffDates: ["January 31 following the calendar year"],
    statutoryReturnForm: "Form A (Annual Return)",
    portalName: "Tamil Nadu Labour Welfare Board Portal",
    portalUrl: "https://tnlwb.ac.in",
    specialRules: "Total ₹60 per employee remitted annually on or before January 31st.",
  },
};

// ==============================================================================
// 3. STATE MINIMUM WAGE GAZETTE TIERS (2026 BENCHMARK)
// ==============================================================================

export const STATE_MINIMUM_WAGES: Record<string, MinimumWageTiers> = {
  karnataka: {
    stateSlug: "karnataka",
    stateName: "Karnataka",
    gazetteOrderNo: "KAE 12 LMW 2024 (Zone 1 - Bruhat Bengaluru Mahanagara Palike area)",
    effectivePeriod: "April 1, 2025 to March 31, 2026 (Semi-Annual VDA adjusted)",
    zone: "Zone 1 (BBMP / Bengaluru Metro)",
    unskilledMonthly: 17850,
    unskilledDaily: 686.54,
    semiSkilledMonthly: 19420,
    semiSkilledDaily: 746.92,
    skilledMonthly: 21150,
    skilledDaily: 813.46,
    highlySkilledMonthly: 23200,
    highlySkilledDaily: 892.31,
    overtimeMultiplier: "200% of standard basic+VDA hourly rate (Section 59 Factories Act / Sec 12 Karnataka S&E Act)",
    wageCeilingEpfoApplicable: true,
  },

  maharashtra: {
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    gazetteOrderNo: "CL/MWA/15/2024 (Zone 1 - Mumbai / Thane / Navi Mumbai / Pune)",
    effectivePeriod: "July 1, 2025 to December 31, 2025 / Jan 1 to June 30, 2026",
    zone: "Zone 1 (Municipal Corporations & MIDC Industrial Belts)",
    unskilledMonthly: 16980,
    unskilledDaily: 653.08,
    semiSkilledMonthly: 18450,
    semiSkilledDaily: 709.62,
    skilledMonthly: 20120,
    skilledDaily: 773.85,
    highlySkilledMonthly: 22100,
    highlySkilledDaily: 850.00,
    overtimeMultiplier: "Double normal wages (2x hourly rate for hours exceeding 9 hrs/day or 48 hrs/week)",
    wageCeilingEpfoApplicable: true,
  },

  delhi: {
    stateSlug: "delhi",
    stateName: "Delhi (NCT)",
    gazetteOrderNo: "F.No.12(142)/02/MW/VII/Partfile/3412 (Central & Delhi Minimum Wage Advisory)",
    effectivePeriod: "October 1, 2025 to March 31, 2026",
    zone: "All NCT of Delhi",
    unskilledMonthly: 18066,
    unskilledDaily: 695.00,
    semiSkilledMonthly: 19929,
    semiSkilledDaily: 766.00,
    skilledMonthly: 21917,
    skilledDaily: 843.00,
    highlySkilledMonthly: 23836,
    highlySkilledDaily: 917.00,
    overtimeMultiplier: "Double normal rate of pay (Section 14 Minimum Wages Act)",
    wageCeilingEpfoApplicable: true,
  },

  haryana: {
    stateSlug: "haryana",
    stateName: "Haryana",
    gazetteOrderNo: "Haryana Labour Gazette Notification No. IR-2/2024/MW (Cost of Living Index)",
    effectivePeriod: "July 1, 2025 to December 31, 2025 / Jan–Jun 2026",
    zone: "Statewide (Gurugram, Manesar, Faridabad)",
    unskilledMonthly: 11450,
    unskilledDaily: 440.38,
    semiSkilledMonthly: 12620,
    semiSkilledDaily: 485.38,
    skilledMonthly: 13910,
    skilledDaily: 535.00,
    highlySkilledMonthly: 15330,
    highlySkilledDaily: 589.62,
    overtimeMultiplier: "Double rate (2x hourly rate)",
    wageCeilingEpfoApplicable: true,
  },

  gujarat: {
    stateSlug: "gujarat",
    stateName: "Gujarat",
    gazetteOrderNo: "Gujarat Labour & Employment Dept Notif. KHR/2024/MWA (Zone 1 - Industrial Belts)",
    effectivePeriod: "October 1, 2025 to March 31, 2026",
    zone: "Zone 1 (Ahmedabad, Surat, Vadodara, Rajkot, GIDC Industrial Estates)",
    unskilledMonthly: 12480,
    unskilledDaily: 480.00,
    semiSkilledMonthly: 13260,
    semiSkilledDaily: 510.00,
    skilledMonthly: 14170,
    skilledDaily: 545.00,
    highlySkilledMonthly: 15210,
    highlySkilledDaily: 585.00,
    overtimeMultiplier: "Double wages (Section 59 Factories Act 1948)",
    wageCeilingEpfoApplicable: true,
  },

  "tamil-nadu": {
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    gazetteOrderNo: "TN Labour Welfare & Skill Development Notification No. II(2)/LWSD/2024 (Zone A)",
    effectivePeriod: "April 1, 2025 to March 31, 2026",
    zone: "Zone A (Chennai Corporation & Ambattur/Sriperumbudur corridor)",
    unskilledMonthly: 13200,
    unskilledDaily: 507.69,
    semiSkilledMonthly: 14450,
    semiSkilledDaily: 555.77,
    skilledMonthly: 15890,
    skilledDaily: 611.15,
    highlySkilledMonthly: 17480,
    highlySkilledDaily: 672.31,
    overtimeMultiplier: "Double basic plus dearness allowance (2x hourly rate)",
    wageCeilingEpfoApplicable: true,
  },

  "west-bengal": {
    stateSlug: "west-bengal",
    stateName: "West Bengal",
    gazetteOrderNo: "Labour Department Notification No. 182/Stat/2RW/2024 (Zone A - Kolkata & Municipal Areas)",
    effectivePeriod: "July 1, 2025 to December 31, 2025 / Jan–Jun 2026",
    zone: "Zone A (Kolkata Municipal Corporation, Howrah, Barrackpore, Salt Lake)",
    unskilledMonthly: 10450,
    unskilledDaily: 401.92,
    semiSkilledMonthly: 11500,
    semiSkilledDaily: 442.31,
    skilledMonthly: 12650,
    skilledDaily: 486.54,
    highlySkilledMonthly: 13920,
    highlySkilledDaily: 535.38,
    overtimeMultiplier: "Double rate under Section 59 Factories Act / West Bengal Shops Act Section 13",
    wageCeilingEpfoApplicable: true,
  },

  odisha: {
    stateSlug: "odisha",
    stateName: "Odisha",
    gazetteOrderNo: "Odisha Labour & ESI Dept Notification No. 4210/LC (Special VDA Rates)",
    effectivePeriod: "October 1, 2025 to March 31, 2026",
    zone: "Statewide (Bhubaneswar, Kalinganagar, Jharsuguda, Paradeep)",
    unskilledMonthly: 11700,
    unskilledDaily: 450.00,
    semiSkilledMonthly: 13000,
    semiSkilledDaily: 500.00,
    skilledMonthly: 14300,
    skilledDaily: 550.00,
    highlySkilledMonthly: 15860,
    highlySkilledDaily: 610.00,
    overtimeMultiplier: "Double ordinary rate of wages (Section 59 Factories Act)",
    wageCeilingEpfoApplicable: true,
  },
};

// ==============================================================================
// 4. REGIONAL STATUTORY INSPECTORATE DIRECTORY (BY CITY & CORRIDOR)
// ==============================================================================

export const LOCAL_INSPECTORATES: Record<string, LocalInspectorateDirectory> = {
  bengaluru: {
    citySlug: "bengaluru",
    cityName: "Bengaluru",
    stateSlug: "karnataka",
    stateName: "Karnataka",
    industrialCorridors: ["Peenya Industrial Area", "Electronic City", "Whitefield EPIP", "Bommasandra-Jigani", "Bidadi Auto Cluster"],
    dlcInspectorate: {
      officeName: "Office of the Additional Labour Commissioner (Bengaluru Region)",
      jurisdiction: "Bengaluru Urban & Rural Districts, BBMP Limits",
      physicalAddress: "Karmika Bhavana, Bannerghatta Road, Dairy Circle, Bengaluru, Karnataka 560029",
      contactDesk: "+91-80-2663-1250",
      onlinePortalUrl: "https://ekarmika.karnataka.gov.in",
    },
    dishInspectorate: {
      officeName: "Directorate of Factories, Industrial Safety and Health (DISH Bengaluru)",
      jurisdiction: "Section 6 Factories Act Site Sanctions & Boiler Clearances",
      physicalAddress: "Karmika Bhavana, 2nd Floor, Bannerghatta Road, Bengaluru 560029",
      contactDesk: "+91-80-2653-1402",
      onlinePortalUrl: "https://dish.karnataka.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Bengaluru Central)",
      jurisdiction: "Regional Office KN/BNG/001",
      physicalAddress: "Bhavishya Nidhi Bhavan, No. 13, Raja Ram Mohan Roy Road, Bengaluru 560025",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office Karnataka",
      jurisdiction: "SRO Bengaluru Region 53",
      physicalAddress: "Panchdeep Bhawan, 10/8/1, Binnyfields, Tank Bund Road, Bengaluru 560023",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Bruhat Bengaluru Mahanagara Palike (BBMP) Health & Trade License Dept",
      department: "Section 305/353 Karnataka Municipal Corporations Act 1976",
      physicalAddress: "BBMP Head Office, NR Square, Corporation Circle, Bengaluru 560002",
      onlinePortalUrl: "https://bbmptax.karnataka.gov.in",
    },
  },

  mumbai: {
    citySlug: "mumbai",
    cityName: "Mumbai",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    industrialCorridors: ["TTC Navi Mumbai MIDC", "Taloja Chemical Belt", "Andheri-SEEPZ", "Kanjurmarg Commercial Hub"],
    dlcInspectorate: {
      officeName: "Office of the Labour Commissioner (Maharashtra State)",
      jurisdiction: "Mumbai City, Mumbai Suburban, Thane & Navi Mumbai",
      physicalAddress: "Kamgar Bhavan, C-20, E-Block, Bandra-Kurla Complex (BKC), Bandra (East), Mumbai 400051",
      contactDesk: "+91-22-2657-2281",
      onlinePortalUrl: "https://mahakamgar.maharashtra.gov.in",
    },
    dishInspectorate: {
      officeName: "Directorate of Industrial Safety & Health (DISH Maharashtra)",
      jurisdiction: "Factories Act 1948 Approvals across Mumbai & Thane Region",
      physicalAddress: "Kamgar Bhavan, 5th Floor, BKC, Bandra East, Mumbai 400051",
      contactDesk: "+91-22-2657-2485",
      onlinePortalUrl: "https://dish.maharashtra.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Bandra & Mumbai Central)",
      jurisdiction: "MH/BAN/00021 & MH/KND/00034",
      physicalAddress: "Bhavishya Nidhi Bhavan, 341, Bandra East, Mumbai 400051",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office Maharashtra",
      jurisdiction: "ESIC Regional Office Mumbai Region 31",
      physicalAddress: "Panchdeep Bhavan, 108, N.M. Joshi Marg, Lower Parel, Mumbai 400013",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Brihanmumbai Municipal Corporation (BMC / MCGM) Health & License Dept",
      department: "Section 394 Mumbai Municipal Corporation Act (D&O Trade License)",
      physicalAddress: "MCGM Head Office, Mahapalika Marg, Fort, Mumbai 400001",
      onlinePortalUrl: "https://portal.mcgm.gov.in",
    },
  },

  pune: {
    citySlug: "pune",
    cityName: "Pune",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    industrialCorridors: ["Chakan Auto Belt", "Bhosari MIDC (PCMC)", "Talegaon Industrial Park", "Ranjangaon MIDC", "Hinjawadi IT Park"],
    dlcInspectorate: {
      officeName: "Office of the Additional Labour Commissioner (Pune Division)",
      jurisdiction: "Pune, Pimpri-Chinchwad, Chakan, Talegaon & Baramati MIDC",
      physicalAddress: "Kamgar Kalyan Bhavan, Wakdewadi, Pune-Mumbai Road, Shivajinagar, Pune 411005",
      contactDesk: "+91-20-2553-6112",
      onlinePortalUrl: "https://mahakamgar.maharashtra.gov.in",
    },
    dishInspectorate: {
      officeName: "Joint Director DISH Pune Region",
      jurisdiction: "Form 1 Approvals, Safety Audits & Factory Licensing",
      physicalAddress: "Central Administrative Building, Ground Floor, Station Road, Pune 411001",
      contactDesk: "+91-20-2612-4521",
      onlinePortalUrl: "https://dish.maharashtra.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office Pune (Akurdi & Cantonment)",
      jurisdiction: "RO Pune-I (MH/PUN) & RO Pune-II (Akurdi)",
      physicalAddress: "Cantonment Board Building, Golibar Maidan, Pune 411001 / Sector 28, Pradhikaran, Akurdi, Pune 411044",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Sub-Regional Office (Pune)",
      jurisdiction: "SRO Pune Region 33",
      physicalAddress: "Panchdeep Bhavan, Survey No. 689/90, Bibvewadi, Pune 411037",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Pune Municipal Corporation (PMC) & PCMC Licensing Directorate",
      department: "Section 376 Maharashtra Municipal Corporations Act",
      physicalAddress: "PMC Main Building, Shivajinagar, Pune 411005 / PCMC Bhavan, Pimpri 411018",
      onlinePortalUrl: "https://pmc.gov.in",
    },
  },

  hyderabad: {
    citySlug: "hyderabad",
    cityName: "Hyderabad",
    stateSlug: "telangana",
    stateName: "Telangana",
    industrialCorridors: ["HITEC City IT Corridor", "Genome Valley Bio-Cluster", "Patancheru-Pashamylaram Chemical Hub", "Balanagar-Jeedimetla"],
    dlcInspectorate: {
      officeName: "Office of the Commissioner of Labour (Telangana)",
      jurisdiction: "Hyderabad, Rangareddy, Medchal-Malkajgiri & Sangareddy",
      physicalAddress: "Anjaneya Bhavan, RTC X Roads, Musheerabad, Hyderabad 500020",
      contactDesk: "+91-40-2766-2244",
      onlinePortalUrl: "https://labour.telangana.gov.in",
    },
    dishInspectorate: {
      officeName: "Directorate of Factories (Telangana)",
      jurisdiction: "Factories Act Site Approvals & Form 1 Clearance",
      physicalAddress: "Narayanguda Main Road, Beside Blood Bank, Hyderabad 500029",
      contactDesk: "+91-40-2756-1184",
      onlinePortalUrl: "https://factories.telangana.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Hyderabad I & II)",
      jurisdiction: "TG/HYD/00012 & TG/BKP/00024",
      physicalAddress: "Bhavishya Nidhi Bhavan, Barkatpura, Hyderabad 500027",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office Telangana",
      jurisdiction: "Regional Office Region 52",
      physicalAddress: "Panchdeep Bhawan, 5-9-23, Hill Fort Road, Adarsh Nagar, Hyderabad 500063",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Greater Hyderabad Municipal Corporation (GHMC) Trade License Section",
      department: "Section 521 Hyderabad Municipal Corporations Act 1955",
      physicalAddress: "GHMC Head Office, CC Complex, Tank Bund Road, Hyderabad 500063",
      onlinePortalUrl: "https://www.ghmc.gov.in",
    },
  },

  chennai: {
    citySlug: "chennai",
    cityName: "Chennai",
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    industrialCorridors: ["Sriperumbudur-Oragadam Auto Belt", "Ambattur Industrial Estate", "Guindy SIDCO", "Maraimalai Nagar", "Ennore Port Logistics"],
    dlcInspectorate: {
      officeName: "Office of the Commissioner of Labour (Tamil Nadu)",
      jurisdiction: "Chennai, Kanchipuram, Tiruvallur & Chengalpattu",
      physicalAddress: "DMS Campus, Teynampet, Anna Salai, Chennai 600006",
      contactDesk: "+91-44-2433-5147",
      onlinePortalUrl: "https://labour.tn.gov.in",
    },
    dishInspectorate: {
      officeName: "Directorate of Industrial Safety and Health (DISH Tamil Nadu)",
      jurisdiction: "Site Clearance & Factory Compliance under Factories Act 1948",
      physicalAddress: "Royapettah High Road, Royapettah, Chennai 600014",
      contactDesk: "+91-44-2811-3091",
      onlinePortalUrl: "https://dish.tn.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Chennai Central & North)",
      jurisdiction: "TN/MAS/00014 & TN/AMB/00028",
      physicalAddress: "No. 37, Royapettah High Road, Chennai 600014",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office (Tamil Nadu)",
      jurisdiction: "Panchdeep Bhawan Region 51",
      physicalAddress: "143, Sterling Road, Nungambakkam, Chennai 600034",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Greater Chennai Corporation (GCC) Revenue & Health Department",
      department: "Section 287 Chennai City Municipal Corporation Act 1919 (D&O License)",
      physicalAddress: "Ripon Building, EVR Periyar Salai, Park Town, Chennai 600003",
      onlinePortalUrl: "https://chennaicorporation.gov.in",
    },
  },

  ahmedabad: {
    citySlug: "ahmedabad",
    cityName: "Ahmedabad",
    stateSlug: "gujarat",
    stateName: "Gujarat",
    industrialCorridors: ["Sanand Auto GIDC", "Changodar Industrial Hub", "Vatva Chemical Estate", "Naroda GIDC", "Odhav Industrial Area"],
    dlcInspectorate: {
      officeName: "Office of the Labour Commissioner (Gujarat State)",
      jurisdiction: "Ahmedabad, Gandhinagar, Sanand, Kheda & Mehsana",
      physicalAddress: "Shram Bhavan, Near Gun House, Khanpur, Ahmedabad 380001",
      contactDesk: "+91-79-2550-7141",
      onlinePortalUrl: "https://labour.gujarat.gov.in",
    },
    dishInspectorate: {
      officeName: "Directorate of Industrial Safety & Health (DISH Gujarat)",
      jurisdiction: "Factory Licensing & Hazardous Process Consents",
      physicalAddress: "3rd Floor, Shram Bhavan, Khanpur, Ahmedabad 380001",
      contactDesk: "+91-79-2550-7452",
      onlinePortalUrl: "https://dish.gujarat.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Ahmedabad)",
      jurisdiction: "GJ/AHD/00011",
      physicalAddress: "Bhavishya Nidhi Bhavan, Near Income Tax Circle, Ashram Road, Ahmedabad 380014",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office Gujarat",
      jurisdiction: "Region 34",
      physicalAddress: "Panchdeep Bhavan, Ashram Road, Ahmedabad 380014",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Ahmedabad Municipal Corporation (AMC) Health & Professional Tax Dept",
      department: "Section 376 GPMC Act (General Trade & Health Clearance)",
      physicalAddress: "Mahanagar Seva Sadan, Danapith, Ahmedabad 380001",
      onlinePortalUrl: "https://ahmedabadcity.gov.in",
    },
  },

  delhi: {
    citySlug: "delhi",
    cityName: "Delhi (NCT)",
    stateSlug: "delhi",
    stateName: "Delhi",
    industrialCorridors: ["Okhla Industrial Area (Phases I–III)", "Bawana Industrial Area", "Narela Industrial Zone", "Mayapuri Heavy Industrial Area"],
    dlcInspectorate: {
      officeName: "Office of the Labour Commissioner (Government of NCT of Delhi)",
      jurisdiction: "All 11 Districts of National Capital Territory of Delhi",
      physicalAddress: "5, Sham Nath Marg, Civil Lines, Delhi 110054",
      contactDesk: "+91-11-2396-7495",
      onlinePortalUrl: "https://labour.delhi.gov.in",
    },
    dishInspectorate: {
      officeName: "Chief Inspector of Factories (CIF Delhi)",
      jurisdiction: "Section 6 Factories Act 1948 Clearances",
      physicalAddress: "Labour Welfare Centre, Nimri Colony, Ashok Vihar Phase-IV, Delhi 110052",
      contactDesk: "+91-11-2730-1425",
      onlinePortalUrl: "https://labour.delhi.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Delhi Central & North)",
      jurisdiction: "DL/CPM/00018 & DL/DEL/00022",
      physicalAddress: "Bhavishya Nidhi Bhavan, 28, Wazirpur Industrial Area, Delhi 110052",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office Delhi",
      jurisdiction: "Region 11 (Rajendra Place)",
      physicalAddress: "DDA Complex, Rajendra Place, New Delhi 110008",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Municipal Corporation of Delhi (MCD) Factory & Health Licensing Dept",
      department: "Section 417 & 436 Delhi Municipal Corporation Act 1957",
      physicalAddress: "Dr. S.P. Mukherjee Civic Centre, JLN Marg, New Delhi 110002",
      onlinePortalUrl: "https://mcdonline.nic.in",
    },
  },

  gurugram: {
    citySlug: "gurugram",
    cityName: "Gurugram",
    stateSlug: "haryana",
    stateName: "Haryana",
    industrialCorridors: ["Cyber City IT Belt", "Udyog Vihar (Phases I–V)", "IMT Manesar Auto Corridor", "Sohna Industrial Area"],
    dlcInspectorate: {
      officeName: "Office of the Deputy Labour Commissioner (Gurugram)",
      jurisdiction: "Gurugram District, Manesar & Sohna",
      physicalAddress: "Shram Kalyan Bhawan, Mehrauli-Gurgaon Road, Near Sector 14, Gurugram, Haryana 122001",
      contactDesk: "+91-124-232-1542",
      onlinePortalUrl: "https://hrylabour.gov.in",
    },
    dishInspectorate: {
      officeName: "Deputy Director Industrial Safety & Health (DISH Gurugram)",
      jurisdiction: "Factories Act 1948 Plan Approval & CLRA Licenses",
      physicalAddress: "Mini Secretariat, 3rd Floor, Civil Lines, Gurugram 122001",
      contactDesk: "+91-124-222-3150",
      onlinePortalUrl: "https://hrylabour.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Gurugram)",
      jurisdiction: "HR/GGN/00032",
      physicalAddress: "Plot No. 43, Sector 44, Institutional Area, Gurugram 122003",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Sub-Regional Office Gurugram",
      jurisdiction: "SRO Region 13",
      physicalAddress: "Sector 14, Near Old Delhi Road, Gurugram 122001",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Municipal Corporation of Gurugram (MCG) & HSIIDC Licensing Cell",
      department: "Haryana Municipal Corporation Act 1994",
      physicalAddress: "Sector 34, Info Technology Park, Hero Honda Chowk, Gurugram 122001",
      onlinePortalUrl: "https://mcg.gov.in",
    },
  },

  kolkata: {
    citySlug: "kolkata",
    cityName: "Kolkata",
    stateSlug: "west-bengal",
    stateName: "West Bengal",
    industrialCorridors: ["Barrackpore Industrial Belt", "Howrah Heavy Engineering Cluster", "Salt Lake Sector V IT Hub", "Taratala-Maheshtala", "Haldia Port PCPIR"],
    dlcInspectorate: {
      officeName: "Office of the Labour Commissioner (Government of West Bengal)",
      jurisdiction: "Kolkata, North 24 Parganas (Barrackpore), South 24 Parganas, Howrah",
      physicalAddress: "New Secretariat Buildings, 11th Floor, 1, K.S. Roy Road, Kolkata 700001",
      contactDesk: "+91-33-2248-8150",
      onlinePortalUrl: "https://wblc.gov.in",
    },
    dishInspectorate: {
      officeName: "Directorate of Factories (Government of West Bengal)",
      jurisdiction: "Section 6 Factories Act 1948 Site Approval & Stability Certificates",
      physicalAddress: "New Secretariat Buildings, 8th Floor, 1, K.S. Roy Road, Kolkata 700001",
      contactDesk: "+91-33-2248-4392",
      onlinePortalUrl: "https://wbfactories.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Kolkata & Barrackpore)",
      jurisdiction: "WB/CAL/00015 & WB/BKP/00045",
      physicalAddress: "Bhavishya Nidhi Bhawan, DK Block, Sector II, Salt Lake City, Kolkata 700091",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office West Bengal",
      jurisdiction: "Panchdeep Bhawan Region 41",
      physicalAddress: "5/1, Grant Lane, Bowbazar, Kolkata, West Bengal 700012",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Kolkata Municipal Corporation (KMC) & Barrackpore Municipality License Dept",
      department: "Section 199 Kolkata Municipal Corporation Act 1980 (Certificate of Enlistment)",
      physicalAddress: "KMC Central Municipal Building, 5, S.N. Banerjee Road, Kolkata 700013",
      onlinePortalUrl: "https://www.kmcgov.in",
    },
  },

  bhubaneswar: {
    citySlug: "bhubaneswar",
    cityName: "Bhubaneswar",
    stateSlug: "odisha",
    stateName: "Odisha",
    industrialCorridors: ["Kalinganagar Industrial Complex (Steel)", "Jharsuguda-Rourkela Metal Belt", "Paradeep Port PCPIR", "Chandaka IT SEZ", "Mancheswar Industrial Estate"],
    dlcInspectorate: {
      officeName: "Office of the Labour Commissioner (Odisha)",
      jurisdiction: "State of Odisha (Bhubaneswar, Cuttack, Jajpur, Jharsuguda, Sundargarh)",
      physicalAddress: "Shram Seva Bhawan, Kharvel Nagar, Unit-III, Bhubaneswar, Odisha 751001",
      contactDesk: "+91-674-239-1652",
      onlinePortalUrl: "https://labdirodisha.gov.in",
    },
    dishInspectorate: {
      officeName: "Directorate of Factories and Boilers (Odisha)",
      jurisdiction: "Form 1 Sanctions, Major Accident Hazard (MAH) Factories",
      physicalAddress: "Unit-III, Kharvel Nagar, Bhubaneswar 751001",
      contactDesk: "+91-674-239-2415",
      onlinePortalUrl: "https://fabodisha.gov.in",
    },
    epfoRegionalOffice: {
      officeName: "EPFO Regional Office (Bhubaneswar)",
      jurisdiction: "OR/BBS/00017",
      physicalAddress: "Bhavishya Nidhi Bhawan, Unit-9, Janpath, Bhubaneswar 751022",
      onlinePortalUrl: "https://www.epfindia.gov.in",
    },
    esicSubRegionalOffice: {
      officeName: "ESIC Regional Office Odisha",
      jurisdiction: "Panchdeep Bhavan Region 44",
      physicalAddress: "Plot No. 2, Unit-II, Ashok Nagar, Bhubaneswar 751009",
      onlinePortalUrl: "https://www.esic.gov.in",
    },
    municipalLicensingBody: {
      officeName: "Bhubaneswar Municipal Corporation (BMC) License Section",
      department: "Odisha Municipal Corporation Act 2003 (Trade License)",
      physicalAddress: "BMC Office, Vivekananda Marg, Near Kalpana Square, Bhubaneswar 751014",
      onlinePortalUrl: "https://bmc.gov.in",
    },
  },
};

// ==============================================================================
// 5. HELPER ACCESSORS & COMPUTATION FUNCTIONS
// ==============================================================================

/**
 * Computes exact monthly Professional Tax for a given state and gross monthly wage.
 * Handles gender exemptions (Maharashtra 2023) and repealed statutes (Odisha 2026).
 */
export function calculateMonthlyPT(
  stateSlug: string,
  grossMonthlyWage: number,
  isFemale: boolean = false,
  isFebruary: boolean = false
): { taxAmount: number; notes: string; statutoryStatus: string; actName: string } {
  const stateRule = PAN_INDIA_PT_RULES[stateSlug];

  if (!stateRule || !stateRule.hasPt) {
    if (stateRule?.isRepealed) {
      return {
        taxAmount: 0,
        notes: "Statute Repealed: ₹0 PT liability in Odisha effective April 1, 2026",
        statutoryStatus: "REPEALED",
        actName: stateRule.governingAct,
      };
    }
    return {
      taxAmount: 0,
      notes: "Zero PT State: No Professional Tax levied on salaried employees",
      statutoryStatus: "NO_PT_STATE",
      actName: stateRule?.governingAct || "No State Enactment",
    };
  }

  // Special Gender Rule for Maharashtra: Women earning ≤ ₹25,000/mo are 100% exempt
  if (stateSlug === "maharashtra" && isFemale && grossMonthlyWage <= 25000) {
    return {
      taxAmount: 0,
      notes: "Maharashtra 2023 Exemption: Female employees earning ≤₹25,000/mo are 100% exempt (₹0 PT)",
      statutoryStatus: "ACTIVE",
      actName: stateRule.governingAct,
    };
  }

  // Standard slab lookup
  for (const slab of stateRule.slabs) {
    const isAboveMin = grossMonthlyWage >= slab.minWageMonthly;
    const isBelowMax = slab.maxWageMonthly === null || grossMonthlyWage <= slab.maxWageMonthly;

    if (isAboveMin && isBelowMax) {
      const tax = (isFebruary && slab.februaryTax !== undefined) ? slab.februaryTax : slab.monthlyTax;
      return {
        taxAmount: tax,
        notes: slab.notes || `Statutory slab: ₹${slab.minWageMonthly} – ${slab.maxWageMonthly ?? "Above"}`,
        statutoryStatus: "ACTIVE",
        actName: stateRule.governingAct,
      };
    }
  }

  return {
    taxAmount: 0,
    notes: "Exempt or below taxable bracket",
    statutoryStatus: "ACTIVE",
    actName: stateRule.governingAct,
  };
}

const METRO_FALLBACK_MAP: Record<string, string> = {
  // Karnataka
  peenya: "bengaluru",
  whitefield: "bengaluru",
  "bommasandra-jigani": "bengaluru",
  bidadi: "bengaluru",
  mysuru: "bengaluru",
  // Maharashtra
  "chakan-talegaon": "pune",
  "bhosari-pcmc": "pune",
  "ttc-navi-mumbai": "mumbai",
  taloja: "mumbai",
  "chhatrapati-sambhajinagar": "pune",
  nagpur: "mumbai",
  // Tamil Nadu
  "sriperumbudur-oragadam": "chennai",
  ambattur: "chennai",
  hosur: "chennai",
  tiruppur: "chennai",
  coimbatore: "chennai",
  // Gujarat
  sanand: "ahmedabad",
  changodar: "ahmedabad",
  "dahej-bharuch": "ahmedabad",
  morbi: "ahmedabad",
  "savli-vadodara": "ahmedabad",
  surat: "ahmedabad",
  vadodara: "ahmedabad",
  // Odisha
  kalinganagar: "bhubaneswar",
  jharsuguda: "bhubaneswar",
  "paradeep-port": "bhubaneswar",
  rourkela: "bhubaneswar",
  // Haryana / NCR / North
  "imt-manesar": "gurugram",
  "bhiwadi-neemrana": "gurugram",
  "greater-noida": "delhi",
  noida: "delhi",
  jaipur: "delhi",
  ludhiana: "delhi",
  chandigarh: "delhi",
  indore: "delhi",
  pithampur: "delhi",
  kochi: "chennai",
  visakhapatnam: "hyderabad",
  barrackpore: "kolkata",
  "howrah-dankuni": "kolkata",
  "salt-lake-sector-v": "kolkata",
};

/**
 * Returns complete statutory directory info for a city or its fallback state hub
 */
export function getLocalInspectorate(citySlug: string): LocalInspectorateDirectory | null {
  if (LOCAL_INSPECTORATES[citySlug]) {
    return LOCAL_INSPECTORATES[citySlug];
  }

  const fallbackSlug = METRO_FALLBACK_MAP[citySlug];
  if (fallbackSlug && LOCAL_INSPECTORATES[fallbackSlug]) {
    const parent = LOCAL_INSPECTORATES[fallbackSlug];
    return {
      ...parent,
      citySlug,
      cityName: citySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    };
  }

  return null;
}

/**
 * Returns state minimum wage tiers
 */
export function getStateMinimumWage(stateSlug: string): MinimumWageTiers | null {
  return STATE_MINIMUM_WAGES[stateSlug] || null;
}

/**
 * Returns state labour welfare fund rules
 */
export function getStateLwfRule(stateSlug: string): LabourWelfareFundRule | null {
  return PAN_INDIA_LWF_RULES[stateSlug] || null;
}
