function getTypographyVariants(type) {
  const typeVariants = {
    h1: [
      "font-headings",
      "text-4xl lg:text-7xl",
      "leading-[1.1]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light dark:text-foreground-dark"
    ],
    h2: [
      "font-headings",
      "text-3xl lg:text-5xl",
      "leading-[1.25]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light dark:text-foreground-dark"
    ],
    h3: [
      "font-headings",
      "text-2xl lg:text-4xl",
      "leading-[1.5]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light dark:text-foreground-dark"
    ],
    h4: [
      "font-headings",
      "text-xl lg:text-3xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light dark:text-foreground-dark"
    ],
    h5: [
      "font-headings",
      "text-lg lg:text-2xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light dark:text-foreground-dark"
    ],
    h6: [
      "font-headings",
      "text-base lg:text-xl",
      "leading-[1.75]",
      "font-bold",
      "uppercase",
      "tracking-wide",
      "text-heading-light dark:text-foreground-dark"
    ],
    p: [
      "font-sans",
      "text-base",
      "leading-[1.75]",
      "font-medium",
      "tracking-normal",
      "text-foreground-light dark:text-foreground-light"
    ],
    small: [
      "font-sans",
      "text-sm",
      "leading-[1.75]",
      "font-medium",
      "uppercase",
      "tracking-normal",
      "text-foreground-light dark:text-foreground-dark"
    ],
    blockquote: [
      "p-4",
      "font-sans",
      "text-base",
      "leading-[1.75]",
      "font-medium",
      "text-foreground-light dark:text-foreground-dark",
      "bg-surface-light dark:bg-surface-dark",
      "border-l-2",
      "border-primary dark:border-primary"
    ]
  };

  const typeVariant = typeVariants?.[type];

  const isValid = typeVariant;

  if (!isValid) return null;

  const typographyVariants = { type: typeVariant };

  return typographyVariants;
}

export default getTypographyVariants;
