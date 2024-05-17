import PropTypes from "prop-types";

import getSVGIcons from "@utils/icons";

import { iconVariantTypes } from "@styles/types";

import getIconClasses from "@styles/components/icon";

function Icon(props) {
  const {
    name,
    size = "base",
    className = "",
    style = {}
  } = props;

  const iconClasses = (
    getIconClasses({
      size,
      className
    })
  );

  const SVGicons = (
    getSVGIcons({
      iconClasses,
      style
    })
  );

  const icon = SVGicons?.[name];

  const hasValidSize = !(!iconVariantTypes?.sizes?.includes(size));
  const hasValidIcon = !(!SVGicons?.[name]);

  const isValid = icon && hasValidSize && hasValidIcon;

  if (!isValid) return null;

  return icon;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(iconVariantTypes.sizes),
  className: PropTypes.string,
  style: PropTypes.object
};

export default Icon;
