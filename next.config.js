/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonflower.com',
      },
    ],
  },
}

module.exports = nextConfig
