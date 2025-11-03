/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // PENTING: Ganti 'landing-page-nextjs' dengan nama repository Anda!
  basePath: isProd ? '/landing-page-nextjs' : '',
  assetPrefix: isProd ? '/landing-page-nextjs/' : '',
}

module.exports = nextConfig