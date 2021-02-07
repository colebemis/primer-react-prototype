import { graphql, useStaticQuery } from "gatsby"
import { Box, Grid } from "lib"
import React from "react"
import { Code } from "./code"
import { Sidenav } from "./sidenav"

function Prop({ prop }) {
  return (
    <React.Fragment>
      <h4>
        {prop.name} {prop.required ? "(required)" : null}
      </h4>
      <code>{prop.type.name}</code>
      {prop.defaultValue ? (
        <p>
          (default: <code>{prop.defaultValue}</code>)
        </p>
      ) : null}
      <p>{prop.description}</p>
    </React.Fragment>
  )
}

export default function ComponentLayout({ pageContext, children }) {
  const data = useStaticQuery(graphql`
    query {
      allComponentMetadata {
        nodes {
          displayName
          description
          props {
            name
            required
            description
            defaultValue
            parent
            type {
              name
            }
          }
        }
      }
    }
  `)

  const components = React.useMemo(
    () =>
      data.allComponentMetadata.nodes.filter(node =>
        new RegExp(`^${pageContext.slug}(\..+)?$`).test(node.displayName)
      ),
    [data, pageContext.slug]
  )

  return (
    <Grid gridTemplateColumns="300px 1fr">
      <Sidenav />
      <Box width="100%" maxWidth={960} mx="auto">
        <h1>{pageContext.slug}</h1>
        <Code>{`import { ${pageContext.slug} } from 'lib'`}</Code>

        {children}
        <h2>Props</h2>
        {components.map(component => (
          <React.Fragment key={component.displayName}>
            <details>
              <summary>
                <strong>{component.displayName}</strong>
              </summary>
              {component.props.map(prop => (
                <Prop key={prop.name} prop={prop} />
              ))}
            </details>
          </React.Fragment>
        ))}
      </Box>
    </Grid>
  )
}
