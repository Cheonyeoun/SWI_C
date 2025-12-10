/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    STAGING_API_URL: "https://api.staging.example.com",
    PRODUCTION_API_URL: "https://api.example.com",
  },
};

export default nextConfig;
