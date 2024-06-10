import PropTypes from "prop-types";

import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import {
  AnimatePresence,
  motion,
  easeInOut
} from "framer-motion";

function Menu({
  className,
  style,
  children,
  ...rest
}) {
  const menuClasses = twMerge(
    clsx(
      "z-20",
      "absolute",
      "top-full",
      "right-0",
      "left-0",
      "flex",
      "flex-col",
      "gap-y-2",
      "max-h-80",
      "p-4",
      "mt-2",
      "-mx-0.5",
      "overflow-x-hidden",
      "overflow-y-auto",
      "bg-surface-light",
      "border-2",
      "rounded-lg",
      "shadow-md"
    ),
    className
  );

  return (
    <AnimatePresence>
      <motion.ul
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{
          duration: 0.2,
          easeInOut
        }}
        role="menu"
        aria-hidden="true"
        aria-orientation="vertical"
        className={menuClasses}
        style={style}
        {...rest}
      >
        {children}
      </motion.ul>
    </AnimatePresence>
  );
}

function MenuItem({
  uniqueKey,
  selected,
  className,
  style,
  children,
  ...rest
}) {
  const MenuItemClasses = twMerge(
    clsx(
      "relative",
      "py-2",
      "px-3",
      "font-poppins",
      "text-sm",
      "font-medium",
      "capitalize",
      "cursor-pointer",
      selected
        ? "text-primary bg-primary-100"
        : "text-gray-400",
      "hover:bg-gray-100",
      "rounded-md",
      "transition-all",
      "duration-300",
      "ease-in-out"
    ),
    className
  );

  return (
    <li
      role="menuitem"
      key={uniqueKey}
      className={MenuItemClasses}
      style={style}
      {...rest}
    >
      {children}
    </li>
  );
}

Menu.displayName = "Menu";

Menu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

MenuItem.displayName = "MenuItem";

MenuItem.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export { Menu, MenuItem };
