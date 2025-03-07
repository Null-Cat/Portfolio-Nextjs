import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const timestamp = new Date().toISOString();
  console.log(
    `[${timestamp}] ${req.method} ${req.nextUrl.pathname} for ${getTrueIP(req)}`
  );
  return NextResponse.next();
}

function getTrueIP(req: NextRequest) {
  const xForwardedFor = req.headers.get("x-forwarded-for");
  return xForwardedFor
    ? xForwardedFor.split(",")[0]?.replace("::ffff:", "")
    : req.headers.get("x-real-ip")?.replace("::ffff:", "");
}
