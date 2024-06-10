"use client";

import { useState } from "react";

import classNames from "classnames";

import Typography from "@components/elements/Typography";
import Textfield from "@components/inputs/Textfield";
import Select from "@components/inputs/Select";
import Button from "@components/elements/Button";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";
import Flex from "@components/layouts/Flex";
import Alert from "@components/elements/Alert";

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
}];

function Home() {
  const initialValues = {
    username: "Mahim Farhad",
    email: "mahim@gmail.com",
    phone: "",
    quantity: 10,
    country: selectOptions[1].value,
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  console.log(inputValues)

  const inputs = [{
    id: 1,
    type: "text",
    name: "username",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  }, {
    id: 2,
    type: "email",
    name: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  }, {
    id: 3,
    type: "tel",
    name: "phone",
    label: "Phone",
    placeholder: "Birthday",
  }, {
    id: 4,
    type: "number",
    name: "quantity",
    label: "Quantity",
    placeholder: "Quantity",
  }, {
    id: 5,
    name: "country",
    label: "Country",
    placeholder: "Country",
  }, {
    id: 6,
    type: "password",
    name: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  }];

  function handleChange(event) {
    const { name, value } = event.target;

    setInputValues(prev => ({
      ...prev,
      [name]: value
    }));

    if (!value) {
      setErrors({
        ...errors,
        [name]: 'This field is required',
      });
    }
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
          <form action="">
            <Flex
              className={classNames(
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
                "p-4 sm:p-16",
                "gap-y-10",
                "max-w-[800px]",
                "mx-auto",
                "border",
                "rounded-lg",
                "shadow-lg",
              )}
            >
              {errors?.email && <Alert>{errors?.email}</Alert>}

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
                  name="username"
                  label="Username"
                  defaultValue={inputValues.username}
                  // placeholder="Username"
                  className={classNames(
                    "flex-1",
                  )}
                  onChange={handleChange}
                  pattern="^[A-Za-z0-9]{3, 16}$"
                  required={true}
                  errorMessage="Username shouldn't include any special char!"
                  disabled
                />

                <Textfield
                  type="email"
                  name="email"
                  label="Email"
                  // placeholder="Email"
                  defaultValue={inputValues.email}
                  errorMessage="It should be a valid email address!"
                  className={classNames(
                    "flex-1",
                  )}
                  onChange={handleChange}
                  required={false}
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
                  defaultValue={inputValues.phone}
                  // placeholder="Phone"
                  errorMessage="It should be a valid phone number"
                  className={classNames(
                    "flex-1",
                  )}
                  onChange={handleChange}
                  required={true}
                />

                <Textfield
                  type="number"
                  name="quantity"
                  label="Quantity"
                  defaultValue={inputValues.quantity}
                  // placeholder="Quantity"
                  errorMessage="It should be a valid quantity"
                  className={classNames(
                    "flex-1",
                  )}
                  onChange={handleChange}
                  required={true}
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
                <Select
                  name="country"
                  label="Country"
                  defaultValue={inputValues.country}
                  options={selectOptions}
                  // placeholder="Country"
                  errorMessage="It should be a valid country"
                  className={classNames(
                    "flex-1",
                  )}
                  onChange={handleChange}
                  required={true}
                />

                <Textfield
                  type="password"
                  name="password"
                  label="Password"
                  // placeholder="Password"
                  className={classNames(
                    "flex-1",
                  )}
                  onChange={handleChange}
                  pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8, 20}$`}
                  required={true}
                  errorMessage="Password should include at least 1 letter!"
                />
              </Flex>

              <Button type="submit">Proceed to Payment</Button>
            </Flex>
          </form>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
