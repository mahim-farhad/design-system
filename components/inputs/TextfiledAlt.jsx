import { forwardRef } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/components/textfiledAltClasses";

const Textfield = forwardRef(function Textfield({
  type = "text",
  name,
  placeholder,
  value,
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

  return (
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
      {...props}
    />
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
  style: PropTypes.object
};

export default Textfield;
