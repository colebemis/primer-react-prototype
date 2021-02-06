import React from "react"
import { graphql } from "gatsby"
import Sidenav from "../components/sidenav"
import { systemPropNames } from "lib"
import partition from "lodash.partition"

function Prop({ prop }) {
  return (
    <React.Fragment>
      <h3>
        {prop.name} {prop.required ? "(required)" : null}
      </h3>
      <code>{prop.type.name}</code>
      <p>{prop.description}</p>
    </React.Fragment>
  )
}

export default function Component({ data }) {
  const metadata = data.componentMetadata
  const [systemProps, props] = partition(metadata.props, prop =>
    systemPropNames.includes(prop.name)
  )
  return (
    <div>
      <Sidenav />
      <h1>{metadata.displayName}</h1>
      <p>{metadata.description}</p>
      <h2>Props</h2>

      {props.map(prop => (
        <Prop prop={prop} />
      ))}

      <details>
        <summary>System props</summary>
        {systemProps.map(prop => (
          <Prop prop={prop} />
        ))}
      </details>
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
        parent
        type {
          name
        }
      }
    }
  }
`
