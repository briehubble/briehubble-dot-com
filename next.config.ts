import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amber-lamp.c456e32e42a4ab311141f023528e8088.r2.cloudflarestorage.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
