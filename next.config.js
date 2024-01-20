/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
    @import "@/styles/_colors.scss";
    @import "@/styles/_fonts.scss";`,
  },
};
