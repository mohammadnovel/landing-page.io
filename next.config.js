/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // PENTING: Nama repository Anda adalah 'landing-page.io'
  basePath: isProd ? '/landing-page.io' : '',
  assetPrefix: isProd ? '/landing-page.io/' : '',
}

module.exports = nextConfig