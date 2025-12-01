import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/nauka.life' : '', // Указываем название репозитория только для продакшена (GitHub Pages)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
