import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import CalculatorQuickLeadForm from "@/components/calculator/CalculatorQuickLeadForm";
import EavMasterSchema from "@/components/EavMasterSchema";
import { CityData, CITIES_DATA, STATES_DATA } from "@/data/locations";
import { ServicePillar, SERVICES_CATALOG } from "@/data/services";
import {
  PAN_INDIA_PT_RULES,
  PAN_INDIA_LWF_RULES,
  STATE_MINIMUM_WAGES,
  getLocalInspectorate,
} from "@/data/statutoryMatrix";

interface CityServicePageTemplateProps {
  service: ServicePillar;
  city: CityData;
}

export default function CityServicePageTemplate({
  service,
  city,
}: CityServicePageTemplateProps) {
  const state = STATES_DATA[city.stateSlug];
  const ptRule = PAN_INDIA_PT_RULES[city.stateSlug];
  const lwfRule = PAN_INDIA_LWF_RULES[city.stateSlug];
  const minWageRule = STATE_MINIMUM_WAGES[city.stateSlug];
  const inspectorate = getLocalInspectorate(city.slug);

  // Dynamic service-calibrated compliance nuance
  const serviceComplianceNuance = (() => {
    if (service.slug === "finance-and-audit") {
      return `Operating in ${city.name} (${city.state}) requires strict adherence to ${city.state} Professional Tax schedules, CARO 2020 Clause 3(i) & 3(ii) physical fixed asset and inventory verifications, GSTR-2B Input Tax Credit reconciliation timelines, and MSME 45-day payment disclosures under Section 43B(h).`;
    }
    if (service.slug === "hrms-and-payroll") {
      return `Payroll administration in ${city.name} requires adherence to the revised EPFO ₹25,000 wage ceiling (Notification S.O. 5109(E)), ${city.state} Professional Tax brackets, Labour Welfare Fund deductions, and timely ECR challan remittances.`;
    }
    if (service.slug === "compliance-services") {
      return `Statutory labour defense in ${city.name} encompasses Factories Act 1948 site plan sanctions (DISH Form 1), CLRA Form V contractor registrations, SPCB environmental consent filings (CTE/CTO), and bi-annual Labour Welfare Fund returns.`;
    }
    if (service.slug === "staffing-and-recruitment") {
      return `Recruitment and executive search in ${city.name} adheres to local industrial corridor talent sourcing SLAs, background KYC verifications under DPDP Act Section 8(2), and compliance with the ${city.state} Shops and Commercial Establishments Act.`;
    }
    return city.localComplianceNuance;
  })();

  // Prepare localized BLUF string
  const blufAnswer = service.blufSummaryTemplate
    .replace("{city}", city.name)
    .replace("{state}", city.state);

  // 5-Column Statutory Non-Compliance Penalty Matrix tailored to the practice desk
  const penaltyMatrix = (() => {
    if (service.slug === "hrms-and-payroll") {
      return [
        {
          statute: "EPF & MP Act, 1952 – Sec 14B & 7Q",
          violation: "Delayed deposit of EPF contributions beyond 15th of succeeding month",
          fine: "Penal damages up to 100% of arrears + 12% per annum simple interest under Sec 7Q",
          prosecution: "Arrest, attachment of movable/immovable assets, and criminal trial under Sec 14",
          authority: "Regional Provident Fund Commissioner (EPFO RO)",
        },
        {
          statute: "ESI Act, 1948 – Sec 85 & 85(a)",
          violation: "Non-remittance or delayed payment of employee contribution deducted from wages",
          fine: "Compounding fine up to ₹5,000 per default plus 12% simple interest per annum",
          prosecution: "Rigorous imprisonment up to 3 years (cognizable, non-bailable under IPC 406/409)",
          authority: "Judicial Magistrate First Class / ESIC Recovery Officer",
        },
        {
          statute: `${city.state} Professional Tax Act`,
          violation: "Failure to enroll (PTEC), deduct (PTRC), or file monthly e-returns on time",
          fine: "Statutory delay penalty up to ₹1,000 plus 1.25% to 1.5% compounding monthly interest",
          prosecution: "Summary prosecution before Chief Judicial Magistrate and bank account attachment",
          authority: "Deputy Commissioner of Commercial Taxes",
        },
        {
          statute: "Income Tax Act, 1961 – Sec 201(1A) & 276B",
          violation: "Failure to deduct or deposit salary TDS before 7th of succeeding calendar month",
          fine: "1.5% interest per month from date of deduction to actual date of credit",
          prosecution: "Rigorous imprisonment for 3 months to 7 years with discretionary monetary fine",
          authority: "Assessing Officer / TDS Directorate",
        },
        {
          statute: `${city.state} Labour Welfare Fund Act`,
          violation: "Non-remittance of bi-annual/annual welfare contributions or deducting employer share",
          fine: "18% compound interest per annum on outstanding balance from statutory cutoff date",
          prosecution: "Summary proceedings and prosecution before the Metropolitan Magistrate",
          authority: "Welfare Commissioner / Labour Welfare Board",
        },
      ];
    }
    if (service.slug === "compliance-services") {
      return [
        {
          statute: "Factories Act, 1948 – Section 92",
          violation: "Operating industrial plant without approved Form 1 CIF blueprint or stability certificate",
          fine: "Monetary fine up to ₹1,00,000 plus continuing fine of ₹1,000 per day of default",
          prosecution: "Imprisonment up to 2 years for occupier/manager; immediate plant closure notice",
          authority: "Chief Inspector of Factories (CIF / DISH)",
        },
        {
          statute: "CLRA Act, 1970 – Section 23 & 24",
          violation: "Engaging contract labour without Principal Employer Form I Registration or Form V",
          fine: "Fine up to ₹1,000 per day; deemed joint-and-several co-employment liability",
          prosecution: "Imprisonment up to 3 months; absorption of contract workers onto regular payroll",
          authority: "Licensing Officer / Regional Labour Commissioner (Central/State)",
        },
        {
          statute: "Minimum Wages Act, 1948 – Section 20",
          violation: "Payment of basic wages or VDA below official state gazette notification tiers",
          fine: "Direction to pay unpaid arrears plus compensation up to 10 times the amount of difference",
          prosecution: "Criminal trial before Labour Court / Industrial Tribunal",
          authority: "Deputy Labour Commissioner / Authority under MW Act",
        },
        {
          statute: "Water Act 1974 & Air Act 1981 – Sec 41/44",
          violation: "Discharge of industrial effluent or boiler stack emission without active CTE/CTO",
          fine: "Monetary environmental compensation fines up to ₹5 Crores levied by CPCB/NGT",
          prosecution: "Imprisonment for 1.5 to 6 years; immediate disconnection of power and water lines",
          authority: "State Pollution Control Board (SPCB / NGT)",
        },
        {
          statute: "Municipal Corporation Act (D&O Licensing)",
          violation: "Operating trade, warehouse, or commercial office without valid Municipal Trade License",
          fine: "Compounding penalty up to ₹25,000 plus sealing charges",
          prosecution: "Physical premises sealing and confiscation of unlicensed goods and inventory",
          authority: "Municipal Health Officer / Ward Trade Licensing Officer",
        },
      ];
    }
    if (service.slug === "finance-and-audit") {
      return [
        {
          statute: "Income Tax Act, 1961 – Section 43B(h)",
          violation: "Overdue payments to registered MSME suppliers beyond 15/45-day statutory limit",
          fine: "Complete disallowance of expenditure added back to taxable income taxed at 30%+",
          prosecution: "Compounding interest liability at 3x RBI Bank Rate under Section 16 MSMED Act 2006",
          authority: "Income Tax Assessing Officer / MSME Samadhaan Council",
        },
        {
          statute: "Companies Act, 2013 – CARO 2020 Clause 3(i)",
          violation: "Failure to maintain fixed asset register (FAR) or tag assets with >10% discrepancies",
          fine: "Adverse qualification in Statutory Auditor’s Report impacting debt covenants",
          prosecution: "Regulatory scrutiny by National Financial Reporting Authority (NFRA) & MCA",
          authority: "Ministry of Corporate Affairs (MCA) / NFRA",
        },
        {
          statute: "CGST Act, 2017 – Section 16(2)(aa) & 50(1)",
          violation: "Claiming Input Tax Credit (ITC) on vendor invoices not reflected in GSTR-2B",
          fine: "Mandatory reversal of ITC plus 18% per annum statutory interest from date of credit",
          prosecution: "Suspension of GSTIN registration under Rule 21A; penalty up to 100% of evaded tax",
          authority: "Superintendent of Central/State GST Audit",
        },
        {
          statute: "Companies Act, 2013 – Section 148",
          violation: "Non-compliance with Cost Accounting Standards and statutory Cost Audit filing (CRA-4)",
          fine: "Company fine up to ₹5,00,000; every officer in default fined up to ₹1,00,000",
          prosecution: "Imprisonment up to 1 year for wilful omission by executive directors",
          authority: "Cost Audit Branch / Ministry of Corporate Affairs",
        },
        {
          statute: "Companies Act, 2013 – Section 134(5)(e)",
          violation: "Absence or failure of Internal Financial Controls over Financial Reporting (IFCoFR)",
          fine: "Direct audit adverse opinion, board report disclosure of material weaknesses",
          prosecution: "Civil and criminal liability on Audit Committee and Chief Financial Officer (CFO)",
          authority: "Statutory Auditors / Registrar of Companies (ROC)",
        },
      ];
    }
    // Default: Staffing & Recruitment
    return [
      {
        statute: "CLRA Act, 1970 – Section 7 & 12",
        violation: "Deploying flexi-workforce without valid Contractor CLRA License (Form VI)",
        fine: "Fine up to ₹1,000 per day; forfeiture of contractor security deposit in state treasury",
        prosecution: "Imprisonment up to 3 months; cancellation of deployment authorization",
        authority: "Regional Labour Commissioner / Licensing Officer",
      },
      {
        statute: "Digital Personal Data Protection Act, 2023 – Sec 8(2)",
        violation: "Unconsented processing or unauthorized transfer of candidate KYC and salary data",
        fine: "Statutory monetary penalty up to ₹250 Crores adjudicated by Data Protection Board",
        prosecution: "Enforcement orders, cessation of data processing operations, reputation loss",
        authority: "Data Protection Board of India (DPBI)",
      },
      {
        statute: `${city.state} Shops & Commercial Establishments Act`,
        violation: "Employing staff without valid Gumasta registration or exceeding overtime thresholds",
        fine: "Fine up to ₹50,000 plus compounding fee for unregistered establishment",
        prosecution: "Summary prosecution before Judicial Magistrate; temporary closure order",
        authority: "Chief Inspector of Shops & Establishments",
      },
      {
        statute: "Equal Remuneration Act, 1976 / Code on Wages",
        violation: "Gender-based wage disparity or discriminatory hiring practices for same work",
        fine: "Fine up to ₹20,000 plus compounding arrears payable to affected workers",
        prosecution: "Prosecution before Labour Court / Industrial Tribunal",
        authority: "Inspector appointed under Equal Remuneration Act",
      },
      {
        statute: "Inter-State Migrant Workmen Act, 1979",
        violation: "Deploying migrant associates across state borders without displacement allowance",
        fine: "Fine up to ₹500 plus monthly statutory displacement and journey allowance arrears",
        prosecution: "Imprisonment up to 3 months for recruiting agent and principal employer",
        authority: "Controller of Migrant Workmen / Labour Commissioner",
      },
    ];
  })();

  const ptFaqAnswer = ptRule?.isRepealed
    ? `In Odisha, the State Tax on Professions Act, 2000 was abolished and repealed effective April 1, 2026. Employers in ${city.name} are legally relieved from deducting or depositing Professional Tax (₹0 PT liability across all salary brackets). Any payroll engine continuing to deduct PT in ${city.name} is in statutory violation.`
    : ptRule?.statutoryStatus === "NO_PT_STATE"
    ? `${city.state} does not impose Professional Tax on salaried employees or commercial establishments. In ${city.name}, employees enjoy ₹0 Professional Tax deduction, and employers do not require PTRC or PTEC registrations.`
    : `Professional Tax in ${city.state} is governed by the ${ptRule?.governingAct}. Salaried employees are assessed per the official schedule with deductions remitted via the ${ptRule?.portalName} on or before the ${ptRule?.monthlyPaymentDueDate}. ${ptRule?.specialProvisions?.join(" ")} Service Dial automates monthly challan reconciliation and annual Form ${ptRule?.annualReturnForm} filings under guaranteed zero-penalty SLAs.`;

  const lwfFaqAnswer = lwfRule?.hasLwf
    ? `Under the ${lwfRule.governingAct}, establishments in ${city.name} must deduct employee contributions of ${lwfRule.employeeShareMonthly} and deposit employer matching contributions of ${lwfRule.employerShareMonthly} on a ${lwfRule.remittanceFrequency} basis. Statutory cutoff dates are ${lwfRule.statutoryCutoffDates.join(" and ")} filed via ${lwfRule.portalName}. ${lwfRule.specialRules} Service Dial ensures full compliance with electronic remittance and Form ${lwfRule.statutoryReturnForm} certification.`
    : `${city.state} currently does not enforce an active statutory Labour Welfare Fund enactment. Establishments operating in ${city.name} have zero LWF remittance liability, reducing employer overheads.`;

  const minWageFaqAnswer = minWageRule
    ? `Per Gazette Notification ${minWageRule.gazetteOrderNo} for ${minWageRule.zone}, the revised monthly minimum wages are: Unskilled: ₹${minWageRule.unskilledMonthly.toLocaleString("en-IN")} (₹${minWageRule.unskilledDaily}/day); Semi-skilled: ₹${minWageRule.semiSkilledMonthly.toLocaleString("en-IN")} (₹${minWageRule.semiSkilledDaily}/day); Skilled: ₹${minWageRule.skilledMonthly.toLocaleString("en-IN")} (₹${minWageRule.skilledDaily}/day); and Highly Skilled: ₹${minWageRule.highlySkilledMonthly.toLocaleString("en-IN")} (₹${minWageRule.highlySkilledDaily}/day). Overtime hours are compensated at ${minWageRule.overtimeMultiplier}. Service Dial configures payroll algorithms to automatically reflect semi-annual VDA adjustments, eliminating Section 20 claim risks.`
    : `Minimum wages in ${city.name} are revised semi-annually based on Consumer Price Index (CPI) adjustments published by the State Labour Commissioner. Service Dial tracks all gazette notifications across Zone 1, 2, and 3 classifications to guarantee 100% wage compliance.`;

  // 8 Deep Localized Technical FAQs
  const deepFaqs = [
    {
      q: `How does the 2026 EPFO ₹25,000 wage ceiling restructuring impact corporate CTC in ${city.name}?`,
      a: `Under Central Labour Ministry Notification S.O. 5109(E), the statutory EPF wage ceiling is enhanced from ₹15,000 to ₹25,000 per month. In ${city.name}, employers must audit all employees earning between ₹15,001 and ₹25,000 who were previously treated as "excluded employees." Mandatory employer EPF contributions increase from ₹1,800 to ₹3,000 per month (an incremental ₹1,200/employee/month). EPS Account 10 contributions re-cap at ₹2,083 per month (8.33% of ₹25,000), with the remaining ₹917 directed to the EPF Account 1. Service Dial conducts complete CTC modeling to ensure smooth transitions without reducing employees' take-home pay or breaching minimum wage floors.`,
    },
    {
      q: `What are the exact Professional Tax slabs, exemptions, and filing deadlines applicable in ${city.state}?`,
      a: ptFaqAnswer,
    },
    {
      q: `What is the Labour Welfare Fund (LWF) remittance calendar and statutory ratio in ${city.state}?`,
      a: lwfFaqAnswer,
    },
    {
      q: `What are the official minimum wage and semi-annual VDA rates across skill tiers in ${city.state}?`,
      a: minWageFaqAnswer,
    },
    {
      q: `What are the Factories Act 1948 site sanction and Form 1 CIF approval requirements in ${city.name}?`,
      a: `Under Section 6 of the Factories Act, 1948 read with State Factory Rules, any manufacturing facility in ${city.name} employing 10+ workers (with power) or 20+ workers (without power)—or 20/40 workers in states with doubled thresholds—must obtain prior site plan approval from the Chief Inspector of Factories (DISH). Applications require architectural blueprints (scale 1:100), chartered structural engineer Form 1-A stability certificates, machinery layout diagrams with emergency egress, and ventilation load calculations. Operating without Form 1 sanction carries imprisonment up to 2 years and ₹1,00,000 fines under Section 92. Service Dial manages end-to-end DISH liaison and Form 2 factory license renewals.`,
    },
    {
      q: `What is the threshold for Contract Labour (CLRA) licensing and Principal Employer registration in ${city.name}?`,
      a: `Under the Contract Labour (Regulation and Abolition) Act, 1970, a Principal Employer in ${city.name} deploying 20 or more contract workers (or 50 workers in amended states) on any day of the preceding 12 months must obtain a Form II Certificate of Registration. Contractors deploying contract workers must hold a valid Form VI License backed by the Principal Employer's Form V Certificate. Service Dial serves as an institutional flexi-staffing partner, maintaining master statutory registers (Forms XII, XIII, XVII, XIX) and providing verified ECR challans to ringfence clients against co-employment claims.`,
    },
    {
      q: `How does Service Dial eliminate co-employment risks and deliver statutory indemnity in ${city.name}?`,
      a: `Service Dial operates strictly on a "Contract for Service" (deliverable-based SLA) rather than a "Contract of Service" (supervision-based employment). We execute bilateral institutional NDAs, maintain direct supervisory control, remit all statutory dues under our independent EPFO/ESIC sub-codes, and issue monthly statutory compliance indemnity certificates. In the event of a labour inspection in ${city.name}, our regulatory defense counsel represents the file directly before the Labour Officer.`,
    },
    {
      q: `What municipal trade license and health permit clearances are mandatory for establishments in ${city.name}?`,
      a: `Every commercial office, IT GCC, retail store, and industrial warehouse operating within ${city.name} must hold a valid Certificate of Enlistment or Trade License from the local municipal corporation. Clearances require property tax PID numbers, lease agreements, fire safety compliance certificates, and sanctioned building plans. Failure to renew trade licenses leads to compounding fines, trade sealing, and business interruption. Service Dial handles annual municipal filings and representation across municipal ward offices.`,
    },
  ];

  // Other services in the same city (Lateral linking)
  const otherServices = Object.values(SERVICES_CATALOG).filter(
    (s) => s.slug !== service.slug
  );

  // Other cities offering the same service (Geographic spoke linking)
  const otherCities = Object.values(CITIES_DATA).filter(
    (c) => c.slug !== city.slug
  );

  // JSON-LD Service & FAQ Schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}`,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: "Service Dial Talent Management Private Limited",
      url: "https://servicedialtm.com",
      logo: "https://servicedialtm.com/logo.png",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      sameAs: city.wikipediaUri,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Solutions in ${city.name}`,
      itemListElement: service.capabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${cap.title} in ${city.name}`,
          description: cap.description,
        },
      })),
    },
    description: blufAnswer,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: deepFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden">
      <EavMasterSchema
        pageType="ItemPage"
        title={`${service.name} in ${city.name}, ${city.state}`}
        description={blufAnswer}
        url={`https://servicedialtm.com/services/${service.slug}/${city.slug}`}
        breadcrumbs={[
          { name: "Home", url: "https://servicedialtm.com" },
          { name: "Services", url: "https://servicedialtm.com/services" },
          { name: service.name, url: `https://servicedialtm.com/services/${service.slug}` },
          { name: `${city.name}`, url: `https://servicedialtm.com/services/${service.slug}/${city.slug}` },
        ]}
        faqs={deepFaqs.map((f) => ({ question: f.q, answer: f.a }))}
        serviceData={{
          name: `${service.name} in ${city.name}`,
          description: blufAnswer,
          serviceType: service.name,
          areaServed: city.name,
          areaServedUri: city.wikipediaUri,
          category:
            service.slug === "finance-and-audit"
              ? "AccountingService"
              : service.slug === "compliance-services"
              ? "LegalService"
              : service.slug === "staffing-and-recruitment"
              ? "EmploymentAgency"
              : "Service",
        }}
      />

      {/* Ambient Top Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00cfdc]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[#b80f68]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Breadcrumbs Bar */}
      <div className="relative pt-8 pb-4 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}` },
              { label: `${city.name}`, href: `/services/${service.slug}/${city.slug}` },
            ]}
          />
        </div>
      </div>

      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ── SECTION 1: HERO & BLUF DIRECT ANSWER CARD (TOP 400PX) ── */}
          <section>
            <ScrollReveal direction="up" distance={25}>
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] bg-[#b80f68]/10 border border-[#b80f68]/20 rounded-full px-3 py-1">
                    {city.name}, {city.state}
                  </span>
                  <span className="inline-flex items-center text-xs font-mono font-semibold text-[#0284c7] bg-[#0284c7]/10 border border-[#0284c7]/20 rounded-full px-3 py-1">
                    LGD Code {city.lgdCode}
                  </span>
                  <span className="inline-flex items-center text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                    2026 Statutory Calibrated
                  </span>
                </div>

                <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-5">
                  Specialized {service.name}{" "}
                  <span className="bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] bg-clip-text text-transparent">
                    in {city.name}.
                  </span>
                </h1>

                <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-6">
                  Empowering enterprises, multinational GCCs, and high-growth manufacturing plants across {city.name} with institutional back-office execution, verified SLAs, and zero-defect statutory compliance.
                </p>

                {/* HIGH VISIBILITY BLUF DIRECT ANSWER CARD */}
                <div className="rounded-2xl border-2 border-[#b80f68]/20 bg-white p-6 sm:p-7 shadow-sm text-xs sm:text-sm leading-relaxed text-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="font-mono font-bold text-[#b80f68] uppercase tracking-wider text-xs">
                      ⚡ Bottom-Line Up Front (BLUF) Statutory Mandate:
                    </p>
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">
                      Authoritative Citation Engine
                    </span>
                  </div>
                  <p className="text-slate-700 font-sans leading-relaxed mb-4 text-sm font-medium">
                    {blufAnswer}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Execution SLA:</span>
                      <strong className="text-slate-900 font-outfit">24–72 Hour Turnaround</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Legal Shield:</span>
                      <strong className="text-slate-900 font-outfit">Bilateral Mutual NDA</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Audit Assurance:</span>
                      <strong className="text-emerald-700 font-outfit">100% Zero-Defect Guarantee</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] hover:opacity-95 text-white shadow-md transition-all active:scale-95"
                  >
                    Schedule {service.shortName} Consultation in {city.name} →
                  </Link>
                  <Link
                    href={`/locations/${city.stateSlug}`}
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-all shadow-2xs"
                  >
                    View {city.state} Hub Directory
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ── SECTION 2: REGIONAL INDUSTRIAL CORRIDOR INTELLIGENCE ── */}
          <section>
            <ScrollReveal direction="up" distance={25}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="max-w-3xl mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                    Regional Ecosystem Context
                  </span>
                  <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                    Industrial Clusters &amp; Manufacturing Corridors in {city.name}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {city.economicProfile} Service Dial deploys specialized workflows tailored to the dominant industry clusters operating within {city.name} and surrounding industrial zones.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {city.clusters.map((cluster) => (
                    <div
                      key={cluster.name}
                      className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA]"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-1">
                        {cluster.type}
                      </span>
                      <p className="font-outfit text-sm font-bold text-slate-900 mb-2">{cluster.name}</p>
                      <ul className="space-y-1.5">
                        {cluster.keyZones.map((zone) => (
                          <li key={zone} className="text-xs font-sans text-slate-600 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b80f68] shrink-0" />
                            {zone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border-l-4 border-[#b80f68] bg-[#F8F9FA] text-xs sm:text-sm text-slate-600 font-sans">
                  <p className="font-bold text-slate-900 mb-1 font-outfit">
                    Statutory &amp; Labour Compliance Nuance for {city.name}:
                  </p>
                  <p>{serviceComplianceNuance}</p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ── SECTION 3: 5-COLUMN STATUTORY NON-COMPLIANCE & PENALTY MATRIX ── */}
          <section>
            <ScrollReveal direction="up" distance={25}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
                <div className="max-w-3xl mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 rounded-full px-3 py-1 inline-block mb-3">
                    Statutory Risk Assessment
                  </span>
                  <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                    Statutory Non-Compliance &amp; Penalty Exposure Matrix
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Operating in {city.name} without rigorous statutory governance triggers immediate corporate liability, monetary compounding surcharges, and criminal prosecution under Indian labour and corporate statutes:
                  </p>
                </div>

                {/* High Contrast 5-Column Table */}
                <div className="overflow-x-auto -mx-6 sm:mx-0">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-outfit uppercase tracking-wider text-[11px]">
                        <th className="py-3.5 px-4 font-bold">Governing Statute</th>
                        <th className="py-3.5 px-4 font-bold">Specific Violation Description</th>
                        <th className="py-3.5 px-4 font-bold text-rose-700">Financial Penalty / Surcharge</th>
                        <th className="py-3.5 px-4 font-bold">Criminal Prosecution Risk</th>
                        <th className="py-3.5 px-4 font-bold">Cognizance Authority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {penaltyMatrix.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-bold text-slate-900 font-outfit whitespace-nowrap">
                            {row.statute}
                          </td>
                          <td className="py-3 px-4 text-slate-600 leading-relaxed min-w-[200px]">
                            {row.violation}
                          </td>
                          <td className="py-3 px-4 font-semibold text-rose-700 leading-relaxed min-w-[180px]">
                            {row.fine}
                          </td>
                          <td className="py-3 px-4 text-slate-700 font-medium leading-relaxed min-w-[180px]">
                            {row.prosecution}
                          </td>
                          <td className="py-3 px-4 text-slate-500 font-mono text-[11px] whitespace-nowrap">
                            {row.authority}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Service Dial delivers 100% indemnified regulatory defense for all managed clients.
                  </span>
                  <Link
                    href="/contact"
                    className="font-bold text-[#b80f68] hover:underline"
                  >
                    Request Comprehensive Compliance Audit →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ── SECTION 4: LOCAL REGULATORY INSPECTORATE DIRECTORY ── */}
          {inspectorate && (
            <section>
              <ScrollReveal direction="up" distance={25}>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                  <div className="max-w-3xl mb-8">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-2">
                      Local Jurisdiction Directory
                    </span>
                    <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                      Physical Regulatory Inspectorates in {city.name}
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      Statutory audits, notice hearings, and physical factory inspections in {city.name} are adjudicated by the following state and central labour authorities:
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* DLC Office */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA] space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#b80f68] block">
                        Labour Commissioner (DLC)
                      </span>
                      <h4 className="font-outfit text-sm font-bold text-slate-900">
                        {inspectorate.dlcInspectorate.officeName}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        📍 {inspectorate.dlcInspectorate.physicalAddress}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono">
                        Jurisdiction: {inspectorate.dlcInspectorate.jurisdiction}
                      </p>
                      {inspectorate.dlcInspectorate.contactDesk && (
                        <p className="text-[11px] text-[#0284c7] font-semibold">
                          📞 {inspectorate.dlcInspectorate.contactDesk}
                        </p>
                      )}
                    </div>

                    {/* DISH Factories Inspectorate */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA] space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#2e0d82] block">
                        Factories Inspectorate (DISH)
                      </span>
                      <h4 className="font-outfit text-sm font-bold text-slate-900">
                        {inspectorate.dishInspectorate.officeName}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        📍 {inspectorate.dishInspectorate.physicalAddress}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono">
                        Jurisdiction: {inspectorate.dishInspectorate.jurisdiction}
                      </p>
                      {inspectorate.dishInspectorate.contactDesk && (
                        <p className="text-[11px] text-[#0284c7] font-semibold">
                          📞 {inspectorate.dishInspectorate.contactDesk}
                        </p>
                      )}
                    </div>

                    {/* EPFO Regional Office */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA] space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#0284c7] block">
                        Provident Fund Commissioner (EPFO)
                      </span>
                      <h4 className="font-outfit text-sm font-bold text-slate-900">
                        {inspectorate.epfoRegionalOffice.officeName}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        📍 {inspectorate.epfoRegionalOffice.physicalAddress}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono">
                        Code: {inspectorate.epfoRegionalOffice.jurisdiction}
                      </p>
                    </div>

                    {/* ESIC Sub-Regional Office */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA] space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block">
                        State Insurance (ESIC SRO)
                      </span>
                      <h4 className="font-outfit text-sm font-bold text-slate-900">
                        {inspectorate.esicSubRegionalOffice.officeName}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        📍 {inspectorate.esicSubRegionalOffice.physicalAddress}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono">
                        Region: {inspectorate.esicSubRegionalOffice.jurisdiction}
                      </p>
                    </div>

                    {/* Municipal Corporation */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA] space-y-2 sm:col-span-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-700 block">
                        Urban Local Body (Municipal Trade License)
                      </span>
                      <h4 className="font-outfit text-sm font-bold text-slate-900">
                        {inspectorate.municipalLicensingBody.officeName}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        📍 {inspectorate.municipalLicensingBody.physicalAddress}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono">
                        Statutory Base: {inspectorate.municipalLicensingBody.department}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>
          )}

          {/* ── SECTION 5: 5-STAGE OPERATIONAL AUDIT & VERIFICATION PIPELINE ── */}
          <section>
            <ScrollReveal direction="up" distance={25}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="max-w-3xl mb-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                    Service Dial Delivery Architecture
                  </span>
                  <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                    5-Stage Verification &amp; Statutory SLA Pipeline
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Our proprietary compliance execution framework guarantees 100% data integrity from onboarding through government portal challan clearance:
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    {
                      step: "01",
                      title: "Master Data Scrubbing",
                      desc: "Aadhaar KYC, UAN seeding, ESIC IP allocation, and Form 11 declarations scrubbed before payroll ingestion.",
                    },
                    {
                      step: "02",
                      title: "Biometric Triangulation",
                      desc: "Shift muster triangulation against Section 59 overtime limits (2x rate calculation) and leave balance tracking.",
                    },
                    {
                      step: "03",
                      title: "Single-Window E-Filing",
                      desc: "Automated generation of ECR challans, state PT filings, and LWF returns with TRRN digital proof vouchers.",
                    },
                    {
                      step: "04",
                      title: "Inspection Defense Desk",
                      desc: "Senior compliance directors physically represent records during DLC/DISH surprise audits with zero client exposure.",
                    },
                    {
                      step: "05",
                      title: "Safe Archive Dossier",
                      desc: "Annual Form 16, Form III-A, and statutory audit registers permanently archived with encrypted cloud backup.",
                    },
                  ].map((pipe) => (
                    <div
                      key={pipe.step}
                      className="p-5 rounded-2xl border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-2xl font-black text-[#b80f68] block mb-2">
                          {pipe.step}
                        </span>
                        <h4 className="font-outfit text-sm font-bold text-slate-900 mb-2 leading-tight">
                          {pipe.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-600 leading-relaxed">
                          {pipe.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ── SECTION 6: SLA & PRACTICE CAPABILITIES ── */}
          <section>
            <ScrollReveal direction="up" distance={25}>
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                  Service Delivery Matrix
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Documented Execution Standards in {city.name}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {service.slaMetrics.map((metric, idx) => (
                <ScrollReveal
                  key={metric.label}
                  direction="up"
                  distance={20}
                  delay={idx * 60}
                >
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between">
                    <div>
                      <p className="font-outfit text-3xl font-black text-[#b80f68] tracking-tight">
                        {metric.value}
                      </p>
                      <p className="font-outfit text-sm font-bold text-slate-900 mt-1">{metric.label}</p>
                    </div>
                    <p className="text-xs font-sans text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-2">
                      {metric.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {service.capabilities.map((cap, i) => (
                <ScrollReveal
                  key={cap.title}
                  direction={i % 2 === 0 ? "left" : "right"}
                  distance={20}
                  delay={i * 60}
                >
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs flex gap-5">
                    <span className="font-mono text-xl font-black text-slate-300 select-none shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-outfit text-base font-bold text-slate-900 mb-2">
                        {cap.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: 8 DEEP LOCALIZED TECHNICAL FAQS (GEO / AEO / PERPLEXITY) ── */}
          <section>
            <ScrollReveal direction="up" distance={25}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="max-w-2xl mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b80f68] block mb-2">
                    Authoritative Regulatory FAQs
                  </span>
                  <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                    Frequently Asked Legal &amp; Compliance Inquiries in {city.name}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Direct statutory answers citing Central &amp; State Gazettes, Labour Ministry circulars, and court precedents:
                  </p>
                </div>

                <div className="space-y-4">
                  {deepFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-[#F8F9FA] space-y-2"
                    >
                      <h3 className="font-outfit text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.q}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ── SECTION 8: LATERAL & GEOGRAPHIC SPOKE LINKING ── */}
          <section className="pt-8 border-t border-slate-200">
            <ScrollReveal direction="up" distance={20}>
              <div className="mb-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900">
                  Other Enterprise Managed Services in {city.name}
                </h3>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Explore unified back-office support across our four practice pillars in {city.name}:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3.5 mb-10">
                {otherServices.map((otherSvc) => (
                  <Link
                    key={otherSvc.slug}
                    href={`/services/${otherSvc.slug}/${city.slug}`}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#b80f68]/40 hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-slate-900 group-hover:text-[#b80f68] transition-colors">
                      {otherSvc.name} in {city.name}
                    </span>
                    <span className="text-xs text-[#b80f68] group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                ))}
              </div>

              <div className="mb-4">
                <h3 className="font-outfit text-lg font-bold text-slate-900">
                  {service.name} Across Major Indian Commercial Hubs
                </h3>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Nationwide deployment across primary technology, automotive, and manufacturing metros:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {otherCities.map((otherCity) => (
                  <Link
                    key={otherCity.slug}
                    href={`/services/${service.slug}/${otherCity.slug}`}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:border-[#b80f68]/40 hover:text-slate-900 text-slate-600 transition-all font-medium text-xs shadow-2xs"
                  >
                    {service.shortName} in {otherCity.name}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* ── SECTION 9: BOTTOM ENTERPRISE LEAD DOCK ── */}
          <section className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7]" />
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#b80f68]">
                  Direct {city.name} Corporate Desk
                </span>
                <h2 className="font-outfit text-2xl sm:text-3xl font-black text-slate-900">
                  Initiate Your {service.shortName} Mandate in {city.name}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every mandate is executed under strict bilateral NDA &amp; DPDP Act protection. Receive verified SLAs and tailored pricing within 24–72 hours.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                  <a
                    href="tel:+918777864949"
                    className="font-bold text-slate-900 hover:text-[#b80f68] underline"
                  >
                    📞 +91 87778 64949
                  </a>
                  <Link
                    href="/tools"
                    className="font-semibold text-[#b80f68] hover:underline"
                  >
                    Multi-State Statutory Tools →
                  </Link>
                  <Link
                    href="/contact"
                    className="font-semibold text-slate-500 hover:text-slate-900 underline"
                  >
                    Full Mandate Form
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <CalculatorQuickLeadForm
                  service={service.name}
                  heading={`Request ${service.shortName} Proposal in ${city.name}`}
                  ctaLabel={`Get ${city.name} Proposal & Callback`}
                  contextSummary={`Commercial City Page Lead — Service: ${service.name} | City: ${city.name}, ${city.state}`}
                  analyticsChannel="city_service_page"
                  variant="light"
                  analyticsMeta={{ city: city.slug, service_slug: service.slug }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
