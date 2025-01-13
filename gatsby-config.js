/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Albins frontend portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Min portfolio sida`,
    author: `Albin Lundmark`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        'accessToken': process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        'spaceId': process.env.GATSBY_CONTENTFUL_SPACE_ID
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png'
      }
    }
  ]
}
