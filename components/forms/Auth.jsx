"use client";

import clsx from "clsx";

import useForm from "@hooks/useFormValidation";

import Button from "@components/elements/Button";

import Textfield from "@components/inputs/TextfiledAlt";
import Select from "@components/inputs/SelectAlt";

import Flex from "@components/layouts/Flex";

function Auth() {
  const initialValues = {
    username: "mahim-farhad",
    email: "",
    phone: "",
    quantity: "0",
    country: "",
    password: "",
    confirmPassword: ""
  };

  const validate = (inputValues) => {
    let errors = {};

    if (!inputValues.username) {
      errors.username = 'Username is required';
    } else if (!/[A-Za-z0-9]/.test(inputValues.username)) {
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
    } else if (!/(0|[1-9]\d{0,5}|1000000)/.test(inputValues.quantity)) {
      errors.quantity = 'Quantity is invalid';
    } else {
      errors.quantity = "";
    }

    if (!inputValues.country) {
      errors.country = 'Country is required';
    } else {
      errors.country = "";
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
      !errors.quantity && !errors.country && !errors.password;

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
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <Flex
        className={clsx(
          "flex-col",
          "gap-y-8",
          "items-center",
          "justify-center",
          "max-w-[500px]",
          "p-4 sm:p-16",
          "mx-auto",
          "sm:border",
          "sm:rounded-xl",
          "sm:shadow-lg"
        )}
      >
        <Textfield
          type="text"
          label="username"
          name="username"
          id="User"
          icon="User"
          placeholder="Username"
          value={inputValues?.username}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={true}
          // success={successes?.username}
          error={errors?.username}
        />

        <Textfield
          type="email"
          label="email"
          name="email"
          id="Email"
          icon="Mail"
          placeholder="Email"
          value={inputValues?.email}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={true}
          // success={successes?.email}
          error={errors?.email}
        />

        <Textfield
          type="tel"
          label="phone"
          name="phone"
          id="Phone"
          icon="Phone"
          placeholder="phone"
          value={inputValues?.phone}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={true}
          // success={successes?.phone}
          error={errors?.phone}
        />

        <Select
          label="country"
          name="country"
          id="Country"
          options={[{
            id: 1,
            label: "Bangladesh",
            value: "BGD",
          }, {
            id: 2,
            label: "Austrailia",
            value: "AUS",
          }, {
            id: 3,
            label: "Germany",
            value: "DE",
          }]}
          placeholder="country"
          value={inputValues?.country}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={true}
          // success={successes?.country}
          error={errors?.country}
        />

        <Button type="submit" className="ml-auto mt-6">
          Proceed to Pay
        </Button>
      </Flex>
    </form>
  );
}

export default Auth;
