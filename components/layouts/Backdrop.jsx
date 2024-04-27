"use client"

import {
  AnimatePresence,
  motion,
  easeInOut
} from "framer-motion"

import classNames from "classnames"

function Backdrop({
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  transition = { duration: 0.15, easeInOut },
}) {
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
        className={classNames(
          "z-50",
          "fixed",
          "inset-0",
          "h-screen",
          "pointer-events-auto",
          "bg-black",
          "bg-opacity-15",
          "backdrop-blur-sm",
        )}
      />
    </AnimatePresence>
  )
}

export default Backdrop
