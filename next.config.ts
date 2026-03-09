import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/topstreaming-website",
  assetPrefix: "/topstreaming-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
