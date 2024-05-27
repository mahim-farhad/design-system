"use client";

import { forwardRef, useState } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getSelectClasses from "@styles/components/selectClasses"

import Icon from "@components/elements/Icon"

const Select = forwardRef(
  function Select({
    name,
    label,
    placeholder,
    value,
    icon,
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
    const [isFocused, setFocus] = useState(false);
    const [isFilled, setFill] = useState(false);
    const [isInvalid, setInvalid] = useState(false);

    function handleFocus(event) {
      setFocus(true);

      if (event.target.value) setFill(true);

      setInvalid(false);
    };

    function handleBlur(event) {
      setFocus(false);

      if (!event.target.value) {
        setFill(false);

        setInvalid(true);
      } else {
        setFill(true);
      }
    };

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
    );

    const hasValidSize = !(!inputTypes.sizes?.[size]);

    const isValid = hasValidSize;

    if (!options || !isValid) return null;

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
          role="select"
          aria-label="select"
          aria-labelledby="select"
          className={selectClasses?.select}
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
              className="bg-white"
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className={selectClasses?.caret}>
          <Icon
            name="caret-down"
            size={size}
          />
        </span>

        {isInvalid && (
          <span className={selectClasses?.iconWrapper}>
            <Icon
              name="exclamation"
              size={size}
            />
          </span>
        )}
      </div>
    )
  }
);

Select.propTypes = {
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

export default Select;
