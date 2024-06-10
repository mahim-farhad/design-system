import { useState } from "react";

import clsx from "clsx";

import { motion } from "framer-motion";

import Icon from "@components/elements/Icon";
import Button from "@components/elements/Button";

function Alert({
  variant = "",
  color = "primary",
  size = "",
  className,
  style,
  children
}) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      exit={{ y: -20 }}
      transition={{
        duration: 0.2
      }}
      className={clsx(
        "fixed",
        "top-4",
        "flex",
        "gap-4",
        "items-center",
        "min-w-[400px]",
        "py-3",
        "px-4",
        "font-medium",
        "text-error",
        "bg-error/10",
        "border-l-4 border-error",
        "rounded-none",
      )}
    >
      <Icon name="exclamation" />

      {children}

      <Button
        size="xs"
        variant="text"
        color="secondary"
        className={clsx(
          "h-6",
          "py-0",
          "px-2",
          "ml-auto",
        )}
        onClick={() => setOpen(false)}
      >
        Close
      </Button>
    </motion.div>
  );
}

export default Alert;
