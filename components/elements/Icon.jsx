import PropTypes from "prop-types";

import { iconTypes } from "@styles/types";

import getIconClasses from "@styles/components/iconClasses";

import getSVGIcons from "@utils/icons";

function Icon({
  name,
  size = "base",
  className,
  style
}) {
  const iconClasses = getIconClasses(size, className);

  const SVGIcons = getSVGIcons(iconClasses, style);
  const icon = SVGIcons?.[name];

  const hasValidIcon = (
    !(!iconTypes?.icons[name]) &&
    !(!SVGIcons?.[name])
  );
  const hasValidSize = !(!iconTypes?.sizes[size]);

  const isValid = hasValidIcon && hasValidSize;

  if (!isValid) return null;

  return icon;
};

Icon.propTypes = {
  name: PropTypes.oneOf(
    Object.keys(iconTypes.icons)
  ).isRequired,
  size: PropTypes.oneOf(
    Object.keys(iconTypes.sizes)
  ),
  className: PropTypes.string,
  style: PropTypes.object
};

export default Icon;
