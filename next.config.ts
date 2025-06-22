import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // your external image domains
  },

  eslint: {
    ignoreDuringBuilds: true, // <-- this disables ESLint errors during build
  },
};

export default nextConfig;
