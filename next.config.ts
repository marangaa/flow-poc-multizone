import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/flow", // Serve the flow app under the /flow path
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://your-cdn.com/flow' : undefined,
  serverActions: {
    // Add your actual shell app domain here
    // This should be the domain where users access your shell application
    allowedOrigins: [
      // Development
      "localhost:3000",
      // Production - shell app domain
      "shell-poc-multizone.vercel.app"
    ],
  },
};

export default nextConfig;
