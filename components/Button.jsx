import { forwardRef } from "react"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import Icon from "@components/Icon"

const sizeVariants = {
  xs: {
    sizing: "h-8",
    spacing: "py-1 px-6",
    font: "text-sm leading-[16px] !font-semibold"
  },
  sm: {
    sizing: "h-10",
    spacing: "py-2 px-6",
    font: "text-sm leading-[24px]"
  },
  base: {
    sizing: "h-12",
    spacing: "py-3 px-8",
    font: "text-base leading-[17px]"
  },
  lg: {
    sizing: "h-14",
    spacing: "py-4 px-8",
    font: "text-lg leading-[1.325]"
  },
  xl: {
    sizing: "h-16",
    spacing: "py-5 px-10",
    font: "text-xl leading-[1.5]"
  },
  icon: {
    xs: "w-8 h-8",
    sm: "w-10 h-10",
    base: "w-12 h-12",
    lg: "w-14 h-14",
    xl: "w-16 h-16",
  }
}

const colorVariants = {
  filled: {
    black: "bg-black text-gray-100 border-transparent shadow shadow-black hover:bg-black active:bg-black active:shadow-lg",
    white: "bg-white text-gray-800 border-transparent shadow shadow-white hover:bg-white active:bg-white active:shadow-lg",
    primary: "bg-primary text-gray-100 border-transparent shadow shadow-primary hover:bg-primary-500 active:bg-primary-600 active:shadow-lg",
    secondary: "bg-secondary text-gray-100 border-transparent shadow shadow-secondary hover:bg-secondary-900 active:bg-secondary-950 active:shadow-lg",
    info: "bg-info text-gray-100 border-transparent shadow shadow-info hover:bg-info-500 active:bg-info-600 active:shadow-lg",
    success: "bg-success text-gray-100 border-transparent shadow shadow-success hover:bg-success-500 active:bg-success-600 active:shadow-lg",
    warning: "bg-warning text-gray-100 border-transparent shadow shadow-warning hover:bg-warning-500 active:bg-warning-600 active:shadow-lg",
    error: "bg-error text-gray-100 border-transparent shadow shadow-error hover:bg-error-700 active:bg-error-800 active:shadow-lg",
    google: "bg-google text-gray-100 border-transparent shadow shadow-google hover:shadow-none",
    facebook: "bg-facebook text-gray-100 border-transparent shadow shadow-facebook hover:shadow-none",
    twitter: "bg-twitter text-gray-100 border-transparent shadow shadow-twitter hover:shadow-none",
    instagram: "bg-instagram text-gray-100 border-transparent shadow shadow-instagram hover:shadow-none",
    pinterest: "bg-pinterest text-gray-100 border-transparent shadow shadow-pinterest hover:shadow-none",
    dribbble: "bg-dribbble text-gray-100 border-transparent shadow shadow-dribbble hover:shadow-none",
    behance: "bg-behance text-gray-100 border-transparent shadow shadow-behance hover:shadow-none",
    fiverr: "bg-fiverr text-gray-100 border-transparent shadow shadow-fiverr hover:shadow-none",
  },
  gradient: {
    primary: "bg-gradient-to-b from-primary-500 to-primary text-gray-100 border-transparent shadow shadow-primary hover:shadow-none",
    secondary: "bg-gradient-to-b from-secondary-500 to-secondary text-gray-100 border-transparent shadow shadow-secondary hover:shadow-none",
    info: "bg-gradient-to-b from-info-500 to-info text-gray-100 border-transparent shadow shadow-info hover:shadow-none",
    success: "bg-gradient-to-b from-success-500 to-success text-gray-100 border-transparent shadow shadow-success hover:shadow-none",
    warning: "bg-gradient-to-b from-warning-500 to-warning text-gray-100 border-transparent shadow shadow-warning hover:shadow-none",
    error: "bg-gradient-to-b from-error-500 to-error text-gray-100 border-transparent shadow shadow-error hover:shadow-none"
  },
  toned: {
    primary: "bg-primary-100 text-primary border-transparent hover:bg-primary hover:text-gray-100",
    secondary: "bg-secondary-100 text-secondary border-transparent hover:bg-secondary hover:text-gray-100",
    info: "bg-info-100 text-info border-transparent hover:bg-info hover:text-gray-100",
    success: "bg-success-100 text-success border-transparent hover:bg-success hover:text-gray-100",
    warning: "bg-warning-100 text-warning border-transparent hover:bg-warning hover:text-gray-100",
    error: "bg-error-100 text-error border-transparent hover:bg-error hover:text-gray-100"
  },
  outlined: {
    primary: "bg-transparent text-primary border-primary hover:bg-primary hover:text-gray-100 hover:border-transparent",
    secondary: "bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-gray-100 hover:border-transparent",
    info: "bg-transparent text-info border-info hover:bg-info hover:text-gray-100 hover:border-transparent",
    success: "bg-transparent text-success border-success hover:bg-success hover:text-gray-100 hover:border-transparent",
    warning: "bg-transparent text-warning border-warning hover:bg-warning hover:text-gray-100 hover:border-transparent",
    error: "bg-transparent text-error border-error hover:bg-error hover:text-gray-100 hover:border-transparent"
  },
  text: {
    primary: "bg-transparent text-primary border-transparent hover:text-primary-800",
    secondary: "bg-transparent text-secondary border-transparent hover:text-secondary-900",
    info: "bg-transparent text-info border-transparent hover:bg-info hover:text-gray-100",
    success: "bg-transparent text-success border-transparent hover:bg-success hover:text-gray-100",
    warning: "bg-transparent text-warning border-transparent hover:bg-warning hover:text-gray-100",
    error: "bg-transparent text-error border-transparent hover:bg-error hover:text-gray-100",
    gray: "bg-transparent text-gray-400 border-transparent hover:bg-gray-200 hover:text-gray-100"
  }
}

const Button = forwardRef(
  function Button({
    key,
    type = "button",
    extended = false,
    icon,
    size = "base",
    variant = "filled",
    color = "primary",
    pill = false,
    disabled = false,
    className,
    style,
    onClick,
    children,
    ...props
  }, ref
  ) {
    return (
      <button
        key={key}
        ref={ref}
        type={type}
        className={twMerge(
          classNames(
            "relative",
            { ["inline-block"]: !extended },
            { ["inline-flex gap-3 items-center justify-center"]: extended },
            { [sizeVariants.icon[size]]: !extended && icon && size },
            { [sizeVariants[size].sizing]: extended || !icon && size },
            { [sizeVariants[size].spacing]: extended || !icon && size },
            "font-raleway",
            { [sizeVariants[size].font]: extended || !icon && size },
            "font-medium",
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
            "ease-in-out",
            "duration-300",
          ),
          className
        )}
        {...props}
        disabled={disabled}
        onClick={onClick}
        style={style}
      >
        {
          icon &&
          <Icon
            name={icon}
            size={size}
            className={classNames(
              { ["absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"]: !extended && icon },
            )}
          />
        }

        {(extended || !icon) && children}
      </button>
    )
  }
)

Button.propTypes = {
  type: PropTypes.oneOf([
    "button",
    "submit"
  ]),
  extended: PropTypes.bool,
  icon: PropTypes.string,
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
    "black",
    "white",
    "gray",
    "primary",
    "secondary",
    "info",
    "succcess",
    "warning",
    "error"
  ]),
  pill: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.node
}

export default Button
