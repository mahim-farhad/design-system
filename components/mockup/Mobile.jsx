import classNames from "classnames"

import Box from "@components/layouts/Box"

function Mobile({ children }) {
  return (
    <Box
      className={classNames(
        "relative",
        "w-[300px]",
        "h-[600px]",
        "mx-auto",
        "bg-white",
        "border-[16px]",
        "border-gray-200",
        "rounded-[2.75rem]",
      )}
    >
      <Box
        className={classNames(
          "absolute",
          "top-2",
          "left-1/2",
          "-translate-x-1/2",
          "w-1/4",
          "h-4",
          "rounded-lg",
          "bg-gray-200",
        )}
      />

      <Box
        className={classNames(
          "absolute",
          "top-[72px]",
          "-start-[19px]",
          "w-[3px]",
          "h-[32px]",
          "bg-gray-400",
          "rounded-s-lg",
        )}
      />

      <Box
        className={classNames(
          "absolute",
          "top-[124px]",
          "-start-[19px]",
          "w-[3px]",
          "h-[46px]",
          "bg-gray-400",
          "rounded-s-lg",
        )}
      />

      <Box
        className={classNames(
          "absolute",
          "top-[178px]",
          "-start-[19px]",
          "w-[3px]",
          "h-[46px]",
          "bg-gray-400",
          "rounded-s-lg",
        )}
      />

      <Box
        className={classNames(
          "absolute",
          "top-[142px]",
          "-end-[19px]",
          "w-[3px]",
          "h-[46px]",
          "bg-gray-400",
          "rounded-e-lg",
        )}
      />

      {children}
    </Box>
  )
}

export default Mobile
