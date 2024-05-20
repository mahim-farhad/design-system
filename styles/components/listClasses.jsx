import { twMerge } from "tailwind-merge";

import classNames from "classnames";

import getListVariants from "@styles/variants/listVariants";

function getListClasses(type, className) {
  const listVariants = getListVariants();

  const hasValidType = !(!listVariants.types[type]);

  const isValid = hasValidType;

  if (!isValid) return null;

  const defaultClasses = (
    classNames(
      "flex",
      "flex-col",
      "min-w-[240px]",
      "p-0",
      "m-0",
      listVariants?.types?.[type],
      "list-inside",
    )
  );

  return twMerge(defaultClasses, className);
};

export default getListClasses;
