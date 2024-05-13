import { twMerge } from "tailwind-merge"

import classNames from "classnames"

export const getSizeVariants = () => ({
  iconOnly: {
    xs: classNames("w-8", "h-8"),
    sm: classNames("w-10", "h-10"),
    base: classNames("w-12 h-12"),
    lg: classNames("w-14 h-14"),
    xl: classNames("w-16 h-16")
  },
  textOnly: {
    xs: classNames(
      "h-8",
      "py-1.5",
      "px-6",
      "text-sm",
      "leading-[16px]",
    ),
    sm: classNames(
      "h-10",
      "py-2",
      "px-6",
      "text-sm",
      "leading-[16px]",
    ),
    base: classNames(
      "h-20",
      "py-3",
      "px-8",
      "text-base",
      "leading-[15px]",
    ),
    lg: classNames(
      "h-14",
      "py-4",
      "px-8",
      "text-lg",
      "leading-[16px]",
    ),
    xl: classNames(
      "h-16",
      "py-5",
      "px-10",
      "text-xl",
      "leading-[15px]",
    ),
  },
})

export function getInputClasses({
  isLabelFloating,
  isInvalid
}) {
  const sizeVariants = getSizeVariants({
    isLabelFloating,
    isInvalid
  })

  return {
    inputWrapper: twMerge(
      classNames(
        "relative",
        "flex",
        "flex-wrap",
        "w-full",
        { [sizeVariants.inputWrapper[size]]: size },
        { ["opacity-100"]: !disabled },
        { ["opacity-50"]: disabled },
        "border-2",
        { "border-gray-300": !isFocused && !isInvalid },
        { "border-primary": isFocused && !isInvalid },
        { "border-error": !isFocused && isInvalid },
        "rounded-md",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    ),
    labelWrapper: twMerge(
      classNames(
        "relative",
        "inline-flex",
        "items-center",
        { [sizeVariants.labelWrapper[size]]: size },
        "-my-0.5",
        "after:content-['']",
        "after:z-0",
        "after:absolute",
        "after:top-0",
        "after:left-0",
        "after:scale-x-0",
        { "after:scale-x-1 after:opacity-1": isLabelFloating },
        "after:origin-center",
        "after:w-full",
        "after:h-0.5",
        { "after:opacity-0": !isLabelFloating },
        "after:bg-white",
        "after:transition-all",
        "after:duration-300",
        "after:ease-in-out"
      )
    ),
    label: twMerge(
      classNames(
        "z-10",
        "relative",
        "translate-y-0 ",
        { [sizeVariants.label[size]]: size },
        "py-0.5",
        "px-1.5",
        "font-poppins",
        "leading-[17px]",
        "font-medium",
        { "text-gray-400": !isFocused && !isInvalid },
        { "text-primary": isFocused && !isInvalid },
        { "text-error": !isFocused && isInvalid },
        "bg-transparent",
        "rounded-sm",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    ),
    input: twMerge(
      classNames(
        "z-10",
        "absolute",
        "top-0",
        "right-0",
        "bottom-0",
        "left-0",
        { [sizeVariants.input[size]]: size },
        "-my-0.5",
        "-mx-0.5",
        "font-poppins",
        "leading-[25px]",
        "font-medium",
        "whitespace-nowrap",
        "appearance-none",
        { ["cursor-pointer"]: !disabled },
        { ["cursor-not-allowed pointer-events-none"]: disabled },
        "text-gray-400",
        "bg-transparent",
        "outline-0",
        "border-2",
        "border-transparent",
        "rounded-md",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    ),
    iconWrapper: twMerge(
      classNames(
        "flex",
        "items-center",
        "justify-center",
        "-my-0.5",
        "-mr-0.5",
        { [sizeVariants.iconWrapper[size]]: size },
        { "text-gray-400": !isInvalid },
        { "text-error": isInvalid },
        "rounded-md",
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    )
  }
}
