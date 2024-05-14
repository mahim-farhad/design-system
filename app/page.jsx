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
import Flex from "@components/layouts/Flex"

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
          "min-h-[calc(100vh-64px)]",
        )}
      >
        <Container>
          {/* <List
            className="p-4 bg-surface-light mb-8 border rounded-lg"
          >
            <ListItem>
              <Typography type="small">
                Name: {inputValues.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography type="small">
                Country: {inputValues.country}
              </Typography>
            </ListItem>

            <ListItem>
              <Typography type="small">
                Quantity: {inputValues.quantity}
              </Typography>
            </ListItem>
          </List>

          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <Flex
              className={classNames(
                "flex-col",
                "gap-8",
                "justify-center",
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
                  "gap-8",
                )}
              >
                <Select
                  name="country"
                  label="Country"
                  value={inputValues.country}
                  options={selectOptions}
                  onChange={handleChange}
                />

                <Textfield
                  type="text"
                  name="name"
                  label="Name"
                  value={inputValues.name}
                  onChange={handleChange}
                />
              </Flex>

              <Textfield
                type="text"
                name="name"
                label="Name"
                value={inputValues.name}
                onChange={handleChange}
              />
            </Flex>
          </form> */}

          <Flex
            className="flex-col mx-auto max-w-[500px] sm:max-w-[600px]"
          >
            <Flex
              className={classNames(
                "items-end",
                "gap-4",
                "mb-8",
              )}
            >
              <Button
                icon="facebook"
                extended
                size="xs"
              >
                Facebook
              </Button>

              <Button
                icon="instagram"
                extended
                size="sm"
              >
                Instagram
              </Button>

              <Button extended>
                Whatsapp
              </Button>

              <Button
                icon="twitter"
                extended
                size="lg"
              >
                Twitter
              </Button>

              <Button
                icon="discord"
                extended
                size="xl"
              >
                Discord
              </Button>
            </Flex>

            <Flex
              className={classNames(
                "items-end",
                "gap-4",
                "mb-8",
              )}
            >
              <Button
                icon="facebook"
                extended
                variant="toned"
                size="xs"
              >
                Facebook
              </Button>

              <Button
                icon="instagram"
                extended
                variant="toned"
                size="sm"
              >
                Instagram
              </Button>

              <Button
                icon="whatsappwssg"
              >
                Whatsapp
              </Button>

              <Button
                icon="twitter"
                extended
                variant="toned"
                size="lg"
              >
                Twitter
              </Button>

              <Button
                icon="discord"
                extended
                variant="toned"
                size="xl"
              >
                Discord
              </Button>
            </Flex>

            <Flex
              className={classNames(
                "items-end",
                "gap-4",
                "mb-8",
              )}
            >
              <Button
                icon="facebook"
                extended
                variant="outlined"
                size="xs"
              >
                Facebook
              </Button>

              <Button
                icon="instagram"
                extended
                variant="outlined"
                size="sm"
              >
                Instagram
              </Button>

              <Button
                icon="whatsapp"
                extended
                variant="outlined"
              >
                Whatsapp
              </Button>

              <Button
                icon="twitter"
                extended
                variant="outlined"
                size="lg"
              >
                Twitter
              </Button>

              <Button
                icon="discord"
                extended
                variant="outlined"
                size="xl"
              >
                Discord
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Main>
  )
}

export default Home
