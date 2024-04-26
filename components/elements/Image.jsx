import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

function Image({
  src = "",
  alt = "image",
  className = "",
  style = {}
}) {
  const imgClasses = twMerge(
    "w-full",
    className
  )

  if (src === "") return null

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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Image
