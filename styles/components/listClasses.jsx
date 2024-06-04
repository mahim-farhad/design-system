import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getListVariants from "@styles/variants/listVariants";

function getListClasses(type, className) {
  const listVariants = getListVariants(type);

  if (!listVariants) return null;

  const listClasses = twMerge(
    clsx(
      "flex",
      "flex-col",
      "min-w-[240px]",
      "p-0",
      "m-0",
      listVariants.type,
      "list-inside",
    ),
    className
  );

  return listClasses;
}

function getListItemClasses(className) {
  const listItemClasses = className ? twMerge(className) : null;

  return listItemClasses;
}

export { getListClasses, getListItemClasses };
