"use client"

import { useState } from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import Animate from "@components/animation/Animate"

import Icon from "@components/elements/Icon"
import Button from "@components/elements/Button"

function Counter({
  type = "number",
  name = "",
  size = "base",
  label = "",
  counter,
  setCounter,
  placeholder = "",
  value,
  onChange,
  disabled = false,
}) {
  const [isFocused, setFocus] = useState(false)
  const [isFilled, setFill] = useState(false)
  const [isError, setError] = useState(false)

  const sizeVariants = {
    label: {
      sm: classNames(
        "left-[0.5rem]",
        { ["-z-10 -translate-y-1/2 text-base"]: !isFocused && !isFilled && !value },
        { ["z-10 -translate-y-[1.875rem] text-sm"]: isFocused || isFilled || value },
      ),
      base: classNames(
        "left-[0.625rem]",
        { ["-z-10 -translate-y-1/2 text-base"]: !isFocused && !isFilled && !value },
        { ["z-10 -translate-y-[2.125rem] text-sm"]: isFocused || isFilled || value },
      ),
      lg: classNames(
        "left-[0.75rem]",
        { ["-z-10 -translate-y-1/2 text-lg"]: !isFocused && !isFilled },
        { ["z-10 -translate-y-[2.5rem] text-base"]: isFocused || isFilled || value },
      ),
    },
    input: {
      sm: classNames(
        "h-10",
        "py-1.5",
        "pl-3",
        { ["pr-3"]: !isError },
        { ["pr-10"]: isError },
        "text-base",
      ),
      base: classNames(
        "h-12",
        "py-2",
        "pl-3.5",
        { ["pr-3.5"]: !isError },
        { ["pr-12"]: isError },
        "text-base",
      ),
      lg: classNames(
        "h-14",
        "py-3",
        "pl-4",
        { ["pr-4"]: !isError },
        { ["pr-14"]: isError },
        "text-lg",
      ),
    },
    icon: {
      sm: classNames(
        "right-3",
      ),
      base: classNames(
        "right-3.5",
      ),
      lg: classNames(
        "right-4",
      ),
    },
  }

  return (
    <div
      className={classNames(
        "relative",
        "flex",
        "flex-col",
        "w-full",
      )}
    >
      {
        label &&
        <label
          className={twMerge(
            classNames(
              "absolute",
              "top-1/2",
              { [sizeVariants.label[size]]: size },
              "px-1.5",
              // "font-default",
              "font-medium",
              { ["text-gray-400"]: !isFocused && !isError && !disabled },
              { ["text-primary"]: isFocused && !isError && !disabled },
              { ["text-error"]: isError && !disabled },
              { ["text-gray-300"]: disabled },
              "bg-surface-light",
              "rounded-lg",
              "transition-all",
              "duration-300",
              "ease-in-out"
            )
          )}
        >
          {label}
        </label>
      }

      <input
        type={type}
        name={name}
        readOnly
        className={twMerge(
          classNames(
            "w-full",
            { [sizeVariants.input[size]]: size },
            // "font-default",
            "leading-[1.5]",
            "font-medium",
            "select-none",
            "appearance-none",
            "bg-transparent",
            "outline-0",
            "border-2",
            { ["border-gray-300"]: !isFocused && !isError && !disabled },
            { ["border-primary"]: isFocused && !isError && !disabled },
            { ["border-error"]: isError && !disabled },
            { ["cursor-pointer text-font-light"]: !disabled },
            { ["cursor-not-allowed text-gray-300 border-gray-100"]: disabled },
            "rounded-lg",
            "transition-all",
            "duration-300",
            "ease-in-out"
          )
        )}
        placeholder={placeholder}
        value={counter}
        onFocus={() => {
          setFocus(true)
          setError(false)
        }}
        onBlur={(event) => {
          setFocus(false)

          if (event.target.value === "" || event.target.value === null) {
            setFill(false)
            setError(true)
          } else {
            setFill(true)
          }
        }}
        onChange={onChange}
        disabled={disabled}
      />

      <div
        className={classNames(
          "absolute",
          "right-0",
          "flex",
          "flex-col",
          "justify-center",
          "h-12",
          "w-12",
        )}
      >
        <Button
          onClick={() => {
            if (counter < 100) setCounter(counter + 1)
          }}
          icon="caret-down"
          size={size}
          variant="text"
          color="gray"
          disabled={disabled || counter >= 100}
          className={classNames(
            "h-6",
            "rotate-180",
          )}
        />

        <Button
          onClick={() => {
            if (counter > 1) setCounter(counter - 1)
          }}
          icon="caret-down"
          size={size}
          variant="text"
          color="gray"
          disabled={disabled || counter <= 1}
          className={classNames(
            "h-6",
          )}
        />
      </div>
    </div>
  )
}

export default Counter
