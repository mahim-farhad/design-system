import { css } from '@emotion/react'

const color = "white"

const Radio = props => (
  <p
    css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
    {...props}
  />
)

export default Radio
