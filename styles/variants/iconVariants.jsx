function getIconVariants(size) {
  const sizeVariants = {
    xs: "w-4 h-4",
    sm: "w-4 h-4",
    base: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-6 h-6"
  };

  const hasValidSize = !(!sizeVariants?.[size]);

  const isValid = hasValidSize;

  if (!isValid) return null;

  const iconVariants = { size: sizeVariants[size] };

  return iconVariants;
}

export default getIconVariants;
