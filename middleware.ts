// READ: https://clerk.com/docs/references/nextjs/auth-middleware
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/uploadthing",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/assets/images/logo.svg",
  ],
  ignoredRoutes: [
    "/api/uploadthing",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
