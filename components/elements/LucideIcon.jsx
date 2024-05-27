import PropTypes from "prop-types"

import { iconTypes } from "@utils/types"

import getIconClasses from "@styles/components/iconClasses"

import { icons } from 'lucide-react'

const LucideIcon = ({
  name,
  color,
  size = 'base',
  className,
  style
}) => {
  const iconClasses = getIconClasses(size, className)

  const LucideIcon = icons[name]

  const hasValidIcon = !(!icons[name])
  const hasValidSize = !(!iconTypes?.sizes[size])

  const isValid = hasValidIcon && hasValidSize

  if (!isValid) return null

  return (
    <LucideIcon
      color={color}
      className={iconClasses}
      style={style}
    />
  )
}

LucideIcon.propTypes = {
  name: PropTypes.oneOf(
    Object.keys(iconTypes.icons)
  ).isRequired,
  size: PropTypes.oneOf(
    Object.keys(iconTypes.sizes)
  ),
  className: PropTypes.string,
  style: PropTypes.object
}

export default LucideIcon
