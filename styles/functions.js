import classNames from "classnames"

const getSizeVariants = (
  isFocused,
  isFilled,
  value
) => ({
  label: {
    sm: classNames(
      "text-base", {
      "-translate-y-[19px] text-sm":
        isFocused || isFilled || value
    }),
    base: classNames(
      "text-base", {
      "-translate-y-[23px] text-sm":
        isFocused || isFilled || value
    }),
    lg: classNames(
      "text-lg", {
      "-translate-y-[27px] text-base":
        isFocused || isFilled || value
    }),
    xl: classNames(
      "text-lg", {
      "-translate-y-[31px] text-base":
        isFocused || isFilled || value
    }),
  },
  input: {
    sm: classNames("h-10", "px-3", "text-sm"),
    base: classNames("h-12", "px-3.5", "text-base"),
    lg: classNames("h-14", "px-4", "text-lg"),
    xl: classNames("h-16", "px-4", "text-xl"),
  },
})

function TextFieldStyles() {
  const sizeVariants = {
    label: {
      sm: classNames(
        "left-[0.5rem]",
        {
          "z-0 -translate-y-1/2 text-base":
            !isFocused ||
            !isFilled ||
            !value
        },
        {
          "z-10 -translate-y-[27px] text-sm":
            isFocused ||
            isFilled ||
            value
        },
      ),
      base: classNames(
        "left-[0.625rem]",
        {
          "z-0 -translate-y-1/2 text-base":
            !isFocused ||
            !isFilled ||
            !value
        },
        {
          "z-10 -translate-y-[36px] text-sm":
            isFocused ||
            isFilled ||
            value
        },
      ),
      lg: classNames(
        "left-[0.75rem]",
        {
          "z-0 -translate-y-1/2 text-lg":
            !isFocused ||
            !isFilled ||
            !value
        },
        {
          "z-10 -translate-y-[35px] text-base":
            isFocused ||
            isFilled ||
            value
        },
      ),
      xl: classNames(
        "left-[0.75rem]",
        {
          "z-0 -translate-y-1/2 text-lg":
            !isFocused ||
            !isFilled ||
            !value
        },
        {
          "z-10 -translate-y-[39px] text-base":
            isFocused ||
            isFilled ||
            value
        },
      ),
    },
    input: {
      sm: classNames(
        "h-10",
        "py-1.5",
        "pl-3",
        { "pr-3": !isValid },
        { "pr-10": isValid },
        "text-xs",
      ),
      base: classNames(
        "h-12",
        "py-2",
        "pl-3.5",
        { "pr-3.5": !isValid },
        { "pr-12": isValid },
        "text-sm",
      ),
      lg: classNames(
        "h-14",
        "py-3",
        "pl-4",
        { "pr-4": !isValid },
        { "pr-14": isValid },
        "text-base",
      ),
      xl: classNames(
        "h-16",
        "py-3",
        "pl-4",
        { "pr-4": !isValid },
        { "pr-16": isValid },
        "text-lg",
      ),
    },
    icon: {
      sm: classNames(
        "w-10",
        "h-10",
        "p-3",
      ),
      base: classNames(
        "w-12",
        "h-12",
        "p-3.5",
      ),
      lg: classNames(
        "w-14",
        "h-14",
        "p-4",
      ),
      xl: classNames(
        "w-16",
        "h-16",
        "p-5",
      ),
    },
  }

  const labelClasses = twMerge(
    classNames(
      "absolute",
      "top-1/2",
      { [sizeVariants.label[size]]: size },
      "py-1",
      "px-1.5",
      "font-poppins",
      "leading-[17px]",
      "font-medium",
      "text-gray-400",
      { ["text-gray-300"]: disabled },
      { ["text-primary"]: isFocused && !isValid },
      { ["text-error"]: !isFocused && isValid },
      "bg-surface-light",
      "rounded-md",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "after:content-['']",
      "after:-z-[1px]",
      "after:absolute",
      "after:top-1/2",
      "after:left-1/2",
      "after:-translate-y-1/2",
      "after:-translate-x-1/2",
      "after:w-full",
      "after:border-t-2",
      "after:border-t-gray-200",
    )
  )

  const inputClasses = twMerge(
    classNames(
      "w-full",
      { [sizeVariants.input[size]]: size },
      "font-poppins",
      "leading-[17px]",
      "font-medium",
      "whitespace-nowrap",
      "appearance-none",
      { ["cursor-pointer"]: !disabled },
      { ["cursor-not-allowed pointer-events-none opacity-50"]: disabled },
      "text-gray-400",
      "bg-transparent",
      "outline-0",
      "border-2",
      "border-gray-200",
      { ["border-primary"]: isFocused },
      { ["border-error"]: isValid },
      "rounded-lg",
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  )
}