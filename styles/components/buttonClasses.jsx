import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import getbuttonVariants from "@styles/variants/buttonVariants";

function getButtonClasses(
  icon,
  extended,
  size,
  variant,
  color,
  rounded,
  disabled,
  className
) {
  const buttonVariants = getbuttonVariants();

  const defaultClasses = (
    classNames(
      "relative",
      (icon && extended) ? (
        classNames(
          "inline-flex",
          "gap-x-2.5",
          "items-center",
          "justify-center"
        )
      ) : "inline-block",
      (icon && !extended) ? (
        buttonVariants?.sizes?.iconOnly?.[size] ||
        buttonVariants?.sizes?.iconOnly?.base
      ) : (
        buttonVariants?.sizes?.[size] ||
        buttonVariants?.sizes?.base
      ),
      "font-poppins",
      "font-medium",
      "uppercase",
      "text-center",
      "whitespace-nowrap",
      "appearance-none",
      "overflow-hidden",
      "cursor-pointer",
      buttonVariants?.colors?.[variant]?.[color] ||
      buttonVariants?.colors?.filled?.gray,
      "outline-none",
      "border-2",
      rounded ? "rounded-full" : "rounded-lg",
      disabled && classNames(
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        "disabled:pointer-events-none"
      ),
      "transition-all",
      "duration-300",
      "ease-in-out"
    )
  );

  return twMerge(defaultClasses, className);
};

export default getButtonClasses;
