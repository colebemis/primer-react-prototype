const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allComponentMetadata {
        nodes {
          id
          displayName
        }
      }
    }
  `)

  result.data.allComponentMetadata.nodes.forEach(node => {
    actions.createPage({
      path: slugify(node.displayName),
      component: path.resolve(`./src/templates/component.tsx`),
      context: { id: node.id },
    })
  })
}
