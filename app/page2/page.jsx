"use client"

import { useState } from "react"

import classNames from "classnames"

import Typography from "@components/elements/Typography"
import Textfield from "@components/inputs/Textfield"
import Counter from "@components/inputs/Counter"
import Select from "@components/inputs/Select"
import CustomSelect from "@components/inputs/CustomSelect"
import Button from "@components/elements/Button"
import { List, ListItem } from "@components/elements/List"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import Box from "@components/layouts/Box"
import Flex from "@components/layouts/Flex"
import Icon from "@components/elements/Icon"
import LinkTransition from "@components/elements/LinkTransition"

function Page2() {
  return (
    <Main>
      <Section
        className={classNames(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "h-full",
          "min-h-[calc(100vh)]",
          "sm:p-16",
        )}
      >
        <Container>
          <Flex
            className={classNames(
              "flex",
              "flex-col",
              "items-center",
              "justify-center",
              "sm:max-w-[400px]",
              "sm:p-16",
              "mx-auto",
              "bg-white",
              "border",
              "rounded-lg",
              "shadow-md",
            )}
          >
            <LinkTransition href="/">
              <Button variant="toned">
                Go To Page 1
              </Button>
            </LinkTransition>
          </Flex>
        </Container>
      </Section>
    </Main>
  )
}

export default Page2
