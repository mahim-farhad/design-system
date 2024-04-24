import { forwardRef } from "react"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

const Box = forwardRef(
  function Box({
    key,
    className = "",
    style = {},
    children,
    ...props
  }, ref
  ) {
    const boxClasses = className ? twMerge(className) : undefined

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
