import * as components from "lib"
import githubTheme from "prism-react-renderer/themes/github"
import React from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import Highlight, { defaultProps } from "prism-react-renderer"

type CodeProps = { children?: string; live?: boolean }

export function Code({ children, live }: CodeProps) {
  const code = children.trim()

  if (live) {
    return (
      <LiveProvider code={code} scope={components}>
        <LivePreview />
        <LiveEditor theme={githubTheme} />
        <LiveError />
      </LiveProvider>
    )
  }
  return (
    <Highlight {...defaultProps} code={code} language="jsx" theme={githubTheme}>
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
