"use client"

import {
  forwardRef,
  useState,
  useEffect,
  useRef
} from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import Icon from "@components/elements/Icon"
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
    value,
    options,
    inputValues,
    setInputValues,
    size = "base",
    className = "",
    style = {},
    onChange,
    disabled = false,
    ...rest
  }, ref) {
    const [isFocused, setFocus] = useState(false)
    const [isFilled, setFill] = useState(false)
    const [isInvalid, setInvalid] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [isSelected, setSelected] = useState("")

    const dropdownRef = useRef(null)

    useOutsideClick(dropdownRef, isOpen, setOpen)

    const isLabelFloating = isFocused || isFilled || isInvalid || value

    function handleFocus() {
      setFocus(true)

      if (isSelected) setFill(true)

      setInvalid(false)
    }

    function handleBlur() {
      setFocus(false)

      if (!isSelected) {
        setFill(false)

        setInvalid(true)
      } else {
        setFill(true)
      }
    }

    const getSizeVariants = () => ({
      inputWrapper: {
        sm: "h-10",
        base: "h-12",
        lg: "h-14",
        xl: "h-16"
      },
      labelWrapper: {
        sm: "mx-2",
        base: "mx-2.5",
        lg: "mx-2.5",
        xl: "mx-2.5"
      },
      label: {
        sm: classNames(
          "text-base",
          { "-translate-y-[19px] text-sm": isLabelFloating }
        ),
        base: classNames(
          "text-base",
          { "-translate-y-[23px] text-sm": isLabelFloating }
        ),
        lg: classNames(
          "text-lg",
          { "-translate-y-[27px] text-base": isLabelFloating }
        ),
        xl: classNames(
          "text-lg",
          { "-translate-y-[31px] text-base": isLabelFloating }
        )
      },
      input: {
        sm: classNames(
          "px-3.5",
          { "pr-[38px]": isInvalid },
          "text-sm"
        ),
        base: classNames(
          "px-4",
          { "pr-[46px]": isInvalid },
          "text-base"
        ),
        lg: classNames(
          "px-4",
          { "pr-[54px]": isInvalid },
          "text-lg"
        ),
        xl: classNames(
          "px-4",
          { "pr-[62px]": isInvalid },
          "text-xl"
        )
      },
      iconWrapper: {
        sm: classNames(
          "w-10",
          "h-10",
          "p-3"
        ),
        base: classNames(
          "w-12",
          "h-12",
          "p-3.5"
        ),
        lg: classNames(
          "w-14",
          "h-14",
          "p-4"
        ),
        xl: classNames(
          "w-16",
          "h-16",
          "p-5"
        )
      }
    })

    const sizeVariants = getSizeVariants()

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
        "text-start",
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
        ref={dropdownRef}
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

        <button
          type="button"
          role="textfield"
          disabled={disabled}
          className={inputClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={() => setOpen(!isOpen)}
        >
          {isSelected ? isSelected.label : placeholder}
        </button>

        <span className={iconWrapperClasses}>
          <Icon
            name="caret-down"
            size={size}
          />
        </span>

        {isOpen && (
          <List
            className={classNames(
              "z-20",
              "absolute",
              "top-full",
              "right-0",
              "left-0",
              "gap-y-2",
              "py-2",
              "px-2",
              "mt-2",
              "-mx-0.5",
              "overflow-y-auto",
              "text-gray-800",
              "bg-white",
              "border-2",
              "rounded-lg",
              "shadow-md",
            )}
          >
            {options?.map((option) => (
              (option.label !== "" && option.value !== "") && (
                <ListItem
                  key={option.id}
                  onClick={() => {
                    setSelected({ country: option.value })

                    setInputValues({
                      ...inputValues,
                      country: isSelected.country
                    })

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
                    {
                      "text-gray-500":
                        isSelected.id !== option.id
                    },
                    {
                      "text-primary bg-primary-100":
                        isSelected.id === option.id
                    },
                    "hover:bg-gray-100",
                    "rounded-md",
                    "transition-all",
                    "duration-300",
                    "ease-in-out"
                  )}
                >
                  {option.label}
                </ListItem>
              )
            ))}
          </List>
        )}

        {console.log(isSelected)}

        <select
          ref={ref}
          name={name}
          role="select"
          aria-label="select"
          aria-labelledby="select"
          placeholder={placeholder}
          value={isSelected.country}
          // className={inputClasses}
          className="absolute -top-40 right-0"
          onChange={(event) => {
            const { name, value } = event.target

            console.log(name, value)

            setInputValues({
              ...inputValues,
              country: isSelected.country
            })
          }}
          disabled={disabled}
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
