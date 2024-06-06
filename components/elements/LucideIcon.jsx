import PropTypes from "prop-types";

import { iconTypes } from "@utils/types";

import getIconClasses from "@styles/components/iconClasses";

import { icons } from 'lucide-react';

function capitalize(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return word;
  }

  return (
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

const LucideIcon = ({
  name,
  size = 'base',
  className,
  style,
  ...rest
}) => {
  const iconClasses = getIconClasses(size, className);

  const Icon = icons?.[capitalize(name)];

  const hasValidSize = iconTypes?.sizes?.[size];

  const isValid = Icon && hasValidSize;

  if (!isValid) return null;

  return (
    <Icon
      className={iconClasses}
      style={style}
      {...rest}
    />
  );
}

LucideIcon.displayName = "Icon";

LucideIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(iconTypes?.sizes)),
  className: PropTypes.string,
  style: PropTypes.object
};

export default LucideIcon;
