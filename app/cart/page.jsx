"use client";

import { useState } from "react";

import Input from "@components/inputs/Input";
import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import clsx from "clsx";
import Typography from "@components/elements/Typography";
import Flex from "@components/layouts/Flex";
import Button from "@components/elements/Button";

const Cart = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [{
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  }, {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  }, {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
  }, {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  }];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Main>
      <Section
        className={clsx(
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
          <form onSubmit={handleSubmit}>
            <Flex
              className={clsx(
                "flex",
                "flex-col",
                "p-4 sm:p-16",
                "gap-y-4",
                "max-w-[500px]",
                "mx-auto",
                "border",
                "rounded-lg",
                "shadow-lg",
              )}
            >
              <Typography
                type="h1"
              >
                Register
              </Typography>

              {inputs.map((input) => (
                <Input
                  key={input.id}
                  onChange={onChange}
                  {...input}
                />
              ))}

              <Button type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </Container>
      </Section>
    </Main>
  );
};

export default Cart;
