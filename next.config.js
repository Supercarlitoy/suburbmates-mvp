/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Enable compression
  compress: true,
};

module.exports = nextConfig;

