module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: "../lib/src",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          components: require.resolve("./src/components/component-layout.tsx"),
          default: require.resolve("./src/components/page-layout.tsx"),
        },
      },
    },
  ],
}
