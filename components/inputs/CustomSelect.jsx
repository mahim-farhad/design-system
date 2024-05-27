"use client"

import { forwardRef, useState } from "react"

import PropTypes from "prop-types"

import classNames from "classnames"

import useOutsideClick from "@hooks/useOutsideClick"

import { inputTypes } from "@utils/types"

import getSelectClasses from "@styles/components/selectClasses"

import Icon from "@components/elements/Icon"

const CustomSelect = forwardRef(
  function CustomSelect({
    name,
    label,
    placeholder,
    value,
    options,
    size = "base",
    variant = "outlined",
    validation,
    rounded = false,
    className,
    style,
    onChange,
    disabled = false,
    ...rest
  }, selectRef) {
    const [isFocused, setFocus] = useState(false)
    const [isFilled, setFill] = useState(false)
    const [isInvalid, setInvalid] = useState(false)

    const {
      isOpen,
      setIsOpen,
      modalRef
    } = useOutsideClick()

    function handleFocus() {
      setFocus(true)

      if (value) setFill(true)

      setInvalid(false)
    }

    function handleBlur() {
      setFocus(false)

      if (!value) {
        setFill(false)

        setInvalid(true)
      } else {
        setFill(true)
      }
    }

    function handleOptionClick(val) {
      onChange({
        target: {
          name,
          value: val
        }
      })

      console.log(value, val)

      setIsOpen(false)
    }

    const selectClasses = (
      getSelectClasses(
        value,
        size,
        rounded,
        disabled,
        isFocused,
        isFilled,
        isInvalid,
        className
      )
    )

    const hasValidSize = !(!inputTypes.sizes?.[size])

    const isValid = hasValidSize

    if (!options || !isValid) return null

    return (
      <div
        ref={modalRef}
        className={selectClasses?.selectWrapper}
        style={style}
        {...rest}
      >
        <span className={selectClasses?.labelWrapper}>
          <label
            htmlFor={name}
            className={selectClasses?.label}
          >
            {label}
          </label>
        </span>

        <button
          type="button"
          role="select"
          className={selectClasses?.button}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        />

        <select
          ref={selectRef}
          role="select"
          aria-label="select"
          aria-labelledby={name}
          className={selectClasses?.select}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled
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

        <span className={selectClasses?.caret}>
          <Icon
            name="caret-down"
            size={size}
            className={
              classNames(
                { "-rotate-180": isOpen },
                "duration-[inherit]",
              )
            }
          />
        </span>

        {isOpen && (
          <ul
            className={
              classNames(
                "z-20",
                "absolute",
                "top-full",
                "right-0",
                "left-0",
                "flex",
                "flex-col",
                "gap-y-2",
                "p-4",
                "mt-2",
                "-mx-0.5",
                "overflow-x-hidden",
                "overflow-y-auto",
                "bg-surface-light",
                "border-2",
                "rounded-lg",
                "shadow-md"
              )
            }
          >
            {options?.map((option) => (
              (option) && (
                <li
                  key={option.id}
                  className={
                    classNames(
                      "relative",
                      "py-2",
                      "px-3",
                      "font-poppins",
                      "text-base",
                      "font-medium",
                      "capitalize",
                      "cursor-pointer",
                      option.value === value
                        ? "text-primary bg-primary-100"
                        : "text-gray-400",
                      "hover:bg-gray-100",
                      "rounded-md",
                      "transition-all",
                      "duration-300",
                      "ease-in-out"
                    )
                  }
                  onClick={() => handleOptionClick(option?.value)}
                >
                  {option.label}
                </li>
              )
            ))}
          </ul>
        )}
      </div>
    )
  }
)

CustomSelect.propTypes = {
  size: PropTypes.oneOf(
    Object.keys(inputTypes.sizes)
  ),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
}

export default CustomSelect
