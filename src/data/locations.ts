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
      "Governed by the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017, Maharashtra State Professional Tax Act (with 2023 gender exemption for women earning ≤₹25,000/mo), and semi-annual minimum wages updated under the Minimum Wages Act.",
    cities: ["mumbai", "pune", "nagpur", "chakan-talegaon", "bhosari-pcmc", "ttc-navi-mumbai", "taloja", "chhatrapati-sambhajinagar"],
  },
  karnataka: {
    slug: "karnataka",
    name: "Karnataka",
    lgdStateCode: 29,
    capital: "Bengaluru",
    regionalLabourNuances:
      "Subject to the Karnataka Shops and Commercial Establishments Act, 1961, Karnataka Professional Tax (Karnataka Act 14 of 2023 with ₹25,000 threshold), and Karnataka Labour Welfare Fund rules.",
    cities: ["bengaluru", "peenya", "whitefield", "bommasandra-jigani", "bidadi", "mysuru"],
  },
  telangana: {
    slug: "telangana",
    name: "Telangana",
    lgdStateCode: 36,
    capital: "Hyderabad",
    regionalLabourNuances:
      "Regulated under the Telangana Shops and Establishments Act, 1988, mandatory TS-iPASS single-desk labor approvals, and state professional tax monthly remittances via TGCT portal.",
    cities: ["hyderabad"],
  },
  delhi: {
    slug: "delhi",
    name: "Delhi (NCT)",
    lgdStateCode: 7,
    capital: "New Delhi",
    regionalLabourNuances:
      "Features among the highest statutory minimum wage rates in India, updated semi-annually in April and October. Zero Professional Tax jurisdiction under Delhi NCT rules.",
    cities: ["delhi"],
  },
  haryana: {
    slug: "haryana",
    name: "Haryana",
    lgdStateCode: 6,
    capital: "Chandigarh",
    regionalLabourNuances:
      "Regulated under the Punjab Shops and Commercial Establishments Act (as applied to Haryana), monthly Labour Welfare Fund deductions, and auto belt compliance in Gurugram & IMT Manesar.",
    cities: ["gurugram", "imt-manesar"],
  },
  "uttar-pradesh": {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    lgdStateCode: 9,
    capital: "Lucknow",
    regionalLabourNuances:
      "Regulated under the Uttar Pradesh Dookan Aur Vanijya Adhishthan Adhiniyam, 1962, state-level electronic labor register filings via Nivesh Mitra portal, and manufacturing compliance across Noida and Greater Noida.",
    cities: ["noida", "greater-noida"],
  },
  "tamil-nadu": {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    lgdStateCode: 33,
    capital: "Chennai",
    regionalLabourNuances:
      "Operates under the Tamil Nadu Shops and Establishments Act, 1947, half-yearly municipal professional tax remittances, and active DISH inspectorates across SIPCOT industrial corridors.",
    cities: ["chennai", "coimbatore", "sriperumbudur-oragadam", "ambattur", "hosur", "tiruppur"],
  },
  gujarat: {
    slug: "gujarat",
    name: "Gujarat",
    lgdStateCode: 24,
    capital: "Gandhinagar",
    regionalLabourNuances:
      "Governed by the Gujarat Shops and Establishments Act, 2019, Notification GHN-35 professional tax threshold (exempt up to ₹12,000), and GIDC industrial single-window clearance schemes.",
    cities: ["ahmedabad", "surat", "vadodara", "sanand", "changodar", "dahej-bharuch", "morbi", "savli-vadodara"],
  },
  "west-bengal": {
    slug: "west-bengal",
    name: "West Bengal",
    lgdStateCode: 19,
    capital: "Kolkata",
    regionalLabourNuances:
      "Governed by the West Bengal Shops and Establishments Act, 1963, West Bengal State Tax on Professions Act, 1979 (Act VI of 1979 schedule), and West Bengal Labour Welfare Fund Act, 1974 (Section 9 employer deduction bar).",
    cities: ["kolkata", "barrackpore", "howrah-dankuni", "salt-lake-sector-v"],
  },
  rajasthan: {
    slug: "rajasthan",
    name: "Rajasthan",
    lgdStateCode: 8,
    capital: "Jaipur",
    regionalLabourNuances:
      "Governed by the Rajasthan Shops and Commercial Establishments Act, 1958, simplified labor inspections under RIPS, RIICO industrial estate compliance, and Zero Professional Tax on salaries.",
    cities: ["jaipur", "bhiwadi-neemrana"],
  },
  "madhya-pradesh": {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    lgdStateCode: 23,
    capital: "Bhopal",
    regionalLabourNuances:
      "Regulated under the MP Shops and Establishments Act, 1958, MP Vritti Kar Adhiniyam 1995, online labor compliance under MP Shram Seva Portal, and Pithampur industrial manufacturing standards.",
    cities: ["indore", "pithampur"],
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
      "Governed under the Odisha Shops and Commercial Establishments Act, 1956. CRITICAL 2026 STATUTE UPDATE: The Odisha State Tax on Professions Act 2000 was repealed effective April 1, 2026 (Flat ₹0 PT across all salaries).",
    cities: ["bhubaneswar", "kalinganagar", "jharsuguda", "paradeep-port", "rourkela"],
  },
  punjab: {
    slug: "punjab",
    name: "Punjab",
    lgdStateCode: 3,
    capital: "Chandigarh",
    regionalLabourNuances:
      "Regulated under the Punjab Shops and Commercial Establishments Act, 1958, Punjab State Development Tax Act 2018 (flat ₹200/mo only for Income Tax payers), and Invest Punjab single-desk approvals.",
    cities: ["chandigarh", "ludhiana"],
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
      { name: "Barrackpore (HQ)", slug: "barrackpore" },
      { name: "Howrah & Dankuni", slug: "howrah-dankuni" },
      { name: "Salt Lake Sector V", slug: "salt-lake-sector-v" },
    ],
  },

  barrackpore: {
    slug: "barrackpore",
    name: "Barrackpore & North 24 Parganas Corridor",
    state: "West Bengal",
    stateSlug: "west-bengal",
    lgdCode: 312,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Barrackpore",
    overview:
      "Barrackpore is the historic industrial, defense, and administrative hub of North 24 Parganas and the registered corporate headquarters of Service Dial Talent Management Private Limited. Located along the eastern bank of the Hooghly River, it anchors the manufacturing and industrial clusters of Titagarh, Shyamnagar, Naihati, and Khardah.",
    economicProfile:
      "Strategic epicenter for heavy defense and ordnance manufacturing, railway rolling stock engineering (Titagarh Rail Systems), jute textiles, chemical processing, and light engineering fabrication.",
    dominantIndustries: [
      "Defense & Ordnance Manufacturing",
      "Railway Rolling Stock & Heavy Engineering",
      "Jute & Textile Processing",
      "Precision SME Fabrication",
      "Chemicals & Industrial Gases",
    ],
    clusters: [
      {
        name: "Titagarh & Khardah Heavy Engineering Corridor",
        type: "Manufacturing / Industrial",
        keyZones: ["Titagarh Rail Systems Zone", "BT Road Industrial Belt", "Khardah Industrial Estate"],
      },
      {
        name: "Ishapore & Shyamnagar Defense & Industrial Belt",
        type: "Manufacturing / Industrial",
        keyZones: ["Rifle Factory Ishapore Zone", "Shyamnagar Industrial Cluster", "Naihati Logistics Spoke"],
      },
      {
        name: "Barrackpore Corporate & Administrative Hub",
        type: "BFSI / Financial Hub",
        keyZones: ["S.N. Banerjee Road Corporate Hub", "Barrackpore Cantonment Area", "Station Road Commercial Center"],
      },
    ],
    localComplianceNuance:
      "High concentration of Factories Act 1948 certified establishments, certified Standing Orders under the Industrial Employment Act 1946, trade union collective bargaining protocols, and strict West Bengal Labour Welfare Fund bi-annual submissions.",
    averageSourcingSLA: "24–48 hours for plant engineering, technical supervisory, and skilled blue-collar personnel",
    nearbyHubs: [
      { name: "Kolkata", slug: "kolkata" },
      { name: "Howrah & Dankuni", slug: "howrah-dankuni" },
      { name: "Salt Lake Sector V", slug: "salt-lake-sector-v" },
    ],
  },

  "howrah-dankuni": {
    slug: "howrah-dankuni",
    name: "Howrah & Dankuni Industrial Freight Corridor",
    state: "West Bengal",
    stateSlug: "west-bengal",
    lgdCode: 315,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Howrah",
    overview:
      "The Howrah and Dankuni corridor forms the industrial and logistics backbone of Eastern India, housing the Dankuni Inland Container Depot (ICD), Eastern Dedicated Freight Corridor terminus, heavy foundry belts, and massive 3PL distribution centers.",
    economicProfile:
      "Eastern India's primary freight transshipment node connecting the Golden Quadrilateral, Kolkata & Haldia ports, and North-East India trade routes.",
    dominantIndustries: [
      "3PL & Warehousing Logistics",
      "Heavy Engineering & Foundry",
      "Automotive Ancillaries",
      "FMCG Central Distribution",
      "Container Freight Transit",
    ],
    clusters: [
      {
        name: "Dankuni ICD & Logistics Corridor",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Dankuni Freight Hub", "Delhi Road Warehousing Cluster", "Jalan Complex"],
      },
      {
        name: "Dhulagarh & Sankrail Industrial Belt",
        type: "Manufacturing / Industrial",
        keyZones: ["Dhulagarh Logistics Park", "Sankrail Poly Park", "Kona Expressway Corridor"],
      },
    ],
    localComplianceNuance:
      "Extensive exposure to Contract Labour (Regulation & Abolition) Act licensing, interstate migrant worker compliance, heavy vehicle transport overtime tracking, and half-yearly WBLWF remittances.",
    averageSourcingSLA: "24–72 hours for warehouse supervisors, inventory handlers, and factory operators",
    nearbyHubs: [
      { name: "Kolkata", slug: "kolkata" },
      { name: "Barrackpore", slug: "barrackpore" },
    ],
  },

  "salt-lake-sector-v": {
    slug: "salt-lake-sector-v",
    name: "Salt Lake Sector V & New Town IT Corridor",
    state: "West Bengal",
    stateSlug: "west-bengal",
    lgdCode: 318,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Bidhannagar",
    overview:
      "Salt Lake Sector V and adjoining New Town represent Eastern India's Silicon Valley, spanning over 15 million square feet of Grade-A commercial IT parks, Global Capability Centers (GCCs), and fintech campuses.",
    economicProfile:
      "Premier IT/ITeS hub housing Tata Consultancy Services, Wipro, Cognizant, IBM, Genpact, and over 400 product startups and fintech firms.",
    dominantIndustries: [
      "Software Engineering & SaaS",
      "ITeS & Business Process Management",
      "Fintech & Banking Technology",
      "Consulting & Global In-House Centers",
      "Data Centers",
    ],
    clusters: [
      {
        name: "Sector V Bidhannagar Core IT Belt",
        type: "IT Park",
        keyZones: ["Infinity Benchmark", "Candor TechSpace", "Godrej Genesis", "RDB Boulevard", "Webel STP II"],
      },
      {
        name: "New Town Financial Hub & Action Area II",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Ecospace Business Park", "Mani Casadona", "Candor New Town", "Fintech City"],
      },
    ],
    localComplianceNuance:
      "Shops & Establishments 24/7 operating exemptions, female night shift safety and transportation compliance, EPFO wage ceiling restructuring for junior developers, and multi-state Professional Tax management.",
    averageSourcingSLA: "24–48 hours for software engineers, cloud architects, and financial analysts",
    nearbyHubs: [
      { name: "Kolkata", slug: "kolkata" },
      { name: "Barrackpore", slug: "barrackpore" },
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

  // ============================================================================
  // 35+ PAN-INDIA INDUSTRIAL ENGINES & MANUFACTURING HUBS (PHASE 4 EXPANSION)
  // ============================================================================

  // 1. KARNATAKA INDUSTRIAL HUBS
  peenya: {
    slug: "peenya",
    name: "Peenya Industrial Area",
    state: "Karnataka",
    stateSlug: "karnataka",
    lgdCode: 55601,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Peenya",
    overview:
      "Peenya Industrial Area is one of the largest and oldest industrial estates in South East Asia, housing over 5,000 MSME and large engineering units.",
    economicProfile:
      "Heavy engineering, precision CNC tooling, hydraulics, industrial valves, and aerospace component manufacturing ecosystem.",
    dominantIndustries: ["Precision CNC Machining", "Hydraulics & Pneumatics", "Aerospace Tooling", "Electrical Switchgear"],
    clusters: [
      {
        name: "Peenya Industrial Area Phases 1–4",
        type: "Manufacturing / Industrial",
        keyZones: ["Phase 1 & 2 Machine Tool Belts", "Phase 3 Electronics & Rubber Zone", "Phase 4 Heavy Fabrication"],
      },
      {
        name: "Yeshwanthpur-Jalahalli Ancillary Corridor",
        type: "Manufacturing / Industrial",
        keyZones: ["Yeshwanthpur Industrial Suburb", "Jalahalli Machine Enclave"],
      },
    ],
    localComplianceNuance:
      "Subject to Karnataka Factories Rules 1969, Section 6 Form 1 site clearances with DISH Bannerghatta, KSPCB Peenya Regional Office CTE/CTO consents, and Karnataka Act 14 of 2023 Professional Tax.",
    averageSourcingSLA: "24–48 hours for certified CNC machinists, toolmakers, and plant supervisors",
    nearbyHubs: [
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Bidadi", slug: "bidadi" },
      { name: "Bommasandra-Jigani", slug: "bommasandra-jigani" },
    ],
  },

  whitefield: {
    slug: "whitefield",
    name: "Whitefield EPIP",
    state: "Karnataka",
    stateSlug: "karnataka",
    lgdCode: 55602,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Whitefield,_Bangalore",
    overview:
      "Whitefield is Bengaluru's premier Export Promotion Industrial Park (EPIP) and technology nexus, hosting Fortune 500 GCCs, semiconductors, and precision medical tech.",
    economicProfile:
      "Global Capability Centers (GCCs), semiconductor design, telecommunications hardware, and biopharmaceutical R&D campuses.",
    dominantIndustries: ["Global Capability Centers (GCC)", "Semiconductor Design", "Biopharma R&D", "Telecommunications"],
    clusters: [
      {
        name: "EPIP Zone & ITPL Campus",
        type: "IT Park",
        keyZones: ["International Tech Park Bangalore (ITPL)", "EPIP Industrial Layout", "Sigma Tech Park"],
      },
      {
        name: "Hoodi-Sadaramangala Industrial Belt",
        type: "Manufacturing / Industrial",
        keyZones: ["Sadaramangala Industrial Area", "Hoodi Hardware Zone"],
      },
    ],
    localComplianceNuance:
      "Regulated under Karnataka Shops and Commercial Establishments Act 1961, e-Prerana PT Form 5-A, Karnataka Labour Welfare Fund, and 24/7 IT night-shift female transport orders.",
    averageSourcingSLA: "24–72 hours for senior software architects, VLSI design leads, and data scientists",
    nearbyHubs: [
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Peenya", slug: "peenya" },
      { name: "Bommasandra-Jigani", slug: "bommasandra-jigani" },
    ],
  },

  "bommasandra-jigani": {
    slug: "bommasandra-jigani",
    name: "Bommasandra-Jigani",
    state: "Karnataka",
    stateSlug: "karnataka",
    lgdCode: 55603,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Bommasandra",
    overview:
      "The Bommasandra-Jigani Industrial Link corridor is a pivotal heavy manufacturing and biopharmaceutical manufacturing epicenter in South Bengaluru.",
    economicProfile:
      "High concentration of USFDA-approved bulk drug manufacturing, automotive casting, heavy sheet metal fabrication, and electric vehicle battery assembly.",
    dominantIndustries: ["Biopharmaceutical Formulations", "Automotive Ancillary", "Industrial Robotics", "Granite & Precision Fabrication"],
    clusters: [
      {
        name: "Bommasandra Industrial Area Phases 1–4",
        type: "Manufacturing / Industrial",
        keyZones: ["Biocon Pharma Enclave", "Bommasandra Auto Ancillary Belt", "KIADB Sector 2"],
      },
      {
        name: "Jigani Industrial Area & APC Circle",
        type: "Manufacturing / Industrial",
        keyZones: ["Jigani 1st & 2nd Phase", "Otis Elevator Industrial Campus", "Haragadde Granite Park"],
      },
    ],
    localComplianceNuance:
      "Factories Act 1948 boiler registrations, hazardous process safety protocols under DISH Karnataka, KSPCB water/air consent renewals, and CLRA contractor licensing.",
    averageSourcingSLA: "24–48 hours for pharma quality assurance chemists, EHS managers, and mechanical technicians",
    nearbyHubs: [
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Hosur", slug: "hosur" },
      { name: "Bidadi", slug: "bidadi" },
    ],
  },

  bidadi: {
    slug: "bidadi",
    name: "Bidadi Industrial Area",
    state: "Karnataka",
    stateSlug: "karnataka",
    lgdCode: 55604,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Bidadi",
    overview:
      "Bidadi Industrial Area on the Bengaluru-Mysuru Expressway is Karnataka's premier automotive assembly and industrial packaging corridor.",
    economicProfile:
      "Dominated by the Toyota Kirloskar vehicle assembly plants, auto tier-1 supplier parks, food processing, and high-speed packaging plants.",
    dominantIndustries: ["Automobile Assembly", "Auto Tier-1 Ancillaries", "Packaging & Polymers", "Precision Engineering"],
    clusters: [
      {
        name: "Toyota Automotive Complex & Sector 1–2",
        type: "Manufacturing / Industrial",
        keyZones: ["Toyota Kirloskar Motor Zone", "Bosch Bidadi Facility", "KIADB Industrial Area 1st Phase"],
      },
      {
        name: "Bidadi Smart Industrial Park Phase 2",
        type: "Manufacturing / Industrial",
        keyZones: ["Harohalli Industrial Link", "Bidadi Heavy Engineering Enclave"],
      },
    ],
    localComplianceNuance:
      "Strict compliance with Section 59 overtime limits (double pay rate), standing orders certification under Industrial Employment (Standing Orders) Act, and contract labour muster governance.",
    averageSourcingSLA: "24–48 hours for assembly line technicians, mechanical fitters, and store supervisors",
    nearbyHubs: [
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Peenya", slug: "peenya" },
      { name: "Mysuru", slug: "mysuru" },
    ],
  },

  mysuru: {
    slug: "mysuru",
    name: "Mysuru",
    state: "Karnataka",
    stateSlug: "karnataka",
    lgdCode: 55605,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Mysore",
    overview:
      "Mysuru is Karnataka's key heritage manufacturing hub and emerging technology Tier-2 destination, with dedicated defense electronics and automotive corridors.",
    economicProfile:
      "Precision defense electronics, IT software development, automotive tires (JK Tyre), and heavy electrical engineering.",
    dominantIndustries: ["Defense Electronics", "Software & IT Services", "Tire & Rubber Manufacturing", "Automotive Components"],
    clusters: [
      {
        name: "Hebbal Industrial Area & Electronic City",
        type: "Manufacturing / Industrial",
        keyZones: ["Hebbal KIADB 1st & 2nd Phase", "Infosys Mysuru SEZ", "Wipro Consumer Care Campus"],
      },
      {
        name: "Koorgalli & Belagola Industrial Estates",
        type: "Manufacturing / Industrial",
        keyZones: ["Koorgalli Auto Cluster", "Belagola Heavy Chemical Belt", "Kadakola Container Depot"],
      },
    ],
    localComplianceNuance:
      "Governed by Karnataka Shops and Establishments Act, DISH Mysuru regional office factory licensing, and Mysore Municipal Corporation trade clearances.",
    averageSourcingSLA: "24–72 hours for software engineers, electronics technicians, and quality inspectors",
    nearbyHubs: [
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Bidadi", slug: "bidadi" },
      { name: "Coimbatore", slug: "coimbatore" },
    ],
  },

  // 2. MAHARASHTRA INDUSTRIAL HUBS
  "chakan-talegaon": {
    slug: "chakan-talegaon",
    name: "Chakan-Talegaon",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 52101,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Chakan",
    overview:
      "The Chakan-Talegaon corridor is India's pre-eminent automotive capital, hosting vehicle assembly plants of Volkswagen, Mercedes-Benz, Mahindra, Bajaj Auto, and hundreds of Tier-1 ancillaries.",
    economicProfile:
      "World-class automotive manufacturing, robotic press stamping, electric vehicle drive trains, and heavy industrial machinery.",
    dominantIndustries: ["Automobile OEMs", "Tier-1 Auto Components", "Sheet Metal Pressings", "EV Powertrains"],
    clusters: [
      {
        name: "Chakan MIDC Phases 1–5",
        type: "Manufacturing / Industrial",
        keyZones: ["Volkswagen & Bajaj Enclave", "Mahindra Auto Sector", "Chakan Phase 2 Industrial Park"],
      },
      {
        name: "Talegaon MIDC & Floriculture Park",
        type: "Manufacturing / Industrial",
        keyZones: ["Talegaon Industrial Area", "JCB Heavy Machinery Campus", "General Motors Legacy Hub"],
      },
    ],
    localComplianceNuance:
      "Factories Act 1948 doubled threshold compliance (20 workers with power / 40 without), DISH Pune approvals, Mahagst PTRC/PTEC compliance (female wages ≤₹25k exempt), and MLWB Form A-1 remittances.",
    averageSourcingSLA: "24–48 hours for automotive assembly fitters, robotic welding technicians, and quality engineers",
    nearbyHubs: [
      { name: "Pune", slug: "pune" },
      { name: "Bhosari-PCMC", slug: "bhosari-pcmc" },
      { name: "Mumbai", slug: "mumbai" },
    ],
  },

  "bhosari-pcmc": {
    slug: "bhosari-pcmc",
    name: "Bhosari-PCMC",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 52102,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Bhosari",
    overview:
      "Bhosari MIDC in the Pimpri-Chinchwad Municipal Corporation (PCMC) is one of India's largest precision tooling, casting, and engineering MSME clusters.",
    economicProfile:
      "Precision forgings, machine tools, plastic injection moulding, sheet metal pressing, and defense sub-contracting.",
    dominantIndustries: ["Precision Forgings", "Machine Tools & Dies", "Auto Ancillary", "Plastic Moulding"],
    clusters: [
      {
        name: "Bhosari MIDC Blocks A to T",
        type: "Manufacturing / Industrial",
        keyZones: ["S-Block Tooling Zone", "W-Block Electronic Complex", "T-Block Heavy Engineering"],
      },
      {
        name: "Pimpri-Chinchwad Auto Belt",
        type: "Manufacturing / Industrial",
        keyZones: ["Tata Motors Ancillary Corridor", "Thermax Heavy Fabrication Campus"],
      },
    ],
    localComplianceNuance:
      "Subject to PCMC municipal trade licensing, Maharashtra Contract Labour CLRA Form IV licensing, DISH inspection readiness, and semi-annual Zone 1 minimum wage gazette revisions.",
    averageSourcingSLA: "24–48 hours for CNC programmers, tool and die makers, and production engineers",
    nearbyHubs: [
      { name: "Pune", slug: "pune" },
      { name: "Chakan-Talegaon", slug: "chakan-talegaon" },
      { name: "Mumbai", slug: "mumbai" },
    ],
  },

  "ttc-navi-mumbai": {
    slug: "ttc-navi-mumbai",
    name: "TTC Navi Mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 52103,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Navi_Mumbai",
    overview:
      "Trans-Thane Creek (TTC) MIDC along the Thane-Belapur road is a powerhouse industrial and data center corridor spanning Airoli, Mahape, Turbhe, and Pawane.",
    economicProfile:
      "Specialty chemicals, hyperscale data center parks, electronics assembly, IT campuses (Mindspace), and cold chain logistics.",
    dominantIndustries: ["Specialty Chemicals", "Hyperscale Data Centers", "Electronics Assembly", "IT/ITeS Services"],
    clusters: [
      {
        name: "Thane-Belapur Industrial Corridor",
        type: "Manufacturing / Industrial",
        keyZones: ["Mahape Millennium Business Park", "Turbhe Industrial Complex", "Pawane Chemical Estate"],
      },
      {
        name: "Airoli Mindspace & Gigaplex SEZ",
        type: "IT Park",
        keyZones: ["Mindspace Airoli East & West", "L&T Seawoods Tech Park"],
      },
    ],
    localComplianceNuance:
      "Navi Mumbai Municipal Corporation (NMMC) trade licensing, MPCB chemical consent renewals (hazardous waste Form 1/3), DISH industrial safety, and Mahagst PT returns.",
    averageSourcingSLA: "24–72 hours for chemical plant operators, data center infrastructure engineers, and IT specialists",
    nearbyHubs: [
      { name: "Mumbai", slug: "mumbai" },
      { name: "Taloja", slug: "taloja" },
      { name: "Pune", slug: "pune" },
    ],
  },

  taloja: {
    slug: "taloja",
    name: "Taloja Industrial Area",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 52104,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Taloja",
    overview:
      "Taloja MIDC in Raigad district is one of Western India's most significant chemical, metallurgical, and heavy process manufacturing complexes.",
    economicProfile:
      "Heavy chemicals, industrial gases, float glass (Asahi), bulk pharmaceuticals, and cryogenic storage facilities.",
    dominantIndustries: ["Chemical Processing", "Heavy Metallurgy", "Float Glass Manufacturing", "Bulk Drugs & APIs"],
    clusters: [
      {
        name: "Taloja MIDC Phase 1 & 2",
        type: "Manufacturing / Industrial",
        keyZones: ["Chemical Zone CETP Corridor", "Engineering & Steel Zone", "Food Processing Park"],
      },
      {
        name: "Navi Mumbai Airport Influence Notified Area (NAINA)",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Taloja Logistics Hub", "JNPT Port Container Corridor"],
      },
    ],
    localComplianceNuance:
      "Strict MPCB red-category pollution clearance, on-site emergency plans under Chemical Accidents (Emergency Planning) Rules 1996, DISH safety audits, and Factories Act Form 1 stability certification.",
    averageSourcingSLA: "24–48 hours for boiler operators, chemical plant engineers, and EHS safety officers",
    nearbyHubs: [
      { name: "Mumbai", slug: "mumbai" },
      { name: "TTC-Navi-Mumbai", slug: "ttc-navi-mumbai" },
      { name: "Pune", slug: "pune" },
    ],
  },

  "chhatrapati-sambhajinagar": {
    slug: "chhatrapati-sambhajinagar",
    name: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    lgdCode: 52105,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Aurangabad,_Maharashtra",
    overview:
      "Chhatrapati Sambhajinagar (formerly Aurangabad) is Central Maharashtra's industrial flagship, anchored by the AURIC smart city, automotive giants, and pharma MNCs.",
    economicProfile:
      "Automobile assembly (Bajaj Auto, Skoda Auto Volkswagen), pharmaceutical formulations (Lupin, Ajanta, Wockhardt), and precision engineering.",
    dominantIndustries: ["Automotive & Two-Wheelers", "Pharmaceutical Formulations", "AURIC Smart Manufacturing", "Beer & Breweries"],
    clusters: [
      {
        name: "AURIC Shendra-Bidkin Smart City",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["AURIC Shendra Industrial Node", "Bidkin Mega Industrial Belt", "Hyosung Textile Complex"],
      },
      {
        name: "Waluj & Chikalthana MIDC",
        type: "Manufacturing / Industrial",
        keyZones: ["Waluj Auto Ancillary Zone", "Chikalthana Pharma Estate", "Railway Station Industrial Area"],
      },
    ],
    localComplianceNuance:
      "Maharashtra S&E Act 2017, DISH Chhatrapati Sambhajinagar regional sanctions, MPCB industrial effluent oversight, and Mahagst PTRC compliance.",
    averageSourcingSLA: "24–72 hours for formulation chemists, mechanical engineers, and production line workers",
    nearbyHubs: [
      { name: "Pune", slug: "pune" },
      { name: "Nashik", slug: "mumbai" },
      { name: "Nagpur", slug: "nagpur" },
    ],
  },

  // 3. TAMIL NADU INDUSTRIAL HUBS
  "sriperumbudur-oragadam": {
    slug: "sriperumbudur-oragadam",
    name: "Sriperumbudur-Oragadam",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    lgdCode: 62201,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Sriperumbudur",
    overview:
      "The Sriperumbudur-Oragadam belt on the Chennai-Bengaluru highway is India's foremost automotive and high-tech electronic hardware corridor.",
    economicProfile:
      "Global automotive OEMs (Hyundai, Daimler, Renault-Nissan, Royal Enfield) and tier-1 electronic EMS giants (Foxconn, Pegatron, Salcomp).",
    dominantIndustries: ["Automobile OEMs", "Electronics EMS & Smartphones", "Heavy Commercial Vehicles", "Solar Equipment"],
    clusters: [
      {
        name: "SIPCOT Industrial Park Sriperumbudur",
        type: "Manufacturing / Industrial",
        keyZones: ["Hyundai Motor Complex", "Foxconn EMS Zone", "Mambakkam Industrial Layout"],
      },
      {
        name: "SIPCOT Oragadam & Vallam Vadagal",
        type: "Manufacturing / Industrial",
        keyZones: ["Daimler Commercial Vehicle Complex", "Renault-Nissan Corridor", "Vallam Vadagal Aerospace Park"],
      },
    ],
    localComplianceNuance:
      "DISH Tamil Nadu Form 1 clearances, Section 59 overtime limits, female night-shift transport orders under Tamil Nadu Factories Rules, and bi-annual GCC/ULB Professional Tax.",
    averageSourcingSLA: "24–48 hours for electronics assembly operators, SMT technicians, and automotive assembly fitters",
    nearbyHubs: [
      { name: "Chennai", slug: "chennai" },
      { name: "Ambattur", slug: "ambattur" },
      { name: "Hosur", slug: "hosur" },
    ],
  },

  ambattur: {
    slug: "ambattur",
    name: "Ambattur Industrial Estate",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    lgdCode: 62202,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Ambattur",
    overview:
      "Ambattur Industrial Estate is one of South Asia's largest dedicated MSME manufacturing zones, spanning over 1,400 acres in North Chennai.",
    economicProfile:
      "Automotive ancillaries, precision machining, textile garments, plastics, and enterprise data centers (AdaniConnex, Equinix).",
    dominantIndustries: ["Auto Ancillary & Precision Tooling", "Garment Manufacturing", "Enterprise Data Centers", "Plastic Injection Moulding"],
    clusters: [
      {
        name: "Ambattur Industrial Estate Phases 1–3",
        type: "Manufacturing / Industrial",
        keyZones: ["South Phase Engineering Hub", "North Phase Auto Zone", "Pattaravakkam Electronics Complex"],
      },
      {
        name: "Ambattur IT & Data Center Enclave",
        type: "IT Park",
        keyZones: ["Prince Info Park", "Ambit IT Park", "Ambattur Data Center Corridor"],
      },
    ],
    localComplianceNuance:
      "Greater Chennai Corporation (GCC) Section 287 D&O trade licenses, TNPCB environmental clearances, DISH safety audits, and Tamil Nadu Labour Welfare Fund compliance.",
    averageSourcingSLA: "24–48 hours for lathe operators, quality checkers, and industrial supervisors",
    nearbyHubs: [
      { name: "Chennai", slug: "chennai" },
      { name: "Sriperumbudur-Oragadam", slug: "sriperumbudur-oragadam" },
      { name: "Coimbatore", slug: "coimbatore" },
    ],
  },

  hosur: {
    slug: "hosur",
    name: "Hosur SIPCOT",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    lgdCode: 62203,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Hosur",
    overview:
      "Hosur SIPCOT on the Tamil Nadu-Karnataka border is India's fastest-growing Electric Vehicle (EV), precision watchmaking, and automotive manufacturing hub.",
    economicProfile:
      "Electric two-wheelers (Ather, Ola Electric, TVS), commercial vehicles (Ashok Leyland), precision horology (Titan), and industrial automation.",
    dominantIndustries: ["Electric Vehicles (EV)", "Automobile Manufacturing", "Horology & Precision Engineering", "Commercial Vehicles"],
    clusters: [
      {
        name: "SIPCOT Industrial Complex Phases 1 & 2",
        type: "Manufacturing / Industrial",
        keyZones: ["Titan Precision Campus", "Ashok Leyland Plants 1 & 2", "TVS Motor Enclave"],
      },
      {
        name: "Moranapalli & Pochampalli Future EV Park",
        type: "Manufacturing / Industrial",
        keyZones: ["Ola Futurefactory Corridor", "Ather Energy Manufacturing Hub", "Pochampalli SIPCOT Phase 3"],
      },
    ],
    localComplianceNuance:
      "Cross-border inter-state workforce compliance between Karnataka and Tamil Nadu, DISH Krishnagiri approvals, and Tamil Nadu half-yearly Professional Tax.",
    averageSourcingSLA: "24–48 hours for EV battery pack technicians, mechatronics engineers, and assembly operators",
    nearbyHubs: [
      { name: "Bengaluru", slug: "bengaluru" },
      { name: "Bommasandra-Jigani", slug: "bommasandra-jigani" },
      { name: "Chennai", slug: "chennai" },
    ],
  },

  tiruppur: {
    slug: "tiruppur",
    name: "Tiruppur",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    lgdCode: 62204,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Tiruppur",
    overview:
      "Tiruppur is known as the 'Knitwear Capital of India', accounting for over 50% of the country's total cotton knitwear and apparel exports.",
    economicProfile:
      "Cotton spinning, computerized knitting, zero-liquid discharge (ZLD) dyeing units, and apparel export houses supplying global fashion brands.",
    dominantIndustries: ["Cotton Knitwear Exports", "Garment Manufacturing", "Zero Liquid Discharge (ZLD) Processing", "Textile Machinery"],
    clusters: [
      {
        name: "Netaji Apparel Park & TEKIC",
        type: "Manufacturing / Industrial",
        keyZones: ["Netaji Apparel Park (NAP)", "Tiruppur Export Knitwear Industrial Complex", "Avinashi Road Garment Zone"],
      },
      {
        name: "Kunnathur & Palladam Hi-Tech Weaving Parks",
        type: "Manufacturing / Industrial",
        keyZones: ["Palladam Hi-Tech Weaving Park", "Mangalam Dyeing & Printing Cluster"],
      },
    ],
    localComplianceNuance:
      "High scrutiny on Contract Labour CLRA register maintenance, Factories Act canteen and crèche facilities, TNPCB zero-liquid discharge compliance, and statutory minimum wages.",
    averageSourcingSLA: "24–48 hours for skilled sewing operators, pattern cutters, and merchandising coordinators",
    nearbyHubs: [
      { name: "Coimbatore", slug: "coimbatore" },
      { name: "Chennai", slug: "chennai" },
      { name: "Kochi", slug: "kochi" },
    ],
  },

  // 4. GUJARAT INDUSTRIAL HUBS
  sanand: {
    slug: "sanand",
    name: "Sanand GIDC",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 49401,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Sanand",
    overview:
      "Sanand GIDC is Gujarat's premier automotive and newly emerging semiconductor assembly capital, hosting Tata Motors, Micron Technology, and multinational tier-1s.",
    economicProfile:
      "Passenger car manufacturing, semiconductor ATMP packaging, cleanroom robotics, and consumer electronics.",
    dominantIndustries: ["Automobile Assembly", "Semiconductor ATMP", "Consumer Electronics", "Precision Forgings"],
    clusters: [
      {
        name: "Sanand GIDC Phase 1 & 2",
        type: "Manufacturing / Industrial",
        keyZones: ["Tata Motors EV Assembly Plant", "Micron Semiconductor Cleanroom Park", "Colgate-Palmolive FMCG Hub"],
      },
      {
        name: "Khoraj-Sanand Mega Industrial Park",
        type: "Manufacturing / Industrial",
        keyZones: ["Khoraj Industrial Area", "Sanand Auto Ancillary Enclave"],
      },
    ],
    localComplianceNuance:
      "Governed by Gujarat Factories Rules, DISH Ahmedabad Form 1 site clearances, Gujarat Notification GHN-35 Professional Tax (≤₹12,000 exempt), and GPCB environmental consents.",
    averageSourcingSLA: "24–48 hours for cleanroom technicians, assembly fitters, and electrical maintenance staff",
    nearbyHubs: [
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Changodar", slug: "changodar" },
      { name: "Vadodara", slug: "vadodara" },
    ],
  },

  changodar: {
    slug: "changodar",
    name: "Changodar Industrial Belt",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 49402,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Ahmedabad",
    overview:
      "Changodar on the Ahmedabad-Rajkot highway is one of Western India's densest pharmaceutical machinery, logistics warehousing, and packaging corridors.",
    economicProfile:
      "Pharma packaging machines, automated warehouse logistics, plastic blow moulding, and engineering fabrications.",
    dominantIndustries: ["Pharma Packaging Machinery", "Automated Warehousing & 3PL", "Plastic Moulding", "Industrial Hardware"],
    clusters: [
      {
        name: "Changodar-Moraiya Industrial Estate",
        type: "Manufacturing / Industrial",
        keyZones: ["Moraiya Pharma Zone", "Changodar Engineering Layout", "Sarkhej-Bawla Logistics Strip"],
      },
      {
        name: "Matoda GIDC & Sari Industrial Area",
        type: "Manufacturing / Industrial",
        keyZones: ["Matoda GIDC Cluster", "Sari Engineering Park"],
      },
    ],
    localComplianceNuance:
      "High volume warehousing CLRA contractor management, GPCB air/water consent compliance, and AMC/District Panchayat trade licensing.",
    averageSourcingSLA: "24–48 hours for forklift operators, warehouse supervisors, and machinery assemblers",
    nearbyHubs: [
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Sanand", slug: "sanand" },
      { name: "Vadodara", slug: "vadodara" },
    ],
  },

  "dahej-bharuch": {
    slug: "dahej-bharuch",
    name: "Dahej-Bharuch PCPIR",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 49403,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Dahej",
    overview:
      "Dahej is India's flagship Petroleum, Chemicals and Petrochemicals Investment Region (PCPIR) with dedicated deep-water chemical port terminals.",
    economicProfile:
      "Petrochemical complexes (OPaL, ONGC), specialty agrochemicals, caustic soda, LNG terminals (Petronet), and bulk synthetic fibers.",
    dominantIndustries: ["Petrochemical Cracking", "Specialty Agrochemicals", "Bulk Polymers & PVC", "LNG & Cryogenic Terminals"],
    clusters: [
      {
        name: "Dahej PCPIR Special Investment Region",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["OPaL Petrochemical Complex", "Dahej SEZ Part 1 & 2", "Reliance Dahej Manufacturing Division"],
      },
      {
        name: "Bharuch-Ankleshwar Chemical Belt",
        type: "Manufacturing / Industrial",
        keyZones: ["Ankleshwar GIDC", "Panoli Industrial Area", "Jhagadia Mega Industrial Estate"],
      },
    ],
    localComplianceNuance:
      "Stringent GPCB Red-Category consent management, Major Accident Hazard (MAH) safety drills under Factories Act Section 41B, and dangerous goods transport compliance.",
    averageSourcingSLA: "24–48 hours for chemical process operators, DCS controllers, and safety managers",
    nearbyHubs: [
      { name: "Vadodara", slug: "vadodara" },
      { name: "Surat", slug: "surat" },
      { name: "Ahmedabad", slug: "ahmedabad" },
    ],
  },

  morbi: {
    slug: "morbi",
    name: "Morbi",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 49404,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Morbi",
    overview:
      "Morbi is the world's second-largest ceramic tile manufacturing powerhouse, producing over 80% of India's ceramic wall and floor tiles.",
    economicProfile:
      "Vitrified floor tiles, glazed ceramic wall tiles, sanitaryware, packaging boxes, and industrial clay processing.",
    dominantIndustries: ["Ceramic & Vitrified Tiles", "Sanitaryware", "Corrugated Packaging", "Paper Mills"],
    clusters: [
      {
        name: "Morbi-Wankaner Ceramic Highway",
        type: "Manufacturing / Industrial",
        keyZones: ["8-A National Highway Ceramic Zone", "Lakhdhirpur Road Tile Belt", "Halvad Industrial Area"],
      },
      {
        name: "Pipali-Jetpar Industrial Cluster",
        type: "Manufacturing / Industrial",
        keyZones: ["Pipali Road Vitrified Hub", "Jetpar Heavy Clay Estate"],
      },
    ],
    localComplianceNuance:
      "DISH factory inspections for continuous kilns and heavy presses, GPCB coal-gasifier and PNG conversion monitoring, and contract labour muster audits.",
    averageSourcingSLA: "24–48 hours for kiln operators, ceramic technologists, and loading supervisors",
    nearbyHubs: [
      { name: "Rajkot", slug: "ahmedabad" },
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Surat", slug: "surat" },
    ],
  },

  "savli-vadodara": {
    slug: "savli-vadodara",
    name: "Savli-Vadodara",
    state: "Gujarat",
    stateSlug: "gujarat",
    lgdCode: 49405,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Savli,_Gujarat",
    overview:
      "Savli GIDC in Vadodara district is a globally recognized manufacturing cluster for railway rolling stock, power grid equipment, and heavy transformers.",
    economicProfile:
      "High-speed passenger rail coaches (Alstom), mega power transformers (ABB, Schneider), wind energy towers, and precision machine tools.",
    dominantIndustries: ["Railway Rolling Stock & Locomotives", "Power Transmission Transformers", "Wind Turbine Engineering", "Heavy Electricals"],
    clusters: [
      {
        name: "Savli GIDC Industrial Estate",
        type: "Manufacturing / Industrial",
        keyZones: ["Alstom Rolling Stock Metro Facility", "Heavy Electrical Transformer Zone", "Manjusar GIDC Layout"],
      },
      {
        name: "Makarpura GIDC Engineering Hub",
        type: "Manufacturing / Industrial",
        keyZones: ["Makarpura Industrial Estate", "GIDC Electrical Enclave", "Gorwa Ancillary Park"],
      },
    ],
    localComplianceNuance:
      "Factories Act heavy crane and lifting equipment stability certification (Form 1-A), DISH Vadodara licenses, and Gujarat Professional Tax adherence.",
    averageSourcingSLA: "24–48 hours for rolling stock electrical technicians, certified welders, and testing engineers",
    nearbyHubs: [
      { name: "Vadodara", slug: "vadodara" },
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Dahej-Bharuch", slug: "dahej-bharuch" },
    ],
  },

  // 5. ODISHA INDUSTRIAL HUBS
  kalinganagar: {
    slug: "kalinganagar",
    name: "Kalinganagar Steel City",
    state: "Odisha",
    stateSlug: "odisha",
    lgdCode: 38801,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Kalinganagar",
    overview:
      "Kalinganagar in Jajpur district is India's largest modern metallurgy and integrated steel manufacturing hub, anchored by Tata Steel and Jindal Stainless.",
    economicProfile:
      "Integrated blast furnace steel production, cold rolling mills, stainless steel sheets, ferroalloys, and captive power plants.",
    dominantIndustries: ["Integrated Steel Production", "Stainless Steel", "Ferroalloys & Chrome Smelting", "Heavy Machinery Fabrication"],
    clusters: [
      {
        name: "Kalinganagar Industrial Complex (KNIC)",
        type: "Manufacturing / Industrial",
        keyZones: ["Tata Steel Kalinganagar Plant", "Jindal Stainless Mega Complex", "Neelachal Ispat Nigam Enclave"],
      },
      {
        name: "Duburi & Danagadi Metallurgy Corridor",
        type: "Manufacturing / Industrial",
        keyZones: ["Duburi Ferrochrome Zone", "IDCO Common Corridor"],
      },
    ],
    localComplianceNuance:
      "CRITICAL: Odisha PT Act 2000 repealed effective April 1, 2026 (Flat ₹0 PT). DISH Odisha Major Hazard safety oversight, OSPCB blast furnace emissions monitoring, and high-volume CLRA contract labour adherence.",
    averageSourcingSLA: "24–48 hours for blast furnace operators, rolling mill technicians, and safety engineers",
    nearbyHubs: [
      { name: "Bhubaneswar", slug: "bhubaneswar" },
      { name: "Paradeep-Port", slug: "paradeep-port" },
      { name: "Kolkata", slug: "kolkata" },
    ],
  },

  jharsuguda: {
    slug: "jharsuguda",
    name: "Jharsuguda",
    state: "Odisha",
    stateSlug: "odisha",
    lgdCode: 38802,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Jharsuguda",
    overview:
      "Jharsuguda, known as the 'Powerhouse of Odisha', is home to one of the world's largest single-location aluminum smelters and thermal power complexes.",
    economicProfile:
      "Primary aluminum smelting (Vedanta), captive thermal power generation, secondary metal processing, and heavy coal mining ancillaries.",
    dominantIndustries: ["Primary Aluminum Smelting", "Thermal Power Generation", "Coal Mining Ancillaries", "Secondary Metallurgy"],
    clusters: [
      {
        name: "Vedanta Aluminum & Power Zone",
        type: "Manufacturing / Industrial",
        keyZones: ["Vedanta Smelter Complex", "Captive Power Plant Enclave", "Brundamal Industrial Area"],
      },
      {
        name: "IDCO Industrial Estate Jharsuguda",
        type: "Manufacturing / Industrial",
        keyZones: ["Phase 1 & 2 Metal Processing", "Badmal Logistics Corridor"],
      },
    ],
    localComplianceNuance:
      "Zero Professional Tax under repealed Odisha statute, DISH thermal plant safety clearances, hazardous potline emergency preparedness, and contractor labour audit rigor.",
    averageSourcingSLA: "24–48 hours for potline operators, turbine engineers, and industrial instrumentation specialists",
    nearbyHubs: [
      { name: "Rourkela", slug: "rourkela" },
      { name: "Kalinganagar", slug: "kalinganagar" },
      { name: "Bhubaneswar", slug: "bhubaneswar" },
    ],
  },

  "paradeep-port": {
    slug: "paradeep-port",
    name: "Paradeep Port City",
    state: "Odisha",
    stateSlug: "odisha",
    lgdCode: 38803,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Paradip",
    overview:
      "Paradeep is Eastern India's primary deep-water port city and the hub of the Odisha Petroleum, Chemicals and Petrochemical Investment Region (PCPIR).",
    economicProfile:
      "Crude oil refining (IOCL 15 MMTPA refinery), phosphatic fertilizers (IFFCO, Paradeep Phosphates), port logistics, and pelletization plants.",
    dominantIndustries: ["Petroleum Refining & Petrochemicals", "Phosphatic Fertilizers", "Port Marine Logistics", "Iron Ore Pelletization"],
    clusters: [
      {
        name: "IOCL Refinery & Petrochemical PCPIR",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["IOCL Mega Refinery Complex", "Petrochemical Downstream Park", "Plastic Park Paradeep"],
      },
      {
        name: "Paradeep Port Trust & Fertilizer Belt",
        type: "Manufacturing / Industrial",
        keyZones: ["IFFCO Paradeep Complex", "PPL Chemical Fertilizer Hub", "Port Logistics Enclave"],
      },
    ],
    localComplianceNuance:
      "Dock Workers (Safety, Health and Welfare) Act, DISH chemical refinery safety audits, OSPCB marine discharge standards, and repealed Odisha PT compliance.",
    averageSourcingSLA: "24–48 hours for refinery process technicians, stevedoring coordinators, and chemical laboratory analysts",
    nearbyHubs: [
      { name: "Bhubaneswar", slug: "bhubaneswar" },
      { name: "Kalinganagar", slug: "kalinganagar" },
      { name: "Kolkata", slug: "kolkata" },
    ],
  },

  rourkela: {
    slug: "rourkela",
    name: "Rourkela Steel City",
    state: "Odisha",
    stateSlug: "odisha",
    lgdCode: 38804,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Rourkela",
    overview:
      "Rourkela in Sundargarh district is India's historic public-sector steel pioneer, anchored by the 4.5 MMTPA SAIL Rourkela Steel Plant (RSP).",
    economicProfile:
      "Heavy steel plates, Silicon steel for electrical power transformers, heavy fabrication, structural engineering, and refractories.",
    dominantIndustries: ["Integrated Public-Sector Steel", "Special Plates for Defense", "Heavy Machine Fabrication", "Refractory Materials"],
    clusters: [
      {
        name: "SAIL Rourkela Steel Plant (RSP) Complex",
        type: "Manufacturing / Industrial",
        keyZones: ["RSP Blast Furnace & Plate Mill", "Silicon Steel Mill (SSM)", "Captive Power Plant 1 & 2"],
      },
      {
        name: "Kalunga Industrial Estate",
        type: "Manufacturing / Industrial",
        keyZones: ["Kalunga Heavy Fabrication Belt", "IDCO Sponge Iron Enclave", "Civil Township Light Industry"],
      },
    ],
    localComplianceNuance:
      "Public sector vendor governance, DISH boiler inspections, Mines Act interlock compliances for captive iron mines, and zero PT liability under repealed Odisha statute.",
    averageSourcingSLA: "24–48 hours for structural welders, NDT testing technicians, and heavy equipment mechanics",
    nearbyHubs: [
      { name: "Jharsuguda", slug: "jharsuguda" },
      { name: "Kalinganagar", slug: "kalinganagar" },
      { name: "Bhubaneswar", slug: "bhubaneswar" },
    ],
  },

  // 6. NORTH & CENTRAL INDUSTRIAL HUBS
  "imt-manesar": {
    slug: "imt-manesar",
    name: "IMT Manesar",
    state: "Haryana",
    stateSlug: "haryana",
    lgdCode: 8501,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Manesar",
    overview:
      "Industrial Model Township (IMT) Manesar in Gurugram district is one of North India's premier integrated automotive, R&D, and electronics manufacturing hubs.",
    economicProfile:
      "Automobile assembly (Maruti Suzuki, Honda Motorcycle), automotive electronics, robotic press lines, and IT software testing.",
    dominantIndustries: ["Automobile OEMs", "Automotive R&D", "Precision Die Casting", "Consumer Electronics"],
    clusters: [
      {
        name: "IMT Manesar Phases 1–5",
        type: "Manufacturing / Industrial",
        keyZones: ["Maruti Suzuki Campus Sector 8", "Honda Two-Wheeler Sector 3", "Cyber Green IT Enclave"],
      },
      {
        name: "Pataudi-Bilaspur Logistics Corridor",
        type: "Manufacturing / Industrial",
        keyZones: ["Bilaspur E-Commerce Mega Hub", "Binola Logistics Strip"],
      },
    ],
    localComplianceNuance:
      "Haryana Labour Department factory licensing, zero Professional Tax jurisdiction, monthly Haryana Labour Welfare Fund remittances, and standing orders certified dispute mechanisms.",
    averageSourcingSLA: "24–48 hours for automotive assembly fitters, robotic maintenance technicians, and QA leads",
    nearbyHubs: [
      { name: "Gurugram", slug: "gurugram" },
      { name: "Delhi", slug: "delhi" },
      { name: "Bhiwadi-Neemrana", slug: "bhiwadi-neemrana" },
    ],
  },

  "bhiwadi-neemrana": {
    slug: "bhiwadi-neemrana",
    name: "Neemrana-Bhiwadi",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    lgdCode: 11201,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Neemrana",
    overview:
      "The Neemrana-Bhiwadi corridor on the Delhi-Jaipur highway hosts India's premier Japanese Industrial Township, automotive manufacturing, and float glass plants.",
    economicProfile:
      "Japanese multinational manufacturing (Daikin, Havells, Saint-Gobain), auto ancillaries, electrical appliances, and architectural glass.",
    dominantIndustries: ["Japanese Industrial Township", "HVAC & Air Conditioners", "Architectural Glass", "Electrical Appliances"],
    clusters: [
      {
        name: "Neemrana Japanese Industrial Zone",
        type: "Manufacturing / Industrial",
        keyZones: ["JETRO Japanese Zone Phase 1–3", "Hero MotoCorp Garden Factory", "Daikin AC Mega Campus"],
      },
      {
        name: "Bhiwadi & Khushkhera RIICO Industrial Areas",
        type: "Manufacturing / Industrial",
        keyZones: ["Khushkhera Auto Ancillary Zone", "Bhiwadi Phase 1–4", "Tapukara Industrial Complex"],
      },
    ],
    localComplianceNuance:
      "Zero Professional Tax on salaries in Rajasthan, RIICO industrial building sanctions, Rajasthan Factories Rules doubled thresholds (20/40), and RSPCB environmental consent tracking.",
    averageSourcingSLA: "24–48 hours for HVAC assembly technicians, glass cutting operators, and bilingual Japanese plant coordinators",
    nearbyHubs: [
      { name: "IMT-Manesar", slug: "imt-manesar" },
      { name: "Gurugram", slug: "gurugram" },
      { name: "Jaipur", slug: "jaipur" },
    ],
  },

  pithampur: {
    slug: "pithampur",
    name: "Pithampur Industrial Area",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    lgdCode: 43601,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Pithampur",
    overview:
      "Pithampur in Dhar district, popularly known as the 'Detroit of Central India', is Madhya Pradesh's flagship automotive manufacturing and pharma SEZ.",
    economicProfile:
      "Automotive assembly (Eicher, Force Motors, Mahindra), USFDA-approved pharmaceutical formulation (Cipla, Glenmark, Lupin), and heavy machinery.",
    dominantIndustries: ["Commercial Vehicles & Auto", "USFDA Pharma SEZ", "Heavy Construction Equipment", "Agri-Processing"],
    clusters: [
      {
        name: "Pithampur Auto Belt Sectors 1–3",
        type: "Manufacturing / Industrial",
        keyZones: ["VE Commercial Vehicles Plant", "Force Motors Assembly Sector", "Sector 3 Heavy Engineering"],
      },
      {
        name: "Pithampur Special Economic Zone (SEZ)",
        type: "Special Economic Zone (SEZ)",
        keyZones: ["Pharma SEZ Phase 1 & 2", "Textile & Apparel Park"],
      },
    ],
    localComplianceNuance:
      "MP Vritti Kar Adhiniyam 1995 (annual slab up to ₹2,500), DISH Indore factory licensing, MPPCB pharmaceutical discharge tracking, and semi-annual minimum wage gazettes.",
    averageSourcingSLA: "24–48 hours for pharma formulation chemists, quality assurance officers, and CNC lathe operators",
    nearbyHubs: [
      { name: "Indore", slug: "indore" },
      { name: "Vadodara", slug: "vadodara" },
      { name: "Bhopal", slug: "indore" },
    ],
  },

  ludhiana: {
    slug: "ludhiana",
    name: "Ludhiana",
    state: "Punjab",
    stateSlug: "punjab",
    lgdCode: 3201,
    tier: 2,
    wikipediaUri: "https://en.wikipedia.org/wiki/Ludhiana",
    overview:
      "Ludhiana, known as the 'Manchester of India', is Punjab's largest industrial city, producing over 75% of India's bicycles and 90% of winter woolen wear.",
    economicProfile:
      "Bicycle assembly and components (Hero, Avon), woolen knitwear and hosiery, auto parts, sewing machines, and diesel engines.",
    dominantIndustries: ["Bicycle Manufacturing", "Woolen Knitwear & Hosiery", "Auto Ancillary & Hand Tools", "Diesel Engines & Tractors"],
    clusters: [
      {
        name: "Focal Point Phases 1–8",
        type: "Manufacturing / Industrial",
        keyZones: ["Hero Cycles Complex", "Dhandari Kalan Industrial Belt", "Phase 5 & 6 Heavy Engineering"],
      },
      {
        name: "Industrial Area A & B",
        type: "Manufacturing / Industrial",
        keyZones: ["Hosiery Textile Zone", "Sewing Machine Hub", "Miller Ganj Auto Parts Market"],
      },
    ],
    localComplianceNuance:
      "Punjab State Development Tax Act 2018 (flat ₹200/mo only for Income Tax payers), Punjab Factories Rules safety audits, and PPCB textile effluent oversight.",
    averageSourcingSLA: "24–48 hours for textile machine operators, bicycle assembly workers, and industrial supervisors",
    nearbyHubs: [
      { name: "Chandigarh", slug: "chandigarh" },
      { name: "Delhi", slug: "delhi" },
      { name: "Gurugram", slug: "gurugram" },
    ],
  },

  "greater-noida": {
    slug: "greater-noida",
    name: "Greater Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    lgdCode: 15401,
    tier: 1,
    wikipediaUri: "https://en.wikipedia.org/wiki/Greater_Noida",
    overview:
      "Greater Noida in Gautam Buddha Nagar is North India's planned megacity for consumer electronics, smartphone manufacturing, and hyperscale data center parks.",
    economicProfile:
      "Smartphone manufacturing (Oppo, Vivo), consumer electronics (Haier), electric vehicle components, and enterprise data center campuses (Yotta D1).",
    dominantIndustries: ["Smartphone & Electronics EMS", "Hyperscale Data Centers", "Consumer Electronics", "Automobile Components"],
    clusters: [
      {
        name: "Ecotech Industrial Areas 1–16",
        type: "Manufacturing / Industrial",
        keyZones: ["Oppo Mobile Manufacturing Mega Campus", "Haier Appliance Park", "Ecotech 6 & 11 Electronics Clusters"],
      },
      {
        name: "Knowledge Park & Techzone 4",
        type: "IT Park",
        keyZones: ["Yotta D1 Hyperscale Data Center", "Knowledge Park 3 Corporate Enclave"],
      },
    ],
    localComplianceNuance:
      "Zero Professional Tax jurisdiction in Uttar Pradesh, Nivesh Mitra single-window labour filings, DISH Gautam Buddha Nagar factory approvals, and UP Shops and Commercial Establishments Act.",
    averageSourcingSLA: "24–48 hours for electronics assembly operators, cleanroom SMT engineers, and facility managers",
    nearbyHubs: [
      { name: "Noida", slug: "noida" },
      { name: "Delhi", slug: "delhi" },
      { name: "Gurugram", slug: "gurugram" },
    ],
  },
};
