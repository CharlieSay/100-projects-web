const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  basePath: "",
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Ensure workspace packages resolve correctly
    config.resolve.alias = {
      ...config.resolve.alias,
      '@100-projects/content': path.resolve(__dirname, '../content/src'),
    };

    // For Vercel: ensure content files are included in the build
    if (isServer) {
      config.externals = config.externals || [];
      // Don't externalize the content package - we need it at build time
    }

    return config;
  },
};

module.exports = nextConfig;
