/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   env: {
      baseUrl: 'https://api.givestar.io/api/v1',
      publicUrl: 'https://givestar-stage.vercel.app',
      MERCHANT_ID: '1122647993193803847',
      MERCHANT_SITE_ID: '233636',
   },
}

module.exports = nextConfig
