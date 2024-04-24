import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Divider({
  className = "",
  style = {}
}) {
  const dividerClasses = twMerge(
    "w-full",
    "h-px",
    "bg-[#E9EAEE]",
    "border-0",
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
