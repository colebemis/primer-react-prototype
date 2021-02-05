import React from "react"
import { graphql } from "gatsby"

export default function Component({ data }) {
  const metadata = data.componentMetadata
  return (
    <div>
      <h1>{metadata.displayName}</h1>
      <p>{metadata.description.text}</p>
    </div>
  )
}
export const query = graphql`
  query($id: String!) {
    componentMetadata(id: { eq: $id }) {
      displayName
      description {
        text
      }
    }
  }
`
