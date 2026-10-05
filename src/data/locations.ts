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
    cities: ["mumbai", "pune", "nagpur"],
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
    cities: ["chennai", "coimbatore"],
  },
  gujarat: {
    slug: "gujarat",
    name: "Gujarat",
    lgdStateCode: 24,
    capital: "Gandhinagar",
    regionalLabourNuances:
      "Governed by the Gujarat Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2019, simplified labor inspection schemes, and specialized regulatory guidelines for GIFT City IFSC entities.",
    cities: ["ahmedabad", "surat", "vadodara"],
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
  rajasthan: {
    slug: "rajasthan",
    name: "Rajasthan",
    lgdStateCode: 8,
    capital: "Jaipur",
    regionalLabourNuances:
      "Governed by the Rajasthan Shops and Commercial Establishments Act, 1958, simplified labor inspections under the Rajasthan Investment Promotion Scheme (RIPS), and RIICO industrial estate compliance standards.",
    cities: ["jaipur"],
  },
  "madhya-pradesh": {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    lgdStateCode: 23,
    capital: "Bhopal",
    regionalLabourNuances:
      "Regulated under the MP Shops and Establishments Act, 1958, online labor compliance under MP Shram Seva Portal, and fast-track approvals for Super Corridor SEZ IT entities in Indore.",
    cities: ["indore"],
  },
  kerala: {
    slug: "kerala",
    name: "Kerala",
    lgdStateCode: 32,
    capital: "Thiruvananthapuram",
    regionalLabourNuances:
      "Governed under the Kerala Shops and Commercial Establishments Act, 1960, active Trade Union engagement protocols, and Kerala Labor Welfare Fund digital statutory filings.",
    cities: ["kochi"],
  },
  "andhra-pradesh": {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    lgdStateCode: 28,
    capital: "Amaravati",
    regionalLabourNuances:
      "Regulated under the AP Shops and Establishments Act, 1988, AP Single Desk Portal approvals, and port/SEZ statutory safety and contract labor compliance.",
    cities: ["visakhapatnam"],
  },
  odisha: {
    slug: "odisha",
    name: "Odisha",
    lgdStateCode: 21,
    capital: "Bhubaneswar",
    regionalLabourNuances:
      "Governed under the Odisha Shops and Commercial Establishments Act, 1956, state industrial safety inspections, and GO-SWIFT single window compliance frameworks for IT and metallurgy sectors.",
    cities: ["bhubaneswar"],
  },
  punjab: {
    slug: "punjab",
    name: "Punjab",
    lgdStateCode: 3,
    capital: "Chandigarh",
    regionalLabourNuances:
      "Regulated under the Punjab Shops and Commercial Establishments Act, 1958, Invest Punjab business approvals, and state labor welfare board statutory compliances.",
    cities: ["chandigarh"],
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
      { name: "Nagpur", slug: "nagpur" },
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
      { name: "Coimbatore", slug: "coimbatore" },
      { name: "Kanchipuram", slug: "kanchipuram" },
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

  // --- Phase 4 Expansion Metros (Tier-2 Strategic Growth Hubs) ---
  jaipur: {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    lgdCode: 104,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Jaipur",
    overview:
      "Jaipur is emerging as North India's fastest-growing destination for FinTech, software services, and gems & jewelry exports. Service Dial powers technology staffing and statutory labor governance across Mahindra World City and Sitapura.",
    economicProfile:
      "Rapidly scaling IT SEZ presence with prominent multinational tech centers and robust industrial manufacturing.",
    dominantIndustries: ["Fintech & ITeS", "Textiles & Handicrafts", "Gems & Jewelry Exports", "Automotive Parts"],
    clusters: [
      {
        name: "Mahindra World City (MWC)",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["IT/ITeS SEZ", "Engineering Zone", "Domestic Tariff Area"],
      },
      {
        name: "Sitapura Industrial Area",
        type: "Manufacturing / Industrial",
        keyZones: ["Sitapura Phase I-IV", "EPIP Sitapura", "Gem & Jewellery SEZ"],
      },
    ],
    localComplianceNuance:
      "Regulated under the Rajasthan Shops and Commercial Establishments Act 1958 and RIICO factory environmental protocols.",
    averageSourcingSLA: "24–72 hours for tech and operations support roles",
    nearbyHubs: [
      { name: "Delhi", slug: "delhi" },
      { name: "Gurugram", slug: "gurugram" },
      { name: "Ajmer", slug: "ajmer" },
    ],
  },

  indore: {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    lgdCode: 393,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Indore",
    overview:
      "Indore is Central India's commercial capital, featuring the prominent Super Corridor technology park, pharmaceuticals, and textile hubs. Service Dial provides leadership hiring and payroll automation.",
    economicProfile:
      "Central India's leading education, IT engineering, and pharmaceutical manufacturing nexus.",
    dominantIndustries: ["Pharmaceuticals", "IT Software & Cloud", "Textiles", "Auto Engineering", "Food Processing"],
    clusters: [
      {
        name: "Super Corridor IT SEZ",
        type: "IT Park",
        keyZones: ["TCS Campus", "Infosys Super Corridor", "Crystal IT Park"],
      },
      {
        name: "Pithampur Industrial Area (Automotive Belt)",
        type: "Manufacturing / Industrial",
        keyZones: ["Sector 1-3 Pithampur", "Special Economic Zone Phase II"],
      },
    ],
    localComplianceNuance:
      "Compliance under Madhya Pradesh Shops and Establishments Act 1958 and MP Labour Welfare Fund statutory deductions.",
    averageSourcingSLA: "24–72 hours for pharmaceutical specialists and tech engineers",
    nearbyHubs: [
      { name: "Bhopal", slug: "bhopal" },
      { name: "Ujjain", slug: "ujjain" },
      { name: "Ahmedabad", slug: "ahmedabad" },
    ],
  },

  coimbatore: {
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    lgdCode: 603,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Coimbatore",
    overview:
      "Known as the 'Manchester of South India', Coimbatore is an engineering and pump manufacturing capital rapidly transforming into a SaaS and auto-tech hub.",
    economicProfile:
      "Global supplier of textile machinery, precision motors, foundry castings, and burgeoning SaaS technology parks.",
    dominantIndustries: ["Textile Machinery", "Precision Engineering", "SaaS & Cloud Software", "Automotive Components"],
    clusters: [
      {
        name: "TIDEL Park Coimbatore & ELCOT SEZ",
        type: "IT Park",
        keyZones: ["Vilankurichi Road", "Peelamedu", "Eachanari"],
      },
      {
        name: "SIDCO & Kurichi Industrial Estates",
        type: "Manufacturing / Industrial",
        keyZones: ["Kurichi Industrial Belt", "Malumichampatti", "Ganapathy"],
      },
    ],
    localComplianceNuance:
      "Governed by Tamil Nadu Shops Act 1947 and strict Factory Inspectorate norms for industrial foundries.",
    averageSourcingSLA: "24–72 hours for mechanical and software engineers",
    nearbyHubs: [
      { name: "Chennai", slug: "chennai" },
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Kochi", slug: "kochi" },
    ],
  },

  vadodara: {
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 443,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Vadodara",
    overview:
      "Vadodara is Gujarat's capital of heavy engineering, power transmission, chemicals, and pharmaceuticals.",
    economicProfile:
      "Unmatched density of multinational heavy equipment, power electronics, and petrochemical corporations.",
    dominantIndustries: ["Heavy Engineering", "Power Equipment", "Chemicals & Petrochemicals", "Pharmaceuticals"],
    clusters: [
      {
        name: "Makarpura GIDC Industrial Estate",
        type: "Manufacturing / Industrial",
        keyZones: ["Makarpura Phase I-III", "Maneja Power Engineering Belt"],
      },
      {
        name: "Savli GIDC & Manjusar",
        type: "Manufacturing / Industrial",
        keyZones: ["Savli Industrial Area", "Manjusar GIDC", "Halol Road Corridor"],
      },
    ],
    localComplianceNuance:
      "Strict GIDC safety compliance and Gujarat Shops and Establishments Act 2019 statutory filings.",
    averageSourcingSLA: "24–72 hours for engineering and chemical plant talent",
    nearbyHubs: [
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Surat", slug: "surat" },
      { name: "Bharuch", slug: "bharuch" },
    ],
  },

  kochi: {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    stateSlug: "kerala",
    lgdCode: 562,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Kochi",
    overview:
      "Kochi is Kerala's commercial and technology epicenter, commanding major international shipping lanes and two premier IT campuses (Infopark & SmartCity).",
    economicProfile:
      "Deep-water port trade, maritime logistics, fintech development, and enterprise IT services.",
    dominantIndustries: ["Maritime Logistics", "IT & Cloud Services", "Fintech", "Petrochemicals", "Spices & Seafood Export"],
    clusters: [
      {
        name: "Infopark Kochi Phases I & II",
        type: "IT Park",
        keyZones: ["Kakkanad", "Cherthala Infopark", "Amrita Tech Park"],
      },
      {
        name: "SmartCity Kochi",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["SmartCity SEZ Pavilion", "Cyberpark Corridor"],
      },
    ],
    localComplianceNuance:
      "Adherence to Kerala Shops Act 1960 and structured labor union reconciliation protocols.",
    averageSourcingSLA: "24–72 hours for maritime and IT developers",
    nearbyHubs: [
      { name: "Thiruvananthapuram", slug: "thiruvananthapuram" },
      { name: "Coimbatore", slug: "coimbatore" },
      { name: "Bengaluru", slug: "bengaluru" },
    ],
  },

  visakhapatnam: {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    lgdCode: 510,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Visakhapatnam",
    overview:
      "Visakhapatnam is Eastern India's strategic deep-water maritime port, petroleum, steel, and burgeoning coastal IT hub.",
    economicProfile:
      "Major hub for heavy steel, naval shipyards, oil refineries, and sea cargo handling alongside Rushikonda IT Hill.",
    dominantIndustries: ["Port Logistics", "Steel & Heavy Metallurgy", "Petrochemicals", "Pharma API", "IT Services"],
    clusters: [
      {
        name: "Rushikonda & Madhurawada IT SEZ",
        type: "IT Park",
        keyZones: ["Hill 1, 2 & 3", "APIIC IT SEZ", "Gambheeram Tech Park"],
      },
      {
        name: "Jawaharlal Nehru Pharma City (JNPC)",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Parawada Industrial Belt", "Duvvada SEZ"],
      },
    ],
    localComplianceNuance:
      "Adherence to AP Shops Act 1988, port authority clearances, and industrial hazardous labor norms.",
    averageSourcingSLA: "24–72 hours for industrial and logistics professionals",
    nearbyHubs: [
      { name: "Bhubaneswar", slug: "bhubaneswar" },
      { name: "Vijayawada", slug: "vijayawada" },
      { name: "Hyderabad", slug: "hyderabad" },
    ],
  },

  surat: {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 442,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Surat",
    overview:
      "Surat is the global capital of diamond cutting and synthetic textiles, coupled with heavy petrochemical complexes in Hazira.",
    economicProfile:
      "Cuts and polishes 90% of the world's diamonds; supplies 40% of India's man-made fabrics; heavy industrial deep port in Hazira.",
    dominantIndustries: ["Diamond Processing & Surat Diamond Bourse", "Synthetic Textiles", "Steel & Port Infrastructure", "Petrochemicals"],
    clusters: [
      {
        name: "Surat Diamond Bourse (SDB) & DREAM City",
        type: "BFSI / Financial Hub",
        keyZones: ["Khajod DREAM City", "Bourse Tower Corridor"],
      },
      {
        name: "Hazira Multi-Product Industrial Hub",
        type: "Manufacturing / Industrial",
        keyZones: ["Hazira Port Estate", "Mora Industrial Belt"],
      },
    ],
    localComplianceNuance:
      "Strict monitoring of Gujarat Factory Rules, textile labor minimum wages, and export SEZ customs/statutory clearances.",
    averageSourcingSLA: "24–72 hours for manufacturing and finance personnel",
    nearbyHubs: [
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Vadodara", slug: "vadodara" },
      { name: "Mumbai", slug: "mumbai" },
    ],
  },

  bhubaneswar: {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    stateSlug: "odisha",
    lgdCode: 338,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Bhubaneswar",
    overview:
      "Bhubaneswar is Eastern India's rising education and technology power, serving as the administrative nerve center for Odisha's massive mining and metal industries.",
    economicProfile:
      "Rapidly scaling IT Infocity with global software majors, coupled with corporate control of mineral and metallurgy giants.",
    dominantIndustries: ["IT & Cloud Services", "Metals & Mining Governance", "Higher Education & Research", "Healthcare"],
    clusters: [
      {
        name: "Infocity & Chandaka Industrial Estate",
        type: "IT Park",
        keyZones: ["Infocity Phase 1 & 2", "IDCO Info Valley", "Gothapatna"],
      },
      {
        name: "Mancheswar & Rasulgarh Industrial Corridor",
        type: "Manufacturing / Industrial",
        keyZones: ["Mancheswar Estate", "Rasulgarh Commercial Hub"],
      },
    ],
    localComplianceNuance:
      "Adherence to Odisha Shops Act 1956 and GO-SWIFT single window statutory labor portals.",
    averageSourcingSLA: "24–72 hours for IT engineers and mining finance talent",
    nearbyHubs: [
      { name: "Kolkata", slug: "kolkata" },
      { name: "Cuttack", slug: "cuttack" },
      { name: "Visakhapatnam", slug: "visakhapatnam" },
    ],
  },

  nagpur: {
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 520,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Nagpur",
    overview:
      "Positioned at India's geographical center, Nagpur is the premier logistics, aviation MRO, and multi-modal cargo transit powerhouse (MIHAN).",
    economicProfile:
      "Zero-mile logistics epicenter, massive warehousing corridors, and expanding IT aerospace SEZ.",
    dominantIndustries: ["Logistics & Warehousing", "Aviation MRO", "IT Services (MIHAN)", "Defense Manufacturing"],
    clusters: [
      {
        name: "MIHAN SEZ & Multi-modal Hub",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["MIHAN IT Park", "Aviation Special Economic Zone", "TCS/Infosys Campuses"],
      },
      {
        name: "Butibori MIDC Industrial Estate",
        type: "Manufacturing / Industrial",
        keyZones: ["Butibori Phase 1 & 2", "Hingna Industrial Belt"],
      },
    ],
    localComplianceNuance:
      "Governed by Maharashtra Shops and Establishments Act 2017 and MIDC factory inspectorate standards.",
    averageSourcingSLA: "24–72 hours for supply chain and tech personnel",
    nearbyHubs: [
      { name: "Pune", slug: "pune" },
      { name: "Mumbai", slug: "mumbai" },
      { name: "Hyderabad", slug: "hyderabad" },
    ],
  },

  chandigarh: {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Punjab",
    stateSlug: "punjab",
    lgdCode: 25,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Chandigarh",
    overview:
      "The Chandigarh Tricity (Chandigarh, Mohali, Panchkula) serves as North India's thriving software, fintech, and pharmaceutical R&D gateway.",
    economicProfile:
      "High concentration of software product engineering, biotechnology, and agricultural equipment manufacturing.",
    dominantIndustries: ["IT/ITeS Software", "Pharmaceutical R&D", "Fintech", "Agri-Tech & Machinery"],
    clusters: [
      {
        name: "Rajiv Gandhi Chandigarh Technology Park (RGCTP)",
        type: "IT Park",
        keyZones: ["Kishangarh Tech Park", "DLF Cybercity Chandigarh"],
      },
      {
        name: "Mohali IT City & Industrial Area Phases 1-9",
        type: "IT Park",
        keyZones: ["Mohali IT City Sector 81-83", "QuarkCity Mohali", "Industrial Focal Point"],
      },
    ],
    localComplianceNuance:
      "Subject to Punjab Shops and Commercial Establishments Act 1958 and Chandigarh UT labor regulations.",
    averageSourcingSLA: "24–72 hours for IT engineers and pharma scientists",
    nearbyHubs: [
      { name: "Delhi", slug: "delhi" },
      { name: "Gurugram", slug: "gurugram" },
      { name: "Ludhiana", slug: "ludhiana" },
    ],
  },
};
