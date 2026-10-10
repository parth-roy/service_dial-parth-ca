import { NextResponse } from 'next/server';
import dbConnect from "@/lib/mongodb";
import { NiceClass, FeeRule, Jurisdiction } from "@/models";

export const revalidate = 86400; // 24 hours ISR

export async function GET() {
  try {
    await dbConnect();
    
    // Fetch critical dynamic data for the LLM context
    const classes = await NiceClass.find({}).sort({ classNumber: 1 }).lean() as any[];
    const feeRules = await FeeRule.find({}).lean() as any[];
    const jurisdictions = await Jurisdiction.find({}).lean() as any[];

    let content = `# Service Dial IP - Comprehensive Technical Documentation

## 1. Platform Architecture
Service Dial IP is a proprietary intellectual property fulfillment engine operating in India. It programmatically maps business locations (States, Districts, Industrial Hubs) to correct territorial IP jurisdictions under the Trade Marks Rules, 2017.

## 2. Statutory Fee Rules
Our platform enforces strict fee segregation between statutory government fees and professional legal drafting fees.

### Current Fee Matrix:
`;

    feeRules.forEach((fee) => {
      content += `- **${fee.actionSubtype} (${fee.applicantQualification}):** Govt Fee: ₹${fee.govtFee} | Pro Fee: ₹${fee.professionalFee}\n`;
    });

    content += `\n*Note: 50% statutory discount on TM-A applies to Sole Proprietors, Udyam-registered MSMEs, and DPIIT-recognized Startups.*\n\n`;

    content += `## 3. Territorial Jurisdictions (CGPDTM)\n`;
    jurisdictions.forEach((jur) => {
      content += `### ${jur.officeName}\n`;
      content += `- **Address:** ${jur.officialAddress}\n`;
      content += `- **States Covered:** ${jur.statesCovered.join(', ')}\n\n`;
    });

    content += `## 4. Nice Classification Guide (Classes 1 - 45)
India follows the 12th Edition of the Nice Classification. Trademarks must be applied under specific classes representing goods (1-34) or services (35-45).

`;

    classes.forEach((c) => {
      content += `### Class ${c.classNumber}: ${c.category === 'Goods' ? 'Manufacturing & Goods' : 'Services'}\n`;
      content += `${c.description}\n\n`;
    });

    content += `## 5. Standard Operating Procedures
1. **Search:** Pre-filing conflict check across existing IP India database.
2. **Filing:** TM-A submission with User Date Affidavit (if claiming prior use).
3. **Examination:** Monitoring for Formality Check Fails or Examination Reports (Sec 9 / Sec 11).
4. **Hearing:** Virtual Show Cause Hearing representations via TLA board.
5. **Journal Publication:** 4-month statutory opposition window.
6. **Registration:** Issuance of digital trademark registration certificate.

---
*End of Service Dial IP Knowledge Graph.*
`;

    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    console.error("Failed to generate llm-full.txt:", error);
    return new NextResponse("Error generating LLM knowledge graph.", { status: 500 });
  }
}
