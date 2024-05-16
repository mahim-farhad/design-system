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
          "sm:p-16",
        )}
      >
        <Container>
          <Flex
            className={
              classNames(
                "flex-col",
                "mx-auto",
                "space-y-16",
                "max-w-[500px] sm:max-w-[800px]",
              )
            }
          >
            <Box>
              <Typography type="h4">
                Default Button
              </Typography>

              <Typography className="mt-4 mb-8">
                Use these default button styles with
                multiple colors to indicate an action or
                link with in a website.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button>Filled</Button>

                <Button variant="gradient">
                  Filled
                </Button>

                <Button variant="toned">
                  Filled
                </Button>

                <Button variant="outlined">
                  Filled
                </Button>

                <Button variant="text">
                  Filled
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Size Variants
              </Typography>

              <Typography className="mt-4 mb-8">
                Use these examples if you want to
                use smaller or larger buttons.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button size="xs">
                  Filled
                </Button>

                <Button size="sm">
                  Filled
                </Button>

                <Button size="base">
                  Filled
                </Button>

                <Button size="lg">
                  Filled
                </Button>

                <Button size="xl">
                  Filled
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Filled
              </Typography>

              <Typography className="mt-4 mb-8">
                These beautifully colored buttons built with
                the gradient color stops utility classes from
                Tailwind CSS can be used as a  creative
                alternative to the default button styles.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button color="primary">
                  primary
                </Button>

                <Button color="secondary">
                  secondary
                </Button>

                <Button color="info">
                  info
                </Button>

                <Button color="success">
                  success
                </Button>

                <Button color="warning">
                  warning
                </Button>

                <Button color="error">
                  error
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Gradient
              </Typography>

              <Typography className="mt-4 mb-8">
                These beautifully colored buttons built with
                the gradient color stops utility classes from
                Tailwind CSS can be used as a  creative
                alternative to the default button styles.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button
                  variant="gradient"
                  color="primary"
                >
                  primary
                </Button>

                <Button
                  variant="gradient"
                  color="secondary"
                >
                  secondary
                </Button>

                <Button
                  variant="gradient"
                  color="info"
                >
                  info
                </Button>

                <Button
                  variant="gradient"
                  color="success"
                >
                  success
                </Button>

                <Button
                  variant="gradient"
                  color="warning"
                >
                  warning
                </Button>

                <Button
                  variant="gradient"
                  color="error"
                >
                  error
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Toned
              </Typography>

              <Typography className="mt-4 mb-8">
                These beautifully colored buttons built with
                the gradient color stops utility classes from
                Tailwind CSS can be used as a  creative
                alternative to the default button styles.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button
                  variant="toned"
                  color="primary"
                >
                  primary
                </Button>

                <Button
                  variant="toned"
                  color="secondary"
                >
                  secondary
                </Button>

                <Button
                  variant="toned"
                  color="info"
                >
                  info
                </Button>

                <Button
                  variant="toned"
                  color="success"
                >
                  success
                </Button>

                <Button
                  variant="toned"
                  color="warning"
                >
                  warning
                </Button>

                <Button
                  variant="toned"
                  color="error"
                >
                  error
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Outlined Buttons
              </Typography>

              <Typography className="mt-4 mb-8">
                Use the following button styles to show
                the colors only for the border of the element.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button
                  variant="outlined"
                  color="primary"
                >
                  primary
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                >
                  secondary
                </Button>

                <Button
                  variant="outlined"
                  color="info"
                >
                  info
                </Button>

                <Button
                  variant="outlined"
                  color="success"
                >
                  success
                </Button>

                <Button
                  variant="outlined"
                  color="warning"
                >
                  warning
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                >
                  error
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Text / Link Buttons
              </Typography>

              <Typography className="mt-4 mb-8">
                These beautifully colored buttons built with
                the gradient color stops utility classes from
                Tailwind CSS can be used as a  creative
                alternative to the default button styles.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button
                  variant="text"
                  color="primary"
                >
                  primary
                </Button>

                <Button
                  variant="text"
                  color="secondary"
                >
                  secondary
                </Button>

                <Button
                  variant="text"
                  color="info"
                >
                  info
                </Button>

                <Button
                  variant="text"
                  color="success"
                >
                  success
                </Button>

                <Button
                  variant="text"
                  color="warning"
                >
                  warning
                </Button>

                <Button
                  variant="text"
                  color="error"
                >
                  error
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Icon buttons
              </Typography>

              <Typography className="mt-4 mb-8">
                Sometimes you need a button to indicate
                an action using only an icon.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button icon="menu">
                  Settings
                </Button>

                <Button icon="settings">
                  Settings
                </Button>

                <Button icon="check-circle">
                  Settings
                </Button>

                <Button icon="sort">
                  Settings
                </Button>

                <Button icon="facebook">
                  Settings
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Button sizes with icon
              </Typography>

              <Typography className="mt-4 mb-8">
                see the following examples to add a SVG icon
                inside the button either on the
                left or right side.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button
                  icon="settings"
                  size="xs"
                >
                  Settings
                </Button>

                <Button
                  icon="settings"
                  size="sm"
                >
                  Settings
                </Button>

                <Button
                  icon="settings"
                  size="base"
                >
                  Settings
                </Button>

                <Button
                  icon="settings"
                  size="lg"
                >
                  Settings
                </Button>

                <Button
                  icon="settings"
                  size="xl"
                >
                  Settings
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Social buttons
              </Typography>

              <Typography className="mt-4 mb-8">
                Use these button styles when building social
                media login forms using Facebook, Twitter,
                GitHub, Google, and Apple.
              </Typography>

              <Flex
                className={classNames(
                  "flex-wrap",
                  "items-end",
                  "justify-center",
                  "gap-4",
                  "p-8",
                  "border-2",
                  "rounded-xl",
                  "shadow-sm",
                )}
              >
                <Button
                  icon="facebook"
                  extended
                  color="facebook"
                >
                  facebook
                </Button>

                <Button
                  icon="twitter"
                  extended
                  color="twitter"
                >
                  twitter
                </Button>

                <Button
                  icon="whatsapp"
                  extended
                  color="whatsapp"
                >
                  whatsapp
                </Button>

                <Button
                  icon="pinterest"
                  extended
                  color="pinterest"
                >
                  pinterest
                </Button>

                <Button
                  icon="instagram"
                  extended
                  color="instagram"
                >
                  instagram
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Section>
    </Main>
  )
}

export default Home
