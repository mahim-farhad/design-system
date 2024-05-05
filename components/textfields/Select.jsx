"use client"

import { forwardRef, useState } from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"
import Button from "@components/elements/Button"

const Select = forwardRef(
  function Select({
    type = "text",
    name,
    label,
    placeholder,
    options,
    selected,
    value,
    size = "base",
    disabled = false,
    onChange,
  }, ref) {
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
          { ["-z-5 -translate-y-1/2 text-base"]: !isFocused && !isFilled && !value },
          { ["z-10 -translate-y-[31px] text-sm"]: isFocused || isFilled || value },
        ),
        lg: classNames(
          "left-[0.75rem]",
          { ["-z-10 -translate-y-1/2 text-lg"]: !isFocused && !isFilled && !value },
          { ["z-10 -translate-y-[2.5rem] text-base"]: isFocused || isFilled || value },
        ),
      },
      input: {
        xs: classNames(
          "h-8",
          "py-1.5",
          "pl-3",
          { ["pr-3"]: !isError },
          { ["pr-10"]: isError },
          "text-base",
        ),
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
        xl: classNames(
          "h-16",
          "py-3",
          "pl-4",
          { ["pr-4"]: !isError },
          { ["pr-14"]: isError },
          "text-lg",
        ),
      },
      icon: {
        sm: "right-3",
        base: "right-3.5",
        lg: "right-4",
      },
    }

    const labelClasses = twMerge(
      classNames(
        "absolute",
        "top-1/2",
        { [sizeVariants.label[size]]: size },
        "px-1.5",
        "font-poppins",
        "leading-[17px]",
        "font-medium",
        "text-gray-400",
        { ["text-primary"]: isFocused },
        { ["text-error"]: isError },
        { ["text-gray-300"]: disabled },
        "bg-surface-light",
        "rounded-md",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    )

    const inputClasses = twMerge(
      classNames(
        "w-full",
        { [sizeVariants.input[size]]: size },
        "font-poppins",
        "leading-[17px]",
        "font-medium",
        "whitespace-nowrap",
        "appearance-none",
        { ["cursor-pointer"]: !disabled },
        { ["cursor-not-allowed pointer-events-none opacity-50"]: disabled },
        "text-gray-400",
        "bg-transparent",
        "outline-0",
        "border-2",
        "border-gray-200",
        { ["border-primary"]: isFocused },
        { ["border-error"]: isError },
        "rounded-lg",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    )

    if (!options) return null

    return (
      <div
        className={classNames(
          "relative",
          "w-full",
        )}
      >
        {
          label &&
          <label
            className={labelClasses}
          >
            {label}
          </label>
        }

        <select
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={inputClasses}
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
        >
          {
            options?.map((option) => {
              return (
                <option
                  key={option.id}
                  value={option.value}
                >
                  {option.name}
                </option>
              )
            })
          }
        </select>

        <div
          className={classNames(
            "absolute",
            "top-0",
            "right-0",
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "w-12",
            "h-full",
          )}
        >
          <Button
            icon="caret-down"
            size="xs"
            variant="text"
            color="secondary"
            className={classNames(
              "w-3",
              "h-3",
              "rotate-180",
              "text-gray-300",
            )}
          />

          <Button
            icon="caret-down"
            size="xs"
            variant="text"
            color="secondary"
            className={classNames(
              "w-3",
              "h-3",
              "text-gray-300",
            )}
          />
        </div>
      </div>
    )
  }
)

export default Select
