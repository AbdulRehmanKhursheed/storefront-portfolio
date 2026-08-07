import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static output: no server, no serverless functions, nothing that can
  // cold-start or error during a live pitch. Files under public/ — including the
  // untouched storefront prototypes — are copied to out/ byte-for-byte.
  output: "export",
};

export default nextConfig;
