import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getButtonVariants from "@styles/variants/buttonVariants";

function getButtonClasses(
  icon, extended, size,
  variant, color,
  rounded, disabled,
  className
) {
  const buttonVariants = getButtonVariants(
    icon, extended, size,
    variant, color
  );

  if (!buttonVariants) return null;

  const buttonClasses = twMerge(
    clsx(
      "relative",
      icon && extended ? [
        "inline-flex",
        "gap-x-2.5",
        "items-center",
        "justify-center"
      ] : "inline-block",
      buttonVariants.size,
      "font-poppins",
      "font-medium",
      "uppercase",
      "text-center",
      "whitespace-nowrap",
      "appearance-none",
      "overflow-hidden",
      "cursor-pointer",
      buttonVariants.color,
      "outline-none",
      "border-2",
      rounded ? "rounded-full" : "rounded-lg",
      disabled ? [
        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50"
      ] : null,
      "transition-all",
      "duration-300",
      "ease-in-out"
    ),
    className
  );

  return buttonClasses;
}

export default getButtonClasses;
