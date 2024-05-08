import Link from "next/link"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function DynamicLink({
  href = "/",
  className = "",
  style = {},
  children,
  ...props
}) {
  const linkClasses = twMerge(
    classNames(
      "block",
    ),
    className
  )

  if (!href) return null

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={linkClasses}
      style={style}
      {...props}
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
