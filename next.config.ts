import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Only add basePath and assetPrefix in production for GitHub Pages
  ...(isProd && { 
    basePath: '/grand-exotica-hospitality',
    assetPrefix: '/grand-exotica-hospitality/'
  }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
