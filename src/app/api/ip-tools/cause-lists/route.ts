import { NextRequest, NextResponse } from "next/server";

// Sample cause list database entries for virtual hearings across registries
const SAMPLE_CAUSE_LISTS = [
  {
    hearingId: "HRG-MUM-2026-081",
    office: "mumbai",
    officeName: "Mumbai Registry",
    applicationNumber: "5849201",
    markName: "SERVICE DIAL",
    hearingDate: "2026-10-24",
    timeSlot: "11:30 AM - 12:00 PM IST",
    hearingOfficer: "Senior Examiner of Trade Marks (Room 3)",
    mode: "Virtual Hearing (Cisco Webex)",
    status: "Scheduled",
    objectionGround: "Section 9(1)(a) - Distinctiveness Defense Required",
  },
  {
    hearingId: "HRG-DEL-2026-114",
    office: "new-delhi",
    officeName: "New Delhi Registry",
    applicationNumber: "6021944",
    markName: "NEXUS CLOUD",
    hearingDate: "2026-10-28",
    timeSlot: "02:15 PM - 02:45 PM IST",
    hearingOfficer: "Assistant Registrar of Trade Marks (TLA 1)",
    mode: "Virtual Hearing (NIC VC Room)",
    status: "Scheduled",
    objectionGround: "Section 11(1) - Conflicting Prior Citation",
  },
  {
    hearingId: "HRG-CHN-2026-042",
    office: "chennai",
    officeName: "Chennai Registry",
    applicationNumber: "5109382",
    markName: "AQUA SILK",
    hearingDate: "2026-11-04",
    timeSlot: "10:00 AM - 10:30 AM IST",
    hearingOfficer: "Deputy Registrar of Trade Marks",
    mode: "Virtual Hearing (Cisco Webex)",
    status: "Scheduled",
    objectionGround: "Section 9 & 11 Joint Review",
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const office = searchParams.get("office")?.toLowerCase();
    const appNum = searchParams.get("applicationNumber")?.trim();

    let results = SAMPLE_CAUSE_LISTS;

    if (office) {
      results = results.filter((r) => r.office === office);
    }

    if (appNum) {
      results = results.filter((r) => r.applicationNumber.includes(appNum));
    }

    return NextResponse.json({
      success: true,
      count: results.length,
      data: results,
      officialPortalSource: "https://ipindia.gov.in/trade-marks-track-proceedings-hearing-cause-lists-trade-marks-show-cause-list.htm",
    });
  } catch (error: any) {
    console.error("[Cause Lists API Error]:", error);
    return NextResponse.json(
      { error: "Failed to retrieve hearing cause lists" },
      { status: 500 }
    );
  }
}
