import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import React from "react"
import groupBy from "lodash.groupby"
import { Box, Flex, Link, Text } from "primer-react-demo"

export function Sidenav() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { eq: "text/mdx" } } }) {
        nodes {
          id
          childMdx {
            slug
            frontmatter {
              group
              title
            }
          }
        }
      }
    }
  `)

  const groupedPages = React.useMemo(
    () => groupBy(data.allFile.nodes, node => node.childMdx.frontmatter.group),
    [data]
  )

  return (
    <Flex
      as="nav"
      p={4}
      flexDirection="column"
      gap={4}
      // borderRightWidth="1px"
      // borderRightStyle="solid"
      // borderColor="border.primary"
    >
      {Object.entries(groupedPages).map(([group, pages]) => (
        <Flex flexDirection="column" gap={2}>
          {group !== "null" ? (
            <Text fontSize={1} fontWeight="bold">
              {group}
            </Text>
          ) : null}
          <Flex as="ul" m={0} p={0} flexDirection="column" gap={2}>
            {pages.map(page => (
              <Box as="li" key={page.id} sx={{ listStyle: "none" }}>
                <Link
                  as={GatsbyLink}
                  to={`/${page.childMdx.slug}`}
                  fontSize={1}
                  color="text.secondary"
                >
                  {page.childMdx.frontmatter.title || page.childMdx.slug}
                </Link>
              </Box>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}
