import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Heading({
  type,
  className = "",
  style = {},
  children
}) {
  const Tag = type

  const typeVariants = {
    h1: classNames(
      "font-custom",
      "text-4xl lg:text-6xl",
      "leading-[1.1]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h2: classNames(
      "font-custom",
      "text-3xl lg:text-5xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h3: classNames(
      "font-custom",
      "text-2xl lg:text-4xl",
      "leading-[1.5]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h4: classNames(
      "font-custom",
      "text-xl lg:text-3xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h5: classNames(
      "font-custom",
      "text-lg lg:text-2xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h6: classNames(
      "font-custom",
      "text-base lg:text-xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    )
  }

  const headingClasses = twMerge(typeVariants[type], className)

  if (
    type !== "h1" &&
    type !== "h2" &&
    type !== "h3" &&
    type !== "h4" &&
    type !== "h5" &&
    type !== "h6"
  ) return null

  return (
    <Tag
      className={headingClasses}
      style={style}
    >
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  type: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Heading
