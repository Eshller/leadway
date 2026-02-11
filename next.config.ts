import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent "workspace root inferred incorrectly" warnings when other lockfiles exist.
    root: __dirname,
  },
};

export default nextConfig;
