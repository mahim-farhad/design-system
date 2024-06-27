import { forwardRef, useState, useCallback } from "react";

import PropTypes from "prop-types";

import { motion } from "framer-motion";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/components/textfieldClasses";

const Textfield = forwardRef(
  function Textfield({
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
    required,
    success,
    error,
    disabled = false,
    ...rest
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

    const textfiledClasses = getTextfieldClasses(
      placeholder, size, rounded, isFocused,
      isFilled, success, error, disabled
    );

    const hasValidType = inputTypes?.types?.[type];
    const hasValidSize = inputTypes?.sizes?.[size];

    const isValid = hasValidType && hasValidSize;

    if (!isValid) return null;

    return (
      <div className="relative w-full">
        <div
          className={textfiledClasses?.textfieldWrapper}
          style={style}
        >
          {label && (
            <span className={textfiledClasses?.labelWrapper}>
              <label
                htmlFor={name}
                className={textfiledClasses?.label}
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
            className={textfiledClasses?.input}
            name={name}
            id={name}
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

        {!error && success && (
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className={textfiledClasses?.helperText}
          >
            {success}
          </motion.p>
        )}

        {error && !success && (
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className={textfiledClasses?.helperText}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

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
  required: PropTypes.bool,
  success: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
};

export default Textfield;
