import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hmv.com",
      },
      {
        protocol: "https",
        hostname: "d.gr-assets.com",
      },
    ],
  },
};

export default nextConfig;
