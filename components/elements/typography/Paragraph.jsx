import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Paragraph({
  className = "",
  style = {},
  children
}) {
  const paragraphClasses = twMerge(
    "text-base",
    "leading-[1.75]",
    "font-medium",
    "tracking-normal",
    "text-font-light",
    className
  )

  return (
    <p
      className={paragraphClasses}
      style={style}
    >
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Paragraph
