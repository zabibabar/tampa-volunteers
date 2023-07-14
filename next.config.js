/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.meetupstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.app.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "floridaadoptionattorney.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
