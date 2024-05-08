import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Image({
  src,
  alt,
  className = "",
  style = {},
  ...props
}) {
  const imgClasses = twMerge(
    classNames(
      "w-full",
    ),
    className
  )

  if (!src && !alt) return null

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={imgClasses}
      style={style}
      {...props}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Image
