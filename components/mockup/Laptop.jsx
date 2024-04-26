import classNames from "classnames"

import Box from "@components/layouts/Box"

function Laptop() {
  return (
    <Box>
      <Box
        className={classNames(
          "relative",
          "mx-auto",
          "max-w-[301px] md:max-w-[768px]",
          "h-[172px] md:h-[400px]",
          "bg-white",
          "border-[8px]",
          "border-gray-200",
          "rounded-t-xl",
        )}
      />

      <Box
        className={classNames(
          "relative",
          "mx-auto",
          "max-w-[351px] md:max-w-[848px]",
          "h-[17px] md:h-[21px]",
          "bg-gray-400",
          "rounded-t-sm",
          "rounded-b-xl",
        )}
      >
        <Box
          className={classNames(
            "absolute",
            "top-0",
            "left-1/2",
            "-translate-x-1/2",
            "w-[56px] md:w-[96px]",
            "h-[5px] md:h-[8px]",
            "bg-gray-200",
            "rounded-b-md",
          )}
        />
      </Box>
    </Box>
  )
}

export default Laptop
