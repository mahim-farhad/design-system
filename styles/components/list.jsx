import { twMerge } from "tailwind-merge";

import classNames from "classnames";

const getTypeVariants = () => ({
  ul: classNames(
    "list-none",
  ),
  ol: classNames(
    "list-disc",
  )
});

function getListClasses(type, className) {
  const typeVariants = getTypeVariants();

  if (!typeVariants[type]) return null;

  return twMerge(
    "flex",
    "flex-col",
    "p-0",
    "m-0",
    classNames({
      [typeVariants[type]]: typeVariants[type]
    }),
    "list-inside",
    "transition-all",
    "duration-300",
    "ease-in-out",
    className
  );
};

export default getListClasses;
