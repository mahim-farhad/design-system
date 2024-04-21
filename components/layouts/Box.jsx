import { forwardRef } from "react"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

const Box = forwardRef(
  function Box({
    key = null,
    className = null,
    style = null,
    children,
    ...props
  }, ref
  ) {
    const boxClasses = twMerge(
      "block",
      className
    )

    return (
      <div
        key={key}
        ref={ref}
        className={boxClasses}
        {...props}
        style={style}
      >
        {children}
      </div>
    )
  }
)

Box.propTypes = {
  key: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Box
