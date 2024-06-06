import clsx from "clsx";

import { twMerge } from "tailwind-merge";

function getTextfieldClasses(
  value, size, rounded, disabled,
  isFocused, isFilled, isInvalid,
  className
) {
  const isActive = isFocused || isFilled || value;

  const textfieldClasses = {
    textfieldWrapper: twMerge(
      clsx(
        "flex",
        "flex-nowrap",
        "w-full",
      ),
      className
    ),
    label: twMerge(
      clsx(
        "z-10",
        "relative",
        "flex",
        "items-center",
        "h-12",
        "py-0.5",
        "px-1.5",
        "ml-3",
        "mr-auto",
        "cursor-pointer",
        isFocused && !isInvalid
          ? "text-primary"
          : !isFocused && isInvalid
            ? "text-error"
            : "text-gray-400",
        "bg-transparent",
        "before:content-[attr(before)]",
        "before:font-poppins",
        "before:text-base",
        "before:leading-[21px]",
        "before:font-medium",
        isActive && [
          "before:-translate-y-[23px]",
          "before:text-sm",
        ],
        "before:rounded-sm",
        "before:transition-all",
        "before:duration-300",
        "before:ease-in-out",
        "after:-z-10",
        "after:absolute",
        "after:top-0",
        "after:left-0",
        isActive
          ? "after:scale-x-1 after:opacity-1"
          : "after:scale-x-0 after:opacity-0",
        "after:w-full",
        "after:h-0.5",
        "after:bg-white",
        "after:transition-all",
        "after:duration-300",
        "after:ease-in-out"
      )
    ),
    input: twMerge(
      clsx(
        "relative",
        "w-full",
        "h-12",
        "px-4",
        "-ml-[100%]",
        "font-poppins",
        "text-base",
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
        isFocused && !isInvalid
          ? "border-primary"
          : !isFocused && isInvalid
            ? "border-error"
            : "border-gray-300",
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
