import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import { getSizeVariants } from "@styles/variants/iconVariants";

function getIconClasses(params) {
  const {
    size,
    className
  } = params;

  const sizeVariants = getSizeVariants();

  const hasValidSize = !sizeVariants?.[size];

  const isValid = !hasValidSize;

  if (!isValid) return null;

  const defaultClasses = (
    classNames(
      "inline-block",
      sizeVariants?.[size],
      "leading-none",
      "whitespace-nowrap",
    )
  );

  return twMerge(
    defaultClasses,
    className
  );
};

export default getIconClasses;
