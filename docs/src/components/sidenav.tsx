import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Sidenav() {
  const data = useStaticQuery(graphql`
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
  return (
    <ul>
      {data.allComponentMetadata.nodes.map(node => (
        <li key={node.id}>
          <Link to={`/${node.slug}`}>{node.displayName}</Link>
        </li>
      ))}
    </ul>
  )
}
