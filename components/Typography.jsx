import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Typography({
  type = "p",
  className = "",
  children
}) {
  const Tag = type

  const typeVariants = {
    h1: classNames(
      "font-raleway",
      "text-4xl lg:text-6xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-[-0.022em]",
      "text-heading-light",
    ),
    h2: classNames(
      "font-raleway",
      "text-3xl lg:text-5xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-[-0.022em]",
      "text-heading-light",
    ),
    h3: classNames(
      "font-raleway",
      "text-2xl lg:text-4xl",
      "leading-[1.5]",
      "font-bold",
      "uppercase",
      "tracking-[-0.022em]",
      "text-heading-light",
    ),
    h4: classNames(
      "font-raleway",
      "text-xl lg:text-3xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-[-0.022em]",
      "text-heading-light",
    ),
    h5: classNames(
      "font-raleway",
      "text-lg lg:text-2xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-[-0.022em]",
      "text-heading-light",
    ),
    h6: classNames(
      "font-raleway",
      "text-base lg:text-xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-[-0.022em]",
      "text-heading-light",
    ),
    p: classNames(
      "font-normal",
      "text-base",
      "leading-[1.25]",
      "font-normal",
      "tracking-[1]",
      "text-font-light",
    ),
    small: classNames(
      "font-normal",
      "text-sm",
      "leading-[1.25rem]",
      "font-medium",
      "uppercase",
      "tracking-[1]",
      "text-font-light",
    ),
    blockquote: classNames(
      "p-4",
      "font-normal",
      "text-base",
      "leading-[1.75]",
      "font-medium",
      "bg-surface-light dark:bg-surface-dark",
      "border-l-2",
      "border-primary dark:border-primary",
    ),
  }

  const typographyClasses = twMerge(
    typeVariants[type],
    className
  )

  return (
    <Tag
      className={typographyClasses}
    >
      {children}
    </Tag>
  )
}

Typography.propTypes = {
  type: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "small",
    "blockquote",
  ]),
  className: PropTypes.string,
  children: PropTypes.node
}

export default Typography
