"use client"

import {
  forwardRef,
  useState,
  useEffect,
  useRef
} from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import Button from "@components/elements/Button"
import { List, ListItem } from "@components/elements/List"

function useOutsideClick(ref, modal, setModal) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [ref, modal, setModal])
}

const CustomSelect = forwardRef(
  function CustomSelect({
    name,
    label,
    placeholder,
    options,
    value,
    size = "base",
    disabled = false,
    onChange
  }, ref) {
    const [isSelected, setSelected] = useState(value)
    const [isOpen, setOpen] = useState(false)
    const [isFocused, setFocus] = useState(false)
    const [isFilled, setFill] = useState(false)
    const [isValid, setValid] = useState(false)

    const dropdownRef = useRef(null)

    useOutsideClick(dropdownRef, isOpen, setOpen)

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
      <div
        ref={dropdownRef}
        className="relative flex-1"
      >
        {label && (
          <label
            htmlFor={name}
            className={labelClasses}
          >
            {label}
          </label>
        )}

        <button
          type="button"
          disabled={disabled}
          className={inputClasses}
          onFocus={() => {
            setFocus(true)

            setValid(false)
          }}
          onBlur={() => {
            setFocus(false)

            if (!isSelected) {
              setFill(false)

              setValid(true)
            } else {
              setFill(true)
            }
          }}
          onClick={() => setOpen(true)}
        >
          {isSelected ? isSelected : placeholder}
        </button>

        {isOpen && (
          <List
            className={classNames(
              "z-10",
              "absolute",
              "left-0",
              "w-full",
              "gap-y-2",
              "py-2",
              "px-2",
              "mt-2",
              "overflow-y-auto",
              "text-gray-800",
              "bg-white",
              "border-2",
              "rounded-lg",
              "shadow-md",
            )}
          >
            {options?.map((option) => (
              <ListItem
                key={option.id}
                onClick={() => {
                  setSelected(option.id)

                  setOpen(false)
                }}
                className={classNames(
                  "relative",
                  "py-2",
                  "px-3",
                  "text-sm",
                  "font-medium",
                  "capitalize",
                  "cursor-pointer",
                  "select-none",
                  { ["text-gray-500"]: isSelected !== option.id },
                  { ["text-primary bg-primary-100"]: isSelected === option.id },
                  "hover:bg-gray-100",
                  "rounded-md",
                  "transition-all",
                  "duration-300",
                  "ease-in-out"
                )}
              >
                {option.label}
              </ListItem>
            ))}
          </List>
        )}

        <select
          ref={ref}
          name={name}
          placeholder={placeholder}
          value={isSelected}
          disabled={disabled}
          className="hidden"
          onChange={onChange}
        >
          {options?.map((option) => (
            <option
              key={option.id}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

export default CustomSelect
