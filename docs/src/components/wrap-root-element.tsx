import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { PrimerProvider } from "@colebemis/components"
import { Code } from "./code"

const components = {
  pre: props => props.children,
  code: Code,
}

export function wrapRootElement({ element }) {
  return (
    <MDXProvider components={components}>
      <PrimerProvider>{element}</PrimerProvider>
    </MDXProvider>
  )
}
