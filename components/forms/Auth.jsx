"use client";

import clsx from "clsx";

import useForm from "@hooks/useFormValidation";

import Animate from "@components/animation/Animate";

import Typography from "@components/elements/Typography";
import Button from "@components/elements/Button";

import Textfield from "@components/inputs/TextfiledAlt";
import Select from "@components/inputs/SelectAlt";

import Box from "@components/layouts/Box";
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
          "flex flex-col",
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
        <Box
          className={clsx(
            "relative",
            "w-full"
          )}
        >
          <label
            htmlFor="Username"
            className={clsx(
              "block",
              "h-6 py-1 px-4",
              "text-sm leading-[16px] font-medium uppercase",
              "dark:text-gray-400",
            )}
          >
            Username
          </label>

          <Textfield
            type="text"
            name="username"
            id="Username"
            placeholder="Username"
            value={inputValues?.username}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
            error={errors?.username}
          />

          {errors?.username && (
            <Animate
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              className={clsx(
                "absolute",
                "w-full",
              )}
            >
              <Typography
                className={clsx(
                  "h-6 py-1 px-4",
                  "text-xs font-semibold uppercase",
                  "dark:text-error"
                )}
              >
                {errors?.username}
              </Typography>
            </Animate>
          )}
        </Box>

        <Box
          className={clsx(
            "relative",
            "w-full"
          )}
        >
          <label
            htmlFor="email"
            className={clsx(
              "block",
              "h-6 py-1 px-4",
              "text-sm leading-[16px] font-medium uppercase",
              "dark:text-gray-400",
            )}
          >
            Email
          </label>

          <Textfield
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={inputValues?.email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
            error={errors?.email}
          />

          {errors?.email && (
            <Animate
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              className={clsx(
                "absolute",
                "w-full",
              )}
            >
              <Typography
                className={clsx(
                  "h-6 py-1 px-4",
                  "text-xs font-semibold uppercase",
                  "dark:text-error"
                )}
              >
                {errors?.email}
              </Typography>
            </Animate>
          )}
        </Box>

        <Box
          className={clsx(
            "relative",
            "w-full"
          )}
        >
          <label
            htmlFor="Phone"
            className={clsx(
              "block",
              "h-6 py-1 px-4",
              "text-sm leading-[16px] font-medium uppercase",
              "dark:text-gray-400",
            )}
          >
            Phone
          </label>

          <Textfield
            type="tel"
            name="phone"
            id="Phone"
            placeholder="Phone"
            value={inputValues?.phone}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
            error={errors.phone}
          />

          {errors?.phone && (
            <Animate
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              className={clsx(
                "absolute",
                "w-full",
              )}
            >
              <Typography
                className={clsx(
                  "h-6 py-1 px-4",
                  "text-xs font-semibold uppercase",
                  "dark:text-error"
                )}
              >
                {errors?.phone}
              </Typography>
            </Animate>
          )}
        </Box>

        <Box className="flex gap-4 items-center">
          <Box
            className={clsx(
              "relative",
              "w-full"
            )}
          >
            <label
              htmlFor="Quantity"
              className={clsx(
                "block",
                "h-6 py-1 px-4",
                "text-sm leading-[16px] font-medium uppercase",
                "dark:text-gray-400",
              )}
            >
              Quantity
            </label>

            <Textfield
              type="number"
              name="quantity"
              id="Quantity"
              placeholder="Quantity"
              value={inputValues?.quantity}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              required={true}
              error={errors?.quantity}
            />

            {errors?.quantity && (
              <Animate
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                className={clsx(
                  "absolute",
                  "w-full",
                )}
              >
                <Typography
                  className={clsx(
                    "h-6 py-1 px-4",
                    "text-xs font-semibold uppercase",
                    "dark:text-error"
                  )}
                >
                  {errors?.quantity}
                </Typography>
              </Animate>
            )}
          </Box>

          <Box
            className={clsx(
              "relative",
              "w-full"
            )}
          >
            <label
              htmlFor="Country"
              className={clsx(
                "block",
                "h-6 py-1 px-4",
                "text-sm leading-[16px] font-medium uppercase",
                "dark:text-gray-400",
              )}
            >
              Country
            </label>

            <Select
              name="country"
              id="Country"
              placeholder="country"
              value={inputValues?.country}
              options={[{
                id: 1,
                label: "Bangladesh",
                value: "BGD"
              }, {
                id: 2,
                label: "Qatar",
                value: "QTR"
              }, {
                id: 3,
                label: "Turkey",
                value: "TRK"
              }, {
                id: 4,
                label: "Turkey",
                value: ""
              }]}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors?.country}
            />

            {errors?.country && (
              <Animate
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                className={clsx(
                  "absolute",
                  "w-full",
                )}
              >
                <Typography
                  className={clsx(
                    "h-6 py-1 px-4",
                    "text-xs font-semibold uppercase",
                    "dark:text-error"
                  )}
                >
                  {errors?.country}
                </Typography>
              </Animate>
            )}
          </Box>
        </Box>

        <Box
          className={clsx(
            "relative",
            "w-full"
          )}
        >
          <label
            htmlFor="Password"
            className={clsx(
              "block",
              "h-6 py-1 px-4",
              "text-sm leading-[16px] font-medium uppercase",
              "dark:text-gray-400",
            )}
          >
            Password
          </label>

          <Textfield
            type="password"
            name="password"
            id="Password"
            placeholder="Something Secure"
            value={inputValues?.password}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
            error={errors?.password}
          />

          {errors?.password && (
            <Animate
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              className={clsx(
                "absolute",
                "w-full",
              )}
            >
              <Typography
                className={clsx(
                  "h-6 py-1 px-4",
                  "text-xs font-semibold uppercase",
                  "dark:text-error"
                )}
              >
                {errors?.password}
              </Typography>
            </Animate>
          )}
        </Box>

        <Button type="submit" className="ml-auto mt-6">
          Proceed to Pay
        </Button>
      </Flex>
    </form>
  );
}

export default Auth;
