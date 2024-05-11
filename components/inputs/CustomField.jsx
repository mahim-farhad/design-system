"use client"

import { forwardRef, useState } from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import SVG from "@components/elements/Icon"

function Icon({
  size,
  sizeVariants,
  isInvalid
}) {
  if (!isInvalid) return null

  return (
    <span
      className={classNames(
        "absolute",
        "top-0",
        "right-0",
        "flex",
        "items-center",
        "justify-center",
        { [sizeVariants.icon[size]]: size },
        { "text-primary": !isInvalid },
        { "text-error": isInvalid },
      )}
    >
      {isInvalid && (
        <SVG
          name="exclamation"
          size={size}
        />
      )}
    </span>
  )
}

const Customfield = forwardRef(
  function Customfield({
    type = "text",
    name,
    label,
    placeholder,
    value,
    size = "base",
    disabled = false,
    onChange,
  }, ref) {
    const [isFocused, setFocus] = useState(false)
    const [isFilled, setFill] = useState(false)
    const [isValid, setValid] = useState(true)
    const [isInvalid, setInvalid] = useState(false)

    const sizeVariants = {
      label: {
        sm: classNames(
          "left-[0.5rem]",
          {
            "z-0 -translate-y-1/2 text-base":
              !isFocused ||
              !isFilled ||
              !value
          },
          {
            "z-10 -translate-y-[27px] text-sm":
              isFocused ||
              isFilled ||
              value
          },
        ),
        base: classNames(
          "left-[0.625rem]",
          {
            "z-0 -translate-y-1/2 text-base":
              !isFocused ||
              !isFilled ||
              !value
          },
          {
            "z-10 -translate-y-[2.125rem] text-sm":
              isFocused ||
              isFilled ||
              value
          },
        ),
        lg: classNames(
          "left-[0.75rem]",
          {
            "z-0 -translate-y-1/2 text-lg":
              !isFocused ||
              !isFilled ||
              !value
          },
          {
            "z-10 -translate-y-[35px] text-base":
              isFocused ||
              isFilled ||
              value
          },
        ),
        xl: classNames(
          "left-[0.75rem]",
          {
            "z-0 -translate-y-1/2 text-lg":
              !isFocused ||
              !isFilled ||
              !value
          },
          {
            "z-10 -translate-y-[39px] text-base":
              isFocused ||
              isFilled ||
              value
          },
        ),
      },
      input: {
        sm: classNames(
          "h-10",
          "py-1.5",
          "pl-3",
          { "pr-3": !isInvalid },
          { "pr-10": isInvalid },
          "text-sm",
        ),
        base: classNames(
          "h-12",
          "py-2",
          "pl-3.5",
          { "pr-3.5": !isInvalid },
          { "pr-12": isInvalid },
          "text-base",
        ),
        lg: classNames(
          "h-14",
          "py-3",
          "pl-4",
          { "pr-4": !isInvalid },
          { "pr-14": isInvalid },
          "text-lg",
        ),
        xl: classNames(
          "h-16",
          "py-3",
          "pl-4",
          { "pr-4": !isInvalid },
          { "pr-16": isInvalid },
          "text-lg",
        ),
      },
      icon: {
        sm: classNames(
          "w-10",
          "h-10",
          "p-3",
        ),
        base: classNames(
          "w-12",
          "h-12",
          "p-3.5",
        ),
        lg: classNames(
          "w-14",
          "h-14",
          "p-4",
        ),
        xl: classNames(
          "w-16",
          "h-16",
          "p-5",
        ),
      },
    }

    const labelClasses = twMerge(
      classNames(
        "absolute",
        "top-1/2",
        { [sizeVariants.label[size]]: size },
        "py-0.5",
        "px-1.5",
        "font-poppins",
        "leading-[17px]",
        "font-medium",
        "text-gray-400",
        { ["text-gray-300"]: disabled },
        { ["text-primary"]: isFocused },
        { ["text-error"]: isInvalid },
        "bg-surface-light",
        "rounded-sm",
        "transition-all",
        "duration-300",
        "ease-in-out",
        // "after:content-['']",
        // "after:-z-[1px]",
        // "after:absolute",
        // "after:top-1/2",
        // "after:left-1/2",
        // "after:-translate-y-1/2",
        // "after:-translate-x-1/2",
        // "after:w-full",
        // "after:border-t-2",
        // "after:border-t-gray-200",
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
        "border-gray-300",
        { ["border-primary"]: isFocused },
        { ["border-error"]: isInvalid },
        "rounded-lg",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    )

    return (
      <div className="relative">
        <span
          after-dynamic-value={label}
          className={twMerge(
            classNames(
              "relative",
              "h-full",
              "flex",
              "items-center",
              "after:content-[attr(after-dynamic-value)]",
              "after:z-5",
              "after:absolute",
              "after:-top-0.5",
              "after:left-0",
              "after:scale-0",
              { "after:scale-1": isFocused || isFilled },
              "after:origin-center",
              "after:w-full",
              "after:border-t-2",
              "after:border-t-white",
              "after:transition-all",
              "after:duration-300",
              "after:ease-in-out"
            )
          )}
        >
          {label && (
            <label
              id={name}
              className={labelClasses}
            >
              {label}
            </label>
          )}
        </span>

        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={inputClasses}
          onFocus={(event) => {
            setFocus(true)

            if (event.target.value) setFill(true)

            setInvalid(false)
          }}
          onBlur={(event) => {
            setFocus(false)

            if (!event.target.value) {
              setFill(false)

              setInvalid(true)
            } else {
              setFill(true)
            }
          }}
          onChange={onChange}
        />

        <Icon
          size={size}
          sizeVariants={sizeVariants}
          isValid={isValid}
          isInvalid={isInvalid}
        />
      </div>
    )
  }
)

export default Customfield
