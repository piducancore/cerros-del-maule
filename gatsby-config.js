require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Demo",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stories`,
        path: `${__dirname}/src/stories/`,
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
}
