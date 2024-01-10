import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: !(process.env.SECURE_COOKIE === "false"),
  });
  const blockedRoutesWithoutLogin = [
    "/user/ethereum",
    "/user/cosmos",
    "/user/solona",
    "/user/injective",
    "/user/quant",
    "/admin/allusers",
    "/admin",
  ];
  const auth = req.nextUrl.clone();
  auth.pathname = "/auth/login";
  const afterAuth = req.nextUrl.clone();
  const home = req.nextUrl.clone();
  home.pathname = "/home";
  afterAuth.pathname = "/home";
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.url);

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(home);
  }
  if (blockedRoutesWithoutLogin.includes(req.nextUrl.pathname)) {
    //just push
    // You could also check for any property on the session object,
    // like role === "admin" or name === "Angelo", etc.
    if (req.nextUrl.pathname === "/admin/allusers" && session && !session.admin)
      return NextResponse.redirect(home);
    if (!session) return NextResponse.redirect(auth);
    // If user is unauthenticated, continue.
  }

  if (
    req.nextUrl.pathname === "/auth/login" ||
    req.nextUrl.pathname === "/auth/signup"
  ) {
    if (session)
      //just push
      // You could also check for any property on the session object,
      // like role === "admin" or name === "Angelo", etc.
      return NextResponse.redirect(afterAuth);
    // If user is authenticated, continue.
  }

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}
