import { forwardRef } from "react";

import PropTypes from "prop-types";

import { iconTypes } from "@styles/types";
import { buttonTypes } from "@styles/types";

import getIconClasses from "@styles/components/iconClasses";
import getButtonClasses from "@styles/components/buttonClasses";

import getSVGIcons from "@utils/icons";

const Button = forwardRef(
  function Button({
    type = "button",
    icon,
    extended = false,
    size = "base",
    variant = "filled",
    gradient,
    color = "primary",
    rounded = false,
    className,
    style,
    onClick,
    disabled = false,
    children,
    ...rest
  }, buttonRef) {
    const btnClasses = (
      getButtonClasses(
        icon,
        extended,
        size,
        variant,
        color,
        gradient,
        rounded,
        disabled,
        className
      )
    );

    const iconClasses = getIconClasses(size, className);

    const SVGIcons = getSVGIcons(iconClasses, style);
    const btnIcon = SVGIcons?.[icon];

    const hasValidIcon = (
      !(!iconTypes?.icons[icon]) &&
      !(!SVGIcons?.[icon])
    );
    const hasValidSize = !(!buttonTypes?.sizes?.[size]);
    const hasValidVariant = (
      !(!buttonTypes?.variants?.[variant]) &&
      !(!buttonTypes?.colors?.[color])
    );

    const isValid = icon ? (
      hasValidIcon &&
      hasValidSize && hasValidVariant
    ) : (
      hasValidSize && hasValidVariant
    );

    if (!children || !isValid) return null;

    return (
      <button
        ref={buttonRef}
        type={type}
        className={btnClasses}
        style={style}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {
          icon ? (
            !extended ? btnIcon : (
              <>
                {btnIcon}
                {children}
              </>
            )
          ) : children
        }
      </button>
    );
  }
);

Button.propTypes = {
  type: PropTypes.oneOf(
    Object.keys(buttonTypes.types)
  ),
  icon: PropTypes.oneOf(
    Object.keys(iconTypes.icons)
  ),
  extended: PropTypes.bool,
  size: PropTypes.oneOf(
    Object.keys(buttonTypes.sizes)
  ),
  variant: PropTypes.oneOf(
    Object.keys(buttonTypes.variants)
  ),
  gradient: PropTypes.oneOf(
    Object.keys(buttonTypes.gradients)
  ),
  color: PropTypes.oneOf(
    Object.keys(buttonTypes.colors)
  ),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Button;
