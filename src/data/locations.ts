export interface IndustrialCluster {
  name: string;
  type: "IT Park" | "Manufacturing / Industrial" | "BFSI / Financial Hub" | "Special Economic Zone (SEZ)";
  keyZones: string[];
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  lgdCode: number;
  tier: 1 | 2;
  wikipediaUri: string;
  overview: string;
  economicProfile: string;
  dominantIndustries: string[];
  clusters: IndustrialCluster[];
  localComplianceNuance: string;
  averageSourcingSLA: string;
  nearbyHubs: { name: string; slug: string }[];
}

export interface StateData {
  slug: string;
  name: string;
  lgdStateCode: number;
  capital: string;
  regionalLabourNuances: string;
  cities: string[];
}

export const STATES_DATA: Record<string, StateData> = {
  maharashtra: {
    slug: "maharashtra",
    name: "Maharashtra",
    lgdStateCode: 27,
    capital: "Mumbai",
    regionalLabourNuances:
      "Governed by the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017, Maharashtra State Professional Tax Act, and revised state minimum wages updated semi-annually under the Minimum Wages Act.",
    cities: ["mumbai", "pune"],
  },
  karnataka: {
    slug: "karnataka",
    name: "Karnataka",
    lgdStateCode: 29,
    capital: "Bengaluru",
    regionalLabourNuances:
      "Subject to the Karnataka Shops and Commercial Establishments Act, 1961, Karnataka Professional Tax, and the Karnataka Compulsory Gratuity Insurance Rules. IT/ITeS sector exemptions on standing orders are subject to annual statutory compliance filings.",
    cities: ["bengaluru"],
  },
  telangana: {
    slug: "telangana",
    name: "Telangana",
    lgdStateCode: 36,
    capital: "Hyderabad",
    regionalLabourNuances:
      "Regulated under the Telangana Shops and Establishments Act, 1988, mandatory TS-iPASS single-desk labor approvals, and state labor welfare fund contributions with digital compliance oversight.",
    cities: ["hyderabad"],
  },
  delhi: {
    slug: "delhi",
    name: "Delhi (NCT)",
    lgdStateCode: 7,
    capital: "New Delhi",
    regionalLabourNuances:
      "Features among the highest statutory minimum wage rates in India, updated semi-annually in April and October. Governed under the Delhi Shops and Establishments Act, 1954 and rigorous vendor compliance audit norms.",
    cities: ["delhi"],
  },
  haryana: {
    slug: "haryana",
    name: "Haryana",
    lgdStateCode: 6,
    capital: "Chandigarh",
    regionalLabourNuances:
      "Regulated under the Punjab Shops and Commercial Establishments Act (as applied to Haryana) and Haryana State Employment of Local Candidates framework. Strong focus on corporate labor audit readiness in Gurugram.",
    cities: ["gurugram"],
  },
  "uttar-pradesh": {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    lgdStateCode: 9,
    capital: "Lucknow",
    regionalLabourNuances:
      "Regulated under the Uttar Pradesh Dookan Aur Vanijya Adhishthan Adhiniyam, 1962, state-level electronic labor register filings via Nivesh Mitra portal, and manufacturing compliance guidelines across Gautam Buddha Nagar (Noida).",
    cities: ["noida"],
  },
  "tamil-nadu": {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    lgdStateCode: 33,
    capital: "Chennai",
    regionalLabourNuances:
      "Operates under the Tamil Nadu Shops and Establishments Act, 1947, mandatory 24/7 permissions for ITeS with stringent transport and safety compliances, and active inspectorates across SIPCOT industrial corridors.",
    cities: ["chennai"],
  },
  gujarat: {
    slug: "gujarat",
    name: "Gujarat",
    lgdStateCode: 24,
    capital: "Gandhinagar",
    regionalLabourNuances:
      "Governed by the Gujarat Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2019, simplified labor inspection schemes, and specialized regulatory guidelines for GIFT City IFSC entities.",
    cities: ["ahmedabad"],
  },
  "west-bengal": {
    slug: "west-bengal",
    name: "West Bengal",
    lgdStateCode: 19,
    capital: "Kolkata",
    regionalLabourNuances:
      "Governed by the West Bengal Shops and Establishments Act, 1963, bi-annual minimum wage revisions for scheduled employments, and specialized compliance oversight across Salt Lake Sector V and New Town tech zones.",
    cities: ["kolkata"],
  },
};

