import clsx from "clsx";

function getSizeVariant(icon, extended, size) {
  const sizeVariants = {
    xs: "h-8 py-1.5 px-6 text-sm leading-[16px]",
    sm: "h-10 py-2 px-6 text-sm leading-[16px]",
    base: "h-12 py-3 px-8 text-base leading-[15px]",
    lg: "h-14 py-4 px-8 text-lg leading-[16px]",
    xl: "h-16 py-5 px-10 text-xl leading-[15px]",
    iconOnly: {
      xs: "w-8 h-8",
      sm: "w-10 h-10",
      base: "w-12 h-12",
      lg: "w-14 h-14",
      xl: "w-16 h-16"
    }
  };

  const sizeVariant = icon && !extended ? (
    sizeVariants?.iconOnly?.[size]
  ) : sizeVariants?.[size];

  return sizeVariant;
}

function getGradientVariants() {
  const gradientVariants = {
    monochrome: {
      primary: clsx(
        "text-white",
        "bg-gradient-to-br",
        "from-primary-300",
        "to-primary-500",
        "!border-0",
        "hover:bg-gradient-to-b",
        "active:bg-primary-600",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ),
      secondary: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-secondary-500",
        "to-secondary",
        "border-transparent",
        "shadow",
        "shadow-secondary",
        "hover:bg-secondary-500",
        "active:bg-secondary-600",
      ),
      info: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-info-500",
        "to-info",
        "border-transparent",
        "shadow",
        "shadow-info",
        "hover:bg-info-500",
        "active:bg-info-600",
      ),
      success: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-success-500",
        "to-success",
        "border-transparent",
        "shadow",
        "shadow-success",
        "hover:bg-success-500",
        "active:bg-success-600",
      ),
      warning: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-warning-500",
        "to-warning",
        "border-transparent",
        "shadow",
        "shadow-warning",
        "hover:bg-warning-500",
        "active:bg-warning-600",
      ),
      error: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-error-500",
        "to-error",
        "border-transparent",
        "shadow",
        "shadow-error",
        "hover:bg-error-500",
        "active:bg-error-600",
      )
    },
    duotone: {
      primary: clsx(
        "text-white",
        "bg-gradient-to-br",
        "from-primary-500",
        "via-primary-600",
        "to-primary-500",
        "!border-0",
        "hover:bg-gradient-to-b",
        "active:bg-primary-600",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ),
      secondary: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-secondary-500",
        "to-secondary",
        "border-transparent",
        "shadow",
        "shadow-secondary",
        "hover:bg-secondary-500",
        "active:bg-secondary-600",
      ),
      info: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-info-500",
        "to-info",
        "border-transparent",
        "shadow",
        "shadow-info",
        "hover:bg-info-500",
        "active:bg-info-600",
      ),
      success: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-success-500",
        "to-success",
        "border-transparent",
        "shadow",
        "shadow-success",
        "hover:bg-success-500",
        "active:bg-success-600",
      ),
      warning: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-warning-500",
        "to-warning",
        "border-transparent",
        "shadow",
        "shadow-warning",
        "hover:bg-warning-500",
        "active:bg-warning-600",
      ),
      error: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-error-500",
        "to-error",
        "border-transparent",
        "shadow",
        "shadow-error",
        "hover:bg-error-500",
        "active:bg-error-600",
      )
    },
    outline: {
      primary: clsx(
        "text-white",
        "bg-gradient-to-br",
        "from-primary-500",
        "via-primary-600",
        "to-primary-500",
        "!border-0",
        "hover:bg-gradient-to-b",
        "active:bg-primary-600",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ),
      secondary: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-secondary-500",
        "to-secondary",
        "border-transparent",
        "shadow",
        "shadow-secondary",
        "hover:bg-secondary-500",
        "active:bg-secondary-600",
      ),
      info: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-info-500",
        "to-info",
        "border-transparent",
        "shadow",
        "shadow-info",
        "hover:bg-info-500",
        "active:bg-info-600",
      ),
      success: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-success-500",
        "to-success",
        "border-transparent",
        "shadow",
        "shadow-success",
        "hover:bg-success-500",
        "active:bg-success-600",
      ),
      warning: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-warning-500",
        "to-warning",
        "border-transparent",
        "shadow",
        "shadow-warning",
        "hover:bg-warning-500",
        "active:bg-warning-600",
      ),
      error: clsx(
        "text-white",
        "bg-gradient-to-b",
        "from-error-500",
        "to-error",
        "border-transparent",
        "shadow",
        "shadow-error",
        "hover:bg-error-500",
        "active:bg-error-600",
      )
    }
  };
}

