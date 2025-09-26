import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://i.vimeocdn.com/**')],
  }
}

export default nextConfig
