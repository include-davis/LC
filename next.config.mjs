/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // CMS media is served from an external host; allow next/image to load it.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
