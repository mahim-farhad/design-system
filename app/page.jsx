"use client";

import { useState } from "react";

import classNames from "classnames";

import Button from "@components/elements/Button";
import Textfield from "@components/inputs/Textfield";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Flex from "@components/layouts/Flex";

function Home() {
  const inputs = [{
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true
  }, {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Email",
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
    required: true
  }, {
    type: "tel",
    name: "phone",
    label: "Phone",
    placeholder: "+880-1XXX-XXXXXX",
    pattern: "^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$",
    required: true
  }, {
    type: "number",
    name: "quantity",
    label: "Quantity",
    placeholder: "Quantity",
    pattern: `^(0|[1-9]\d{0,5}|1000000)$`,
    required: true
  }, {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true
  }];

  const [inputValues, setInputValues] = useState({
    username: "mahim-farhad",
    email: "",
    phone: "",
    quantity: "1",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    quantity: "",
    password: "",
    confirmPassword: ""
  });

  const validate = () => {
    let errors = {};

    if (!inputValues.username) {
      errors.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValues.username)) {
      errors.username = 'Username is invalid';
    } else {
      errors.username = "";
    }

    if (!inputValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = 'Email is invalid';
    } else {
      errors.email = "";
    }

    if (!inputValues.phone) {
      errors.phone = 'Phone is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValues.phone)) {
      errors.phone = 'Phone is invalid';
    } else {
      errors.phone = "";
    }

    if (!inputValues.password) {
      errors.password = 'Password is required';
    } else if (inputValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else {
      errors.password = "";
    }

    const isValid = !errors.username && !errors.email && !errors.password;

    if (isValid) return null;

    return errors;
  };

  function handleFocus(event) {
    const { name } = event.target;

    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function handleBlur(event) {
    const { name, value } = event.target;

    const validationErrors = validate();

    setErrors(validationErrors);

    if (!value) {
      setErrors({
        ...errors,
        [name]: `${name} field is required`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: validationErrors[name],
      });
    }
  }

  console.log(errors);

  function handleChange(event) {
    const { name, value } = event.target;

    setInputValues(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    console.log(errors);

    if (!validationErrors) {
      console.log('Form submitted:', inputValues);
    }
  };

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
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Flex
              className={classNames(
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
                "p-4 sm:p-16",
                "gap-y-10",
                "max-w-[450px]",
                "mx-auto",
                "border",
                "rounded-lg",
                "shadow-lg",
              )}
            >
              {inputs?.map((input) => (
                <Textfield
                  type={input?.type}
                  name={input?.name}
                  label={input?.label}
                  // placeholder = {input?.placeholder}
                  value={inputValues?.[input?.name]}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  pattern={input?.pattern}
                  required={input?.required}
                  disabled={input?.disabled}
                  error={errors?.[input?.name]}
                />
              ))}

              <Textfield
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                // placeholder="Password"
                value={inputValues?.confirmPassword}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8, 20}$`}
                // required={true}
                error={errors?.confirmPassword}
              />

              <Button type="submit">
                Proceed to Payment
              </Button>
            </Flex>
          </form>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
