/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.landmarkshops.in",
      },
      {
        protocol: "https",
        hostname: "media-us.landmarkshops.in",
      },
      {
        protocol: "https",
        hostname: "media-uk.landmarkshops.in",
      },
    ],
  },
};

export default nextConfig;
