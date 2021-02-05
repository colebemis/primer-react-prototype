import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Sidenav() {
  const data = useStaticQuery(graphql`
    query {
      allComponentMetadata {
        nodes {
          id
          displayName
        }
      }
    }
  `)
  return (
    <ul>
      {data.allComponentMetadata.nodes.map(node => (
        <li key={node.id}>
          <Link to={`/${node.displayName}`}>{node.displayName}</Link>
        </li>
      ))}
    </ul>
  )
}
