"use client";

import { useState } from "react";

import classNames from "classnames";

import Typography from "@components/elements/Typography";
import Textfield from "@components/inputs/Textfield";
import Counter from "@components/inputs/Counter";
import Select from "@components/inputs/Select"
import CustomSelect from "@components/inputs/CustomSelect";
import Button from "@components/elements/Button";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";
import Flex from "@components/layouts/Flex";
import Icon from "@components/elements/Icon";
import { List, ListItem } from "@components/elements/List";
import LucideIcon from "@components/elements/LucideIcon";
import CustomField from "@components/inputs/CustomField";
import { Froala } from "@components/inputs/Editor";
import Image from "@components/elements/Image";
import Link from "@components/elements/Link";
import Input from "@components/inputs/Input";

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

  const [blockContent, setBlockContent] = useState();

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
          <Box>
            <Typography>
              Country: {inputValues.country}
            </Typography>
          </Box>

          <Flex
            className={classNames(
              "flex",
              "flex-col",
              "items-center",
              "justify-center",
              "p-4 sm:p-16",
              "gap-y-8",
              "max-w-[800px]",
              "mx-auto",
              "border",
              "rounded-lg",
              "shadow-lg",
            )}
          >
            <Flex
              className={classNames(
                "flex",
                "items-center",
                "gap-x-4",
                "w-full",
              )}
            >
              <Textfield
                type="text"
                name="name"
                label="Name"
                value={inputValues.name}
                className={classNames(
                  "flex-1",
                )}
                onChange={handleChange}
                disabled
              />

              <Textfield
                type="email"
                name="email"
                label="Email"
                className={classNames(
                  "flex-1",
                )}
                onChange={handleChange}
              />
            </Flex>

            <Flex
              className={classNames(
                "flex",
                "items-center",
                "gap-x-4",
                "w-full",
              )}
            >
              <Textfield
                type="tel"
                name="phone"
                label="Phone"
                className={classNames(
                  "flex-1",
                )}
                onChange={handleChange}
              />

              <Textfield
                type="number"
                name="quantity"
                label="Quantity"
                className={classNames(
                  "flex-1",
                )}
                onChange={handleChange}
              />
            </Flex>

            <Flex
              className={classNames(
                "flex",
                "flex-wrap",
                "items-center",
                "gap-4",
                "w-full",
              )}
            >
              <CustomSelect
                label="country"
                name="country"
                value={inputValues.country}
                options={selectOptions}
                className={classNames(
                  "sm:flex-1",
                )}
                onChange={handleChange}
              />

              <Input
                type="email"
                name="email"
                label="email"
                className={classNames(
                  "sm:flex-1",
                )}
                onChange={handleChange}
              />
            </Flex>

            <Button variant="toned">Proceed to Payment</Button>
          </Flex>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
