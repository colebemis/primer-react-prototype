const path = require("path")
const slugify = require("slugify")
const docgen = require("react-docgen-typescript")

exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  if (node.extension === "tsx") {
    const components = docgen.parse(node.absolutePath)

    for (const component of components) {
      console.log(component.props)
      const data = {
        displayName: component.displayName,
        description: component.description,
        slug: slugify(component.displayName),
        props: Object.values(component.props).map(prop => ({
          name: prop.name,
          description: prop.description,
          required: prop.required,
          parent: prop.parent ? prop.parent.name : "",
          type: {
            name: prop.type.name,
          },
        })),
      }
      await createNode({
        ...data,
        id: createNodeId(component.displayName),
        parent: null,
        internal: {
          type: "ComponentMetadata",
          content: JSON.stringify(data),
          contentDigest: createContentDigest(data),
        },
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allComponentMetadata {
        nodes {
          id
          slug
          displayName
        }
      }
    }
  `)
  result.data.allComponentMetadata.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/component.tsx`),
      context: { id: node.id },
    })
  })
}
