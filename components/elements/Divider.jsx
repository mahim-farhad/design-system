import PropTypes from "prop-types";

import getDividerClasses from "@styles/components/dividerClasses";

function Divider({
  className = "",
  style = {},
  ...rest
}) {
  const dividerClasses = getDividerClasses(className);

  return (
    <hr
      className={dividerClasses}
      style={style}
      {...rest}
    />
  );
}

Divider.displayName = "Divider";

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Divider;