function getColorVariant(variant, color) {
  const colorVariants = {
    filled: {
      gray: clsx(
        "text-white",
        "bg-gray-300",
        "border-transparent",
        "shadow",
        "shadow-gray",
        "hover:bg-gray-500",
        "active:shadow-lg",
        "active:shadow-gray-300",
      ),
      primary: clsx(
        "text-white",
        "bg-primary",
        "border-transparent",
        "shadow",
        "shadow-primary",
        "hover:bg-primary-500",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ),
      secondary: clsx(
        "text-white",
        "bg-secondary",
        "border-transparent",
        "shadow",
        "shadow-secondary",
        "hover:bg-secondary-900",
        "active:shadow-lg",
        "active:shadow-secondary-300",
      ),
      info: clsx(
        "text-white",
        "bg-info",
        "border-transparent",
        "shadow",
        "shadow-info",
        "hover:bg-info-500",
        "active:shadow-lg",
        "active:shadow-info-300",
      ),
      success: clsx(
        "text-white",
        "bg-success",
        "border-transparent",
        "shadow",
        "shadow-success",
        "hover:bg-success-500",
        "active:shadow-lg",
        "active:shadow-success-300",
      ),
      warning: clsx(
        "text-white",
        "bg-warning",
        "border-transparent",
        "shadow",
        "shadow-warning",
        "hover:bg-warning-500",
        "active:shadow-lg",
        "active:shadow-warning-300",
      ),
      error: clsx(
        "text-white",
        "bg-error",
        "border-transparent",
        "shadow",
        "shadow-error",
        "hover:bg-error-500",
        "active:shadow-lg",
        "active:shadow-error-300",
      ),
      facebook: clsx(
        "text-white",
        "bg-facebook",
        "border-transparent",
        "shadow",
        "shadow-facebook",
        "hover:bg-facebook",
        "active:shadow-lg",
        "active:shadow-facebook",
      ),
      whatsapp: clsx(
        "text-white",
        "bg-whatsapp",
        "border-transparent",
        "shadow",
        "shadow-whatsapp",
        "hover:bg-whatsapp",
        "active:shadow-lg",
        "active:shadow-whatsapp",
      ),
      twitter: clsx(
        "text-white",
        "bg-twitter",
        "border-transparent",
        "shadow",
        "shadow-twitter",
        "hover:bg-twitter",
        "active:shadow-lg",
        "active:shadow-twitter",
      ),
      instagram: clsx(
        "text-white",
        "bg-instagram",
        "border-transparent",
        "shadow",
        "shadow-instagram",
        "hover:bg-instagram",
        "active:shadow-lg",
        "active:shadow-instagram",
      ),
      pinterest: clsx(
        "text-white",
        "bg-pinterest",
        "border-transparent",
        "shadow",
        "shadow-pinterest",
        "hover:bg-pinterest",
        "active:shadow-lg",
        "active:shadow-pinterest",
      ),
    },
    gradient: {
      primary: clsx(
        "text-white",
        "bg-gradient-to-t",
        "from-primary-400",
        "to-primary-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-primary-600",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ),
      secondary: clsx(
        "text-white",
        "bg-gradient-to-t",
        "from-secondary-400",
        "to-secondary-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-secondary-600",
        "active:shadow-lg",
        "active:shadow-secondary-300",
      ),
      info: clsx(
        "text-white",
        "bg-gradient-to-t",
        "from-info-400",
        "to-info-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-info-600",
        "active:shadow-lg",
        "active:shadow-info-300",
      ),
      success: clsx(
        "text-white",
        "bg-gradient-to-t",
        "from-success-400",
        "to-success-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-success-600",
        "active:shadow-lg",
        "active:shadow-success-300",
      ),
      warning: clsx(
        "text-white",
        "bg-gradient-to-t",
        "from-warning-400",
        "to-warning-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-warning-600",
        "active:shadow-lg",
        "active:shadow-warning-300",
      ),
      error: clsx(
        "text-white",
        "bg-gradient-to-t",
        "from-error-400",
        "to-error-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-error-600",
        "active:shadow-lg",
        "active:shadow-error-300",
      )
    },
    toned: {
      primary: clsx(
        "text-primary",
        "bg-primary-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-primary-500",
        "active:bg-primary-600",
      ),
      secondary: clsx(
        "text-secondary",
        "bg-secondary-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-secondary-500",
        "active:bg-secondary-600",
      ),
      info: clsx(
        "text-info",
        "bg-info-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-info-500",
        "active:bg-info-600",
      ),
      success: clsx(
        "text-success",
        "bg-success-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-success-500",
        "active:bg-success-600",
      ),
      warning: clsx(
        "text-warning",
        "bg-warning-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-warning-500",
        "active:bg-warning-600",
      ),
      error: clsx(
        "text-error",
        "bg-error-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-error-500",
        "active:bg-error-600",
      )
    },
    outlined: {
      primary: clsx(
        "text-primary",
        "bg-transparent",
        "border-primary",
        "shadow-none",
        "hover:bg-primary-100",
      ),
      secondary: clsx(
        "text-secondary",
        "bg-transparent",
        "border-secondary",
        "shadow-none",
        "hover:bg-secondary-100",
      ),
      info: clsx(
        "text-info",
        "bg-transparent",
        "border-info",
        "shadow-none",
        "hover:bg-info-100",
      ),
      success: clsx(
        "text-success",
        "bg-transparent",
        "border-success",
        "shadow-none",
        "hover:bg-success-100",
      ),
      warning: clsx(
        "text-warning",
        "bg-transparent",
        "border-warning",
        "shadow-none",
        "hover:bg-warning-100",
      ),
      error: clsx(
        "text-error",
        "bg-transparent",
        "border-error",
        "shadow-none",
        "hover:bg-error-100",
      )
    },
    text: {
      primary: clsx(
        "text-primary",
        "bg-transparent",
        "border-transparent",
        "hover:text-primary-500",
      ),
      secondary: clsx(
        "text-secondary",
        "bg-transparent",
        "border-transparent",
        "hover:text-secondary-500",
      ),
      info: clsx(
        "text-info",
        "bg-transparent",
        "border-transparent",
        "hover:text-info-500",
      ),
      success: clsx(
        "text-success",
        "bg-transparent",
        "border-transparent",
        "hover:text-success-500",
      ),
      warning: clsx(
        "text-warning",
        "bg-transparent",
        "border-transparent",
        "hover:text-warning-500",
      ),
      error: clsx(
        "text-error",
        "bg-transparent",
        "border-transparent",
        "hover:text-error-500",
      )
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
