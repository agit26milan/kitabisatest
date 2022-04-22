/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.staging.kitabisa.cc', 'kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com', 'img.staging.kitabisa.cc'],
  },
}

module.exports = nextConfig
