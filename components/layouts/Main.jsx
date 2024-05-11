import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Main({
  className = "",
  style = {},
  children,
  ...props
}) {
  const mainClasses = twMerge(
    classNames(
      "h-full",
      "min-h-screen",
      "pt-16",
      "lg:pl-80",
      "bg-background-light",
    ),
    className
  )

  return (
    <main
      className={mainClasses}
      style={style}
      {...props}
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
