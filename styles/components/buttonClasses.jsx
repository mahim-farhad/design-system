import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getButtonVariants from "@styles/variants/buttonVariants";

function getButtonClasses(
  icon, extended, size, variant,
  color, rounded, disabled,
  className
) {
  const buttonVariants = getButtonVariants(
    icon, extended, size,
    variant, color
  );

  if (!buttonVariants) return null;

  const buttonClasses = twMerge(clsx(
    "relative",
    "inline-flex",
    "gap-x-2.5",
    "items-center",
    "justify-center",
    buttonVariants.size,
    "font-sans",
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
    rounded ? "rounded-full" : null,
    disabled ? [
      "disabled:pointer-events-none",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50"
    ] : null,
    "transition-all",
    "duration-300",
    "ease-in-out"
  ), className);

  return buttonClasses;
}

export default getButtonClasses;
