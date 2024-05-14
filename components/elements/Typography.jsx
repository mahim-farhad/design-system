import PropTypes from "prop-types"

import getTypographyClasses from "@styles/components/typography"

const validTypes = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "small",
  "blockquote"
]

function Typography({
  type = "p",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const Tag = type

  const typographyClasses = getTypographyClasses(type, className)

  if (!validTypes.includes(type)) return null

  return (
    <Tag
      className={typographyClasses}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Typography.propTypes = {
  type: PropTypes.oneOf(validTypes),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Typography
