/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "graph.facebook.com",
      "lh3.googleusercontent.com",
      "cf.bstatic.com",
      "lh5.googleusercontent.com",
      "lh4.googleusercontent.com",
      "t-cf.bstatic.com",
    ],
  },
};

module.exports = nextConfig;
