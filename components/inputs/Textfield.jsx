"use client"

import { useState } from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import { getSizeVariants } from "@styles/variants/sizes"

import Icon from "@components/elements/Icon"

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
  ...rest
}) {
  const [isFocused, setFocus] = useState(false)
  const [isFilled, setFill] = useState(false)
  const [isInvalid, setInvalid] = useState(false)

  const isLabelFloating = isFocused || isFilled || isInvalid || value

  function handleFocus(event) {
    setFocus(true)

    if (event.target.value) setFill(true)

    setInvalid(false)
  }

  function handleBlur(event) {
    setFocus(false)

    if (!event.target.value) {
      setFill(false)

      setInvalid(true)
    } else {
      setFill(true)
    }
  }

  const sizeVariants = getSizeVariants({ isLabelFloating, isInvalid })

  const inputWrapperClasses = twMerge(
    classNames(
      "relative",
      "flex",
      "flex-nowrap",
      "w-full",
      { [sizeVariants.inputWrapper[size]]: size },
      { ["opacity-100"]: !disabled },
      { ["opacity-50"]: disabled },
      "border-2",
      { "border-gray-300": !isFocused && !isInvalid },
      { "border-primary": isFocused && !isInvalid },
      { "border-error": !isFocused && isInvalid },
      "rounded-md",
      "transition-all",
      "duration-300",
      "ease-in-out"
    ),
    className
  )

  const labelWrapperClasses = twMerge(
    classNames(
      "relative",
      "inline-flex",
      "items-center",
      { [sizeVariants.labelWrapper[size]]: size },
      "-my-0.5",
      "after:content-['']",
      "after:z-0",
      "after:absolute",
      "after:top-0",
      "after:left-0",
      "after:scale-x-0",
      { "after:scale-x-1 after:opacity-1": isLabelFloating },
      "after:origin-center",
      "after:w-full",
      "after:h-0.5",
      { "after:opacity-0": !isLabelFloating },
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
      { "text-gray-400": !isFocused && !isInvalid },
      { "text-primary": isFocused && !isInvalid },
      { "text-error": !isFocused && isInvalid },
      "bg-transparent",
      "rounded-sm",
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  )

  const inputClasses = twMerge(
    classNames(
      "z-10",
      "absolute",
      "top-0",
      "right-0",
      "bottom-0",
      "left-0",
      { [sizeVariants.input[size]]: size },
      "-my-0.5",
      "-mx-0.5",
      "font-poppins",
      "leading-[25px]",
      "font-medium",
      "whitespace-nowrap",
      "appearance-none",
      { ["cursor-pointer"]: !disabled },
      { ["cursor-not-allowed pointer-events-none"]: disabled },
      "text-gray-400",
      "bg-transparent",
      "outline-0",
      "border-2",
      "border-transparent",
      "rounded-md",
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  )

  const iconWrapperClasses = twMerge(
    classNames(
      "flex",
      "items-center",
      "justify-center",
      "-my-0.5",
      "-mr-0.5",
      "ml-auto",
      { [sizeVariants.iconWrapper[size]]: size },
      { "text-error": isInvalid },
      "rounded-md",
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  )

  return (
    <div
      className={inputWrapperClasses}
      style={style}
      {...rest}
    >
      {label && (
        <span className={labelWrapperClasses}>
          <label
            htmlFor={name}
            className={labelClasses}
          >
            {label}
          </label>
        </span>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        role="textfield"
        aria-label="textfield"
        aria-labelledby="textfield"
        value={value}
        disabled={disabled}
        className={inputClasses}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />

      {isInvalid && (
        <span className={iconWrapperClasses}>
          <Icon
            name="exclamation"
            size={size}
          />
        </span>
      )}
    </div>
  )
}

export default Textfield
