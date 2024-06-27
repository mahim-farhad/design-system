"use client"

import {
  AnimatePresence,
  motion,
  easeInOut
} from "framer-motion"

import { twMerge } from "tailwind-merge"

import clsx from "clsx"

function Backdrop({
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  transition = { duration: 0.15, easeInOut },
}) {
  const backdropClasses = twMerge(
    clsx(
      "z-50",
      "fixed",
      "inset-0",
      "w-screen",
      "h-screen",
      "pointer-events-auto",
      "bg-white/15",
      "backdrop-blur-sm",
    )
  )

  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key="backdrop"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        className={backdropClasses}
      />
    </AnimatePresence>
  )
}

export default Backdrop
