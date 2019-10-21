const siteUrl = `https://wollstonecraftwalks.netlify.com`

module.exports = {
  siteMetadata: {
    title: `Wollstonecraft Walks`,
    keyword: `Mary Wollstonecraft, Wollstonecraft Walks, historiclondon, londonwalks, londonhistory, historicengland, exlorelondon`,
    description: `A walkguide.`,
    author: `Sandra Grahl`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/imgUploads`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-embed-youtube`,
          `gatsby-remark-embed-video`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        specialChars: "/:",
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
        name: `Wollstonecraft Walks`,
        short_name: `Wollstonecraft`,
        description: `A walk guide about Mary Wollstonecraft.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Wollstonecraft_portrait_logo-02 copy.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/wollstonecraft`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Bungee Shade",
            "Archivo Black",
            "Yeseva One",
            "Roboto",
            "Open Sans",
          ],
        },
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: "" }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
