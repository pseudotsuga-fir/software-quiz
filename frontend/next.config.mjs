/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://127.0.0.1:3008/:path*",
      },
    ];
  },
};

export default nextConfig;
