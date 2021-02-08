import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import groupBy from "lodash.groupby"
import { Box, Flex } from "@colebemis/components"

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
    <Flex as="nav" p={4} flexDirection="column" gap={4}>
      {Object.entries(groupedPages).map(([group, pages]) => (
        <Flex flexDirection="column" gap={2}>
          {group !== "null" ? <strong>{group}</strong> : null}
          <Flex as="ul" m={0} p={0} flexDirection="column" gap={1}>
            {pages.map(page => (
              <Box as="li" key={page.id} sx={{ listStyle: "none" }}>
                <Link to={`/${page.childMdx.slug}`}>
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
