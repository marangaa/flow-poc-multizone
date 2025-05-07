import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/flow", // Serve the flow app under the /flow path
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://your-cdn.com/flow' : undefined,
};

export default nextConfig;