export const CITIES_DATA: Record<string, CityData> = {
  bengaluru: {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    stateSlug: "karnataka",
    lgdCode: 556,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Bangalore",
    overview:
      "Bengaluru is India's leading technology and innovation hub, housing global GCCs, R&D centers, and hyper-growth enterprise tech headquarters. Service Dial supports enterprises across Bengaluru with niche IT sourcing, CXO search, and scalable payroll compliance.",
    economicProfile:
      "Highest concentration of software engineering, cloud, AI/ML, and SaaS talent in South Asia. Massive GCC expansion along the Outer Ring Road and Whitefield corridors.",
    dominantIndustries: ["Enterprise Software", "AI & Data Science", "Fintech", "GCCs / Captive Centers", "Aerospace & Deeptech"],
    clusters: [
      {
        name: "Outer Ring Road (ORR) Corridors",
        type: "IT Park",
        keyZones: ["Bellandur", "Marathahalli", "Kadubeesanahalli", "Sarjapur Junction"],
      },
      {
        name: "Whitefield & EPIP Zone",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["ITPB", "EPIP Industrial Area", "Hoodi"],
      },
      {
        name: "Electronic City Phases I & II",
        type: "IT Park",
        keyZones: ["Velankani Tech Park", "Cyber Park", "Hosur Road Corridor"],
      },
    ],
    localComplianceNuance:
      "Mandatory adherence to Karnataka Shops Act annual returns, Professional Tax brackets, and statutory IT sector compliance protocols for 24/7 workforce operations.",
    averageSourcingSLA: "24–48 hours for tech shortlists; 10–14 days for CXO mandates",
    nearbyHubs: [
      { name: "Mysuru", slug: "mysuru" },
      { name: "Hosur", slug: "hosur" },
      { name: "Hyderabad", slug: "hyderabad" },
    ],
  },
  mumbai: {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 519,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Mumbai",
    overview:
      "As India's financial capital, Mumbai commands the highest density of BFSI headquarters, investment funds, and corporate conglomerates. Service Dial delivers executive search, finance & audit outsourcing, and vendor compliance for premier institutions.",
    economicProfile:
      "Dominated by BFSI, corporate leadership, FMCG headquarters, media, and pharmaceutical leaders centered around BKC, Lower Parel, and Nariman Point.",
    dominantIndustries: ["Banking & Financial Services (BFSI)", "Capital Markets", "Corporate HQs", "Pharma & Life Sciences", "Media & Entertainment"],
    clusters: [
      {
        name: "Bandra-Kurla Complex (BKC)",
        type: "BFSI / Financial Hub",
        keyZones: ["G Block", "C-65", "International Finance Hub"],
      },
      {
        name: "Lower Parel & Worli Corridor",
        type: "BFSI / Financial Hub",
        keyZones: ["Peninsula Business Park", "One World Center", "Kamala Mills"],
      },
      {
        name: "Andheri-Powai Commercial Hub",
        type: "IT Park",
        keyZones: ["MIDC Andheri", "Hiranandani Business Park", "SEEPZ"],
      },
    ],
    localComplianceNuance:
      "Strict compliance with Maharashtra Shops and Establishments Act 2017, BMC licensing norms, and Maharashtra State Professional Tax returns.",
    averageSourcingSLA: "24–72 hours for BFSI leadership & specialist finance talent",
    nearbyHubs: [
      { name: "Pune", slug: "pune" },
      { name: "Thane", slug: "thane" },
      { name: "Navi Mumbai", slug: "navi-mumbai" },
    ],
  },
  pune: {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 521,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Pune",
    overview:
      "Pune is a premier dual-powerhouse for both technology engineering and automotive manufacturing. Service Dial accelerates tech staffing in Hinjawadi while fulfilling volume workforce and labor compliance across MIDC industrial belts.",
    economicProfile:
      "Robust synergy between large IT campuses, GCC software centers, and heavy automotive, engineering, and manufacturing clusters.",
    dominantIndustries: ["Automotive & Auto-Components", "IT Software & Cloud", "Industrial Manufacturing", "Biotech", "Fintech"],
    clusters: [
      {
        name: "Rajiv Gandhi Infotech Park (Hinjawadi)",
        type: "IT Park",
        keyZones: ["Phase 1", "Phase 2", "Phase 3"],
      },
      {
        name: "Magarpatta City & Kharadi EON Free Zone",
        type: "IT Park",
        keyZones: ["EON IT Park Phase I & II", "Cybercity Magarpatta", "World Trade Center"],
      },
      {
        name: "Bhosari & Chakan MIDC Industrial Belts",
        type: "Manufacturing / Industrial",
        keyZones: ["Chakan Phase 1-4", "Talwade IT Park", "Pimpri-Chinchwad"],
      },
    ],
    localComplianceNuance:
      "Rigorous adherence to Maharashtra Factory Act standards in MIDC belts and IT SEZ shift guidelines with state minimum wage structures.",
    averageSourcingSLA: "24–72 hours for IT and engineering roles; 48 hours for contract staffing",
    nearbyHubs: [
      { name: "Mumbai", slug: "mumbai" },
      { name: "Pimpri-Chinchwad", slug: "pimpri-chinchwad" },
      { name: "Aurangabad", slug: "aurangabad" },
    ],
  },
  hyderabad: {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    stateSlug: "telangana",
    lgdCode: 540,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Hyderabad",
    overview:
      "Hyderabad is a global titan in biotechnology, pharmaceutical manufacturing, and enterprise cloud technologies. Service Dial provides end-to-end recruitment, payroll automation, and statutory audit readiness across Cyberabad.",
    economicProfile:
      "Unmatched growth in mega cloud infrastructure, GCCs, semiconductor design, and vaccine/pharmaceutical research and production.",
    dominantIndustries: ["Cloud Infrastructure", "Pharma & Life Sciences", "Enterprise Tech", "Fintech", "Semiconductors"],
    clusters: [
      {
        name: "HITEC City & Madhapur",
        type: "IT Park",
        keyZones: ["Cyber Gateway", "Cyber Towers", "Mindspace IT Park"],
      },
      {
        name: "Gachibowli & Financial District",
        type: "BFSI / Financial Hub",
        keyZones: ["Nanakramguda", "Waverock", "ISB Road"],
      },
      {
        name: "Genome Valley & Shamirpet",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Biotech Corridor", "MN Park", "TSIIC SEZ"],
      },
    ],
    localComplianceNuance:
      "Adherence to Telangana Shops and Establishments Act, TS-iPASS expedited statutory compliances, and periodic labor welfare deductions.",
    averageSourcingSLA: "24–72 hours for tech and life sciences shortlists",
    nearbyHubs: [
      { name: "Secunderabad", slug: "secunderabad" },
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Warangal", slug: "warangal" },
    ],
  },
  delhi: {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi (NCT)",
    stateSlug: "delhi",
    lgdCode: 84,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Delhi",
    overview:
      "As the national capital, Delhi represents the administrative and commercial nerve center of North India. Service Dial enables public policy, multinational, and retail leaders with strategic leadership hiring and labor compliance.",
    economicProfile:
      "High concentration of corporate legal, public relations, consulting, telecommunications, and regional retail headquarters.",
    dominantIndustries: ["Consulting & Legal", "Telecom", "Retail & Trade", "Media", "Public Policy & Advisory"],
    clusters: [
      {
        name: "Connaught Place & Barakhamba Road",
        type: "BFSI / Financial Hub",
        keyZones: ["Inner Circle", "Statesman House", "KG Marg"],
      },
      {
        name: "Aerocity Hospitality & Commercial District",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Worldmark 1, 2 & 3", "GMR Hospitality District"],
      },
      {
        name: "Okhla Industrial Area Phases I, II & III",
        type: "Manufacturing / Industrial",
        keyZones: ["Okhla Estate", "DDA Industrial Pocket"],
      },
    ],
    localComplianceNuance:
      "Strict monitoring of semi-annual Delhi Minimum Wage revisions and Delhi Shops Act 1954 compliance.",
    averageSourcingSLA: "24–72 hours for mid to senior advisory and operational positions",
    nearbyHubs: [
      { name: "Gurugram", slug: "gurugram" },
      { name: "Noida", slug: "noida" },
      { name: "Faridabad", slug: "faridabad" },
    ],
  },
  gurugram: {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    stateSlug: "haryana",
    lgdCode: 70,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Gurgaon",
    overview:
      "Gurugram is North India’s premier financial, consulting, and Fortune 500 corporate center. Service Dial powers rapid IT staffing, executive CXO recruitment, and finance/audit outsourcing across DLF Cyber City and Golf Course Road.",
    economicProfile:
      "Over 250 Fortune 500 offices, major commercial banks, management consulting giants, and consumer internet unicorns.",
    dominantIndustries: ["Management Consulting", "BFSI", "Consumer Internet", "Automotive HQs", "Real Estate"],
    clusters: [
      {
        name: "DLF Cyber City & Cyber Hub",
        type: "IT Park",
        keyZones: ["Building 5, 8, 10 & 14", "Infinity Towers", "DLF Downtown"],
      },
      {
        name: "Golf Course Road & Golf Course Extension",
        type: "BFSI / Financial Hub",
        keyZones: ["Horizon Center", "AIPL Business Club", "Sector 42-43"],
      },
      {
        name: "Udyog Vihar Phases I-V & Manesar IMT",
        type: "Manufacturing / Industrial",
        keyZones: ["Udyog Vihar", "IMT Manesar Sector 1-8"],
      },
    ],
    localComplianceNuance:
      "Compliance with Haryana State Labor Department portal, local candidate hiring verification protocols, and annual PF/ESI audits.",
    averageSourcingSLA: "24–48 hours for consulting and corporate tech profiles",
    nearbyHubs: [
      { name: "Delhi", slug: "delhi" },
      { name: "Noida", slug: "noida" },
      { name: "Manesar", slug: "manesar" },
    ],
  },
  noida: {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    lgdCode: 141,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Noida",
    overview:
      "Noida and Greater Noida anchor North India’s electronics manufacturing, IT outsourcing, and mobile assembly hub. Service Dial delivers high-volume tech recruitment, blue-collar staffing, and factory compliance.",
    economicProfile:
      "Rapidly rising technology corridor along Noida Expressway with immense electronics hardware manufacturing ecosystems in Greater Noida.",
    dominantIndustries: ["Electronics & Hardware Manufacturing", "IT/ITeS Outsourcing", "Media & Entertainment", "E-commerce Logistics"],
    clusters: [
      {
        name: "Noida-Greater Noida Expressway Corridor",
        type: "IT Park",
        keyZones: ["Sector 125-144", "Advant Navis", "Oxygen Business Park"],
      },
      {
        name: "Sector 62 & 63 Institutional Tech Hub",
        type: "IT Park",
        keyZones: ["Electronic City Sector 62", "Logix Cyber Park"],
      },
      {
        name: "Ecotech Industrial Area (Greater Noida)",
        type: "Manufacturing / Industrial",
        keyZones: ["Ecotech I-XI", "Surajpur Industrial Area"],
      },
    ],
    localComplianceNuance:
      "UP Dookan Aur Vanijya Adhishthan compliance, UP Labor Welfare Fund, and EPF/ESIC industrial inspections.",
    averageSourcingSLA: "24–72 hours for IT and industrial engineering staffing",
    nearbyHubs: [
      { name: "Greater Noida", slug: "greater-noida" },
      { name: "Delhi", slug: "delhi" },
      { name: "Ghaziabad", slug: "ghaziabad" },
    ],
  },
  chennai: {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    lgdCode: 602,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Chennai",
    overview:
      "Known as the 'Detroit of South Asia' and a global SaaS capital, Chennai combines heavy industrial excellence with cutting-edge software. Service Dial provides specialized tech staffing and industrial workforce solutions.",
    economicProfile:
      "Global leader in automotive assembly, heavy machinery, global SaaS product firms, healthcare, and financial BPO centers.",
    dominantIndustries: ["Automotive & EV", "Global SaaS", "Healthcare & Medtech", "Financial BPO", "Hardware Electronics"],
    clusters: [
      {
        name: "Old Mahabalipuram Road (OMR) - IT Corridor",
        type: "IT Park",
        keyZones: ["TIDEL Park", "Ascendas International Tech Park", "Sholinganallur"],
      },
      {
        name: "SIPCOT Industrial Park (Sriperumbudur & Oragadam)",
        type: "Manufacturing / Industrial",
        keyZones: ["Sriperumbudur Corridor", "Oragadam Auto Hub", "Vallam Vadagal"],
      },
      {
        name: "Guindy & Mount Poonamallee Corridor",
        type: "IT Park",
        keyZones: ["DLF Cybercity Chennai", "Olympia Tech Park"],
      },
    ],
    localComplianceNuance:
      "Strict monitoring of Tamil Nadu Shops Act 24/7 night shift permissions for women, statutory PF/ESI returns, and SIPCOT industrial environmental and labor guidelines.",
    averageSourcingSLA: "24–72 hours for automotive engineers and SaaS developers",
    nearbyHubs: [
      { name: "Kanchipuram", slug: "kanchipuram" },
      { name: "Coimbatore", slug: "coimbatore" },
      { name: "Bengaluru", slug: "bengaluru" },
    ],
  },
  ahmedabad: {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 440,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Ahmedabad",
    overview:
      "Ahmedabad is Western India’s booming commercial center for pharmaceuticals, chemicals, textiles, and financial tech at GIFT City. Service Dial supports enterprises with leadership search, statutory audit, and payroll compliance.",
    economicProfile:
      "Global pharmaceuticals center, heavy chemicals and textile industry, coupled with India’s first International Financial Services Centre (GIFT City).",
    dominantIndustries: ["Pharmaceuticals & API", "Fintech & IFSC (GIFT City)", "Chemicals & Petrochemicals", "Textiles", "Engineering"],
    clusters: [
      {
        name: "GIFT City (Gandhinagar-Ahmedabad IFSC)",
        type: "BFSI / Financial Hub",
        keyZones: ["GIFT SEZ", "GIFT Domestic Area", "Fintech Accelerator"],
      },
      {
        name: "Sanand & Changodar GIDC Belts",
        type: "Manufacturing / Industrial",
        keyZones: ["Sanand GIDC Phase II", "Changodar Industrial Estate", "Moraiya"],
      },
      {
        name: "SG Highway Commercial Corridor",
        type: "IT Park",
        keyZones: ["Prahlad Nagar", "Sindhu Bhavan Road", "Science City"],
      },
    ],
    localComplianceNuance:
      "Governed by the Gujarat Shops and Establishments Act 2019, GIDC industrial safety standards, and specialized dual-regulatory compliance for GIFT City IFSC entities.",
    averageSourcingSLA: "24–72 hours for pharma specialists and financial professionals",
    nearbyHubs: [
      { name: "Gandhinagar", slug: "gandhinagar" },
      { name: "Vadodara", slug: "vadodara" },
      { name: "Surat", slug: "surat" },
    ],
  },
  kolkata: {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    stateSlug: "west-bengal",
    lgdCode: 318,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Kolkata",
    overview:
      "Kolkata is the primary commercial and financial gateway to Eastern and North-Eastern India. Service Dial provides technology recruitment, back-office finance operations, and full regulatory compliance across Salt Lake and Rajarhat.",
    economicProfile:
      "Premier center for IT/ITeS services, mining and metals headquarters, FMCG distribution, and financial back-office operations in Eastern India.",
    dominantIndustries: ["IT & ITeS Services", "Metals & Mining HQs", "FMCG Distribution", "Financial Services", "Leather & Logistics"],
    clusters: [
      {
        name: "Sector V, Salt Lake City (Bidhannagar)",
        type: "IT Park",
        keyZones: ["Webel STP II", "Infinity Benchmark", "Godrej Genesis", "RDB Boulevard"],
      },
      {
        name: "Rajarhat New Town Financial & IT Hub",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Action Area II", "Candor TechSpace", "Ecospace Business Park"],
      },
      {
        name: "Taratala & Dhulagarh Logistics Corridor",
        type: "Manufacturing / Industrial",
        keyZones: ["Taratala Industrial Area", "Howrah Logistics Hub"],
      },
    ],
    localComplianceNuance:
      "Strict monitoring of West Bengal Shops and Establishments Act 1963, semi-annual minimum wage revisions, and West Bengal Labor Welfare Fund compliance.",
    averageSourcingSLA: "24–72 hours for IT services and financial operations talent",
    nearbyHubs: [
      { name: "Howrah", slug: "howrah" },
      { name: "Durgapur", slug: "durgapur" },
      { name: "Bhubaneswar", slug: "bhubaneswar" },
    ],
  },
};
