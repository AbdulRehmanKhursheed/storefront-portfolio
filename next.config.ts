import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Fully static output: no server, no serverless functions, nothing that can
  // cold-start or error during a live pitch. Files under public/ — including the
  // untouched storefront prototypes — are copied to out/ byte-for-byte.
  output: "export",

  /**
   * Required, not cosmetic. The prototypes reference their assets relatively
   * (`popbar.css`, `assets/logo.png`). At `/prototypes/popbar` those resolve
   * against `/prototypes/`, so every stylesheet and image 404s and the page
   * renders unstyled. The trailing slash makes them resolve against
   * `/prototypes/popbar/` instead. Next's default is false, and Vercel inherits
   * it and strips the slash — hence setting it explicitly here.
   */
  trailingSlash: true,

  /**
   * `next dev` will not resolve a public/ directory to its index file, so the
   * folder URL 404s locally even though Vercel serves it. This rewrite closes
   * that gap. Rewrites are unsupported under `output: "export"`, so the key is
   * omitted in production — its mere presence triggers a build warning — and
   * Vercel's own static resolution handles it there.
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
