import { Flex } from "primer-react-demo"
import { MarkGithubIcon } from "@primer/octicons-react"
import React from "react"

export function Header() {
  return (
    <Flex as="header" p={4} flexDirection="column">
      <MarkGithubIcon size={32} />
    </Flex>
  )
}
