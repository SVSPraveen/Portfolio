/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/resume.pdf',
        destination: '/Resume.pdf',
      },
    ];
  },
};

export default nextConfig;
