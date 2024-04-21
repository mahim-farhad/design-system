import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Divider({
  className = null,
  style = null
}) {
  const dividerClasses = twMerge(
    classNames(
      "w-full",
      "h-0",
      "border-t-2",
      "border-[#E9EAEE]",
    ),
    className
  )

  return (
    <hr
      className={dividerClasses}
      style={style}
    />
  )
}

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Divider
