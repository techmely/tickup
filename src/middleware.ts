import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "/signup"];

export default authMiddleware({
  publicRoutes,
  afterAuth({ userId, orgId, isPublicRoute }, req, evt) {
    if (!userId && !isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    if (userId && !orgId && publicRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/dashboard", req.url), 308);
    }
    if (userId && orgId && publicRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL(`/workspace/${orgId}`, req.url), 308);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
