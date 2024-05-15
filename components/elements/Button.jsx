import { forwardRef } from "react"

import PropTypes from "prop-types"

import classNames from "classnames"

import getButtonClasses from "@styles/components/button"

import Icon from "@components/elements/Icon"

const validTypes = {
  types: [
    "button",
    "submit"
  ],
  sizes: [
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
  ],
  variants: [
    "filled",
    "gradient",
    "toned",
    "outlined",
    "text"
  ],
  colors: [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
  ]
}

const Button = forwardRef(
  function Button(props, ref) {
    const {
      type = "button",
      icon,
      extended = false,
      size = "base",
      variant = "filled",
      color = "primary",
      rounded = false,
      className = "",
      style = {},
      onClick,
      disabled = false,
      children,
      ...rest
    } = props

    const btnClasses = (
      getButtonClasses({
        icon,
        extended,
        size,
        variant,
        color,
        rounded,
        disabled,
        className
      })
    )

    const btnIcon = (
      <Icon
        name={icon}
        size={size}
        className={
          icon && !extended ? (
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
    )

    const isInvalidType = (
      !validTypes.sizes.includes(size) ||
      !validTypes.variants.includes(variant) ||
      !validTypes.colors.includes(color)
    )

    // if (
    //   isInvalidType ||
    //   (icon && !btnIcon)
    // ) return null

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
        {icon && btnIcon}

        {(!icon || extended) && children}
      </button>
    )
  }
)

Button.propTypes = {
  type: PropTypes.oneOf(validTypes.types),
  icon: PropTypes.string,
  extended: PropTypes.bool,
  size: PropTypes.oneOf(validTypes.sizes),
  variant: PropTypes.oneOf(validTypes.variants),
  color: PropTypes.oneOf(validTypes.colors),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.node
}

export default Button
