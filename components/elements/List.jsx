import PropTypes from "prop-types";

import { listTypes } from "@utils/types";

import {
  getListClasses,
  getListItemClasses
} from "@styles/components/listClasses";

function List({
  type = "ul",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const Component = type;

  const listClasses = getListClasses(type, className);

  const hasValidType = listTypes?.types?.[type];

  const isValid = hasValidType;

  if (!isValid) return null;

  return (
    <Component
      className={listClasses}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}

function ListItem({
  uniqueKey,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const listItemClasses = getListItemClasses(className);

  return (
    <li
      key={uniqueKey}
      className={listItemClasses}
      style={style}
      {...rest}
    >
      {children}
    </li>
  );
}

List.displayName = "List";

List.propTypes = {
  type: PropTypes.oneOf(Object.keys(listTypes?.types)),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

ListItem.displayName = "ListItem";

ListItem.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export { List, ListItem };
