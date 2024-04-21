import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Image({
  src = null,
  alt = null,
  className = null,
  style = null
}) {
  const imgClasses = twMerge(
    "w-full",
    "object-cover",
    className
  )

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={imgClasses}
      style={style}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Image
