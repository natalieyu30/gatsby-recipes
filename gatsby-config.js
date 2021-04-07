require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'NatDev Recipes', 
    description: 'Eating well, eating healthy',
    author: '@natdev',
    person: {name: 'Natalie', age: 32},
    simpleData: ['salad', 'wrap'],
    complexData : [
      {name: 'salad bowl', time: 20},
      {name: 'pasta salad', time: 25},
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `170yt6nomzoh`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Quicksand",
              variants: ["300", "400", "500", "700"],
            },
          ],
        },
      },
    },
  ],
  
}
