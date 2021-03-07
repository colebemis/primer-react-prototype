import { Flex, Text } from "primer-react-demo"
import { MarkGithubIcon } from "@primer/octicons-react"
import React from "react"

export function Header() {
  return (
    <Flex
      as="header"
      px={4}
      py={3}
      gap={3}
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderColor="border.primary"
    >
      <MarkGithubIcon size={32} />
      <Text fontFamily="mono" fontWeight="bold">
        Primer React Prototype
      </Text>
    </Flex>
  )
}
