import * as components from "primer-react-demo"
import { Box } from "primer-react-demo"
import Highlight, { defaultProps } from "prism-react-renderer"
import React from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import { useTheme } from "styled-components"
import { prismTheme } from "../prism-theme"

type CodeProps = { children?: string; live?: boolean }

export function Code({ children, live }: CodeProps) {
  const code = children.trim()
  const theme: any = useTheme()

  if (live) {
    return (
      <LiveProvider code={code} scope={components}>
        <Box
          borderWidth={1}
          borderStyle="solid"
          borderColor="border.primary"
          borderRadius={2}
        >
          <Box
            p={3}
            borderBottomWidth={1}
            borderBottomStyle="solid"
            borderColor="border.primary"
            borderTopRightRadius={2}
            borderTopLeftRadius={2}
          >
            <LivePreview />
          </Box>
          <Box
            sx={{
              borderBottomRightRadius: 6,
              borderBottomLeftRadius: 6,
              overflow: "hidden",
              textarea: {
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 6,
                outline: "none",
                "&:focus": {
                  boxShadow: `inset 0 0 0 2px ${theme.colors.state.focus.border}`,
                },
              },
            }}
          >
            <LiveEditor
              theme={prismTheme(theme)}
              // @ts-ignore
              padding={16}
              style={{
                // TODO: use theme values
                fontFamily:
                  'SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace',
                fontSize: 14,
              }}
            />
          </Box>
          <LiveError />
        </Box>
      </LiveProvider>
    )
  }
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language="jsx"
      theme={prismTheme(theme)}
    >
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
