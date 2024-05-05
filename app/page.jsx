"use client"

import { useState } from "react"

import classNames from "classnames"

import Typography from "@components/elements/Typography"
import Textfield from "@components/textfields/Textfield"
import Counter from "@components/textfields/Counter"
import Select from "@components/textfields/Select"
import Button from "@components/elements/Button"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import { Grid, GridItem } from "@components/layouts/Grid"
import Flex from "@components/layouts/Flex"
import Box from "@components/layouts/Box"

const selectOptions = [{
  id: 1,
  name: "Canada",
  value: "CA",
}, {
  id: 2,
  name: "Germany",
  value: "DE",
}, {
  id: 3,
  name: "Australia",
  value: "AS",
}, {
  id: 4,
  name: "Saudi Arabia",
  value: "SA",
}]

function Home() {
  const initialValues = {
    name: "Mahim Farhad",
    country: selectOptions[2].value,
    password: "",
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
          <Flex
            className={classNames(
              "flex",
              "flex-col",
              "gap-8",
              "justify-center",
              "w-full",
              "sm:max-w-[600px]",
              "max-h-[600px]",
              "mx-auto",
              "p-16",
              "bg-surface-light",
              "border",
              "rounded-xl",
            )}
          >
            <Textfield
              type="text"
              name="name"
              label="Name"
              value={inputValues.name}
              onChange={handleChange}
              disabled
            />

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

              <Textfield
                type="tel"
                name="phone"
                label="Phone"
                onChange={handleChange}
              />
            </Flex>

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

              <Counter
                name="quantity"
                label="Quantity"
                onChange={handleChange}
                counter={quantity}
                setCounter={setQuantity}
                value={"dfgdgfd"}
              />
            </Flex>

            <Flex
              className={classNames(
                "flex-nowrap",
                "gap-4",
                "items-center",
                "w-full",
              )}
            >
              <Select
                type="select"
                name="country"
                label="Country"
                options={selectOptions}
                value={inputValues.country}
                onChange={handleChange}
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

            <Textfield
              type="password"
              name="password"
              label="Password"
              onChange={handleChange}
            />

            <Button
              disabled={
                inputValues.name === "" ||
                inputValues.password === ""
              }
            >
              Submit
            </Button>
          </Flex>
        </Container>
      </Section>
    </Main>
  )
}

export default Home
