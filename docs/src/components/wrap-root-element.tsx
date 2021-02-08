import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { PrimerProvider, InlineCode } from "@colebemis/components"
import { Code } from "./code"

const components = {
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
}

export function wrapRootElement({ element }) {
  return (
    <MDXProvider components={components}>
      <PrimerProvider>{element}</PrimerProvider>
    </MDXProvider>
  )
}
