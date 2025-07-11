import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `http://localhost:5000/api/:path*`,
  //     },
  //   ];
  // },
};

export default nextConfig;
