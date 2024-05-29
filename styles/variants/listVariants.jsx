function getListVariants(type) {
  const typeVariants = {
    ul: "list-none",
    ol: "list-disc"
  };

  const hasValidType = !(!typeVariants?.[type]);

  const isValid = hasValidType;

  if (!isValid) return null;

  const listVariants = { type: typeVariants[type] };

  return listVariants;
}

export default getListVariants;
