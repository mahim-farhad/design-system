import PropTypes from "prop-types";

import { icons } from 'lucide-react';

import { iconTypes } from "@utils/types";

import getIconClasses from "@styles/components/iconClasses";

const LucideIcon = ({
  name,
  size = 'base',
  className,
  style,
  ...rest
}) => {
  const iconClasses = getIconClasses(size, className);

  const hasValidIcon = icons?.[name];
  const hasValidSize = iconTypes?.sizes?.[size];

  const isValid = hasValidIcon && hasValidSize;

  if (!isValid) return null;

  const LucideIcon = icons[name];

  return (
    <LucideIcon
      className={iconClasses}
      style={style}
      {...rest}
    />
  );
}

LucideIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(iconTypes?.sizes)),
  className: PropTypes.string,
  style: PropTypes.object
};

export default LucideIcon;
