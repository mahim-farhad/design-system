import { forwardRef } from "react";

import PropTypes from "prop-types";

import { icons } from "lucide-react";

import { buttonTypes } from "@utils/types";

import getIconClasses from "@styles/components/iconClasses";
import getButtonClasses from "@styles/components/buttonClasses";

const Button = forwardRef(function Button({
  type = "button",
  icon,
  extended = false,
  size = "base",
  variant = "filled",
  gradient,
  color = "primary",
  rounded = false,
  className = "",
  style = {},
  onClick,
  disabled = false,
  children,
  ...rest
}, buttonRef) {
  const iconClasses = getIconClasses(size, icon?.className);

  const buttonClasses = getButtonClasses(
    icon, extended, size, variant,
    color, rounded, className
  );

  const SVGIcon = icons?.[icon?.name];

  const hasValidSize = buttonTypes?.sizes?.[size];
  const hasValidVariant =
    buttonTypes?.variants?.[variant] &&
    buttonTypes?.colors?.[color];

  const isValid = icon
    ? SVGIcon && hasValidSize && hasValidVariant
    : hasValidSize && hasValidVariant;

  if (!isValid) return null;

  return (
    <button
      ref={buttonRef}
      type={type}
      className={buttonClasses}
      style={style}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon
        ? !extended
          ? <SVGIcon className={iconClasses} />
          : <><SVGIcon className={iconClasses} /> {children}</>
        : children
      }
    </button>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(buttonTypes?.types)),
  icon: PropTypes.objectOf(PropTypes.string),
  extended: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(buttonTypes?.sizes)),
  variant: PropTypes.oneOf(Object.keys(buttonTypes?.variants)),
  gradient: PropTypes.oneOf(Object.keys(buttonTypes?.gradients)),
  color: PropTypes.oneOf(Object.keys(buttonTypes?.colors)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.string
};

export default Button;
