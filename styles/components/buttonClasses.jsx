import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import getbuttonVariants from "@styles/variants/buttonVariants";

function getButtonClasses(
  icon,
  extended,
  size,
  variant,
  color,
  gradient,
  rounded,
  disabled,
  className
) {
  const buttonVariants = getbuttonVariants();

  const defaultClasses = twMerge(
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
        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50"
      ),
      "transition-all",
      "duration-300",
      "ease-in-out"
    ), className
  );

  return defaultClasses;
};

export default getButtonClasses;
