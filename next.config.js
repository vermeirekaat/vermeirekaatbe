const withFonts = require('nextjs-fonts');

module.exports = {

  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
    CONTENTFUL_ENVI: process.env.CONTENTFUL_ENVI,
  },

  fonts: withFonts()
}
