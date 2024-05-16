import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import {
  getSizeVariants,
  getButtonVariants
} from "@styles/variants/buttonVariants";

function getButtonClasses(params) {
  const {
    icon,
    extended,
    size,
    variant,
    color,
    gradient,
    rounded,
    disabled,
    restClasses
  } = params;

  const sizeVariants = getSizeVariants();
  const buttonVariants = getButtonVariants();

  const hasValidSize = (
    icon && !extended ? (
      !sizeVariants?.iconOnly?.[size]
    ) : !sizeVariants?.[size]
  );

  const isValid = !hasValidSize || !buttonVariants?.[variant]?.[color];

  if (!isValid) return null;

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
        sizeVariants?.iconOnly?.[size]
      ) : sizeVariants?.[size],
      "font-poppins",
      "font-medium",
      "uppercase",
      "text-center",
      "whitespace-nowrap",
      "appearance-none",
      "overflow-hidden",
      "cursor-pointer",
      buttonVariants?.[variant]?.[color],
      // (gradient && variant === "gradient") ? (
      //   buttonVariants?.[variant]?.[gradient]?.[color]
      // ) : buttonVariants?.[variant]?.[color],
      "outline-none",
      "border-2",
      rounded ? "rounded-full" : "rounded-lg",
      "transition-all",
      "duration-300",
      "ease-in-out",
      disabled && classNames(
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        "disabled:pointer-events-none",
      )
    )
  );

  return twMerge(
    defaultClasses,
    restClasses
  );
};

export default getButtonClasses;
