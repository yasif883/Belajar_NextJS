import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cf.shopee.co.id",
        pathname: "/**"
      }
    ]
  },
  /* config options here */
};

export default nextConfig;
