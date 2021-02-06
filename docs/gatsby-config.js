module.exports = {
  plugins: [
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
        },
      },
    },
  ],
}
