import PropTypes from "prop-types"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

function Icon({
  name,
  size = "base",
  className = "",
  style = {},
  ...props
}) {
  const sizeVariants = {
    xs: "w-4 h-4",
    sm: "w-4 h-4",
    base: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-6 h-6"
  }

  const iconClasses = twMerge(
    classNames(
      "inline-block",
      { [sizeVariants[size]]: size },
      "leading-none",
      "whitespace-nowrap",
    ),
    className
  )

  const icons = {
    "brand": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={name}
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <polygon
          fill="#2fb2ab"
          points="17.463,6.538 6.739,6.538 0.201,0 23.999,0 23.999,23.799 17.463,17.261"
        />
        <polygon
          fill="#bae2e2"
          points="6.731,17.269 6.731,7.848 0.001,14.579 0.001,24 9.42,24 16.15,17.269"
        />
      </svg>
    ),
    "apps-sort": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={name}
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 512 512"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M42.667,234.667h234.667C300.897,234.667,320,215.564,320,192V42.667C320,19.103,300.897,0,277.333,0H42.667   C19.103,0,0,19.103,0,42.667V192C0,215.564,19.103,234.667,42.667,234.667z" />
        <path d="M504.704,18.816C496.775,7.054,483.518,0.002,469.333,0h-64c-23.564,0-42.667,19.103-42.667,42.667V192   c0,23.564,19.102,42.667,42.667,42.667h64C492.898,234.667,512,215.564,512,192V42.667 C512.014,34.165,509.472,25.855,504.704,18.816z" />
        <path d="M130.517,284.629c-7.039-4.768-15.349-7.31-23.851-7.296h-64C19.103,277.333,0,296.436,0,320v149.333   C0,492.898,19.103,512,42.667,512h64c23.564,0,42.667-19.103,42.667-42.667V320C149.331,305.815,142.279,292.559,130.517,284.629z" />
        <path d="M493.184,284.629c-7.039-4.768-15.349-7.31-23.851-7.296H234.667C211.103,277.333,192,296.436,192,320v149.333   C192,492.898,211.103,512,234.667,512h234.667C492.898,512,512,492.898,512,469.333V320 C511.998,305.815,504.946,292.559,493.184,284.629z" />
      </svg>
    ),
    "grid": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={name}
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M6.49156 0H0V6.49156H6.49156V0Z" />
        <path d="M6.49156 8.75427H0V15.2458H6.49156V8.75427Z" />
        <path d="M6.49156 17.5085H0V24.0001H6.49156V17.5085Z" />
        <path d="M15.2458 0H8.75427V6.49156H15.2458V0Z" />
        <path d="M15.2457 8.75427H8.75415V15.2458H15.2457V8.75427Z" />
        <path d="M15.2457 17.5085H8.75415V24.0001H15.2457V17.5085Z" />
        <path d="M24 0H17.5084V6.49156H24V0Z" />
        <path d="M24 8.75427H17.5084V15.2458H24V8.75427Z" />
        <path d="M24 17.5085H17.5084V24.0001H24V17.5085Z" />
      </svg>
    ),
    "code-branch": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="envelope"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path
          d="M24 4C24 1.794 22.206 0 20 0C17.794 0 16 1.794 16 4C16 5.858 17.28 7.411 19 7.858V10C19 10.551 18.551 11 18 11H6C5.649 11 5.313 11.061 5 11.171V7.858C6.72 7.411 8 5.858 8 4C8 1.794 6.206 0 4 0C1.794 0 0 1.794 0 4C0 5.858 1.28 7.411 3 7.858V16.142C1.28 16.589 0 18.142 0 20C0 22.206 1.794 24 4 24C6.206 24 8 22.206 8 20C8 18.142 6.72 16.589 5 16.142V14C5 13.449 5.449 13 6 13H18C19.654 13 21 11.654 21 10V7.858C22.72 7.411 24 5.858 24 4Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <ellipse
          cx="19.9845"
          cy="3.98438"
          rx="4.00008"
          ry="3.98438"
        />
        <ellipse
          cx="4.00008"
          cy="3.98438"
          rx="4.00008"
          ry="3.98438"
        />
        <ellipse
          cx="4.00008"
          cy="20.0156"
          rx="4.00008"
          y="3.98438"
        />
      </svg>
    ),
    "envelope": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="envelope"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z" />
        <path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z" />
      </svg>
    ),
    "menu": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="menu"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M23.9671 23.9671H12.96V12.96H23.9671V23.9671Z" />
        <path d="M11.0072 23.9999H0V12.9927H11.0072V23.9999Z" />
        <path d="M18.4964 0C15.4568 0 12.9928 2.46404 12.9928 5.50359C12.9928 8.54314 15.4568 11.0072 18.4964 11.0072C21.5359 11.0072 24 8.54314 24 5.50359C24 2.46404 21.5359 0 18.4964 0Z" />
        <path d="M11.0072 11.0071H0V-0.00012207H11.0072V11.0071Z" />
      </svg>
    ),
    "chevron-down": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="chevron-down"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z" />
      </svg>
    ),
    "caret-down": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="caret-down"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M5,9H19l-6.293,6.293a1,1,0,0,1-1.414,0Z" />
      </svg>
    ),
    "check-circle": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="check-circle"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z" />
      </svg>
    ),
    "exclamation": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="exclamation"
        fill="currentColor"
        viewBox="0 0 512 512"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z" />
      </svg>
    ),
    "settings": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="settings"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
        {...props}
      >
        <path d="M21,12a9.143,9.143,0,0,0-.15-1.645L23.893,8.6l-3-5.2L17.849,5.159A9,9,0,0,0,15,3.513V0H9V3.513A9,9,0,0,0,6.151,5.159L3.107,3.4l-3,5.2L3.15,10.355a9.1,9.1,0,0,0,0,3.29L.107,15.4l3,5.2,3.044-1.758A9,9,0,0,0,9,20.487V24h6V20.487a9,9,0,0,0,2.849-1.646L20.893,20.6l3-5.2L20.85,13.645A9.143,9.143,0,0,0,21,12Zm-6,0a3,3,0,1,1-3-3A3,3,0,0,1,15,12Z" />
      </svg>
    ),
  }

  if (!icons[name]) return null

  return <>{icons[name]}</>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
  ]),
  className: PropTypes.string,
  style: PropTypes.object
}

export default Icon
