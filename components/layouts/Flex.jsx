import { forwardRef } from "react"

import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

const Flex = forwardRef(
  function Flex({
    key,
    className = "",
    style = {},
    children,
    ...props
  }, ref) {
    const flexClasses = twMerge(
      classNames(
        "flex",
        "flex-wrap",
      ),
      className
    )

    return (
      <div
        key={key}
        ref={ref}
        className={flexClasses}
        style={style}
        {...props}
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
  children: PropTypes.node
}

export default Flex
