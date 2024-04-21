import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Container({
  className = "",
  style = null,
  children
}) {
  const containerClasses = twMerge(
    "container",
    "max-w-full",
    "px-6 lg:px-8",
    "mx-auto",
    className
  )

  return (
    <div
      className={containerClasses}
      style={style}
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
