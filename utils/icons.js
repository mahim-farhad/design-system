function getSVGIcon(
  name,
  iconClasses,
  style
) {
  const SVGIcons = {
    "brand": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="brand"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
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
    "search": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="apps-sort"
        aria-hidden={true}
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={iconClasses}
        style={style}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    "apps-sort": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="apps-sort"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 512 512"
        className={iconClasses}
        style={style}
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
        xmlSpace="preserve"
        role="img"
        aria-label="grid"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
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
        xmlSpace="preserve"
        role="img"
        aria-label="code-branch"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
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
        xmlSpace="preserve"
        role="img"
        aria-label="envelope"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z" />
        <path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z" />
      </svg>
    ),
    "menu": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="menu"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <path d="M23.9671 23.9671H12.96V12.96H23.9671V23.9671Z" />
        <path d="M11.0072 23.9999H0V12.9927H11.0072V23.9999Z" />
        <path d="M18.4964 0C15.4568 0 12.9928 2.46404 12.9928 5.50359C12.9928 8.54314 15.4568 11.0072 18.4964 11.0072C21.5359 11.0072 24 8.54314 24 5.50359C24 2.46404 21.5359 0 18.4964 0Z" />
        <path d="M11.0072 11.0071H0V-0.00012207H11.0072V11.0071Z" />
      </svg>
    ),
    "lock": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="lock"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 512 512"
        className={iconClasses}
        style={style}
      >
        <path d="M405.333 179.712v-30.379C405.333 66.859 338.475 0 256 0S106.667 66.859 106.667 149.333v30.379c-38.826 16.945-63.944 55.259-64 97.621v128C42.737 464.214 90.452 511.93 149.333 512h213.333c58.881-.07 106.596-47.786 106.667-106.667v-128c-.055-42.362-25.174-80.676-64-97.621zm-128 182.955c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333V320c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v42.667zm85.334-192H149.333v-21.333c0-58.91 47.756-106.667 106.667-106.667s106.667 47.756 106.667 106.667v21.333z" />
      </svg>
    ),
    "chevron-down": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="chevron-down"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z" />
      </svg>
    ),
    "caret-down": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="caret-down"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <path d="M5,9H19l-6.293,6.293a1,1,0,0,1-1.414,0Z" />
      </svg>
    ),
    "sort": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="sort"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <path d="M18.873,11.021H5.127a2.126,2.126,0,0,1-1.568-3.56L10.046.872a2.669,2.669,0,0,1,3.939.034l6.431,6.528a2.126,2.126,0,0,1-1.543,3.587ZM12,24.011a2.667,2.667,0,0,1-1.985-.887L3.584,16.6a2.125,2.125,0,0,1,1.543-3.586H18.873a2.125,2.125,0,0,1,1.568,3.558l-6.487,6.589A2.641,2.641,0,0,1,12,24.011Z" />
      </svg>
    ),
    "check-circle": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="check-circle"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z" />
      </svg>
    ),
    "exclamation": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="exclamation"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 512 512"
        className={iconClasses}
        style={style}
      >
        <path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z" />
      </svg>
    ),
    "settings": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="settings"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <path d="M21,12a9.143,9.143,0,0,0-.15-1.645L23.893,8.6l-3-5.2L17.849,5.159A9,9,0,0,0,15,3.513V0H9V3.513A9,9,0,0,0,6.151,5.159L3.107,3.4l-3,5.2L3.15,10.355a9.1,9.1,0,0,0,0,3.29L.107,15.4l3,5.2,3.044-1.758A9,9,0,0,0,9,20.487V24h6V20.487a9,9,0,0,0,2.849-1.646L20.893,20.6l3-5.2L20.85,13.645A9.143,9.143,0,0,0,21,12Zm-6,0a3,3,0,1,1-3-3A3,3,0,0,1,15,12Z" />
      </svg>
    ),
    "facebook": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="facebook"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <g>
          <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
        </g>
      </svg>
    ),
    "instagram": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="instagram"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <g>
          <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
          <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
        </g>
      </svg>
    ),
    "whatsapp": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="whatsapp"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <g>
          <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z" />
        </g>
      </svg>
    ),
    "twitter": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="twitter"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <polygon points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159" />
        <path d="m0,0v24h24V0H0Zm15.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z" />
      </svg>
    ),
    "discord": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="discord"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <g>
          <path d="M20.317,4.37c-1.53-0.702-3.17-1.219-4.885-1.515c-0.031-0.006-0.062,0.009-0.079,0.037   c-0.211,0.375-0.445,0.865-0.608,1.249c-1.845-0.276-3.68-0.276-5.487,0C9.095,3.748,8.852,3.267,8.641,2.892   C8.624,2.864,8.593,2.85,8.562,2.855C6.848,3.15,5.208,3.667,3.677,4.37C3.664,4.375,3.652,4.385,3.645,4.397   c-3.111,4.648-3.964,9.182-3.546,13.66c0.002,0.022,0.014,0.043,0.031,0.056c2.053,1.508,4.041,2.423,5.993,3.029   c0.031,0.01,0.064-0.002,0.084-0.028c0.462-0.63,0.873-1.295,1.226-1.994c0.021-0.041,0.001-0.09-0.042-0.106   c-0.653-0.248-1.274-0.55-1.872-0.892c-0.047-0.028-0.051-0.095-0.008-0.128c0.126-0.094,0.252-0.192,0.372-0.291   c0.022-0.018,0.052-0.022,0.078-0.01c3.928,1.793,8.18,1.793,12.061,0c0.026-0.012,0.056-0.009,0.079,0.01   c0.12,0.099,0.246,0.198,0.373,0.292c0.044,0.032,0.041,0.1-0.007,0.128c-0.598,0.349-1.219,0.645-1.873,0.891   c-0.043,0.016-0.061,0.066-0.041,0.107c0.36,0.698,0.772,1.363,1.225,1.993c0.019,0.027,0.053,0.038,0.084,0.029   c1.961-0.607,3.95-1.522,6.002-3.029c0.018-0.013,0.029-0.033,0.031-0.055c0.5-5.177-0.838-9.674-3.548-13.66   C20.342,4.385,20.33,4.375,20.317,4.37z M8.02,15.331c-1.183,0-2.157-1.086-2.157-2.419s0.955-2.419,2.157-2.419   c1.211,0,2.176,1.095,2.157,2.419C10.177,14.246,9.221,15.331,8.02,15.331z M15.995,15.331c-1.182,0-2.157-1.086-2.157-2.419   s0.955-2.419,2.157-2.419c1.211,0,2.176,1.095,2.157,2.419C18.152,14.246,17.206,15.331,15.995,15.331z" />
        </g>
      </svg>
    ),
    "pinterest": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="pinterest"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <g>
          <path d="M12.01,0C5.388,0,0.02,5.368,0.02,11.99c0,5.082,3.158,9.424,7.618,11.171c-0.109-0.947-0.197-2.408,0.039-3.444   c0.217-0.938,1.401-5.961,1.401-5.961s-0.355-0.72-0.355-1.776c0-1.668,0.967-2.911,2.171-2.911c1.026,0,1.52,0.77,1.52,1.688   c0,1.026-0.651,2.566-0.997,3.997c-0.286,1.194,0.602,2.171,1.776,2.171c2.132,0,3.77-2.25,3.77-5.487   c0-2.872-2.062-4.875-5.013-4.875c-3.414,0-5.418,2.556-5.418,5.201c0,1.026,0.395,2.132,0.888,2.734   C7.52,14.615,7.53,14.724,7.5,14.842c-0.089,0.375-0.296,1.194-0.336,1.362c-0.049,0.217-0.178,0.266-0.405,0.158   c-1.5-0.701-2.438-2.882-2.438-4.648c0-3.78,2.743-7.253,7.924-7.253c4.155,0,7.391,2.961,7.391,6.928   c0,4.135-2.605,7.461-6.217,7.461c-1.214,0-2.359-0.632-2.743-1.382c0,0-0.602,2.289-0.75,2.852   c-0.266,1.046-0.997,2.349-1.49,3.148C9.562,23.812,10.747,24,11.99,24c6.622,0,11.99-5.368,11.99-11.99C24,5.368,18.632,0,12.01,0   z" />
        </g>
      </svg>
    ),
    "behance": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        role="img"
        aria-label="behance"
        aria-hidden={true}
        fill="currentColor"
        viewBox="0 0 24 24"
        className={iconClasses}
        style={style}
      >
        <g>
          <path d="M9.579,9.573C9.579,8.625,8.845,8.4,8.03,8.4H5.909v2.4h2.287C9.005,10.8,9.579,10.446,9.579,9.573z" />
          <path d="M16.666,10.816c-0.98,0-1.634,0.611-1.698,1.591H18.3C18.209,11.416,17.695,10.816,16.666,10.816z" />
          <path d="M8.368,12.509H5.904v2.834H8.32c0.922,0,1.672-0.327,1.672-1.361C9.991,12.927,9.364,12.514,8.368,12.509z" />
          <path d="M19.75,0.3H4.25C1.9,0.3,0,2.2,0,4.55V19.45C0,21.8,1.9,23.7,4.25,23.7h15.5c2.35,0,4.25-1.9,4.25-4.25V4.55   C24,2.2,22.1,0.3,19.75,0.3z M14.555,7.184h4.168v1.012h-4.168V7.184z M8.63,17.1H3.643V6.814h4.848   c1.763,0,3.289,0.498,3.289,2.544c0,1.034-0.482,1.543-1.404,1.982c1.264,0.359,1.875,1.474,1.875,2.765   C12.252,16.195,10.5,17.089,8.63,17.1z M20.341,13.698h-5.368c0,1.189,0.627,1.891,1.827,1.891c0.621,0,1.42-0.332,1.618-0.97   h1.805c-0.557,1.709-1.709,2.507-3.487,2.507c-2.346,0-3.809-1.591-3.809-3.911c0-2.239,1.538-3.942,3.809-3.942   c2.33,0,3.621,1.837,3.621,4.039C20.357,13.441,20.346,13.575,20.341,13.698z" />
        </g>
      </svg>
    ),
  };

  const hasValidIcon = !(!SVGIcons?.[name]);

  const isValid = hasValidIcon;

  if (!isValid) return null;

  return SVGIcons[name];
}

export default getSVGIcon;