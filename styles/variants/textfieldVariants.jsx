import clsx from "clsx";

function getTextfieldVariants(size, isLabelFloating) {
  const sizeVariants = {
    textfieldWrapper: {
      sm: "h-10",
      base: "h-12",
      lg: "h-14",
      xl: "h-16"
    },
    labelWrapper: {
      sm: "ml-2",
      base: "ml-2.5",
      lg: "ml-2.5",
      xl: "ml-2.5"
    },
    label: {
      sm: clsx(
        "text-base",
        isLabelFloating && [
          "-translate-y-[19px]",
          "text-sm"
        ]
      ),
      base: clsx(
        "text-base",
        isLabelFloating && [
          "-translate-y-[23px]",
          "text-sm"
        ]
      ),
      lg: clsx(
        "text-lg",
        isLabelFloating && [
          "-translate-y-[27px]",
          "text-base"
        ]
      ),
      xl: clsx(
        "text-lg",
        isLabelFloating && [
          "-translate-y-[31px]",
          "text-base"
        ]
      )
    },
    input: {
      sm: clsx(
        "px-3.5",
        "text-sm"
      ),
      base: clsx(
        "px-4",
        "text-base"
      ),
      lg: clsx(
        "px-4",
        "text-lg"
      ),
      xl: clsx(
        "px-4",
        "text-xl"
      )
    },
    iconWrapper: {
      sm: clsx(
        "w-10",
        "h-10",
        "p-3"
      ),
      base: clsx(
        "w-12",
        "h-12",
        "p-3.5"
      ),
      lg: clsx(
        "w-14",
        "h-14",
        "p-4"
      ),
      xl: clsx(
        "w-16",
        "h-16",
        "p-5"
      )
    }
  };

  const hasValidSize = !(!sizeVariants?.input?.[size]);

  const isValid = hasValidSize;

  if (!isValid) return null;

  const textfieldVariants = {
    size: {
      textfieldWrapper: sizeVariants.textfieldWrapper[size],
      labelWrapper: sizeVariants.labelWrapper[size],
      label: sizeVariants.label[size],
      input: sizeVariants.input[size],
      iconWrapper: sizeVariants.iconWrapper[size],
    }
  };

  return textfieldVariants;
};

export default getTextfieldVariants;
