import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Grid({
  className = "",
  style = {},
  children
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
    >
      {children}
    </div>
  )
}

function GridItem({
  key,
  className = "",
  style = {},
  children
}) {
  const gridItemClasses = className ? twMerge(className) : undefined

  return (
    <div
      key={key}
      className={gridItemClasses}
      style={style}
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

export {
  Grid,
  GridItem
}
