const path = require("path")

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
      path: node.displayName,
      component: path.resolve(`./src/templates/component.tsx`),
      context: { id: node.id },
    })
  })
}
