/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  experimental: {
    appDir: true,
  },
  env: {
    CUSTOM_KEY: 'gamehub-token-2024',
  }
}

module.exports = nextConfig
