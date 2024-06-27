import { forwardRef, useState, useCallback } from "react";

import PropTypes from "prop-types";

import { motion } from "framer-motion";

import { inputTypes } from "@utils/types";

import getSelectClasses from "@styles/components/selectClasses";

import Icon from "@components/elements/Icon";

const Select = forwardRef(
  function Select({
    name,
    label,
    value,
    options,
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
  }, selectRef) {
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

    const selectClasses = getSelectClasses(
      size, rounded, isFocused, success,
      error, disabled
    );

    const hasValidSize = inputTypes?.sizes?.[size];

    const isValid = options && hasValidSize;

    if (!isValid) return null;

    return (
      <div className="relative w-full">
        <div
          className={selectClasses?.selectWrapper}
          style={style}
        >
          {label && (
            <span className={selectClasses?.labelWrapper}>
              <label
                htmlFor={name}
                className={selectClasses?.label}
              >
                {label}
              </label>
            </span>
          )}

          <select
            ref={selectRef}
            role="combobox"
            aria-haspopup="menubox"
            aria-label="select"
            aria-labelledby={name}
            className={selectClasses?.input}
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
          >
            {options?.map((option) => (
              <option
                key={option.id}
                value={option.value}
                // selected={option.value === value}
                disabled={option.value === ""}
              >
                {option.label}
              </option>
            ))}
          </select>

          <span className={selectClasses?.caret}>
            <Icon
              name="sort"
              size={"sm"}
            />
          </span>
        </div>

        {!error && success && (
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className={selectClasses?.helperText}
          >
            {success}
          </motion.p>
        )}

        {error && !success && (
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className={selectClasses?.helperText}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
);

Select.displayName = "Select";

Select.propTypes = {
  name: PropTypes.string,
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

export default Select;
