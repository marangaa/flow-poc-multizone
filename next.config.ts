import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/flow", // Serve the flow app under the /flow path
  assetPrefix: "/flow-static", // Asset prefix to avoid conflicts with other zones
  serverActions: {
    // Allow Server Actions from the flow app domain
    allowedOrigins: [
      // Development
      "localhost:3000",
      // Production - shell app domain
      "shell-poc-multizone.vercel.app"
    ],
  },
};

export default nextConfig;
