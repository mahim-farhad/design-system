import clsx from "clsx";

import { twMerge } from "tailwind-merge";

// import getTextfieldVariants from "@styles/variants/textfieldVariants";

function getTextfieldVariants(size) {
  const sizeVariants = {
    input: {
      sm: "h-10 px-3.5 text-sm",
      base: "h-12 pl-[calc(1rem-2px)] pr-[calc(3rem-2px)] text-base",
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

function getTextfieldClasses(size, rounded, isValid, isInvalid, className) {
  const textfieldVariants = getTextfieldVariants(size);

  if (!textfieldVariants) return null;

  const textfieldClasses = {
    textfieldWrapper: "relative w-full",
    label: twMerge(clsx(
      "block",
      "py-1 px-4",
      "font-sans text-sm leading-[16px] font-medium uppercase",
      "text-gray-400 dark:text-gray-400",
      "transition-all duration-150 ease-in-out"
    )),
    inputWrapper: twMerge(clsx(
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
      isInvalid ? "border-error" : "border-gray-200",
      rounded ? "rounded-full" : "rounded-lg",
      "disabled:pointer-events-none",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
      "transition-all duration-150 ease-in-out"
    ), className),
    iconWrapper: twMerge(clsx(
      "z-10 absolute right-0",
      "flex items-center justify-center",
      textfieldVariants?.size?.iconWrapper,
      "font-sans text-sm font-medium",
      isInvalid
        ? "dark:text-error"
        : "dark:text-gray-400",
      "transition-all duration-150 ease-in-out"
    )),
    helperTextWrapper: "z-10 absolute",
    helperText: twMerge(clsx(
      "py-1 px-4",
      "text-xs font-semibold uppercase",
      isInvalid
        ? "dark:text-error"
        : "dark:text-gray-300",
    )),
  };

  return textfieldClasses;
}

export default getTextfieldClasses;
