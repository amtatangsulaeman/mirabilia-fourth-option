import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep old URLs from the previous site working (and passing SEO value).
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/promotion---25---off", destination: "/childcare-subsidy", permanent: false },
      { source: "/promotion", destination: "/childcare-subsidy", permanent: false },
      { source: "/coming-soon", destination: "/champion-lakes", permanent: true },
      { source: "/about-us", destination: "/our-story", permanent: true },
      { source: "/our-family", destination: "/our-story", permanent: true },
      { source: "/ccs-information", destination: "/childcare-subsidy#claim", permanent: true },
    ];
  },
};

export default nextConfig;
