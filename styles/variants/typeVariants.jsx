import classNames from "classnames";

function getTypeVariants() {
  const typeVariants = {
    h1: classNames(
      "font-headings",
      "text-4xl lg:text-7xl",
      "leading-[1.1]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h2: classNames(
      "font-headings",
      "text-3xl lg:text-5xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h3: classNames(
      "font-headings",
      "text-2xl lg:text-4xl",
      "leading-[1.5]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h4: classNames(
      "font-headings",
      "text-xl lg:text-3xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h5: classNames(
      "font-headings",
      "text-lg lg:text-2xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    h6: classNames(
      "font-headings",
      "text-base lg:text-xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light"
    ),
    p: classNames(
      "font-poppins",
      "text-base",
      "leading-[1.75]",
      "font-medium",
      "tracking-normal",
      "text-font-light"
    ),
    small: classNames(
      "font-poppins",
      "text-sm",
      "leading-[1.75]",
      "font-medium",
      "uppercase",
      "tracking-normal",
      "text-font-light"
    ),
    blockquote: classNames(
      "p-4",
      "font-poppins",
      "text-base",
      "leading-[1.75]",
      "font-medium",
      "text-font-light dark:text-font-dark",
      "bg-surface-light dark:bg-surface-dark",
      "border-l-2",
      "border-primary dark:border-primary"
    )
  };

  return { types: typeVariants };
};

export default getTypeVariants;
