/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // COMMENT dulu basePath dan assetPrefix untuk development
  // basePath: '/landing-page-nextjs',
  // assetPrefix: '/landing-page-nextjs/',
}

module.exports = nextConfig