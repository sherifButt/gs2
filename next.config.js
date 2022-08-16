/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   env: {
      baseUrl: 'https://api.gs2dev.co.uk/api/v1',
      MERCHANT_ID: '1e400bd7-ce58-4de1-9d04-92ff539f87e8',
      MERCHANT_SITE_ID: '233636',
   },
}

module.exports = nextConfig
