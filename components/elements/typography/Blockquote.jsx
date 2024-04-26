import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Blockquote({
  className = "",
  style = {},
  children
}) {
  const blockquoteClasses = twMerge(
    "p-4",
    "text-base",
    "leading-[2]",
    "font-medium",
    "text-font-light dark:text-font-dark",
    "bg-surface-light dark:bg-surface-dark",
    "border-l-2",
    "border-primary dark:border-primary",
    className
  )

  return (
    <blockquote
      className={blockquoteClasses}
      style={style}
    >
      {children}
    </blockquote>
  )
}

Blockquote.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Blockquote
