import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import getTextfieldVariants from "@styles/variants/textfieldVariants";

function getTextfieldClasses(
  size,
  rounded,
  disabled,
  isFocused,
  isInvalid,
  isLabelFloating,
  className
) {
  const textfieldVariants = getTextfieldVariants(isLabelFloating);

  const hasValidSize = !(!textfieldVariants.sizes?.input?.[size]);

  const isValid = hasValidSize;

  if (!isValid) return null;

  const defaultClasses = {
    inputWrapper: twMerge(
      classNames(
        "relative",
        "flex",
        "flex-nowrap",
        "w-full",
        textfieldVariants.sizes?.inputWrapper?.[size],
        "border-2",
        (isFocused && !isInvalid)
          ? "border-primary"
          : (!isFocused && isInvalid)
            ? "border-error"
            : "border-gray-300",
        rounded ? "rounded-full" : "rounded-md",
        disabled ? "opacity-50" : "opacity-100",
        "transition-all",
        "duration-300",
        "ease-in-out"
      ), className
    ),
    labelWrapper: twMerge(
      classNames(
        "relative",
        "flex",
        "items-center",
        "justify-center",
        "-my-0.5",
        "mr-auto",
        textfieldVariants.sizes?.labelWrapper?.[size],
        "after:content-['']",
        "after:z-0",
        "after:absolute",
        "after:top-0",
        "after:left-0",
        isLabelFloating
          ? "after:scale-x-1 after:opacity-1"
          : "after:scale-x-0 after:opacity-0",
        "after:origin-center",
        "after:w-full",
        "after:h-0.5",
        "after:bg-white",
        "after:transition-all",
        "after:duration-300",
        "after:ease-in-out"
      )
    ),
    label: twMerge(
      classNames(
        "z-10",
        "translate-y-0 ",
        textfieldVariants.sizes?.label?.[size],
        "py-0.5",
        "px-1.5",
        "font-poppins",
        "leading-[16px]",
        "font-medium",
        (isFocused && !isInvalid)
          ? "text-primary"
          : (!isFocused && isInvalid)
            ? "text-error"
            : "text-gray-400",
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
        textfieldVariants.sizes?.input?.[size],
        "-my-0.5",
        "-mx-0.5",
        "font-poppins",
        "leading-[25px]",
        "font-medium",
        "uppercase",
        "whitespace-nowrap",
        "appearance-none",
        "cursor-pointer",
        "text-gray-400",
        "bg-transparent",
        "outline-none",
        "border-2",
        "border-transparent",
        rounded ? "rounded-full" : "rounded-lg",
        disabled && classNames(
          "disabled:pointer-events-none",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50"
        ),
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    )
  };

  return defaultClasses;
}

export default getTextfieldClasses;
