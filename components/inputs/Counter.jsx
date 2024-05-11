"use client"

import { forwardRef, useState } from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import Icon from "@components/elements/Icon"

const Counter = forwardRef(
  function Counter({
    name,
    label,
    placeholder,
    value,
    size = "base",
    disabled = false,
    onChange,
  }, ref) {
    const [counter, setCounter] = useState(value)
    const [isFocused, setFocus] = useState(false)
    const [isFilled, setFill] = useState(false)
    const [isValid, setValid] = useState(false)

    const sizeVariants = {
      label: {
        sm: classNames(
          "left-[0.5rem]",
          { ["-z-10 -translate-y-1/2 text-base"]: !isFocused && !isFilled && !counter },
          { ["z-10 -translate-y-[1.875rem] text-sm"]: isFocused || isFilled || counter },
        ),
        base: classNames(
          "left-[0.625rem]",
          { ["-z-5 -translate-y-1/2 text-base"]: !isFocused && !isFilled && !counter },
          { ["z-10 -translate-y-[31px] text-sm"]: isFocused || isFilled || counter },
        ),
        lg: classNames(
          "left-[0.75rem]",
          { ["-z-10 -translate-y-1/2 text-lg"]: !isFocused && !isFilled && !counter },
          { ["z-10 -translate-y-[2.5rem] text-base"]: isFocused || isFilled || counter },
        ),
      },
      input: {
        xs: classNames(
          "h-8",
          "py-1.5",
          "pl-3",
          { ["pr-3"]: !isValid },
          { ["pr-10"]: isValid },
          "text-base",
        ),
        sm: classNames(
          "h-10",
          "py-1.5",
          "pl-3",
          { ["pr-3"]: !isValid },
          { ["pr-10"]: isValid },
          "text-base",
        ),
        base: classNames(
          "h-12",
          "py-2",
          "pl-3.5",
          { ["pr-3.5"]: !isValid },
          { ["pr-12"]: isValid },
          "text-base",
        ),
        lg: classNames(
          "h-14",
          "py-3",
          "pl-4",
          { ["pr-4"]: !isValid },
          { ["pr-14"]: isValid },
          "text-lg",
        ),
        xl: classNames(
          "h-16",
          "py-3",
          "pl-4",
          { ["pr-4"]: !isValid },
          { ["pr-14"]: isValid },
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
        { ["text-error"]: isValid },
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
        { ["border-error"]: isValid },
        "rounded-lg",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    )

    return (
      <div className="relative">
        {label && (
          <label className={labelClasses}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          type="number"
          name={name}
          placeholder={placeholder}
          value={counter}
          readOnly
          disabled={disabled}
          className={inputClasses}
          onFocus={() => {
            setFocus(true)

            setValid(false)
          }}
          onBlur={(event) => {
            setFocus(false)

            if (!event.target.value) {
              setFill(false)

              setValid(true)
            } else {
              setFill(true)
            }
          }}
          onChange={onChange}
        />

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
          <button
            type="button"
            disabled={disabled || counter >= 100}
            className={classNames(
              "relative",
              "rotate-180",
              "w-full",
              "h-1/2",
              "appearance-none",
              "overflow-hidden",
              { ["cursor-pointer"]: !disabled },
              { ["cursor-not-allowed pointer-events-none opacity-50"]: disabled || counter >= 100 },
            )}
            onClick={() => {
              setCounter(counter + 1)

              setFocus(true)
            }}
          >
            <Icon
              name="caret-down"
              size="sm"
              className={classNames(
                "absolute",
                "bottom-2.5",
                "left-1/2",
                "-translate-x-1/2",
              )}
            />
          </button>

          <button
            type="button"
            disabled={disabled || counter <= 1}
            className={classNames(
              "relative",
              "rotate-0",
              "w-full",
              "h-1/2",
              "appearance-none",
              "overflow-hidden",
              { ["cursor-pointer"]: !disabled },
              { ["cursor-not-allowed pointer-events-none opacity-25"]: disabled || counter <= 1 },
            )}
            onClick={() => {
              setCounter(counter - 1)

              setFocus(true)
            }}
          >
            <Icon
              name="caret-down"
              size="sm"
              className={classNames(
                "absolute",
                "bottom-2.5",
                "left-1/2",
                "-translate-x-1/2",
              )}
            />
          </button>
        </div>
      </div>
    )
  }
)

export default Counter
