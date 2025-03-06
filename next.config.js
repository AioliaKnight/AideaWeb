/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/AideaWeb',
  assetPrefix: '/AideaWeb/',
}

module.exports = nextConfig 