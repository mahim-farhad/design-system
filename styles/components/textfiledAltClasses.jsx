import clsx from "clsx";

import { twMerge } from "tailwind-merge";

// import getTextfieldVariants from "@styles/variants/textfieldVariants";

function getTextfieldVariants(size) {
  const sizeVariants = {
    input: {
      sm: "h-10 px-3.5 text-sm",
      base: "h-12 px-4 text-base",
      lg: "h-14 px-4 text-lg",
      xl: "h-16 px-4 text-xl"
    },
    iconWrapper: {
      sm: "w-10 h-10 p-3",
      base: "w-12 h-12 p-3.5",
      lg: "w-14 h-14 p-4",
      xl: "w-16 h-16 p-5"
    }
  };

  const sizeVariant = {
    input: sizeVariants?.input?.[size],
    iconWrapper: sizeVariants?.iconWrapper?.[size]
  };

  const isValid =
    sizeVariant?.input && sizeVariant?.iconWrapper;

  if (!isValid) return null;

  const textfieldVariants = { size: sizeVariant };

  return textfieldVariants;
}

function getTextfieldClasses(
  size, rounded, success,
  error, className
) {
  const textfieldVariants =
    getTextfieldVariants(size);

  if (!textfieldVariants) return null;

  const textfieldClasses = {
    textfieldWrapper: twMerge(clsx(
      "relative",
      "flex flex-nowrap items-center",
      rounded ? "rounded-full" : "rounded-lg",
    )),
    input: twMerge(clsx(
      "z-10 relative",
      "w-full",
      textfieldVariants?.size?.input,
      "font-sans text-base font-normal",
      "whitespace-nowrap appearance-none cursor-pointer",
      "text-gray-400 dark:text-gray-400",
      "bg-white dark:bg-white",
      "outline-none border-2",
      "focus:border-primary",
      success && !error
        ? "border-success"
        : !success && error
          ? "border-error"
          : "border-gray-200",
      rounded ? "rounded-full" : "rounded-lg",
      "disabled:pointer-events-none",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
      "transition-all duration-200 ease-in-out"
    ), className),
    iconWrapper: twMerge(clsx(
      "z-10 absolute right-0",
      "flex items-center justify-center",
      textfieldVariants?.size?.iconWrapper,
      "font-sans text-sm font-medium",
      "text-gray-400 dark:text-gray-400",
    ))
  };

  return textfieldClasses;
}

export default getTextfieldClasses;
