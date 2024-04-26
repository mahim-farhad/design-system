import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Small({
  className = "",
  style = {},
  children
}) {
  const smallClasses = twMerge(
    "text-sm",
    "leading-[1.75]",
    "font-medium",
    "uppercase",
    "tracking-normal",
    "text-font-light",
    className
  )

  return (
    <small
      className={smallClasses}
      style={style}
    >
      {children}
    </small>
  )
}

Small.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Small
