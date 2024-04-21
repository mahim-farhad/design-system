import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Main({
  className = "",
  style = null,
  children
}) {
  const mainClasses = twMerge(
    "h-full",
    "min-h-screen",
    "pt-16 lg:pt-20",
    // "pb-16 lg:pb-0",
    "lg:pl-80",
    "bg-surface-light",
    className
  )

  return (
    <main
      className={mainClasses}
      style={style}
    >
      {children}
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Main
