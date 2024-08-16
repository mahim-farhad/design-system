import clsx from "clsx";

import { twMerge } from "tailwind-merge";

function classNames(...classes) {
  return twMerge(clsx(classes)) || undefined;
}

function capitalize(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return word;
  }

  return (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

export { classNames, capitalize };
