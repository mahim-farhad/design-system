import { twMerge } from "tailwind-merge";

import { getTypeVariants } from "@styles/variants/typeVariants";

function getTypographyClasses(type, className,) {
  const typeVariants = getTypeVariants();

  if (!typeVariants[type]) return null;

  return twMerge(typeVariants[type], className);
};

export default getTypographyClasses;
