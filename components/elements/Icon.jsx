import PropTypes from "prop-types";

import { iconTypes } from "@utils/types";

import getIconClasses from "@styles/components/iconClasses";

import getSVGIcon from "@utils/icons";

function Icon({
  name,
  size = "base",
  className = "",
  style = {}
}) {
  const iconClasses = getIconClasses(size, className);

  const SVGIcon = getSVGIcon(name, iconClasses, style);

  const hasValidSize = iconTypes?.sizes?.[size];

  const isValid = SVGIcon && hasValidSize;

  if (!isValid) return null;

  return SVGIcon;
}

Icon.displayName = "Icon";

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconTypes?.icons)).isRequired,
  size: PropTypes.oneOf(Object.keys(iconTypes?.sizes)),
  className: PropTypes.string,
  style: PropTypes.object
};

export default Icon;
