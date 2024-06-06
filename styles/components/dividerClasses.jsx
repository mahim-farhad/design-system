import clsx from "clsx";

import { twMerge } from "tailwind-merge";

function getDividerClasses(className) {
  const dividerClasses = twMerge(
    clsx(
      "w-full",
      "h-px",
      "bg-gray-300",
      "border-0",
    ),
    className
  );

  return dividerClasses;
}

export default getDividerClasses;
