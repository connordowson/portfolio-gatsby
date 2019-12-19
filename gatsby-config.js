/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Connor Dowson`,
    siteUrl: `https://www.connordowson.com`,
    description: `Connor Dowson portfolio`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/favicon.svg",
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qb1gguhiglnp`,
        accessToken: `DJh7Z37eQmS_0LM0DdDHqMlqjUy2SyzKmdtekWarqag`,
      },
    },
  ],
}
