import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Section({
  className = "",
  style = {},
  children
}) {
  const sectionClasses = twMerge(
    "py-6 sm:py-8",
    "overflow-hidden",
    className
  )

  return (
    <section
      className={sectionClasses}
      style={style}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Section
