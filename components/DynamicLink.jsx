import Link from "next/link"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function DynamicLink({
  href = "/",
  className = "",
  style = {},
  children
}) {
  const linkClasses = twMerge(
    "block",
    className
  )

  if (href === "") {
    return null
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={linkClasses}
      style={style}
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
