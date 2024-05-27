import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

import { listTypes } from "@utils/types";

import getListClasses from "@styles/components/listClasses";

function List({
  type = "ul",
  className,
  style,
  children,
  ...rest
}) {
  const Tag = type;

  const listClasses = getListClasses(type, className);

  const hasValidType = !(!listTypes.types[type]);

  const isValid = hasValidType;

  if (!children || !isValid) return null;

  return (
    <Tag
      className={listClasses}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
};

function ListItem({
  uniqueKey,
  className,
  style,
  children,
  ...rest
}) {
  const listItemClasses = className ? twMerge(className) : null;

  if (!children) return null;

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
};

List.propTypes = {
  type: PropTypes.oneOf(
    Object.keys(listTypes.types)
  ),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

ListItem.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export { List, ListItem };
