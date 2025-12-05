/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/au',
        destination: '/online-quran-classes-au',
        permanent: true,
      },
      {
        source: '/nz',
        destination: '/online-quran-classes-nz',
        permanent: true,
      },
      {
        source: '/eu',
        destination: '/online-quran-classes-europe',
        permanent: true,
      },
      {
        source: '/uk',
        destination: '/online-quran-classes-uk',
        permanent: true,
      },
      {
        source: '/uae',
        destination: '/online-quran-classes-uk',
        permanent: true,
      },
      {
        source: '/us',
        destination: '/online-quran-classes-usa',
        permanent: true,
      },
      {
        source: '/ca',
        destination: '/online-quran-classes-canada',
        permanent: true,
      },
      {
        source: '/ca',
        destination: '/online-quran-classes-canada',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
