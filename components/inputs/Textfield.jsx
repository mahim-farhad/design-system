"use client"

import { useState } from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Textfield({
  type = "text",
  name,
  label,
  placeholder,
  value,
  size = "base",
  disabled = false,
  className = "",
  style = {},
  onChange,
}) {
  const [isFocused, setFocus] = useState(false)
  const [isFilled, setFill] = useState(false)
  const [isInvalid, setInvalid] = useState(false)

  const getSizeVariants = () => ({
    label: {
      sm: classNames(
        "text-base", {
        "-translate-y-[19px] text-sm":
          isFocused || isFilled || value
      }),
      base: classNames(
        "text-base", {
        "-translate-y-[23px] text-sm":
          isFocused || isFilled || value
      }),
      lg: classNames(
        "text-lg", {
        "-translate-y-[27px] text-base":
          isFocused || isFilled || value
      }),
      xl: classNames(
        "text-lg", {
        "-translate-y-[31px] text-base":
          isFocused || isFilled || value
      }),
    },
    input: {
      sm: classNames("h-10", "px-3", "text-sm"),
      base: classNames("h-12", "px-3.5", "text-base"),
      lg: classNames("h-14", "px-4", "text-lg"),
      xl: classNames("h-16", "px-4", "text-xl"),
    },
  })

  const sizeVariants = getSizeVariants()

  // const sizeVariants = {
  //   label: {
  //     sm: classNames(
  //       "text-base", {
  //       "-translate-y-[19px] text-sm": isFocused || isFilled || value
  //     }),
  //     base: classNames(
  //       "text-base", {
  //       "-translate-y-[23px] text-sm": isFocused || isFilled || value
  //     }),
  //     lg: classNames(
  //       "text-lg", {
  //       "-translate-y-[27px] text-base": isFocused || isFilled || value
  //     }),
  //     xl: classNames(
  //       "text-lg", {
  //       "-translate-y-[31px] text-base": isFocused || isFilled || value
  //     }),
  //   },
  //   input: {
  //     sm: classNames("h-10", "px-3", "text-sm"),
  //     base: classNames("h-12", "px-3.5", "text-base"),
  //     lg: classNames("h-14", "px-4", "text-lg"),
  //     xl: classNames("h-16", "px-4", "text-xl"),
  //   },
  // }

  const inputWrapperClasses = twMerge(
    classNames(
      "relative",
      "flex",
      "items-center",
      "w-full",
      { [sizeVariants.input[size]]: size },
      "border-2",
      "border-gray-400",
      { "border-gray-300": disabled },
      { "border-primary": isFocused },
      { "border-error": isInvalid },
      "rounded-lg",
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  )

  const labelWrapperClasses = twMerge(
    classNames(
      "relative",
      "flex",
      "items-center",
      "-ml-1.5",
      "h-full",
      "after:content-['']",
      "after:z-5",
      "after:absolute",
      "after:-top-0.5",
      "after:left-0",
      "after:scale-0",
      { "after:scale-1": isFocused || isFilled },
      "after:origin-center",
      "after:w-full",
      "after:h-0.5",
      "after:bg-white",
      "after:transition-all",
      "after:duration-300",
      "after:ease-in-out"
    )
  )

  const labelClasses = twMerge(
    classNames(
      "z-10",
      "relative",
      "translate-y-0 ",
      { [sizeVariants.label[size]]: size },
      "py-0.5",
      "px-1.5",
      "font-poppins",
      "leading-[17px]",
      "font-medium",
      "text-gray-400",
      { "text-gray-300": disabled },
      { "text-primary": isFocused },
      { "text-error": isInvalid },
      "bg-transparent",
      // "bg-surface-light",
      "rounded-sm",
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  )

  const inputClasses = twMerge(
    classNames(
      "z-20",
      "absolute",
      "top-0",
      "right-0",
      "bottom-0",
      "left-0",
      "min-w-0",
      { [sizeVariants.input[size]]: size },
      "-my-0.5",
      "-mx-0.5",
      "font-poppins",
      "leading-[16px]",
      "font-medium",
      "whitespace-nowrap",
      "appearance-none",
      "text-gray-400",
      "bg-transparent",
      "outline-0",
      "border-2",
      "border-transparent",
      "rounded-lg",
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  )

  return (
    <div
      className={inputWrapperClasses}
      style={style}
    >
      <span className={labelWrapperClasses}>
        {label && (
          <label
            htmlFor={name}
            className={labelClasses}
          >
            {label}
          </label>
        )}
      </span>

      <input
        type={type}
        role="textbox"
        name={name}
        placeholder={placeholder}
        value={value}
        aria-label={name}
        aria-labelledby={name}
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
    </div>
  )
}

export default Textfield
