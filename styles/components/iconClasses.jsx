import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getIconVariants from "@styles/variants/iconVariants";

function getIconClasses(size, className) {
  const iconVariants = getIconVariants(size);

  if (!iconVariants) return null;

  const iconClasses = twMerge(
    clsx(
      "inline-block",
      iconVariants.size,
      "leading-none",
      "whitespace-nowrap",
      "text-gray-400",
    ),
    className
  );

  return iconClasses;
}

export default getIconClasses;
