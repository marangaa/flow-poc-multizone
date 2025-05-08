import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shell app will handle the /flow prefix in the URL
  
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
