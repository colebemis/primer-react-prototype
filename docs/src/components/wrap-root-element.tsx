import { MDXProvider } from "@mdx-js/react"
import GithubSlugger from "github-slugger"
import {
  Heading,
  InlineCode,
  Link,
  ThemeProvider,
} from "primer-react-prototype"
import React from "react"
import textContent from "react-addons-text-content"
import { Code } from "./code"
import { createGlobalStyle } from "styled-components"
import css from "@styled-system/css"

const GlobalStyle = createGlobalStyle(
  css({
    "*, *::before, *::after": {
      boxSizing: "inherit",
    },
    body: {
      margin: 0,
      color: "text.primary",
      bg: "bg.canvas",
      fontFamily: "normal",
      lineHeight: "default",
      boxSizing: "border-box",
    },
  })
)

function H2(props) {
  const slugger = new GithubSlugger()
  const text = props.children ? textContent(props.children) : ""
  const id = text ? slugger.slug(text) : ""
  return <Heading as="h2" id={id} {...props} />
}

const components = {
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
  a: Link,
  h2: H2,
}

export function wrapRootElement({ element }) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </MDXProvider>
  )
}
