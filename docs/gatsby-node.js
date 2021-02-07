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
    const components = docgen.parse(node.absolutePath, {
      savePropValueAsString: true,
      // shouldExtractLiteralValuesFromEnum: true,
      // shouldExtractValuesFromUnion: true,
    })

    for (const component of components) {
      const data = {
        displayName: component.displayName,
        description: component.description,
        slug: slugify(component.displayName),
        props: Object.values(component.props).map(prop => {
          return {
            name: prop.name,
            description: prop.description,
            required: prop.required,
            defaultValue: prop.defaultValue ? prop.defaultValue.value : "",
            parent: prop.parent ? prop.parent.name : "",
            type: {
              name: prop.type.name,
            },
          }
        }),
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
      allFile(
        filter: {
          internal: { mediaType: { eq: "text/mdx" } }
          sourceInstanceName: { eq: "components" }
        }
      ) {
        nodes {
          absolutePath
          childMdx {
            slug
          }
        }
      }
    }
  `)

  for (const node of result.data.allFile.nodes) {
    await createPage({
      path: node.childMdx.slug,
      component: node.absolutePath,
      context: { slug: node.childMdx.slug },
    })
  }
}
