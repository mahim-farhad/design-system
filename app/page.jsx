"use client"

import { useState } from "react"

import classNames from "classnames"

import Typography from "@components/elements/Typography"
import Textfield from "@components/inputs/Textfield"
import Counter from "@components/inputs/Counter"
import Select from "@components/inputs/Select"
import CustomSelect from "@components/inputs/CustomSelect"
import Button from "@components/elements/Button"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import { Grid, GridItem } from "@components/layouts/Grid"
import Flex from "@components/layouts/Flex"
import Box from "@components/layouts/Box"
import Customfield from "@components/inputs/CustomField"
import Radio from "@components/inputs/Radio"

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
  value: "SA",
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

  const handleChange = (event) => {
    const { name, value } = event.target

    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  { console.log(inputValues) }

  return (
    <Main>
      <Section className="h-[calc(100vh-64px)]">
        <Container>
          <form
            action=""
            className={classNames(
              "absolute",
              "top-1/2",
              "left-1/2",
              "-translate-y-1/2",
              "-translate-x-1/2",
            )}
          >
            <Flex
              className={classNames(
                "flex-col",
                "gap-8",
                "justify-center",
                "w-[400px] sm:w-[800px]",
                "mx-auto",
                "py-8 sm:py-16",
                "px-4 sm:px-16",
                "bg-surface-light",
                "border",
                "rounded-xl",
              )}
            >
              <Flex
                className={classNames(
                  "sm:flex-nowrap",
                  "gap-4",
                  "items-center",
                  "w-full",
                )}
              >
                <Textfield
                  type="text"
                  name="name"
                  label="Name"
                  value={inputValues.name}
                  onChange={handleChange}
                  disabled
                  className="flex-1"
                />

                <CustomSelect
                  name="country"
                  label="Country"
                  options={selectOptions}
                  value={inputValues.country}
                  onChange={handleChange}
                  className="flex-1"
                />
              </Flex>

              <Flex
                className={classNames(
                  "sm:flex-nowrap",
                  "gap-4",
                  "items-center",
                  "w-full",
                )}
              >
                <Textfield
                  type="email"
                  name="email"
                  label="Email"
                  value={inputValues.email}
                  onChange={handleChange}
                  className="flex-1"
                />

                <Customfield
                  type="tel"
                  name="phone"
                  label="Phone"
                  value={inputValues.phone}
                  onChange={handleChange}
                  className="flex-1"
                />
              </Flex>

              <Textfield
                type="password"
                name="password"
                label="Password"
                size="sm"
                className="w-full"
                onChange={handleChange}
              />

              <Textfield
                type="password"
                name="password"
                label="Password"
                size="base"
                className="w-full"
                onChange={handleChange}
              />

              <Textfield
                type="password"
                name="password"
                label="Password"
                size="lg"
                className="w-full"
                onChange={handleChange}
              />

              <Textfield
                type="password"
                name="password"
                label="Password"
                size="xl"
                className="w-full"
                onChange={handleChange}
              />

              <Button type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </Container>
      </Section>
    </Main>
  )
}

export default Home
