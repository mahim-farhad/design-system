import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Grid({
  className = null,
  style = null,
  children
}) {
  const gridClasses = twMerge(
    "grid",
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
  key = null,
  className = null,
  style = null,
  children
}) {
  const gridItemClasses = twMerge(
    className
  )

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
