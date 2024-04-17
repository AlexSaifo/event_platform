import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({///assets/images/logo.svg
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
    '/assets/images/logo.svg'
  ],
  ignoredRoutes: ["api/webhook/clerk", "api/webhook/stripe", "api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
