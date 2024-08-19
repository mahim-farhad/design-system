import { forwardRef } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/components/textfiledAltClasses";

import Icon from "@components/elements/LucideIcon";

import Box from "@components/layouts/Box";

const Textfield = forwardRef(function Textfield({
  type = "text",
  name,
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
}, inputRef) {
  const textfieldClasses = getTextfieldClasses(
    size, rounded, success,
    error, className
  );

  const hasValidType = inputTypes?.types?.[type];
  const hasValidSize = inputTypes?.sizes?.[size];

  const isValid = hasValidType && hasValidSize;

  if (!isValid) return null;

  console.log("Textfield Rendering...")

  return (
    <Box className={textfieldClasses?.textfieldWrapper}>
      <input
        ref={inputRef}
        type={type}
        role="textfield"
        aria-label="textfield"
        aria-labelledby={name}
        className={textfieldClasses?.input}
        style={style}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        {...props}
      />

      {icon &&
        <span className={textfieldClasses?.iconWrapper}>
          <Icon name={icon} />
        </span>
      }
    </Box>
  );
});

Textfield.displayName = "Textfield";

Textfield.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  icon: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Textfield;
