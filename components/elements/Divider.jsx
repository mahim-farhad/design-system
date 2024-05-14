import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Divider({
  className = "",
  style = {},
  ...rest
}) {
  const dividerClasses = twMerge(
    classNames(
      "w-full",
      "h-px",
      "bg-gray-300",
      "border-0",
    ), className
  )

  return (
    <hr
      className={dividerClasses}
      style={style}
      {...rest}
    />
  )
}

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Divider
