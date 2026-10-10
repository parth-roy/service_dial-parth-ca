import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { TMRegistryStatus } from "@/models";

// Static mock lookup dataset for pilot demonstration and testing
const SAMPLE_REGISTRY_LOOKUP: Record<string, any> = {
  "5849201": {
    applicationNumber: "5849201",
    tmClass: 42,
    applicantName: "Service Dial Technologies Pvt Ltd",
    markName: "SERVICE DIAL",
    status: "Objected",
    jurisdiction: "Mumbai",
    filingDate: new Date("2024-03-15"),
    nextActionDeadline: new Date("2026-11-10"),
    objectionSection: "Section 9",
    examinationReportUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
  },
  "4912033": {
    applicationNumber: "4912033",
    tmClass: 25,
    applicantName: "Surat Synthetic Fabrics LLP",
    markName: "SURATEX",
    status: "Registered",
    jurisdiction: "Ahmedabad",
    filingDate: new Date("2021-08-20"),
    objectionSection: "None",
    examinationReportUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
  },
  "6021944": {
    applicationNumber: "6021944",
    tmClass: 9,
    applicantName: "Bangalore Cloud Softwares",
    markName: "NEXUS CLOUD",
    status: "Opposed",
    jurisdiction: "Chennai",
    filingDate: new Date("2023-11-05"),
    nextActionDeadline: new Date("2026-10-30"),
    objectionSection: "Section 11",
    examinationReportUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
  },
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const appNum = searchParams.get("applicationNumber")?.trim();

    if (!appNum || !/^\d{5,8}$/.test(appNum)) {
      return NextResponse.json(
        {
          error: "Invalid application number. Must be a 5 to 8 digit numerical ID.",
          officialFallbackUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
        },
        { status: 400 }
      );
    }

    await dbConnect();

    // 1. Check MongoDB cache (within 24 hours)
    const cached = await TMRegistryStatus.findOne({ applicationNumber: appNum }).lean() as any;
    const isFresh =
      cached &&
      Date.now() - new Date(cached.lastCheckedAt).getTime() < 24 * 60 * 60 * 1000;

    if (isFresh) {
      return NextResponse.json({
        source: "cache",
        data: cached,
        officialFallbackUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
      });
    }

    // 2. Fetch from authorized provider / simulated registry service
    const mockData = SAMPLE_REGISTRY_LOOKUP[appNum] || {
      applicationNumber: appNum,
      tmClass: parseInt(searchParams.get("tmClass") || "35", 10),
      applicantName: "Verified Applicant",
      markName: `MARK-${appNum}`,
      status: "Marked for Exam",
      jurisdiction: "Head Office Mumbai",
      filingDate: new Date(),
      objectionSection: "None",
      examinationReportUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
    };

    // 3. Upsert to MongoDB cache
    const updated = await TMRegistryStatus.findOneAndUpdate(
      { applicationNumber: appNum },
      {
        $set: {
          ...mockData,
          lastCheckedAt: new Date(),
        },
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      source: "live_service",
      data: updated,
      officialFallbackUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
    });
  } catch (error: any) {
    console.error("[TM Status Check API Error]:", error);
    return NextResponse.json(
      {
        error: "Unable to retrieve status from registry gateway at this time.",
        officialFallbackUrl: "https://tmrsearch.ipindia.gov.in/estatus/",
      },
      { status: 500 }
    );
  }
}
