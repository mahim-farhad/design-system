import { forwardRef } from "react"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import Icon from "@components/elements/Icon"

const Button = forwardRef(
  function Button({
    key,
    type = "button",
    icon,
    extended = false,
    size = "base",
    variant = "filled",
    color = "primary",
    pill = false,
    disabled = false,
    className = "",
    style = {},
    onClick,
    children,
    ...props
  }, ref) {
    const sizeVariants = {
      xs: classNames(
        "h-8",
        "py-1",
        "px-6",
        "text-sm",
        "leading-[24px]",
      ),
      sm: classNames(
        "h-10",
        "py-2",
        "px-6",
        "text-sm",
        "leading-[24px]",
      ),
      base: classNames(
        "h-12",
        "py-3",
        "px-8",
        "text-base",
        "leading-[17px]",
      ),
      lg: classNames(
        "h-14",
        "py-4",
        "px-8",
        "text-lg",
        "leading-[[1.325]",
      ),
      xl: classNames(
        "h-16",
        "py-5",
        "px-10",
        "text-xl",
        "leading-[[1.5]",
      ),
      icon: {
        xs: classNames("w-8", "h-8"),
        sm: classNames("w-10", "h-10"),
        base: classNames("w-12", "h-12"),
        lg: classNames("w-14", "h-14"),
        xl: classNames("w-16", "h-16"),
      }
    }

    const colorVariants = {
      filled: {
        primary: classNames(
          "text-white",
          "bg-primary",
          "border-transparent",
          "shadow",
          "shadow-primary",
          "hover:bg-primary-500",
          "active:shadow-lg",
          "active:shadow-primary-300",
        ),
        secondary: classNames(
          "text-white",
          "bg-secondary",
          "border-transparent",
          "shadow",
          "shadow-secondary",
          "hover:bg-secondary-900",
          "active:shadow-lg",
          "active:shadow-secondary-300",
        ),
        info: classNames(
          "text-white",
          "bg-info",
          "border-transparent",
          "shadow",
          "shadow-info",
          "hover:bg-info-500",
          "active:shadow-lg",
          "active:shadow-info-300",
        ),
        success: classNames(
          "text-white",
          "bg-success",
          "border-transparent",
          "shadow",
          "shadow-success",
          "hover:bg-success-500",
          "active:shadow-lg",
          "active:shadow-success-300",
        ),
        warning: classNames(
          "text-white",
          "bg-warning",
          "border-transparent",
          "shadow",
          "shadow-warning",
          "hover:bg-warning-500",
          "active:shadow-lg",
          "active:shadow-warning-300",
        ),
        error: classNames(
          "text-white",
          "bg-error",
          "border-transparent",
          "shadow",
          "shadow-error",
          "hover:bg-error-500",
          "active:shadow-lg",
          "active:shadow-error-300",
        ),
      },
      gradient: {
        primary: classNames(
          "text-white",
          "bg-gradient-to-b",
          "from-primary-500",
          "to-primary",
          "border-transparent",
          "shadow",
          "shadow-primary",
          "hover:bg-primary-500",
          "active:bg-primary-600",
          "active:shadow-lg",
          "active:shadow-primary-300",
        ),
        secondary: classNames(
          "text-white",
          "bg-gradient-to-b",
          "from-secondary-500",
          "to-secondary",
          "border-transparent",
          "shadow",
          "shadow-secondary",
          "hover:bg-secondary-500",
          "active:bg-secondary-600",
        ),
        info: classNames(
          "text-white",
          "bg-gradient-to-b",
          "from-info-500",
          "to-info",
          "border-transparent",
          "shadow",
          "shadow-info",
          "hover:bg-info-500",
          "active:bg-info-600",
        ),
        success: classNames(
          "text-white",
          "bg-gradient-to-b",
          "from-success-500",
          "to-success",
          "border-transparent",
          "shadow",
          "shadow-success",
          "hover:bg-success-500",
          "active:bg-success-600",
        ),
        warning: classNames(
          "text-white",
          "bg-gradient-to-b",
          "from-warning-500",
          "to-warning",
          "border-transparent",
          "shadow",
          "shadow-warning",
          "hover:bg-warning-500",
          "active:bg-warning-600",
        ),
        error: classNames(
          "text-white",
          "bg-gradient-to-b",
          "from-error-500",
          "to-error",
          "border-transparent",
          "shadow",
          "shadow-error",
          "hover:bg-error-500",
          "active:bg-error-600",
        ),
      },
      toned: {
        primary: classNames(
          "text-primary",
          "bg-primary-100",
          "border-transparent",
          "hover:text-white",
          "hover:bg-primary-500",
          "active:bg-primary-600",
        ),
        secondary: classNames(
          "text-secondary",
          "bg-secondary-100",
          "border-transparent",
          "hover:text-white",
          "hover:bg-secondary-500",
          "active:bg-secondary-600",
        ),
        info: classNames(
          "text-info",
          "bg-info-100",
          "border-transparent",
          "hover:text-white",
          "hover:bg-info-500",
          "active:bg-info-600",
        ),
        success: classNames(
          "text-success",
          "bg-success-100",
          "border-transparent",
          "hover:text-white",
          "hover:bg-success-500",
          "active:bg-success-600",
        ),
        warning: classNames(
          "text-warning",
          "bg-warning-100",
          "border-transparent",
          "hover:text-white",
          "hover:bg-warning-500",
          "active:bg-warning-600",
        ),
        error: classNames(
          "text-error",
          "bg-error-100",
          "border-transparent",
          "hover:text-white",
          "hover:bg-error-500",
          "active:bg-error-600",
        ),
      },
      outlined: {
        primary: classNames(
          "text-primary",
          "bg-transparent",
          "border-primary",
          "shadow-none",
          "hover:bg-primary-100",
        ),
        secondary: classNames(
          "text-secondary",
          "bg-transparent",
          "border-secondary",
          "shadow-none",
          "hover:bg-secondary-100",
        ),
        info: classNames(
          "text-info",
          "bg-transparent",
          "border-info",
          "shadow-none",
          "hover:bg-info-100",
        ),
        success: classNames(
          "text-success",
          "bg-transparent",
          "border-success",
          "shadow-none",
          "hover:bg-success-100",
        ),
        warning: classNames(
          "text-warning",
          "bg-transparent",
          "border-warning",
          "shadow-none",
          "hover:bg-warning-100",
        ),
        error: classNames(
          "text-error",
          "bg-transparent",
          "border-error",
          "shadow-none",
          "hover:bg-error-100",
        ),
      },
      text: {
        primary: classNames(
          "text-primary",
          "bg-transparent",
          "border-transparent",
          "hover:text-primary-500",
        ),
        secondary: classNames(
          "text-secondary",
          "bg-transparent",
          "border-transparent",
          "hover:text-secondary-500",
        ),
        info: classNames(
          "text-info",
          "bg-transparent",
          "border-transparent",
          "hover:text-info-500",
        ),
        success: classNames(
          "text-success",
          "bg-transparent",
          "border-transparent",
          "hover:text-success-500",
        ),
        warning: classNames(
          "text-warning",
          "bg-transparent",
          "border-transparent",
          "hover:text-warning-500",
        ),
        error: classNames(
          "text-error",
          "bg-transparent",
          "border-transparent",
          "hover:text-error-500",
        ),
      },
    }

    const btnClasses = twMerge(
      classNames(
        "relative",
        { ["inline-block"]: !extended },
        { ["inline-flex gap-3 items-center justify-center"]: extended },
        { [sizeVariants.icon[size]]: icon && !extended && size },
        { [sizeVariants[size]]: !icon || extended && size },
        "font-poppins",
        // "font-medium",
        "font-semibold",
        "uppercase",
        "text-center",
        "whitespace-nowrap",
        "appearance-none",
        { ["cursor-pointer"]: !disabled },
        { ["cursor-not-allowed pointer-events-none opacity-50"]: disabled },
        "select-none",
        "overflow-hidden",
        { [colorVariants[variant][color]]: variant && color },
        "outline-0",
        "border",
        { ["rounded-lg"]: !pill },
        { ["rounded-full"]: pill },
        "transition-all",
        "duration-300",
        "ease-in-out",
      ),
      className
    )

    return (
      <button
        key={key}
        ref={ref}
        type={type}
        disabled={disabled}
        className={btnClasses}
        style={style}
        onClick={onClick}
        {...props}
      >
        {
          icon
            ? (
              <Icon
                name={icon}
                size={size}
                className={classNames(
                  { ["absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"]: icon && !extended },
                )}
              />
            )
            : children
        }

        {extended && children}
      </button>
    )
  }
)

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  icon: PropTypes.string,
  extended: PropTypes.bool,
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
  ]),
  variant: PropTypes.oneOf([
    "filled",
    "gradient",
    "toned",
    "outlined",
    "text"
  ]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "succcess",
    "warning",
    "error"
  ]),
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Button
