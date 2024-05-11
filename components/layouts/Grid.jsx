import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Grid({
  className = "",
  style = {},
  children,
  ...props
}) {
  const gridClasses = twMerge(
    classNames(
      "grid",
    ),
    className
  )

  return (
    <div
      className={gridClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

function GridItem({
  key,
  className = "",
  style = {},
  children,
  ...props
}) {
  const gridItemClasses = className ? twMerge(className) : undefined

  return (
    <div
      key={key}
      className={gridItemClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

GridItem.propTypes = {
  key: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export { Grid, GridItem }
