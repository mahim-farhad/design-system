import Link from "next/link"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function DynamicLink({
  href = "/",
  onClick,
  className = null,
  style = null,
  children
}) {
  const linkClasses = twMerge(
    className
  )

  return (
    <Link
      href={href}
      // target="_blank"
      // rel="noreferrer"
      onClick={onClick}
      className={linkClasses}
      style={style}
    >
      {children}
    </Link>
  )
}

DynamicLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default DynamicLink
