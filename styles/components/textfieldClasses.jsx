import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getTextfieldVariants from "@styles/variants/textfieldVariants";

function getTextfieldClasses(
  value, defaultValue, size, rounded,
  isFocused, isInvalid, disabled,
  className
) {
  const isActive = isFocused || defaultValue || value;

  const textfieldVariants = getTextfieldVariants(size, isActive);

  if (!textfieldVariants) return null;

  const textfieldClasses = {
    textfieldWrapper: twMerge(
      clsx(
        "relative",
        "flex",
        "flex-nowrap",
        "w-full",
        textfieldVariants.size.textfieldWrapper,
        "border-2",
        isFocused && !isInvalid
          ? "border-primary"
          : !isFocused && isInvalid
            ? "border-error"
            : "border-gray-300",
        rounded ? "rounded-full" : "rounded-md",
        disabled ? "opacity-50" : "opacity-100",
        "transition-all",
        "duration-300",
        "ease-in-out"
      ),
      className
    ),
    labelWrapper: twMerge(
      clsx(
        "relative",
        "flex",
        "items-center",
        "-my-0.5",
        "mr-auto",
        textfieldVariants.size.labelWrapper,
        "after:content-['']",
        "after:z-0",
        "after:absolute",
        "after:top-0",
        "after:left-0",
        isActive
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
      clsx(
        "z-10",
        "translate-y-0 ",
        textfieldVariants.size.label,
        "py-0.5",
        "px-1.5",
        "font-poppins",
        "leading-[16px]",
        "font-medium",
        isFocused && !isInvalid
          ? "text-primary"
          : !isFocused && isInvalid
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
      clsx(
        "z-10",
        "absolute",
        "top-0",
        "right-0",
        "bottom-0",
        "left-0",
        textfieldVariants.size.input,
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
        disabled ? [
          "disabled:pointer-events-none",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50"
        ] : null,
        "transition-all",
        "duration-300",
        "ease-in-out"
      )
    )
  };

  return textfieldClasses;
}

export default getTextfieldClasses;
