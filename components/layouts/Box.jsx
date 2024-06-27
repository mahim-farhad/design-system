import { forwardRef } from "react";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Box = forwardRef(
  function Box({
    uniqueKey,
    className = "",
    style = {},
    children,
    ...rest
  }, boxRef) {
    const boxClasses = className ? twMerge(className) : undefined;

    return (
      <div
        key={uniqueKey}
        ref={boxRef}
        className={boxClasses}
        style={style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";

Box.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Box;
