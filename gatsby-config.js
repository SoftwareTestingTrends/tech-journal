/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/tech-journal",
  siteMetadata: {
    title: "Tech Journal",
    description: "Everything I like to learn & explore",
    author: "Ambreen Khan",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    // "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 750,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //     ],
    //   },
    // },
],
  
}
