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
                Types
              </Typography>

              <Typography className="mb-4">
                The most commonly used button styles.
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
                <Button variant="filleds">
                  Filled
                </Button>

                <Button variant="gradients">
                  Filled
                </Button>

                <Button variant="toneds">
                  Filled
                </Button>

                <Button variant="outlineds">
                  Filled
                </Button>

                <Button variant="texts">
                  Filled
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Sizes
              </Typography>

              <Typography className="mb-8">
                Buttons stacked small to large sizes.
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
                Sizes
              </Typography>

              <Typography className="mb-8">
                Buttons stacked small to large sizes.
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
                  color="primary"
                >
                  primary
                </Button>

                <Button
                  color="secondary"
                >
                  secondary
                </Button>

                <Button
                  color="info"
                >
                  info
                </Button>

                <Button
                  color="success"
                >
                  success
                </Button>

                <Button
                  color="warning"
                >
                  warning
                </Button>

                <Button
                  color="error"
                >
                  error
                </Button>
              </Flex>
            </Box>

            <Box>
              <Typography type="h4">
                Sizes
              </Typography>

              <Typography className="mb-8">
                Buttons stacked small to large sizes.
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
                Sizes
              </Typography>

              <Typography className="mb-8">
                Buttons stacked small to large sizes.
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
                Sizes
              </Typography>

              <Typography className="mb-8">
                Buttons stacked small to large sizes.
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
                Sizes
              </Typography>

              <Typography className="mb-8">
                Buttons stacked small to large sizes.
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
                  color="primary"
                  size="xs"
                >
                  facebook
                </Button>

                <Button
                  icon="facebook"
                  color="secondary"
                  size="sm"
                >
                  facebook
                </Button>

                <Button
                  icon="facebook"
                  color="info"
                  size="base"
                >
                  facebook
                </Button>

                <Button
                  icon="facebook"
                  color="success"
                  size="lg"
                >
                  facebook
                </Button>

                <Button
                  icon="facebook"
                  color="warning"
                  size="xl"
                >
                  facebook
                </Button>

                <Button
                  icon="facebook"
                  color="error"
                >
                  facebook
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Section >
    </Main >
  )
}

export default Home
