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
      <ThemeProvider>{element}</ThemeProvider>
    </MDXProvider>
  )
}
