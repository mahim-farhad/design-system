import classNames from "classnames";

function getInputVariants(isLabelFloating) {
  const sizeVariants = {
    inputWrapper: {
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
      sm: classNames(
        "text-base",
        { "-translate-y-[19px] text-sm": isLabelFloating }
      ),
      base: classNames(
        "text-base",
        { "-translate-y-[23px] text-sm": isLabelFloating }
      ),
      lg: classNames(
        "text-lg",
        { "-translate-y-[27px] text-base": isLabelFloating }
      ),
      xl: classNames(
        "text-lg",
        { "-translate-y-[31px] text-base": isLabelFloating }
      )
    },
    input: {
      sm: classNames(
        "px-3.5",
        "text-sm"
      ),
      base: classNames(
        "px-4",
        "text-base"
      ),
      lg: classNames(
        "px-4",
        "text-lg"
      ),
      xl: classNames(
        "px-4",
        "text-xl"
      )
    },
    iconWrapper: {
      sm: classNames(
        "w-10",
        "h-10",
        "p-3"
      ),
      base: classNames(
        "w-12",
        "h-12",
        "p-3.5"
      ),
      lg: classNames(
        "w-14",
        "h-14",
        "p-4"
      ),
      xl: classNames(
        "w-16",
        "h-16",
        "p-5"
      )
    }
  };

  return {
    sizes: sizeVariants
  };
};

export default getInputVariants;
