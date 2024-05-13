import { twMerge } from "tailwind-merge"

import classNames from "classnames"

const getSizeVariants = ({
  isLabelFloating,
  isInvalid
}) => ({
  selectWrapper: {
    sm: "h-10",
    base: "h-12",
    lg: "h-14",
    xl: "h-16"
  },
  labelWrapper: {
    sm: "mx-2",
    base: "mx-2.5",
    lg: "mx-2.5",
    xl: "mx-2.5"
  },
  label: {
    sm: classNames(
      "text-base",
      { "-translate-y-[19px]": isLabelFloating },
      { "text-sm": isLabelFloating }
    ),
    base: classNames(
      "text-base",
      { "-translate-y-[23px] text-sm": isLabelFloating },
      { "text-sm": isLabelFloating }
    ),
    lg: classNames(
      "text-lg",
      { "-translate-y-[27px]": isLabelFloating },
      { "text-base": isLabelFloating }
    ),
    xl: classNames(
      "text-lg",
      { "-translate-y-[31px]": isLabelFloating },
      { "text-base": isLabelFloating }
    )
  },
  input: {
    sm: classNames(
      "px-3.5",
      { "pr-[38px]": isInvalid },
      "text-sm"
    ),
    base: classNames(
      "px-4",
      { "pr-[46px]": isInvalid },
      "text-base"
    ),
    lg: classNames(
      "px-4",
      { "pr-[54px]": isInvalid },
      "text-lg"
    ),
    xl: classNames(
      "px-4",
      { "pr-[62px]": isInvalid },
      "text-xl"
    )
  },
  iconWrapper: {
    sm: classNames(
      "w-10",
      "h-10",
      "p-3"
    ),
    base: classNames(
      "w-12",
      "h-12",
      "p-3.5"
    ),
    lg: classNames(
      "w-14",
      "h-14",
      "p-4"
    ),
    xl: classNames(
      "w-16",
      "h-16",
      "p-5"
    )
  }
})

export function getSelectClasses({
  value,
  size,
  isFocused,
  isFilled,
  isInvalid,
  disabled
}) {
  const isLabelFloating = (isFocused || isFilled || isInvalid || Boolean(value))

  const sizeVariants = getSizeVariants({
    isLabelFloating,
    isInvalid
  })

  return {
    selectWrapper: twMerge(
      classNames(
        "relative",
        "flex",
        "flex-wrap",
        "w-full",
        { [sizeVariants.selectWrapper[size]]: size },
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
    carotWrapper: twMerge(
      classNames(
        "flex",
        "items-center",
        "justify-center",
        "-my-0.5",
        "-mr-0.5",
        "ml-auto",
        { [sizeVariants.iconWrapper[size]]: size },
        "text-gray-400",
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
    ),
  }
}
