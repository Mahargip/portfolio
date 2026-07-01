import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // enables static export for GitHub Pages
  trailingSlash: true,     // required for GitHub Pages routing
  images: {
    unoptimized: true,     // required when using static export
  },
};

export default nextConfig;
