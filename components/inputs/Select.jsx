"use client";

import { forwardRef, useState } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getSelectClasses from "@styles/components/selectClasses";

import Icon from "@components/elements/Icon";

const Select = forwardRef(
  function Select({
    label,
    name,
    placeholder,
    value,
    options,
    size = "base",
    validation,
    rounded = false,
    className,
    style,
    onChange,
    disabled = false,
    ...rest
  }, selectRef) {
    const [isFocused, setFocused] = useState(false);
    const [isFilled, setFilled] = useState(false);
    const [isInvalid, setInvalid] = useState(false);

    function handleFocus(event) {
      setFocused(true);

      if (event.target.value) setFilled(true);

      setInvalid(false);
    }

    function handleBlur(event) {
      setFocused(false);

      if (!event.target.value) {
        setFilled(false);

        setInvalid(true);
      } else {
        setFilled(true);
      }
    }

    const selectClasses = getSelectClasses(
      value, size, rounded, disabled,
      isFocused, isFilled, isInvalid,
      className
    );

    const hasValidSize = inputTypes?.sizes?.[size];

    const isValid = options && hasValidSize;

    if (!isValid) return null;

    return (
      <div
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

        <select
          ref={selectRef}
          role="combobox"
          aria-haspopup="menubox"
          aria-label="select"
          aria-labelledby={name}
          className={selectClasses?.button}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          disabled={disabled}
        >
          {options?.map((option) => (
            <option
              key={option.id}
              value={option.value}
              selected={option.value === value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className={selectClasses?.caret}>
          <Icon
            name="angles-up-down"
            size={"sm"}
          />
        </span>
      </div>
    )
  }
);

Select.displayName = "Select";

Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

export default Select;
