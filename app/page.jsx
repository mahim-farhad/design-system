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

const selectOptions = [{
  id: 1,
  label: "Canada",
  value: "CA",
}, {
  id: 2,
  label: "Germany",
  value: "DE",
}, {
  id: 3,
  label: "Australia",
  value: "AS",
}, {
  id: 4,
  label: "Saudi Arabia",
  value: "",
}]

function Home() {
  const initialValues = {
    name: "Mahim Farhad",
    email: "",
    phone: "",
    date: "",
    quantity: 0,
    country: selectOptions[2].value,
    password: "",
  }

  const [inputValues, setInputValues] = useState(initialValues)

  function handleChange(event) {
    const { name, value } = event.target

    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

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
          "md:p-16",
        )}
      >
        <Container>
          <Flex
            className={classNames(
              "flex",
              "flex-col",
              "items-center",
              "justify-center",
              "p-4 sm:p-16",
              "gap-y-8",
              "mx-auto",
              "border",
              "rounded-lg",
              "shadow-lg",
            )}
          >
            <Textfield
              type="password"
              name="firstName"
              label="First Name"
              size="sm"
            />

            <Textfield
              type="password"
              name="firstName"
              label="First Name"
              size="bas"
            />

            <Textfield
              type="password"
              name="firstName"
              label="First Name"
              size="lg"
            />

            <Textfield
              type="password"
              name="firstName"
              label="First Name"
              size="xl"
            />

            <Select
              name="country"
              label="country"
              value={inputValues.country}
              options={selectOptions}
            />
          </Flex>
        </Container>
      </Section>
    </Main>
  )
}

export default Home
