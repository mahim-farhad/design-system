import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getTextfieldVariants from "@styles/variants/textfieldVariants";

function getTextfieldClasses(
  size, rounded, success,
  error, className
) {
  const textfieldVariants =
    getTextfieldVariants(size, false);

  if (!textfieldVariants) return null;

  const textfieldClasses = {
    input: twMerge(clsx(
      "z-10 relative",
      "w-full h-12 py-2 px-3.5",
      "font-sans text-base font-normal",
      "whitespace-nowrap appearance-none cursor-pointer",
      "text-gray-400 dark:text-gray-400",
      "bg-transparent dark:bg-white",
      "outline-none border-2",
      "focus:border-primary",
      success && !error
        ? "valid:border-success"
        : !success && error
          ? "invalid:border-error"
          : "border-gray-200",
      rounded ? "rounded-full" : "rounded-lg",
      "disabled:pointer-events-none",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
      "transition-all duration-200 ease-in-out"
    ), className),
  };

  return textfieldClasses;
}

export default getTextfieldClasses;
