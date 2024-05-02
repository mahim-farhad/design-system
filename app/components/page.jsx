"use client"

import classNames from "classnames"

import { useToggleModal } from "@contexts/ModalProvider"

import Button from "@components/elements/Button"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"

import Modal from "@components/modals/Modal"

function Components() {
  const { openModal } = useToggleModal()

  return (
    <Main>
      <Section className="relative">
        <Container>
          <Button
            onClick={openModal}
            className={classNames(
              "absolute",
              "top-1/2",
              "left-1/2",
              "-translate-y-1/2",
              "-translate-x-1/2",
            )}
          >
            Show Modal
          </Button>

          <Modal />
        </Container>
      </Section>
    </Main>
  )
}

export default Components
