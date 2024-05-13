import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import { getSVGIcons } from "@utils/icons"

function Icon({
  name,
  size = "base",
  className = "",
  style = {}
}) {
  const sizeVariants = {
    xs: classNames("w-4", "h-4"),
    sm: classNames("w-4", "h-4"),
    base: classNames("w-5", "h-5"),
    lg: classNames("w-6", "h-6"),
    xl: classNames("w-6", "h-6")
  }

  const iconClasses = twMerge(
    classNames(
      "inline-block",
      { [sizeVariants[size]]: size },
      "leading-none",
      "whitespace-nowrap",
    ),
    className
  )

  const icons = getSVGIcons({ iconClasses, style })

  return (
    icons[name] ? (
      <>{icons[name]}</>
    ) : null
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
  ]),
  className: PropTypes.string,
  style: PropTypes.object
}

export default Icon
