"use client"

import { useState } from "react"

import classNames from "classnames"

import Animate from "@framerMotion/Animate"

import Divider from "@components/elements/Divider"
import Textfield from "@components/textfields/Textfield"
import Counter from "@components/textfields/Counter"
import Button from "@components/elements/Button"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import Box from "@components/layouts/Box"
import Flex from "@components/layouts/Flex"

function Components() {
  const initialValues = {
    name: "Mahim Farhad",
  }

  const [inputValues, setInputValues] = useState(initialValues)
  const [quantity, setQuantity] = useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target

    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  console.log(inputValues)

  return (
    <Main>
      <Section>
        <Container>
          <Animate
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            <Flex
              className={classNames(
                "flex-col",
                "gap-8",
                "justify-center",
                "max-w-[600px]",
                "p-16",
                "bg-surface-light",
                "border-2",
                "rounded-xl",
              )}
            >
              <Textfield
                type="text"
                name="name"
                label="Name"
                value="Mahim Farhad"
                onChange={handleChange}
                disabled
              />

              <Divider />

              <Flex
                className={classNames(
                  "flex-nowrap",
                  "gap-4",
                  "items-center",
                  "w-full",
                )}
              >
                <Textfield
                  type="email"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                />

                <Divider
                  className={classNames(
                    "w-0",
                    "h-4",
                    "border-l",
                  )}
                />

                <Textfield
                  type="tel"
                  name="number"
                  label="Phone"
                  onChange={handleChange}
                />
              </Flex>

              <Divider />

              <Flex
                className={classNames(
                  "flex-nowrap",
                  "gap-4",
                  "items-center",
                  "w-full",
                )}
              >
                <Textfield
                  type="text"
                  name="date"
                  label="Date of Birth"
                  onChange={handleChange}
                />

                <Divider
                  className={classNames(
                    "w-0",
                    "h-4",
                    "border-l",
                  )}
                />

                <Counter
                  name="quantity"
                  label="Quantity"
                  onChange={handleChange}
                  counter={quantity}
                  setCounter={setQuantity}
                  value={"dfgdgfd"}
                />
              </Flex>

              <Divider />

              <Textfield
                type="password"
                label="Password"
              />

              <Divider />

              <Button>
                Button
              </Button>
            </Flex>
          </Animate>
        </Container>
      </Section>
    </Main>
  )
}

export default Components
