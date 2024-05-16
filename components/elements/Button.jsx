import { forwardRef } from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import { buttonVariantTypes } from "@styles/types";

import getButtonClasses from "@styles/components/button";

import Icon from "@components/elements/Icon";

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

    const btnIcon = (
      <Icon
        name={"facebook"}
        size={size}
        className={
          (icon && !extended) ? (
            classNames(
              "absolute",
              "top-1/2",
              "left-1/2",
              "-translate-y-1/2",
              "-translate-x-1/2"
            )
          ) : null
        }
      />
    );

    console.log(Boolean(btnIcon))

    const hasValidSize = !buttonVariantTypes?.sizes?.includes(size);
    const hasValidVariant = (
      !buttonVariantTypes?.variants?.includes(variant) ||
      !buttonVariantTypes?.colors?.includes(color)
    );

    const hasValidType = hasValidSize || hasValidVariant;

    const isValid = !btnIcon || !hasValidType;

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
