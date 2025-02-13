import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${request.method} ${request.nextUrl.pathname}`);
  return NextResponse.next();
}
