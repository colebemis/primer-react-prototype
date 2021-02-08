import { Box, Grid } from "primer-react-demo"
import React from "react"
import { Header } from "./header"
import { Sidenav } from "./sidenav"

export function PageLayout({ pageContext, children }) {
  return (
    <Box>
      <Header />
      <Grid gridTemplateColumns="300px 1fr">
        <Sidenav />
        <Box width="100%" maxWidth={960} mx="auto">
          <h1>{pageContext.frontmatter.title}</h1>
          {children}
        </Box>
      </Grid>
    </Box>
  )
}

export default PageLayout
