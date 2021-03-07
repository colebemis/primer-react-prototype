import { theme as defaultTheme } from "primer-react-prototype"

export const prismTheme = (theme: typeof defaultTheme) => ({
  plain: {
    color: theme.colors.codemirror.text,
    backgroundColor: theme.colors.bg.tertiary,
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: theme.colors.codemirror.syntax.comment,
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: theme.colors.codemirror.syntax.keyword,
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: theme.colors.codemirror.syntax.comment,
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: theme.colors.codemirror.syntax.constant,
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: theme.colors.codemirror.syntax.support,
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: theme.colors.codemirror.syntax.variable,
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: theme.colors.codemirror.syntax.entity,
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: theme.colors.codemirror.syntax.constant,
      },
    },
  ],
})
