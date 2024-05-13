"use client"

import { useState } from "react"

import { getSelectClasses } from "@styles/components/select"

import Icon from "@components/elements/Icon"

function Select({
  name,
  label,
  placeholder,
  value,
  options,
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

  const selectClasses = getSelectClasses({
    value,
    size,
    isFocused,
    isFilled,
    isInvalid,
    disabled
  })

  if (!options) return null

  return (
    <div
      className={selectClasses.selectWrapper}
      style={style}
      {...rest}
    >
      {label && (
        <span className={selectClasses.labelWrapper}>
          <label
            htmlFor={name}
            className={selectClasses.label}
          >
            {label}
          </label>
        </span>
      )}

      <select
        name={name}
        placeholder={placeholder}
        role="select"
        aria-label="select"
        aria-labelledby="select"
        value={value}
        disabled={disabled}
        className={selectClasses.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
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

      <span className={selectClasses.carotWrapper}>
        <Icon
          name="chevron-down"
          size={size}
        />
      </span>

      {isInvalid && (
        <span className={selectClasses.iconWrapper}>
          <Icon
            name="exclamation"
            size={size}
          />
        </span>
      )}
    </div>
  )
}

export default Select
