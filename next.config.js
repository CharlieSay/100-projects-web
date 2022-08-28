/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['images.unsplash.com']
  },
  basePath: '',
  reactStrictMode: true,
   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }
}

module.exports = nextConfig
