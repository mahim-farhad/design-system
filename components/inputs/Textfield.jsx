import { forwardRef, useState, useCallback } from "react";

import PropTypes from "prop-types";

import { motion } from "framer-motion";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/components/textfieldClasses";

const Textfield = forwardRef(function Textfield({
  type = "text",
  name,
  label,
  value,
  placeholder,
  size = "base",
  rounded = false,
  className = "",
  style = {},
  onFocus = () => { },
  onBlur = () => { },
  onChange = () => { },
  success,
  error,
  required = false,
  disabled = false,
  ...props
}, inputRef) {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(value);

  const handleFocus = useCallback((event) => {
    setFocused(true);

    onFocus && onFocus(event);
  }, [onFocus]);

  const handleBlur = useCallback((event) => {
    setFocused(false);

    setFilled(event.target.value);

    onBlur && onBlur(event);
  }, [onBlur]);

  const handleChange = useCallback((event) => {
    onChange && onChange(event);
  }, [onChange]);

  const textfieldClasses = getTextfieldClasses(
    placeholder, size, rounded, isFocused,
    isFilled, success, error,
    disabled
  );

  const hasValidType = inputTypes?.types?.[type];
  const hasValidSize = inputTypes?.sizes?.[size];

  const isValid = hasValidType && hasValidSize;

  if (!isValid) return null;

  return (
    <div
      className={textfieldClasses?.textfieldWrapper}
      style={style}
    >
      {label && (
        <span className={textfieldClasses?.labelWrapper}>
          <label
            htmlFor={name}
            className={textfieldClasses?.label}
          >
            {label}
          </label>
        </span>
      )}

      <input
        ref={inputRef}
        type={type}
        role="textfield"
        aria-label="textfield"
        aria-labelledby={name}
        className={textfieldClasses?.input}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        {...props}
      />
    </div>
  );
});

Textfield.displayName = "Textfield";

Textfield.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  success: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Textfield;
