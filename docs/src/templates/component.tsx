import React from "react"
import { graphql } from "gatsby"
import Sidenav from "../components/sidenav"

export default function Component({ data }) {
  const metadata = data.componentMetadata
  return (
    <div>
      <Sidenav />
      <h1>{metadata.displayName}</h1>
      <p>{metadata.description}</p>
      <h2>Props</h2>
      {metadata.props.map(prop => (
        <React.Fragment key={prop.name}>
          <h3>
            {prop.name} {prop.required ? "(required)" : null}
          </h3>
          <code>{prop.type.name}</code>
          <p>{prop.description}</p>
        </React.Fragment>
      ))}
    </div>
  )
}
export const query = graphql`
  query($id: String!) {
    componentMetadata(id: { eq: $id }) {
      displayName
      description
      props {
        name
        required
        description
        type {
          name
        }
      }
    }
  }
`
