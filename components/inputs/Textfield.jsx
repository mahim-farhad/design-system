"use client";

import { forwardRef, useState } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/components/textfieldClasses";

const Textfield = forwardRef(
  function Textfield({
    type = "text",
    name,
    label,
    defaultValue,
    value,
    placeholder,
    size = "base",
    validation,
    rounded = false,
    className,
    style,
    onFocus = () => { },
    onBlur = () => { },
    onChange = () => { },
    required,
    disabled = false,
    ...rest
  }, inputRef) {
    const [isFocused, setFocus] = useState(false);
    const [isInvalid, setInvalid] = useState(false);

    function handleFocus(event) {
      setFocus(true);

      setInvalid(false);

      onFocus && onFocus(event);
    }

    function handleBlur(event) {
      setFocus(false);

      if (required) setInvalid(!event.target.value);

      onBlur && onBlur(event);
    }

    function handleChange(event) {
      onChange && onChange(event);
    }

    const textfiledClasses = getTextfieldClasses(
      value, defaultValue, size, rounded,
      isFocused, isInvalid, disabled,
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
      >
        <span className={textfiledClasses?.labelWrapper}>
          <label
            htmlFor={name}
            className={textfiledClasses?.label}
          >
            {label}
          </label>
        </span>

        <input
          ref={inputRef}
          type={type}
          role="textfield"
          aria-label="textfield"
          aria-labelledby={name}
          className={textfiledClasses?.input}
          name={name}
          id={name}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          {...rest}
        />
      </div>
    );
  }
);

Textfield.displayName = "Textfield";

Textfield.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Textfield;
