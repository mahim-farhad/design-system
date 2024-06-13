"use client";

import classNames from "classnames";

import useForm from "@hooks/useFormValidation";

import Button from "@components/elements/Button";
import Textfield from "@components/inputs/Textfield";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Flex from "@components/layouts/Flex";

function Home() {
  const initialValues = {
    username: "mahim-farhad",
    email: "",
    phone: "",
    quantity: "0",
    password: "",
    confirmPassword: ""
  };

  const validate = (inputValues) => {
    let errors = {};

    if (!inputValues.username) {
      errors.username = 'Username is required';
    } else if (!/[A-Za-z0-9]{3, 16}/.test(inputValues.username)) {
      errors.username = 'Username is invalid';
    } else {
      errors.username = "";
    }

    if (!inputValues.email) {
      errors.email = 'Email is required';
    } else if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(inputValues.email)) {
      errors.email = 'Email is invalid';
    } else {
      errors.email = "";
    }

    if (!inputValues.phone) {
      errors.phone = 'Phone is required';
    } else if (!/\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(inputValues.phone)) {
      errors.phone = 'Phone is invalid';
    } else {
      errors.phone = "";
    }

    if (!inputValues.quantity) {
      errors.quantity = 'Quantity is required';
    } else if (!/^(0|[1-9]\d{0,5}|1000000)$/.test(inputValues.quantity)) {
      errors.quantity = 'Quantity is invalid';
    } else {
      errors.quantity = "";
    }

    if (!inputValues.password) {
      errors.password = 'Password is required';
    } else if (inputValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}/.test(inputValues.password)) {
      errors.password = 'Password is invalid';
    } else {
      errors.password = "";
    }

    const isValid =
      !errors.username && !errors.email && !errors.phone &&
      !errors.quantity && !errors.password;

    if (isValid) return null;

    return errors;
  };

  const {
    inputValues,
    errors,
    handleFocus,
    handleBlur,
    handleChange,
    handleSubmit
  } = useForm(initialValues, validate);

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
              <Textfield
                type="text"
                name="username"
                label="Username"
                // placeholder= "Username"
                value={inputValues.username}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                pattern="^[A-Za-z0-9]{3, 16}$"
                required={true}
                error={errors.username}
              />

              <Textfield
                type="email"
                name="email"
                label="Email"
                // placeholder= "Email"
                value={inputValues.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required={true}
                error={errors.email}
              />

              <Textfield
                type="tel"
                name="phone"
                label="Phone"
                // placeholder= "Phone"
                value={inputValues.phone}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                pattern="^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
                required={true}
                error={errors.phone}
              />

              <Textfield
                type="number"
                name="quantity"
                label="Quantity"
                // placeholder= "Quantity"
                value={inputValues.quantity}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                pattern="^(0|[1-9]\d{0,5}|1000000)$"
                required={true}
                error={errors.quantity}
              />

              <Textfield
                type="password"
                name="password"
                label="Password"
                // placeholder= "Password"
                value={inputValues.password}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                required={true}
                error={errors.password}
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
