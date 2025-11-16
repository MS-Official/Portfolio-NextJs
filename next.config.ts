import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // ✅ 1. Path Aliases
      resolveAlias: {
        "@": "./src",
        "@components": "./src/components",
        "@utils": "./src/utils",
        "@styles": "./src/styles",
        "@lib": "./src/lib",
      },

      // ✅ 2. File Handling Rules
      rules: {
        // Handle SVGs via @svgr/webpack for React components
        "*.svg": ["@svgr/webpack"],

        // Optional: support for markdown or text imports
        "*.md": ["@mdx-js/loader"],
      },

    },
  },

  // ✅ Standard Next.js Config
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },

  reactStrictMode: true,
  // swcMinify: true,
};

export default withBundleAnalyzerConfig(nextConfig);
