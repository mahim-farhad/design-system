"use client"

import classNames from "classnames"

import { useToggleModal } from "@contexts/ModalProvider"

import Button from "@components/elements/Button"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"

import Modal from "@components/modals/Modal"
import Box from "@components/layouts/Box"

function Components() {
  const { openModal } = useToggleModal()

  return (
    <Main>
      <Section className="relative h-[calc(100vh-64px)]">
        <Container>
          <Box
            className={classNames(
              "absolute",
              "top-1/2",
              "left-1/2",
              "-translate-y-1/2",
              "-translate-x-1/2",
            )}
          >
            <Button
              onClick={openModal}
            >
              Show Modal
            </Button>
          </Box>

          <Modal />
        </Container>
      </Section>
    </Main>
  )
}

export default Components
