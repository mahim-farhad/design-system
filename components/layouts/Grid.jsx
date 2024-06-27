import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Grid({
  className = "",
  style = {},
  children,
  ...props
}) {
  const gridClasses = twMerge(
    "grid", className
  );

  return (
    <div
      className={gridClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

function GridItem({
  uniqueKey,
  className = "",
  style = {},
  children,
  ...props
}) {
  const gridItemClasses = className ? twMerge(className) : undefined;

  return (
    <div
      key={uniqueKey}
      className={gridItemClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

Grid.displayName = "Grid";

Grid.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

GridItem.displayName = "GridItem";

GridItem.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export { Grid, GridItem };
