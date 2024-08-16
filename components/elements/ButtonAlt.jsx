import { forwardRef } from "react";

import PropTypes from "prop-types";

import { icons } from "lucide-react";

import { iconTypes, buttonTypes } from "@utils/types";

import getIconClasses from "@styles/components/iconClasses";
import getButtonClasses from "@styles/components/buttonClasses";

const ButtonAlt = forwardRef(
  function ButtonAlt({
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
    href = "",
    children,
    ...props
  }, buttonRef) {
    const Component = href ? "a" : "button";

    const iconClasses = getIconClasses(size, icon?.className);

    const buttonClasses = getButtonClasses(
      icon, extended, size, variant,
      color, rounded, disabled,
      className
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
      <Component
        ref={buttonRef}
        href={href || undefined}
        type={type}
        className={buttonClasses}
        style={style}
        onClick={!href ? onClick : undefined}
        disabled={disabled}
        {...props}
      >
        {icon ? !extended
          ? <SVGIcon className={iconClasses} />
          : <><SVGIcon className={iconClasses} /> {children}</>
          : children
        }
      </Component>
    );
  }
);

ButtonAlt.displayName = "Button";

ButtonAlt.propTypes = {
  type: PropTypes.oneOf(Object.keys(buttonTypes?.types)),
  icon: PropTypes.shape({
    name: PropTypes.string,
    className: PropTypes.string
  }),
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

export default ButtonAlt;
