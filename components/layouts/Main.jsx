import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Main({
  className = "",
  style = {},
  children
}) {
  const mainClasses = twMerge(
    "h-full",
    "min-h-screen",
    "pt-16",
    "lg:pl-80",
    "bg-background-light",
    "transition-all",
    "duration-300",
    "ease-in-out",
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
