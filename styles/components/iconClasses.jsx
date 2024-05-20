import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import getIconVariants from "@styles/variants/iconVariants";

function getIconClasses(size, className) {
  const iconVariants = getIconVariants();

  const hasValidSize = !(!iconVariants.sizes[size]);

  const isValid = hasValidSize;

  if (!isValid) return null;

  const defaultClasses = classNames(
    "inline-block",
    iconVariants?.sizes?.[size],
    "leading-none",
    "whitespace-nowrap"
  );

  return twMerge(defaultClasses, className);
};

export default getIconClasses;
