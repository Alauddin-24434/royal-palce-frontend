import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // domains: ['res.cloudinary.com'],
    unoptimized: true,
  },

  cacheComponents:true,


  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
