// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for next/image when using `next export`
  },
};

module.exports = nextConfig;
