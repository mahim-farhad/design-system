import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Container({
  className = "",
  style = {},
  children,
  ...props
}) {
  const containerClasses = twMerge(
    classNames(
      "container",
      "max-w-full",
      "px-4 sm:px-8",
      "mx-auto",
    ),
    className
  )

  return (
    <div
      className={containerClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Container
