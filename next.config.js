/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://jobhunt-bangladesh.vercel.app",
    TEST_URL: "http://localhost:3000"
  },
  reactStrictMode: true,
}

module.exports = nextConfig
