"use client";

import { forwardRef, useState } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getInputClasses from "@styles/components/inputClasses";

const Input = forwardRef(
  function Input({
    type = "text",
    name,
    placeholder,
    label,
    value,
    size = "base",
    validation,
    rounded = false,
    className,
    style,
    onChange,
    disabled = false,
    ...rest
  }, inputRef) {
    const [isFocused, setFocus] = useState(false);
    const [isFilled, setFill] = useState(false);
    const [isInvalid, setInvalid] = useState(false);

    function handleFocus(event) {
      setFocus(true);

      if (event.target.value) setFill(true);

      setInvalid(false);
    }

    function handleBlur(event) {
      setFocus(false);

      if (!event.target.value) {
        setFill(false);

        setInvalid(true);
      } else {
        setFill(true);
      }
    }

    const textfiledClasses = getInputClasses(
      value, size, rounded, disabled,
      isFocused, isFilled, isInvalid,
      className
    );

    const hasValidType = inputTypes?.types?.[type];
    const hasValidSize = inputTypes?.sizes?.[size];

    const isValid = hasValidType && hasValidSize;

    if (!isValid) return null;

    return (
      <div
        className={textfiledClasses?.textfieldWrapper}
        style={style}
        {...rest}
      >
        <label
          htmlFor={name}
          before={label}
          className={textfiledClasses?.label}
        />

        <input
          ref={inputRef}
          type={type}
          role="textfield"
          aria-label="textfield"
          aria-labelledby={name}
          className={textfiledClasses?.input}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)),
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

export default Input;
