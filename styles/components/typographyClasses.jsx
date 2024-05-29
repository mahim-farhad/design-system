import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getTypeVariants from "@styles/variants/typographyVariants";

function getTypographyClasses(type, gradient, className) {
  const typographyVariants = getTypeVariants(type);

  if (!typographyVariants) return null;

  const typographyClasses = twMerge(
    clsx(
      typographyVariants.type,
      gradient && [
        "text-transparent",
        "bg-clip-text",
      ]
    ),
    className
  );

  return typographyClasses;
}

export default getTypographyClasses;
