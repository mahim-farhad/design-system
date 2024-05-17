import { forwardRef } from "react";

import PropTypes from "prop-types";

import getSVGIcons from "@utils/icons";

import { buttonVariantTypes } from "@styles/types";

import getButtonClasses from "@styles/components/button";
import getIconClasses from "@styles/components/icon";

const Button = forwardRef(
  function Button(props, ref) {
    const {
      type = "button",
      icon,
      extended = false,
      size = "base",
      variant = "filled",
      color = "primary",
      gradient,
      rounded = false,
      className = "",
      style = {},
      onClick,
      disabled = false,
      children,
      ...rest
    } = props;

    const btnClasses = (
      getButtonClasses({
        icon,
        extended,
        size,
        variant,
        color,
        gradient,
        rounded,
        disabled,
        className
      })
    );

    const iconClasses = (
      getIconClasses({
        size,
        className
      })
    );

    const SVGicons = (
      getSVGIcons({
        iconClasses,
        style
      })
    );

    const btnIcon = SVGicons?.[icon];

    const hasValidSize = !(!buttonVariantTypes?.sizes?.includes(size));
    const hasValidVariant = (
      !(!buttonVariantTypes?.variants?.includes(variant)) &&
      !(!buttonVariantTypes?.colors?.includes(color))
    );

    const isValid = hasValidSize && hasValidVariant;

    if (!isValid) return null;

    return (
      <button
        ref={ref}
        type={type}
        className={btnClasses}
        style={style}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {(icon && btnIcon) ? (
          !extended ? btnIcon : (
            <>
              {btnIcon}
              {children}
            </>
          )
        ) : children}
      </button>
    );
  }
);

Button.propTypes = {
  type: PropTypes.oneOf(buttonVariantTypes.types),
  icon: PropTypes.string,
  extended: PropTypes.bool,
  size: PropTypes.oneOf(buttonVariantTypes.sizes),
  variant: PropTypes.oneOf(buttonVariantTypes.variants),
  color: PropTypes.oneOf(buttonVariantTypes.colors),
  gradient: PropTypes.oneOf(buttonVariantTypes.gradients),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
