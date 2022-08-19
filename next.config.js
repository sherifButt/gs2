/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   env: {
      baseUrl: 'https://api.givestar.io/api/v1',
      // MERCHANT_ID: '1122647993193803847',
      MERCHANT_ID: '3253351479553442069',
      // MERCHANT_SITE_ID: '233636',
      MERCHANT_SITE_ID: '232218',
   },
}

module.exports = nextConfig
