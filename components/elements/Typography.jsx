import PropTypes from "prop-types";

import { typographyTypes } from "@utils/types";

import getTypographyClasses from "@styles/components/typographyClasses";

function Typography({
  type = "p",
  gradient,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const Component = type;

  const typographyClasses = getTypographyClasses(type, gradient, className);

  const hasValidType = typographyTypes?.types?.[type];

  const isValid = hasValidType;

  if (!isValid) return null;

  return (
    <Component
      className={typographyClasses}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}

Typography.displayName = "Typography";

Typography.propTypes = {
  type: PropTypes.oneOf(Object.keys(typographyTypes?.types)),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Typography;
