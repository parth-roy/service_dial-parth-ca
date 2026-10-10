import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret") || request.headers.get("x-revalidate-secret");
    const expectedSecret = process.env.REVALIDATION_SECRET || "service_dial_ip_revalidate_secret_2026";

    if (secret !== expectedSecret) {
      return NextResponse.json(
        { error: "Invalid revalidation secret" },
        { status: 401 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const path = searchParams.get("path") || body.path || "/ip-services";

    // Call Next.js revalidatePath
    revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      path,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("[Revalidate IP Error]:", err);
    return NextResponse.json(
      { error: "Error during revalidation", details: err.message },
      { status: 500 }
    );
  }
}
