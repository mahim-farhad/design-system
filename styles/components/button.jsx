import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import {
  getSizeVariants,
  getButtonVariants
} from "@styles/variants/buttonVariants";

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
  const sizeVariants = getSizeVariants();
  const buttonVariants = getButtonVariants();

  const isInvalid = (
    !sizeVariants[size] ||
    !sizeVariants.iconOnly[size] ||
    !buttonVariants[variant] ||
    !buttonVariants[variant][color]
  );

  if (isInvalid) return null;

  return twMerge(
    "relative",
    icon && extended ? (
      classNames(
        "inline-flex",
        "gap-x-2.5",
        "items-center",
        "justify-center"
      )
    ) : "inline-block",
    classNames({
      [sizeVariants.iconOnly[size]]: (
        icon && !extended
      ) && sizeVariants.iconOnly[size]
    }, {
      [sizeVariants[size]]: (
        !icon || extended
      ) && sizeVariants[size]
    }),
    "font-poppins",
    "font-medium",
    "uppercase",
    "text-center",
    "whitespace-nowrap",
    "appearance-none",
    "overflow-hidden",
    disabled ? (
      classNames(
        "cursor-not-allowed",
        "pointer-events-none",
        "opacity-50"
      )
    ) : "cursor-pointer",
    buttonVariants[variant] &&
    buttonVariants[variant][color] && (
      [buttonVariants[variant][color]]
    ),
    "outline-0",
    "border-2",
    rounded ? "rounded-full" : "rounded-lg",
    "transition-all",
    "duration-300",
    "ease-in-out",
    className
  );
};

export default getButtonClasses;
