import {
  Box,
  Grid,
  InlineCode,
  Label,
  all,
  Flex,
  Text,
  Heading,
  layout,
} from "primer-react-demo"
import metadata from "primer-react-demo/dist/metadata.json"
import React from "react"
import { Code } from "./code"
import { Header } from "./header"
import { Sidenav } from "./sidenav"
import pick from "lodash.pick"
import omit from "lodash.omit"
import { border, color, position, space, flexbox, grid } from "styled-system"

function Table({ children }: { children?: React.ReactNode }) {
  return (
    <Box as="table" width="100%" sx={{ borderCollapse: "collapse" }}>
      {children}
    </Box>
  )
}

function Th({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      as="th"
      textAlign="left"
      px={0}
      py={2}
      fontSize={1}
      fontWeight="bold"
      borderBottomWidth="2px"
      borderBottomStyle="solid"
      borderColor="border.primary"
    >
      {children}
    </Box>
  )
}

function Td({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      as="td"
      px={0}
      py={2}
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderColor="border.primary"
    >
      {children}
    </Box>
  )
}

function SystemPropsTable({ name, props }: { name: string; props: any[] }) {
  return (
    <details>
      <Box
        as="summary"
        fontWeight="bold"
        fontSize={1}
        py={2}
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderColor="border.primary"
      >
        {name}
      </Box>
      <Table>
        <col style={{ width: "40%" }} />
        {/* <col style={{ width: "60" }} /> */}
        {props.map(prop => (
          <Box as="tr" verticalAlign="top">
            <Td>
              <InlineCode>{prop.name}</InlineCode>
            </Td>
            {/* <Td>{prop.description}</Td> */}
          </Box>
        ))}
      </Table>
    </details>
  )
}

export function ComponentLayout({ pageContext, children }) {
  const components = React.useMemo(
    () =>
      metadata.filter(component =>
        new RegExp(`^${pageContext.slug}(\..+)?$`).test(component.displayName)
      ),
    [metadata, pageContext.slug]
  )

  console.log(layout.propNames)
  return (
    <Box>
      <Header />
      <Grid gridTemplateColumns="260px 1fr">
        <Sidenav />
        <Box width="100%" maxWidth={960} mx="auto" p={6}>
          <Box mb={5}>
            <Heading as="h1" m={0}>
              {pageContext.slug}
            </Heading>
            <Label variant="warning" size="large">
              Alpha
            </Label>
          </Box>
          <Code>{`import { ${pageContext.slug} } from 'primer-react-prototype'`}</Code>

          {children}
          <Heading mt={6} mb={2}>
            API Reference
          </Heading>
          {components.map(component => {
            const colorProps = Object.values(
              pick(component.props, color.propNames)
            )
            const spaceProps = Object.values(
              pick(component.props, space.propNames)
            )

            const flexboxProps = Object.values(
              pick(component.props, flexbox.propNames)
            )

            const gridProps = Object.values(
              pick(component.props, grid.propNames)
            )

            const layoutProps = Object.values(
              pick(component.props, layout.propNames)
            )

            const positionProps = Object.values(
              pick(component.props, position.propNames)
            )

            const borderProps = Object.values(
              pick(component.props, border.propNames)
            )

            const ownProps = Object.values(omit(component.props, all.propNames))

            return (
              <React.Fragment key={component.displayName}>
                <Heading as="h3" fontFamily="mono" mt={5} mb={1}>
                  {component.displayName}
                </Heading>
                <Flex flexDirection="column">
                  <Table>
                    <thead>
                      <tr>
                        <Th>Prop</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {ownProps.map(prop => (
                        <tr>
                          <Td>
                            <InlineCode>{prop.name}</InlineCode>
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  {colorProps.length > 0 ? (
                    <SystemPropsTable name="Color" props={colorProps} />
                  ) : null}

                  {spaceProps.length > 0 ? (
                    <SystemPropsTable name="Space" props={spaceProps} />
                  ) : null}

                  {flexboxProps.length > 0 ? (
                    <SystemPropsTable name="Flexbox" props={flexboxProps} />
                  ) : null}

                  {gridProps.length > 0 ? (
                    <SystemPropsTable name="Grid" props={gridProps} />
                  ) : null}

                  {layoutProps.length > 0 ? (
                    <SystemPropsTable name="Layout" props={layoutProps} />
                  ) : null}

                  {positionProps.length > 0 ? (
                    <SystemPropsTable name="Position" props={positionProps} />
                  ) : null}

                  {borderProps.length > 0 ? (
                    <SystemPropsTable name="Border" props={borderProps} />
                  ) : null}
                </Flex>

                {/* <details>
                <summary>
                  <strong>{component.displayName}</strong>
                </summary>
                {component.props.map(prop => (
                  <Prop key={prop.name} prop={prop} />
                ))}
              </details> */}
              </React.Fragment>
            )
          })}
        </Box>
      </Grid>
    </Box>
  )
}

export default ComponentLayout
