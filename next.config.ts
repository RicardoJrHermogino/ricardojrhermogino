// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // You can add more allowed domains if needed:
      // { protocol: "https", hostname: "cdn.jsdelivr.net" },
      // { protocol: "https", hostname: "your-image-host.com" },
    ],
  },
};

module.exports = nextConfig;
