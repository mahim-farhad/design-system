import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function List({
  type = "ul",
  className = "",
  style = {},
  children,
}) {
  const Tag = type

  const listClasses = twMerge(
    classNames(
      "p-0",
      "m-0",
      { ["list-none"]: type === "ul" },
      { ["list-disc"]: type === "ol" },
      "list-inside",
    ),
    className
  )

  if (type !== "ul" && type !== "ol") {
    return null
  }

  return (
    <Tag
      className={listClasses}
      style={style}
    >
      {children}
    </Tag>
  )
}

function ListItem({
  key,
  className = "",
  style = {},
  children,
}) {
  const listItemClasses = className ? twMerge(className) : undefined

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
  ]).isRequired,
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
