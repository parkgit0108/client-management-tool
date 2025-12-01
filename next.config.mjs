/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "i0.wp.com" },
      { hostname: "www.muscleandfitness.com" },
    ],
  },
};

export default nextConfig;
