import * as components from "lib"
import { Box } from "lib"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsDarkTheme from "prism-react-renderer/themes/vsDark"
import React from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"

type CodeProps = { children?: string; live?: boolean }

export function Code({ children, live }: CodeProps) {
  const code = children.trim()

  if (live) {
    return (
      <LiveProvider code={code} scope={components}>
        <Box
          p={3}
          borderWidth={1}
          borderStyle="solid"
          borderColor="border.primary"
        >
          <LivePreview />
        </Box>
        <LiveEditor theme={vsDarkTheme} />
        <LiveError />
      </LiveProvider>
    )
  }
  return (
    <Highlight {...defaultProps} code={code} language="jsx" theme={vsDarkTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
