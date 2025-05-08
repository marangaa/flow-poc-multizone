import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove basePath completely - we don't need it
  // The shell app will handle the /flow prefix in the URL
  // basePath: "/flow",
  
  // Keep asset prefix for proper asset loading
  assetPrefix: "/flow-static",
  
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
