import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Required for GitHub Pages (Static Site Generation)
  
  // OPTIONAL: If deploying to a custom domain (e.g. puzzle.com), comment these out.
  // If deploying to https://<username>.github.io/<repo-name>, set these:
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',

  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;