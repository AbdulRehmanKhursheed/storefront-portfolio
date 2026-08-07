import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Fully static output: no server, no serverless functions, nothing that can
  // cold-start or error during a live pitch. Files under public/ — including the
  // untouched storefront prototypes — are copied to out/ byte-for-byte.
  output: "export",

  /**
   * Prototype URLs are extensionless (`/prototypes/popbar`) because that is the
   * only form Vercel serves: it strips `/index.html` (404) and redirects
   * `/folder/` to `/folder`. `next dev` does the opposite — it won't resolve a
   * public/ directory to its index file — so this rewrite makes the same URL work
   * locally. Rewrites are not supported under `output: "export"`, so the key is
   * omitted entirely in production (its mere presence triggers a build warning);
   * there, Vercel's own static resolution handles it.
   */
  ...(isDev && {
    async rewrites() {
      return [
        {
          source: "/prototypes/:slug",
          destination: "/prototypes/:slug/index.html",
        },
      ];
    },
  }),
};

export default nextConfig;
