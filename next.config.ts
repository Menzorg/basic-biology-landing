import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/basic-biology-landing', // Указываем название репозитория для корректной работы в подпапке
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
