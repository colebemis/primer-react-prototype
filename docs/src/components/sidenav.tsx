import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Sidenav() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          internal: { mediaType: { eq: "text/mdx" } }
          sourceInstanceName: { eq: "components" }
        }
      ) {
        nodes {
          childMdx {
            slug
          }
        }
      }
    }
  `)
  return (
    <ul>
      {data.allFile.nodes.map(node => (
        <li>
          <a href={`/${node.childMdx.slug}`}>{node.childMdx.slug}</a>
        </li>
      ))}
    </ul>
  )
}
