import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function List({
  type = "ul",
  className = "",
  style = null,
  children,
}) {
  const listClasses = twMerge(
    "flex",
    "flex-col",
    "gap-x-4",
    "items-start",
    className
  )

  switch (type) {
    case "ul":
      return (
        <ul
          className={listClasses}
          style={style}
        >
          {children}
        </ul>
      )
    case "ol":
      return (
        <ol
          className={listClasses}
          style={style}
        >
          {children}
        </ol>
      )
    default:
      return null
  }
}

function ListItem({
  key,
  className = "",
  style = null,
  children,
}) {
  const listItemClasses = twMerge(
    "w-full",
    className
  )

  return (
    <li
      key={key}
      className={listItemClasses}
      style={style}
    >
      {children}
    </li>
  )
}

List.propTypes = {
  type: PropTypes.oneOf([
    "ul",
    "ol",
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

ListItem.propTypes = {
  key: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export {
  List,
  ListItem
}
