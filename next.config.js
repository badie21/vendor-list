/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
    @import "@/styles/_colors.scss";
    @import "@/styles/_fonts.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.snappfood.ir',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zoodfood.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
