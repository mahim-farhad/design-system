import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Image({
  uniqueKey,
  src,
  alt,
  className = "",
  style = {},
  ...rest
}) {
  const imgClasses = twMerge(
    classNames(
      "w-full"
    ), className
  )

  if (!src && !alt) return null

  return (
    <img
      key={uniqueKey}
      src={src}
      alt={alt}
      loading="lazy"
      className={imgClasses}
      style={style}
      {...rest}
    />
  )
}

Image.propTypes = {
  uniqueKey: PropTypes.any,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Image
