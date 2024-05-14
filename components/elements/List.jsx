import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import getListClasses from "@styles/components/list"

const validTypes = ["ul", "ol"]

function List({
  type = "ul",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const Tag = type

  const listClasses = getListClasses(type, className)

  if (!validTypes.includes(type)) return null

  return (
    <Tag
      className={listClasses}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function ListItem({
  uniqueKey,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const listItemClasses = className ? twMerge(className) : null

  return (
    <li
      key={uniqueKey}
      className={listItemClasses}
      style={style}
      {...rest}
    >
      {children}
    </li>
  )
}

List.propTypes = {
  type: PropTypes.oneOf(validTypes),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

ListItem.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export {
  List,
  ListItem
}
