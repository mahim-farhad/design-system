import { forwardRef } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/components/textfiledAltClasses";

import Icon from "@components/elements/LucideIcon";
import Typography from "@components/elements/Typography";

import Box from "@components/layouts/Box";

const Select = forwardRef(function Select({
  type = "text",
  label,
  name,
  id,
  options,
  placeholder,
  value,
  icon,
  size = "base",
  rounded = false,
  success,
  error,
  className = "",
  style = {},
  ...props
}, selectRef) {
  const selectClasses = getTextfieldClasses(
    size, rounded, !!success,
    !!error, className
  );

  const hasValidSize = inputTypes?.sizes?.[size];

  const isValid = hasValidSize;

  if (!isValid) return null;

  return (
    <Box className={selectClasses?.textfieldWrapper}>
      {label && (
        <label
          htmlFor={id}
          className={selectClasses?.label}
        >
          {label}
        </label>
      )}

      <Box className={selectClasses?.inputWrapper}>
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

        {(
          <span className={selectClasses?.iconWrapper}>
            {/* <Icon
              name={icon}
              className={error && "animate-bouncy"}
            /> */}

            <Icon name="ChevronDown" />
          </span>
        )}
      </Box>

      {error && (
        <Box className={selectClasses?.helperTextWrapper}>
          <Typography className={selectClasses?.helperText}>
            {error}
          </Typography>
        </Box>
      )}
    </Box>
  );
});

Select.displayName = "Select";

Select.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  icon: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  success: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Select;
