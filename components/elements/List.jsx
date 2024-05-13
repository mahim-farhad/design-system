import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function List({
  type = "ul",
  className = "",
  style = {},
  children,
  ...props
}) {
  const Tag = type

  const listClasses = twMerge(
    classNames(
      "flex",
      "flex-col",
      "p-0",
      "m-0",
      { ["list-none"]: type === "ul" },
      { ["list-disc"]: type === "ol" },
      "list-inside",
    ),
    className
  )

  if (type !== "ul" && type !== "ol") return null

  return (
    <Tag
      className={listClasses}
      style={style}
      {...props}
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
  ...props
}) {
  const listItemClasses = className ? twMerge(className) : undefined

  return (
    <li
      key={key}
      className={listItemClasses}
      style={style}
      {...props}
    >
      {children}
    </li>
  )
}

List.propTypes = {
  type: PropTypes.oneOf(["ul", "ol"]),
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

export { List, ListItem }
