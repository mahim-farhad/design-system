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
    placeholder,
    value,
    icon,
    size = "base",
    variant = "outlined",
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
      setFocus(true)

      if (event.target.value) setFill(true)

      setInvalid(false)
    };

    function handleBlur(event) {
      setFocus(false)

      if (!event.target.value) {
        setFill(false)

        setInvalid(true)
      } else {
        setFill(true)
      }
    };

    const textfiledClasses = (
      getTextfieldClasses(
        value,
        size,
        rounded,
        disabled,
        isFocused,
        isFilled,
        isInvalid,
        className
      )
    );

    const hasValidType = !(!inputTypes.types?.[type]);
    const hasValidSize = !(!inputTypes.sizes?.[size]);

    const isValid = hasValidType && hasValidSize;

    if (!isValid) return null;

    return (
      <div
        className={textfiledClasses?.inputWrapper}
        style={style}
        {...rest}
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
          aria-labelledby="textfield"
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

Textfield.propTypes = {
  type: PropTypes.oneOf(
    Object.keys(inputTypes.types)
  ),
  // icon: PropTypes.oneOf(
  //   Object.keys(iconTypes.icons)
  // ),
  // size: PropTypes.oneOf(
  //   Object.keys(buttonTypes.sizes)
  // ),
  // variant: PropTypes.oneOf(
  //   Object.keys(buttonTypes.variants)
  // ),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

export default Textfield;
