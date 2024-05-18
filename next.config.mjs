/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx'],
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  }
};

export default nextConfig;
