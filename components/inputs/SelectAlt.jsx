import { forwardRef } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getSelectClasses from "@styles/components/textfiledAltClasses";

import Icon from "@components/elements/Icon";

import Box from "@components/layouts/Box";

const Select = forwardRef(function Select({
  name,
  value,
  options,
  placeholder,
  icon,
  size = "base",
  rounded = false,
  className = "",
  style = {},
  success,
  error,
  ...props
}, selectRef) {
  const selectClasses = getSelectClasses(
    size, rounded, success,
    error, className
  );

  const hasValidSize = inputTypes?.sizes?.[size];

  const isValid = options && hasValidSize;

  if (!isValid) return null;

  return (
    <Box className={selectClasses?.textfieldWrapper}>
      <select
        ref={selectRef}
        role="combobox"
        aria-haspopup="menubox"
        aria-label="select"
        aria-labelledby={name}
        className={selectClasses?.input}
        style={style}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        {...props}
      >
        {options?.map((option) => (
          <option
            key={option?.id}
            value={option?.value}
            disabled={!option?.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <span className={selectClasses?.iconWrapper}>
        <Icon name="chevron-down" />
      </span>
    </Box>
  )
});

Select.displayName = "Select";

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Select;
