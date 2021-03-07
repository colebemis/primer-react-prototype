import { MDXProvider } from "@mdx-js/react"
import GithubSlugger from "github-slugger"
import * as components from "primer-react-prototype"
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
  const id = text ? slugger.slug(text, false) : ""
  return <Heading as="h2" id={id} {...props} />
}

const mdxComponents = {
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
  a: Link,
  h2: H2,

  // Shortcodes
  ...components,
}

export function wrapPageElement({ element }) {
  return (
    <MDXProvider components={mdxComponents}>
      <ThemeProvider>{element}</ThemeProvider>
    </MDXProvider>
  )
}
