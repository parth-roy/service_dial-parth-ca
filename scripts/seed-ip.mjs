import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI or MONGODB_URI is not set in environment.");
  process.exit(1);
}

// Inline schemas for standalone migration/seed script to guarantee consistency
const JurisdictionSchema = new mongoose.Schema({
  officeName: { type: String, required: true, unique: true },
  officialAddress: { type: String, required: true },
  statesCovered: [{ type: String }],
}, { timestamps: true });

const GeographySchema = new mongoose.Schema({
  level: { type: String, enum: ['State', 'District', 'Subdistrict', 'LocalBody'], required: true },
  lgdCode: { type: Number, sparse: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Geography' },
  jurisdictionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Jurisdiction' },
  provenanceSource: { type: String, default: 'LGD Dashboard' }
}, { timestamps: true });

GeographySchema.index({ slug: 1, level: 1 }, { unique: true });
GeographySchema.index({ lgdCode: 1, level: 1 });

const NiceClassSchema = new mongoose.Schema({
  classNumber: { type: Number, required: true, unique: true, min: 1, max: 45 },
  type: { type: String, enum: ['Goods', 'Services'], required: true },
  description: { type: String, required: true },
  industryTags: [{ type: String }]
}, { timestamps: true });

const FeeRuleSchema = new mongoose.Schema({
  actionSubtype: { type: String, required: true },
  filingMode: { type: String, enum: ['Physical', 'E-Filing'], default: 'E-Filing' },
  applicantQualification: { 
    type: String, 
    enum: ['Individual', 'DPIIT_Startup', 'Udyam_MSME', 'Corporate'],
    required: true
  },
  monetaryUnit: { type: String, default: 'INR' },
  unitBasis: { type: String, enum: ['Per-Mark-Per-Class', 'Per-Application'], required: true },
  govtFee: { type: Number, required: true },
  professionalFee: { type: Number, required: true },
  gstTreatment: { type: String, enum: ['Exempt', 'Standard 18%', 'Reverse Charge'], default: 'Standard 18%' },
  effectivePeriodStart: { type: Date, required: true, default: Date.now },
  effectivePeriodEnd: { type: Date },
  reviewerMetadata: { type: String }
}, { timestamps: true });

const IPPageAssetSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  routeFamily: { type: String, enum: ['City-Intent', 'State-Hub', 'Office-Guide', 'Tool'], required: true },
  intentEnum: { type: String, enum: ['registration', 'renewal', 'objection-sec9', 'objection-sec11', 'opposition', 'show-cause-hearing'] },
  geographyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Geography' },
  publicationState: { type: String, enum: ['Draft', 'Published', 'Withheld', 'Merged', 'NoIndex', 'Withdrawn'], default: 'Draft' },
  mergeTargetSlug: { type: String },
  editorialReviewMetadata: {
    reviewerId: String,
    reviewedAt: Date,
    sourceCitations: [String]
  },
  contentOverrides: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

const Jurisdiction = mongoose.models.Jurisdiction || mongoose.model('Jurisdiction', JurisdictionSchema);
const Geography = mongoose.models.Geography || mongoose.model('Geography', GeographySchema);
const NiceClass = mongoose.models.NiceClass || mongoose.model('NiceClass', NiceClassSchema);
const FeeRule = mongoose.models.FeeRule || mongoose.model('FeeRule', FeeRuleSchema);
const IPPageAsset = mongoose.models.IPPageAsset || mongoose.model('IPPageAsset', IPPageAssetSchema);

const JURISDICTIONS_DATA = [
  {
    officeName: "Mumbai",
    officialAddress: "Intellectual Property Bhavan, Near Antop Hill Head Post Office, S.M. Road, Antop Hill, Mumbai - 400037",
    statesCovered: ["Maharashtra", "Madhya Pradesh", "Chhattisgarh", "Goa", "Daman and Diu", "Dadra and Nagar Haveli"]
  },
  {
    officeName: "New Delhi",
    officialAddress: "Intellectual Property Bhavan, Plot No. 32, Sector 14, Dwarka, New Delhi - 110078",
    statesCovered: ["Delhi", "Haryana", "Punjab", "Himachal Pradesh", "Jammu and Kashmir", "Ladakh", "Uttar Pradesh", "Chandigarh"]
  },
  {
    officeName: "Chennai",
    officialAddress: "Intellectual Property Bhavan, G.S.T. Road, Guindy, Chennai - 600032",
    statesCovered: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Puducherry", "Lakshadweep"]
  },
  {
    officeName: "Kolkata",
    officialAddress: "CP-2, Sector V, Salt Lake City, Kolkata - 700091",
    statesCovered: ["West Bengal", "Bihar", "Odisha", "Jharkhand", "Assam", "Arunachal Pradesh", "Manipur", "Mizoram", "Meghalaya", "Sikkim", "Tripura", "Nagaland", "Andaman and Nicobar Islands"]
  },
  {
    officeName: "Ahmedabad",
    officialAddress: "S.M. Road, Near Chanakyapuri, Ghatlodiya, Ahmedabad - 380061",
    statesCovered: ["Gujarat", "Rajasthan"]
  }
];

const NICE_CLASSES_DATA = [
  // Goods Classes 1 to 34
  { classNumber: 1, type: "Goods", description: "Chemicals for use in industry, science, agriculture, and photography", industryTags: ["Chemicals", "Agriculture", "Petrochemicals", "Industrial Manufacturing"] },
  { classNumber: 2, type: "Goods", description: "Paints, varnishes, lacquers, preservatives against rust and deterioration", industryTags: ["Paints & Coatings", "Automotive", "Construction Materials"] },
  { classNumber: 3, type: "Goods", description: "Cosmetics, soaps, perfumery, essential oils, cleaning preparations", industryTags: ["Cosmetics", "Personal Care", "FMCG", "Beauty & Wellness"] },
  { classNumber: 4, type: "Goods", description: "Industrial oils and greases, fuels, illuminants, candles, and wicks", industryTags: ["Energy", "Petroleum", "Lubricants", "Industrial Consumables"] },
  { classNumber: 5, type: "Goods", description: "Pharmaceuticals, medical and veterinary preparations, dietetic substances", industryTags: ["Pharmaceuticals", "Biotechnology", "Healthcare", "Nutraceuticals"] },
  { classNumber: 6, type: "Goods", description: "Common metals and their alloys, metal ores, metal building materials", industryTags: ["Metals & Mining", "Steel", "Heavy Metallurgy", "Hardware"] },
  { classNumber: 7, type: "Goods", description: "Machines, machine tools, motors and engines (except for land vehicles)", industryTags: ["Machinery", "Industrial Automation", "Heavy Engineering", "Tooling"] },
  { classNumber: 8, type: "Goods", description: "Hand tools and implements, cutlery, side arms, razors", industryTags: ["Hand Tools", "Hardware", "Cutlery", "Kitchenware"] },
  { classNumber: 9, type: "Goods", description: "Computers, software, electronic instruments, audiovisual equipment, telecommunications", industryTags: ["Software & SaaS", "Electronics", "Hardware", "Semiconductors", "Consumer Tech"] },
  { classNumber: 10, type: "Goods", description: "Surgical, medical, dental, and veterinary apparatus and instruments", industryTags: ["Medical Devices", "Healthcare Equipment", "Diagnostics", "Biomedical"] },
  { classNumber: 11, type: "Goods", description: "Apparatus for lighting, heating, steam generating, cooking, refrigerating", industryTags: ["Consumer Appliances", "Electrical Equipment", "HVAC", "Kitchen Electronics"] },
  { classNumber: 12, type: "Goods", description: "Vehicles, apparatus for locomotion by land, air, or water", industryTags: ["Automotive & EV", "Aerospace", "Railways", "Maritime Transport"] },
  { classNumber: 13, type: "Goods", description: "Firearms, ammunition and projectiles, explosives, fireworks", industryTags: ["Defense Manufacturing", "Security Equipment", "Pyrotechnics"] },
  { classNumber: 14, type: "Goods", description: "Precious metals, jewelry, precious stones, horological instruments", industryTags: ["Gems & Jewelry", "Diamond Processing", "Luxury Goods", "Watches"] },
  { classNumber: 15, type: "Goods", description: "Musical instruments and accessories", industryTags: ["Musical Instruments", "Audio & Media", "Acoustics"] },
  { classNumber: 16, type: "Goods", description: "Paper, cardboard, printed matter, stationery, packaging materials", industryTags: ["Printing & Packaging", "Publishing", "Stationery", "Office Supplies"] },
  { classNumber: 17, type: "Goods", description: "Rubber, gutta-percha, asbestos, mica, plastics in extruded form", industryTags: ["Plastics & Polymers", "Rubber Manufacturing", "Insulation Materials"] },
  { classNumber: 18, type: "Goods", description: "Leather and imitations of leather, animal skins, luggage, umbrellas", industryTags: ["Leather Goods", "Footwear & Accessories", "Travel Gear"] },
  { classNumber: 19, type: "Goods", description: "Building materials (non-metallic), non-metallic rigid pipes, asphalt", industryTags: ["Construction & Cement", "Ceramics", "Sanitaryware", "Infrastructure"] },
  { classNumber: 20, type: "Goods", description: "Furniture, mirrors, picture frames, goods of wood, cork, reed", industryTags: ["Furniture & Home Decor", "Woodworking", "Modular Interior"] },
  { classNumber: 21, type: "Goods", description: "Household or kitchen utensils and containers, cookware, glassware", industryTags: ["Kitchenware", "Glass & Ceramics", "Consumer Goods", "Tableware"] },
  { classNumber: 22, type: "Goods", description: "Ropes and string, nets, tents, tarpaulins, sails, sacks", industryTags: ["Industrial Textiles", "Packaging", "Agriculture", "Marine Equipment"] },
  { classNumber: 23, type: "Goods", description: "Yarns and threads, for textile use", industryTags: ["Textiles & Spinning", "Synthetic Yarns", "Apparel Manufacturing"] },
  { classNumber: 24, type: "Goods", description: "Textiles and substitutes for textiles, household linen, curtains", industryTags: ["Textiles", "Fabrics", "Home Furnishing", "Handlooms"] },
  { classNumber: 25, type: "Goods", description: "Clothing, footwear, headwear", industryTags: ["Apparel & Fashion", "Garments", "Footwear", "E-commerce Retail"] },
  { classNumber: 26, type: "Goods", description: "Lace and embroidery, ribbons and braid, buttons, hooks, pins", industryTags: ["Fashion Accessories", "Textile Trims", "Embroidery"] },
  { classNumber: 27, type: "Goods", description: "Carpets, rugs, mats and matting, linoleum, wall hangings", industryTags: ["Floor Coverings", "Carpets & Rugs", "Interior Materials"] },
  { classNumber: 28, type: "Goods", description: "Games, toys and playthings, video game apparatus, sporting articles", industryTags: ["Toys & Games", "Sports Equipment", "Gaming Accessories"] },
  { classNumber: 29, type: "Goods", description: "Meat, fish, poultry, processed fruits and vegetables, edible oils, dairy", industryTags: ["Food Processing", "Dairy", "Edible Oils", "Cold Chain Logistics"] },
  { classNumber: 30, type: "Goods", description: "Coffee, tea, cocoa, sugar, rice, flour, spices, confectionery", industryTags: ["Spices & Agri Export", "Packaged Food", "Confectionery", "Tea & Coffee"] },
  { classNumber: 31, type: "Goods", description: "Raw and unprocessed agricultural, aquacultural, horticultural products, grains", industryTags: ["Agriculture", "Horticulture", "Animal Feed", "Seeds"] },
  { classNumber: 32, type: "Goods", description: "Beers, mineral and aerated waters, non-alcoholic beverages, fruit juices", industryTags: ["Beverages", "Packaged Drinking Water", "Juices & Soft Drinks", "Breweries"] },
  { classNumber: 33, type: "Goods", description: "Alcoholic beverages, except beers", industryTags: ["Distilleries", "Wine & Spirits", "Liquor Manufacturing"] },
  { classNumber: 34, type: "Goods", description: "Tobacco, smokers' articles, matches", industryTags: ["Tobacco", "FMCG"] },

  // Services Classes 35 to 45
  { classNumber: 35, type: "Services", description: "Advertising, business management, corporate advisory, retail and wholesale services", industryTags: ["Retail & E-commerce", "Advertising & Marketing", "Business Consulting", "Recruitment & HR"] },
  { classNumber: 36, type: "Services", description: "Financial, monetary, and banking services, insurance, real estate affairs", industryTags: ["BFSI", "Fintech", "Banking", "Real Estate & Infrastructure", "Wealth Management"] },
  { classNumber: 37, type: "Services", description: "Construction services, installation and repair services, mining extraction", industryTags: ["Real Estate Development", "EPC & Infrastructure", "Industrial Repair", "Facilities Management"] },
  { classNumber: 38, type: "Services", description: "Telecommunication services, broadcasting, data transmission", industryTags: ["Telecom & ISP", "Broadcasting", "Cloud Comms", "Network Services"] },
  { classNumber: 39, type: "Services", description: "Transport, packaging and storage of goods, travel arrangement, warehousing", industryTags: ["Logistics & Warehousing", "Supply Chain", "Maritime Shipping", "Fleet Transport"] },
  { classNumber: 40, type: "Services", description: "Treatment of materials, custom manufacturing, recycling, waste treatment", industryTags: ["Custom Manufacturing", "Industrial Processing", "Renewable Energy & Recycling"] },
  { classNumber: 41, type: "Services", description: "Education, training, entertainment, sporting and cultural activities", industryTags: ["EdTech & Higher Education", "Media & Entertainment", "Corporate Training", "Sports"] },
  { classNumber: 42, type: "Services", description: "Scientific and technological services, computer software development, IT services", industryTags: ["IT Services & SaaS", "Software Engineering", "Cloud Computing", "AI & Cyber Security", "R&D"] },
  { classNumber: 43, type: "Services", description: "Services for providing food and drink, temporary accommodation, hospitality", industryTags: ["Hospitality & Hotels", "Restaurants & QSR", "Cloud Kitchens", "Tourism"] },
  { classNumber: 44, type: "Services", description: "Medical services, veterinary services, hygienic and beauty care for human beings", industryTags: ["Healthcare & Hospitals", "Diagnostics & Clinics", "Wellness & Salons", "Telemedicine"] },
  { classNumber: 45, type: "Services", description: "Legal services, security services for physical protection, personal social services", industryTags: ["Legal Advisory & IP", "Corporate Governance", "Security Services", "Statutory Compliance"] }
];

const FEE_RULES_DATA = [
  // TM-A Registration
  { actionSubtype: "TM-A Registration", filingMode: "E-Filing", applicantQualification: "Individual", unitBasis: "Per-Mark-Per-Class", govtFee: 4500, professionalFee: 1499, gstTreatment: "Standard 18%" },
  { actionSubtype: "TM-A Registration", filingMode: "E-Filing", applicantQualification: "DPIIT_Startup", unitBasis: "Per-Mark-Per-Class", govtFee: 4500, professionalFee: 1499, gstTreatment: "Standard 18%" },
  { actionSubtype: "TM-A Registration", filingMode: "E-Filing", applicantQualification: "Udyam_MSME", unitBasis: "Per-Mark-Per-Class", govtFee: 4500, professionalFee: 1499, gstTreatment: "Standard 18%" },
  { actionSubtype: "TM-A Registration", filingMode: "E-Filing", applicantQualification: "Corporate", unitBasis: "Per-Mark-Per-Class", govtFee: 9000, professionalFee: 2999, gstTreatment: "Standard 18%" },

  // TM-R Renewal
  { actionSubtype: "TM-R Renewal", filingMode: "E-Filing", applicantQualification: "Individual", unitBasis: "Per-Mark-Per-Class", govtFee: 9000, professionalFee: 1999, gstTreatment: "Standard 18%" },
  { actionSubtype: "TM-R Renewal", filingMode: "E-Filing", applicantQualification: "DPIIT_Startup", unitBasis: "Per-Mark-Per-Class", govtFee: 9000, professionalFee: 1999, gstTreatment: "Standard 18%" },
  { actionSubtype: "TM-R Renewal", filingMode: "E-Filing", applicantQualification: "Udyam_MSME", unitBasis: "Per-Mark-Per-Class", govtFee: 9000, professionalFee: 1999, gstTreatment: "Standard 18%" },
  { actionSubtype: "TM-R Renewal", filingMode: "E-Filing", applicantQualification: "Corporate", unitBasis: "Per-Mark-Per-Class", govtFee: 18000, professionalFee: 3499, gstTreatment: "Standard 18%" },

  // Section 9 Reply
  { actionSubtype: "Section 9 Reply", filingMode: "E-Filing", applicantQualification: "Individual", unitBasis: "Per-Application", govtFee: 0, professionalFee: 2499, gstTreatment: "Standard 18%" },
  { actionSubtype: "Section 9 Reply", filingMode: "E-Filing", applicantQualification: "DPIIT_Startup", unitBasis: "Per-Application", govtFee: 0, professionalFee: 2499, gstTreatment: "Standard 18%" },
  { actionSubtype: "Section 9 Reply", filingMode: "E-Filing", applicantQualification: "Udyam_MSME", unitBasis: "Per-Application", govtFee: 0, professionalFee: 2499, gstTreatment: "Standard 18%" },
  { actionSubtype: "Section 9 Reply", filingMode: "E-Filing", applicantQualification: "Corporate", unitBasis: "Per-Application", govtFee: 0, professionalFee: 3999, gstTreatment: "Standard 18%" },

  // Section 11 Reply
  { actionSubtype: "Section 11 Reply", filingMode: "E-Filing", applicantQualification: "Individual", unitBasis: "Per-Application", govtFee: 0, professionalFee: 2999, gstTreatment: "Standard 18%" },
  { actionSubtype: "Section 11 Reply", filingMode: "E-Filing", applicantQualification: "DPIIT_Startup", unitBasis: "Per-Application", govtFee: 0, professionalFee: 2999, gstTreatment: "Standard 18%" },
  { actionSubtype: "Section 11 Reply", filingMode: "E-Filing", applicantQualification: "Udyam_MSME", unitBasis: "Per-Application", govtFee: 0, professionalFee: 2999, gstTreatment: "Standard 18%" },
  { actionSubtype: "Section 11 Reply", filingMode: "E-Filing", applicantQualification: "Corporate", unitBasis: "Per-Application", govtFee: 0, professionalFee: 4499, gstTreatment: "Standard 18%" },

  // Show Cause Hearing
  { actionSubtype: "Show Cause Hearing", filingMode: "E-Filing", applicantQualification: "Individual", unitBasis: "Per-Application", govtFee: 0, professionalFee: 4999, gstTreatment: "Standard 18%" },
  { actionSubtype: "Show Cause Hearing", filingMode: "E-Filing", applicantQualification: "DPIIT_Startup", unitBasis: "Per-Application", govtFee: 0, professionalFee: 4999, gstTreatment: "Standard 18%" },
  { actionSubtype: "Show Cause Hearing", filingMode: "E-Filing", applicantQualification: "Udyam_MSME", unitBasis: "Per-Application", govtFee: 0, professionalFee: 4999, gstTreatment: "Standard 18%" },
  { actionSubtype: "Show Cause Hearing", filingMode: "E-Filing", applicantQualification: "Corporate", unitBasis: "Per-Application", govtFee: 0, professionalFee: 7499, gstTreatment: "Standard 18%" }
];

// 50 Pilot Commercial Cities with state names, LGD codes, and target office mapping
const PILOT_CITIES_DATA = [
  // Maharashtra -> Mumbai
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra", stateSlug: "maharashtra", lgdCode: 519, office: "Mumbai" },
  { name: "Pune", slug: "pune", state: "Maharashtra", stateSlug: "maharashtra", lgdCode: 521, office: "Mumbai" },
  { name: "Nagpur", slug: "nagpur", state: "Maharashtra", stateSlug: "maharashtra", lgdCode: 520, office: "Mumbai" },
  { name: "Nashik", slug: "nashik", state: "Maharashtra", stateSlug: "maharashtra", lgdCode: 516, office: "Mumbai" },
  { name: "Thane", slug: "thane", state: "Maharashtra", stateSlug: "maharashtra", lgdCode: 517, office: "Mumbai" },
  { name: "Aurangabad", slug: "aurangabad", state: "Maharashtra", stateSlug: "maharashtra", lgdCode: 515, office: "Mumbai" },

  // Delhi NCR -> New Delhi
  { name: "Delhi", slug: "delhi", state: "Delhi", stateSlug: "delhi", lgdCode: 141, office: "New Delhi" },
  { name: "New Delhi", slug: "new-delhi", state: "Delhi", stateSlug: "delhi", lgdCode: 142, office: "New Delhi" },
  { name: "Gurugram", slug: "gurugram", state: "Haryana", stateSlug: "haryana", lgdCode: 70, office: "New Delhi" },
  { name: "Faridabad", slug: "faridabad", state: "Haryana", stateSlug: "haryana", lgdCode: 69, office: "New Delhi" },
  { name: "Noida", slug: "noida", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", lgdCode: 145, office: "New Delhi" },
  { name: "Ghaziabad", slug: "ghaziabad", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", lgdCode: 144, office: "New Delhi" },

  // Uttar Pradesh -> New Delhi
  { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", lgdCode: 157, office: "New Delhi" },
  { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", lgdCode: 164, office: "New Delhi" },
  { name: "Agra", slug: "agra", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", lgdCode: 146, office: "New Delhi" },
  { name: "Varanasi", slug: "varanasi", state: "Uttar Pradesh", stateSlug: "uttar-pradesh", lgdCode: 193, office: "New Delhi" },

  // Punjab & Chandigarh -> New Delhi
  { name: "Chandigarh", slug: "chandigarh", state: "Chandigarh", stateSlug: "chandigarh", lgdCode: 44, office: "New Delhi" },
  { name: "Ludhiana", slug: "ludhiana", state: "Punjab", stateSlug: "punjab", lgdCode: 37, office: "New Delhi" },
  { name: "Amritsar", slug: "amritsar", state: "Punjab", stateSlug: "punjab", lgdCode: 26, office: "New Delhi" },
  { name: "Jalandhar", slug: "jalandhar", state: "Punjab", stateSlug: "punjab", lgdCode: 33, office: "New Delhi" },

  // Gujarat -> Ahmedabad
  { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", stateSlug: "gujarat", lgdCode: 441, office: "Ahmedabad" },
  { name: "Surat", slug: "surat", state: "Gujarat", stateSlug: "gujarat", lgdCode: 442, office: "Ahmedabad" },
  { name: "Vadodara", slug: "vadodara", state: "Gujarat", stateSlug: "gujarat", lgdCode: 443, office: "Ahmedabad" },
  { name: "Rajkot", slug: "rajkot", state: "Gujarat", stateSlug: "gujarat", lgdCode: 444, office: "Ahmedabad" },

  // Rajasthan -> Ahmedabad
  { name: "Jaipur", slug: "jaipur", state: "Rajasthan", stateSlug: "rajasthan", lgdCode: 93, office: "Ahmedabad" },
  { name: "Jodhpur", slug: "jodhpur", state: "Rajasthan", stateSlug: "rajasthan", lgdCode: 95, office: "Ahmedabad" },
  { name: "Udaipur", slug: "udaipur", state: "Rajasthan", stateSlug: "rajasthan", lgdCode: 104, office: "Ahmedabad" },
  { name: "Kota", slug: "kota", state: "Rajasthan", stateSlug: "rajasthan", lgdCode: 100, office: "Ahmedabad" },

  // Karnataka -> Chennai
  { name: "Bengaluru", slug: "bengaluru", state: "Karnataka", stateSlug: "karnataka", lgdCode: 572, office: "Chennai" },
  { name: "Mysuru", slug: "mysuru", state: "Karnataka", stateSlug: "karnataka", lgdCode: 577, office: "Chennai" },
  { name: "Hubballi", slug: "hubballi", state: "Karnataka", stateSlug: "karnataka", lgdCode: 563, office: "Chennai" },

  // Tamil Nadu -> Chennai
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu", stateSlug: "tamil-nadu", lgdCode: 603, office: "Chennai" },
  { name: "Coimbatore", slug: "coimbatore", state: "Tamil Nadu", stateSlug: "tamil-nadu", lgdCode: 605, office: "Chennai" },
  { name: "Madurai", slug: "madurai", state: "Tamil Nadu", stateSlug: "tamil-nadu", lgdCode: 611, office: "Chennai" },
  { name: "Tiruchirappalli", slug: "tiruchirappalli", state: "Tamil Nadu", stateSlug: "tamil-nadu", lgdCode: 620, office: "Chennai" },
  { name: "Salem", slug: "salem", state: "Tamil Nadu", stateSlug: "tamil-nadu", lgdCode: 616, office: "Chennai" },

  // Telangana -> Chennai
  { name: "Hyderabad", slug: "hyderabad", state: "Telangana", stateSlug: "telangana", lgdCode: 505, office: "Chennai" },
  { name: "Warangal", slug: "warangal", state: "Telangana", stateSlug: "telangana", lgdCode: 508, office: "Chennai" },

  // Andhra Pradesh -> Chennai
  { name: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh", stateSlug: "andhra-pradesh", lgdCode: 510, office: "Chennai" },
  { name: "Vijayawada", slug: "vijayawada", state: "Andhra Pradesh", stateSlug: "andhra-pradesh", lgdCode: 502, office: "Chennai" },
  { name: "Guntur", slug: "guntur", state: "Andhra Pradesh", stateSlug: "andhra-pradesh", lgdCode: 501, office: "Chennai" },

  // Kerala -> Chennai
  { name: "Kochi", slug: "kochi", state: "Kerala", stateSlug: "kerala", lgdCode: 588, office: "Chennai" },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram", state: "Kerala", stateSlug: "kerala", lgdCode: 598, office: "Chennai" },
  { name: "Kozhikode", slug: "kozhikode", state: "Kerala", stateSlug: "kerala", lgdCode: 589, office: "Chennai" },

  // West Bengal -> Kolkata
  { name: "Kolkata", slug: "kolkata", state: "West Bengal", stateSlug: "west-bengal", lgdCode: 326, office: "Kolkata" },
  { name: "Howrah", slug: "howrah", state: "West Bengal", stateSlug: "west-bengal", lgdCode: 325, office: "Kolkata" },

  // Bihar -> Kolkata
  { name: "Patna", slug: "patna", state: "Bihar", stateSlug: "bihar", lgdCode: 230, office: "Kolkata" },

  // Odisha -> Kolkata
  { name: "Bhubaneswar", slug: "bhubaneswar", state: "Odisha", stateSlug: "odisha", lgdCode: 338, office: "Kolkata" },
  { name: "Cuttack", slug: "cuttack", state: "Odisha", stateSlug: "odisha", lgdCode: 337, office: "Kolkata" },

  // Jharkhand -> Kolkata
  { name: "Ranchi", slug: "ranchi", state: "Jharkhand", stateSlug: "jharkhand", lgdCode: 350, office: "Kolkata" },
  { name: "Jamshedpur", slug: "jamshedpur", state: "Jharkhand", stateSlug: "jharkhand", lgdCode: 349, office: "Kolkata" },

  // Assam -> Kolkata
  { name: "Guwahati", slug: "guwahati", state: "Assam", stateSlug: "assam", lgdCode: 295, office: "Kolkata" },

  // Madhya Pradesh -> Mumbai
  { name: "Indore", slug: "indore", state: "Madhya Pradesh", stateSlug: "madhya-pradesh", lgdCode: 400, office: "Mumbai" },
  { name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh", stateSlug: "madhya-pradesh", lgdCode: 387, office: "Mumbai" },
  { name: "Gwalior", slug: "gwalior", state: "Madhya Pradesh", stateSlug: "madhya-pradesh", lgdCode: 399, office: "Mumbai" },
  { name: "Jabalpur", slug: "jabalpur", state: "Madhya Pradesh", stateSlug: "madhya-pradesh", lgdCode: 402, office: "Mumbai" },

  // Chhattisgarh -> Mumbai
  { name: "Raipur", slug: "raipur", state: "Chhattisgarh", stateSlug: "chhattisgarh", lgdCode: 382, office: "Mumbai" }
];

async function seed() {
  console.log("🌱 Starting MongoDB seed for Service Dial IP Expansion...");

  await mongoose.connect(MONGO_URI, {
    bufferCommands: false,
    dbName: "service_dial"
  });
  console.log("✅ Connected to MongoDB Atlas: service_dial");

  // 1. Seed Jurisdictions
  console.log("🏢 Seeding 5 IP India Jurisdictions...");
  const jurisdictionMap = {};
  for (const item of JURISDICTIONS_DATA) {
    const updated = await Jurisdiction.findOneAndUpdate(
      { officeName: item.officeName },
      { $set: item },
      { upsert: true, new: true }
    );
    jurisdictionMap[item.officeName] = updated._id;
  }
  console.log(`✅ Upserted ${Object.keys(jurisdictionMap).length} jurisdictions.`);

  // 2. Seed 45 Nice Classes
  console.log("📚 Seeding 45 Nice Classification records...");
  let classesCount = 0;
  for (const nc of NICE_CLASSES_DATA) {
    await NiceClass.findOneAndUpdate(
      { classNumber: nc.classNumber },
      { $set: nc },
      { upsert: true, new: true }
    );
    classesCount++;
  }
  console.log(`✅ Upserted ${classesCount} Nice Classification records.`);

  // 3. Seed Fee Rules
  console.log("💰 Seeding Fee Rules...");
  let feeCount = 0;
  for (const fee of FEE_RULES_DATA) {
    await FeeRule.findOneAndUpdate(
      { 
        actionSubtype: fee.actionSubtype, 
        filingMode: fee.filingMode, 
        applicantQualification: fee.applicantQualification 
      },
      { $set: fee },
      { upsert: true, new: true }
    );
    feeCount++;
  }
  console.log(`✅ Upserted ${feeCount} fee rule combinations.`);

  // 4. Seed 50 Pilot Cities (Geography & State hierarchy)
  console.log("📍 Seeding 50 Pilot Geographies and IP Page Assets...");
  try {
    await Geography.collection.dropIndex("slug_1");
  } catch (e) {
    // index might not exist
  }
  await Geography.syncIndexes();

  let geoCount = 0;
  let assetCount = 0;

  for (const city of PILOT_CITIES_DATA) {
    const jId = jurisdictionMap[city.office];

    // Seed/find State Geography Node
    const stateDoc = await Geography.findOneAndUpdate(
      { slug: city.stateSlug, level: "State" },
      { 
        $set: { 
          name: city.state, 
          slug: city.stateSlug, 
          level: "State", 
          jurisdictionId: jId,
          provenanceSource: "LGD Portal" 
        } 
      },
      { upsert: true, new: true }
    );

    // Seed City Geography Node linked to state parent
    const cityDoc = await Geography.findOneAndUpdate(
      { slug: city.slug, level: "District" },
      {
        $set: {
          name: city.name,
          slug: city.slug,
          level: "District",
          lgdCode: city.lgdCode,
          parentId: stateDoc._id,
          jurisdictionId: jId,
          provenanceSource: "LGD Dashboard 2026"
        }
      },
      { upsert: true, new: true }
    );
    geoCount++;

    // Seed Candidate IP Page Assets for 3 Core Intents (registration, renewal, objection-sec9)
    const intents = ["registration", "renewal", "objection-sec9"];
    for (const intent of intents) {
      const pageSlug = `ip-services/trademarks/${intent}/${city.stateSlug}/${city.slug}`;
      await IPPageAsset.findOneAndUpdate(
        { slug: pageSlug },
        {
          $set: {
            slug: pageSlug,
            routeFamily: "City-Intent",
            intentEnum: intent,
            geographyId: cityDoc._id,
            publicationState: "Published",
            editorialReviewMetadata: {
              reviewerId: "ARCHITECT_LEAD",
              reviewedAt: new Date(),
              sourceCitations: ["IP India Gazette", "Trade Marks Rules 2017 Schedule I"]
            },
            contentOverrides: {
              cityName: city.name,
              stateName: city.state,
              officeName: city.office,
              jurisdictionAddress: JURISDICTIONS_DATA.find(j => j.officeName === city.office)?.officialAddress
            }
          }
        },
        { upsert: true, new: true }
      );
      assetCount++;
    }
  }

  // Also seed the 5 Jurisdiction Office Guide Page Assets
  for (const j of JURISDICTIONS_DATA) {
    const jSlug = `ip-services/jurisdiction/${j.officeName.toLowerCase().replace(/\s+/g, '-')}`;
    await IPPageAsset.findOneAndUpdate(
      { slug: jSlug },
      {
        $set: {
          slug: jSlug,
          routeFamily: "Office-Guide",
          publicationState: "Published",
          editorialReviewMetadata: {
            reviewerId: "ARCHITECT_LEAD",
            reviewedAt: new Date(),
            sourceCitations: ["IP India Office Locations Notification"]
          },
          contentOverrides: {
            officeName: j.officeName,
            address: j.officialAddress,
            states: j.statesCovered
          }
        }
      },
      { upsert: true, new: true }
    );
    assetCount++;
  }

  // Seed Core Hub and Tools assets
  await IPPageAsset.findOneAndUpdate(
    { slug: "ip-services" },
    {
      $set: {
        slug: "ip-services",
        routeFamily: "Tool",
        publicationState: "Published",
        editorialReviewMetadata: { reviewerId: "ARCHITECT_LEAD", reviewedAt: new Date(), sourceCitations: ["Service Dial Portal"] }
      }
    },
    { upsert: true, new: true }
  );
  assetCount++;

  await IPPageAsset.findOneAndUpdate(
    { slug: "ip-services/tools/fee-calculator" },
    {
      $set: {
        slug: "ip-services/tools/fee-calculator",
        routeFamily: "Tool",
        publicationState: "Published",
        editorialReviewMetadata: { reviewerId: "ARCHITECT_LEAD", reviewedAt: new Date(), sourceCitations: ["Schedule of TM Fees"] }
      }
    },
    { upsert: true, new: true }
  );
  assetCount++;

  await IPPageAsset.findOneAndUpdate(
    { slug: "ip-services/tools/status-check" },
    {
      $set: {
        slug: "ip-services/tools/status-check",
        routeFamily: "Tool",
        publicationState: "Published",
        editorialReviewMetadata: { reviewerId: "ARCHITECT_LEAD", reviewedAt: new Date(), sourceCitations: ["IP India e-Register"] }
      }
    },
    { upsert: true, new: true }
  );
  assetCount++;

  console.log(`✅ Upserted ${geoCount} pilot geographies.`);
  console.log(`✅ Total IP Page Assets initialized: ${assetCount}.`);
  console.log("🎉 Phase 1 Database Seeding Complete!");
  
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error("❌ Seed failed with error:", err);
  process.exit(1);
});
