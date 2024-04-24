import { forwardRef } from "react"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

const Flex = forwardRef(
  function Flex({
    key,
    className = "",
    style = {},
    children,
    ...props
  }, ref
  ) {
    const flexClasses = twMerge(
      "flex",
      "flex-wrap",
      className
    )

    return (
      <div
        key={key}
        ref={ref}
        className={flexClasses}
        {...props}
        style={style}
      >
        {children}
      </div>
    )
  }
)

Flex.propTypes = {
  key: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Flex
