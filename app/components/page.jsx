"use client"

import classNames from "classnames"

import { useToggleModal } from "@contexts/ModalProvider"

import Button from "@components/elements/Button"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"

function Components() {
  const { openModal } = useToggleModal()

  return (
    <Main className="h-[2000px]">
      <Section>
        <Container>
          <Button
            onClick={openModal}
            className={classNames(
              "fixed",
              "top-1/2",
              "left-1/2",
              "-translate-y-1/2",
              "-translate-x-1/2",
            )}
          >
            Show Modal
          </Button>
        </Container>
      </Section>
    </Main >
  )
}

export default Components
