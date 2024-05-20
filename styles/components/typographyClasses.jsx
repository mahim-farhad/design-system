import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import getTypeVariants from "@styles/variants/typeVariants";

function getTypographyClasses(
  type,
  gradient,
  className
) {
  const typeVariants = getTypeVariants();

  const hasValidType = !(!typeVariants.types[type]);

  const isValid = hasValidType;

  if (!isValid) return null;

  const defaultClasses = classNames(
    typeVariants?.types?.[type],
    gradient && classNames(
      "text-transparent",
      "bg-clip-text",
    )
  );

  return twMerge(defaultClasses, className);
};

export default getTypographyClasses;
