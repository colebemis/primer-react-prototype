import { Box, Grid, Heading } from "primer-react-demo"
import React from "react"
import { Header } from "./header"
import { Sidenav } from "./sidenav"

export function PageLayout({ pageContext, children }) {
  return (
    <Box>
      <Header />
      <Grid gridTemplateColumns="260px 1fr">
        <Sidenav />
        <Box width="100%" maxWidth={960} mx="auto" p={6}>
          <Heading as="h1" m={0}>
            {pageContext.frontmatter.title}
          </Heading>
          {children}
        </Box>
      </Grid>
    </Box>
  )
}

export default PageLayout
