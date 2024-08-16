function getSizeVariant(icon, extended, size) {
  const sizeVariants = {
    xs: "h-8 py-1.5 px-6 text-sm leading-[1rem] rounded-md",
    sm: "h-10 py-2 px-6 text-sm leading-[1rem] rounded-md",
    base: "h-12 py-3 px-8 text-base leading-[16px] rounded-lg",
    lg: "h-14 py-4 px-8 text-lg leading-[15px] rounded-lg",
    xl: "h-16 py-5 px-10 text-xl leading-[15px] rounded-xl",
    iconOnly: {
      xs: "w-8 h-8 rounded-md",
      sm: "w-10 h-10 rounded-md",
      base: "w-12 h-12 rounded-lg",
      lg: "w-14 h-14 rounded-lg",
      xl: "w-16 h-16 rounded-xl"
    }
  };

  const sizeVariant = icon && !extended ? (
    sizeVariants?.iconOnly?.[size]
  ) : sizeVariants?.[size];

  return sizeVariant;
}

function getColorVariant(variant, color) {
  const colorVariants = {
    filled: {
      primary: [
        "text-white",
        "bg-primary",
        "border-transparent",
        "shadow",
        "shadow-primary",
        "hover:bg-primary-500",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ],
      secondary: [
        "text-white",
        "bg-secondary",
        "border-transparent",
        "shadow",
        "shadow-secondary",
        "hover:bg-secondary-900",
        "active:shadow-lg",
        "active:shadow-secondary-300",
      ],
      info: [
        "text-white",
        "bg-info",
        "border-transparent",
        "shadow",
        "shadow-info",
        "hover:bg-info-500",
        "active:shadow-lg",
        "active:shadow-info-300",
      ],
      success: [
        "text-white",
        "bg-success",
        "border-transparent",
        "shadow",
        "shadow-success",
        "hover:bg-success-500",
        "active:shadow-lg",
        "active:shadow-success-300",
      ],
      warning: [
        "text-white",
        "bg-warning",
        "border-transparent",
        "shadow",
        "shadow-warning",
        "hover:bg-warning-500",
        "active:shadow-lg",
        "active:shadow-warning-300",
      ],
      error: [
        "text-white",
        "bg-error",
        "border-transparent",
        "shadow",
        "shadow-error",
        "hover:bg-error-500",
        "active:shadow-lg",
        "active:shadow-error-300",
      ],
      facebook: [
        "text-white",
        "bg-facebook",
        "border-transparent",
        "shadow",
        "shadow-facebook",
        "hover:bg-facebook",
        "active:shadow-lg",
        "active:shadow-facebook",
      ],
      whatsapp: [
        "text-white",
        "bg-whatsapp",
        "border-transparent",
        "shadow",
        "shadow-whatsapp",
        "hover:bg-whatsapp",
        "active:shadow-lg",
        "active:shadow-whatsapp",
      ],
      twitter: [
        "text-white",
        "bg-twitter",
        "border-transparent",
        "shadow",
        "shadow-twitter",
        "hover:bg-twitter",
        "active:shadow-lg",
        "active:shadow-twitter",
      ],
      instagram: [
        "text-white",
        "bg-instagram",
        "border-transparent",
        "shadow",
        "shadow-instagram",
        "hover:bg-instagram",
        "active:shadow-lg",
        "active:shadow-instagram",
      ],
      pinterest: [
        "text-white",
        "bg-pinterest",
        "border-transparent",
        "shadow",
        "shadow-pinterest",
        "hover:bg-pinterest",
        "active:shadow-lg",
        "active:shadow-pinterest",
      ],
    },
    gradient: {
      primary: [
        "text-white",
        "bg-gradient-to-t",
        "from-primary-400",
        "to-primary-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-primary-600",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ],
      secondary: [
        "text-white",
        "bg-gradient-to-t",
        "from-secondary-400",
        "to-secondary-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-secondary-600",
        "active:shadow-lg",
        "active:shadow-secondary-300",
      ],
      info: [
        "text-white",
        "bg-gradient-to-t",
        "from-info-400",
        "to-info-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-info-600",
        "active:shadow-lg",
        "active:shadow-info-300",
      ],
      success: [
        "text-white",
        "bg-gradient-to-t",
        "from-success-400",
        "to-success-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-success-600",
        "active:shadow-lg",
        "active:shadow-success-300",
      ],
      warning: [
        "text-white",
        "bg-gradient-to-t",
        "from-warning-400",
        "to-warning-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-warning-600",
        "active:shadow-lg",
        "active:shadow-warning-300",
      ],
      error: [
        "text-white",
        "bg-gradient-to-t",
        "from-error-400",
        "to-error-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-error-600",
        "active:shadow-lg",
        "active:shadow-error-300",
      ]
    },
    toned: {
      primary: [
        "text-primary",
        "bg-primary-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-primary-500",
        "active:bg-primary-600",
      ],
      secondary: [
        "text-secondary",
        "bg-secondary-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-secondary-500",
        "active:bg-secondary-600",
      ],
      info: [
        "text-info",
        "bg-info-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-info-500",
        "active:bg-info-600",
      ],
      success: [
        "text-success",
        "bg-success-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-success-500",
        "active:bg-success-600",
      ],
      warning: [
        "text-warning",
        "bg-warning-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-warning-500",
        "active:bg-warning-600",
      ],
      error: [
        "text-error",
        "bg-error-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-error-500",
        "active:bg-error-600",
      ]
    },
    outlined: {
      black: [
        "text-black",
        "bg-transparent",
        "border-black",
        "shadow-none",
        "hover:bg-black-100",
      ],
      primary: [
        "text-primary",
        "bg-transparent",
        "border-primary",
        "shadow-none",
        "hover:bg-primary-100",
      ],
      secondary: [
        "text-secondary",
        "bg-transparent",
        "border-secondary",
        "shadow-none",
        "hover:bg-secondary-100",
      ],
      info: [
        "text-info",
        "bg-transparent",
        "border-info",
        "shadow-none",
        "hover:bg-info-100",
      ],
      success: [
        "text-success",
        "bg-transparent",
        "border-success",
        "shadow-none",
        "hover:bg-success-100",
      ],
      warning: [
        "text-warning",
        "bg-transparent",
        "border-warning",
        "shadow-none",
        "hover:bg-warning-100",
      ],
      error: [
        "text-error",
        "bg-transparent",
        "border-error",
        "shadow-none",
        "hover:bg-error-100",
      ]
    },
    text: {
      primary: [
        "text-primary",
        "bg-transparent",
        "border-transparent",
        "hover:text-primary-500",
      ],
      secondary: [
        "text-secondary",
        "bg-transparent",
        "border-transparent",
        "hover:text-secondary-500",
      ],
      info: [
        "text-info",
        "bg-transparent",
        "border-transparent",
        "hover:text-info-500",
      ],
      success: [
        "text-success",
        "bg-transparent",
        "border-transparent",
        "hover:text-success-500",
      ],
      warning: [
        "text-warning",
        "bg-transparent",
        "border-transparent",
        "hover:text-warning-500",
      ],
      error: [
        "text-error",
        "bg-transparent",
        "border-transparent",
        "hover:text-error-500",
      ]
    }
  };

  const colorVariant = colorVariants?.[variant]?.[color];

  return colorVariant;
}

function getButtonVariants(icon, extended, size, variant, color) {
  const sizeVariant = getSizeVariant(icon, extended, size);

  const colorVariant = getColorVariant(variant, color);

  const isValid = sizeVariant && colorVariant;

  if (!isValid) return null;

  const buttonVariants = {
    size: sizeVariant,
    color: colorVariant
  };

  return buttonVariants;
}

export default getButtonVariants;
