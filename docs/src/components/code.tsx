import * as components from "@colebemis/components"
import { Box } from "@colebemis/components"
import Highlight, { defaultProps } from "prism-react-renderer"
import prismTheme from "prism-react-renderer/themes/github"
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
          borderTopRightRadius={2}
          borderTopLeftRadius={2}
        >
          <LivePreview />
        </Box>
        <LiveEditor
          theme={prismTheme}
          // @ts-ignore
          padding={16}
          style={{
            // TODO: use theme values
            fontFamily:
              'SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace',
            fontSize: 14,
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
          }}
        />
        <LiveError />
      </LiveProvider>
    )
  }
  return (
    <Highlight {...defaultProps} code={code} language="jsx" theme={prismTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          className={className}
          style={style}
          p={3}
          fontFamily="mono"
          fontSize={1}
          borderRadius={2}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  )
}
