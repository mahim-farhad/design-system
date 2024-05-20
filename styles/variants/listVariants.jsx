import classNames from "classnames";

function getListVariants() {
  const typeVariants = {
    ul: classNames(
      "list-none",
    ),
    ol: classNames(
      "list-disc",
    )
  };

  return { types: typeVariants };
};

export default getListVariants;
