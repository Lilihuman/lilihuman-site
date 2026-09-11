/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      // Human Note #14 gift link (already in Beehiiv). Subscribers go straight
      // to the PDF — no page on the site, nothing listed anywhere.
      {
        source: '/free/be-your-own-friend',
        destination: '/downloads/be-your-own-friend.pdf',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
