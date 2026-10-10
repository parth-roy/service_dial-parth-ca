import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Strictly enforce lowercase URLs for all /ip-services canonical routes
  if (pathname.startsWith("/ip-services") && pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  // 2. Set canonical tracking header
  const response = NextResponse.next();
  response.headers.set("x-ip-canonical-root", "https://servicedialtm.com/ip-services");

  return response;
}

export const config = {
  matcher: ["/ip-services/:path*"],
};
