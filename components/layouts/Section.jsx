import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Section({
  className = null,
  style = null,
  children
}) {
  const sectionClasses = twMerge(
    "relative",
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
