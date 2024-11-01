import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  // experimental: {
  //   typedRoutes: true,
  // },
};

export default nextConfig;
