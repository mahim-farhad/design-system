const iconVariantTypes = {
  icons: {
    "brand": true,
    "grid": true,
    "caret-down": true,
    "chevron-down": true,
    "facebook": true,
    "instagram": true,
    "whatsapp": true,
    "twitter": true,
    "pinterest": true,
    "behance": true,
    "dribbble": true
  },
  sizes: {
    "xs": true,
    "sm": true,
    "base": true,
    "lg": true,
    "xl": true
  }
}

const buttonVariantTypes = {
  types: {
    "button": true,
    "submit": true
  },
  icons: iconVariantTypes.icons,
  sizes: {
    "xs": true,
    "sm": true,
    "base": true,
    "lg": true,
    "xl": true
  },
  variants: {
    "filled": true,
    "gradient": true,
    "toned": true,
    "outlined": true,
    "text": true
  },
  gradients: {
    "monochrome": true,
    "duotune": true,
    "outline": true
  },
  colors: {
    "primary": true,
    "secondary": true,
    "info": true,
    "success": true,
    "warning": true,
    "error": true,
    "google": true,
    "facebook": true,
    "instagram": true,
    "whatsapp": true,
    "twitter": true,
    "pinterest": true
  }
};

export {
  iconVariantTypes,
  buttonVariantTypes,
};
