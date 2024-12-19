import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for development
  typescript: {
    ignoreBuildErrors: false, // Ensures type checking during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevents eslint errors from blocking builds
  },
  // If you are using environment variables, define them here
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // Redirects or rewrites if needed
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true, // Indicates a permanent redirect
      },
    ];
  },
  // Optional: if you need to rewrite any URL paths (like for API routes or NextAuth callback)
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*', 
        destination: '/api/auth/[...nextauth].ts', // Directs API routes to NextAuth
      },
    ];
  },
  // Optional: if you have image domains set for Next.js Image Optimization
  images: {
    domains: ['example.com'], // Replace with your image source domains
  },
};

export default nextConfig;
