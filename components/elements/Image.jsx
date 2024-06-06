import NextImage from "next/image"

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Image({
  uniqueKey,
  src,
  alt,
  className,
  style,
  ...rest
}) {
  const imgClasses = twMerge("w-full", className);

  if (!src && !alt) return null;

  return (
    <NextImage
      key={uniqueKey}
      src={src}
      alt={alt}
      loading="lazy"
      className={imgClasses}
      style={style}
      {...rest}
    />
  );
}

Image.displayName = "Image";

Image.propTypes = {
  uniqueKey: PropTypes.any,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Image;
