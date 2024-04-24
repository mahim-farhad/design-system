import classNames from "classnames"

import Box from "@components/layouts/Box"

function Range({
  min = 0,
  max = 100,
  value,
  onChange
}) {
  return (
    <Box
      className={classNames(
        "relative",
      )}
    >
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className={classNames(
          "z-10",
          "relative",
          "w-full",
          "h-1",
          "appearance-none",
          "outline-none",
          "bg-transparent",
          "rounded-full",
        )}
      />

      <Box
        className={classNames(
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-y-1/2",
          "-translate-x-1/2",
          "w-full",
          "h-1",
          "mt-1",
          "bg-gray-300",
        )}
      >
        <span
          className={classNames(
            "block",
            "h-1",
            "bg-primary",
          )}
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        />
      </Box>
    </Box>
  )
}

export default Range
