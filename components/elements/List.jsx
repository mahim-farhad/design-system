import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function List({
  tag = "ul",
  className = "",
  style = {},
  children,
  ...props
}) {
  const Tag = tag

  const listClasses = twMerge(
    classNames(
      "p-0",
      "m-0",
      { ["list-none"]: tag === "ul" },
      { ["list-disc"]: tag === "ol" },
      "list-inside",
    ),
    className
  )

  if (tag !== "ul" && tag !== "ol") return null

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
  tag: PropTypes.oneOf(["ul", "ol"]).isRequired,
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
