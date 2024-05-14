import Link from "next/link"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function DynamicLink({
  href = "/",
  title,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const linkClasses = twMerge(
    classNames(
      "block",
    ), className
  )

  if (!href) return null

  return (
    <Link
      href={href}
      title={title}
      // target="_blank"
      // rel="noreferrer"
      className={linkClasses}
      style={style}
      {...rest}
    >
      {children}
    </Link>
  )
}

DynamicLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default DynamicLink
