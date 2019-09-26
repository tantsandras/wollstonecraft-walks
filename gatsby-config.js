module.exports = {
  siteMetadata: {
    title: `Wollstonecraft Walks`,
    description: `A walkguide.`,
    author: `Sandra Grahl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,   
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
          `gatsby-remark-embed-youtube`,
          `gatsby-remark-embed-video`,
          `gatsby-remark-responsive-iframe`,  
          ]
        }
      },
      {
        resolve: 'gatsby-background-image-es5',
        options: {
          specialChars: '/:',
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bungee Shade', 'Yeseva One', ]
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
