import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frontend-test-assignment-api.abz.agency",
      },
    ],
  },
};

export default nextConfig;
