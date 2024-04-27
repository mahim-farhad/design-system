"use client"

import PropTypes from "prop-types"

import {
  AnimatePresence,
  motion,
  easeInOut
} from "framer-motion"

function Animate({
  key,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  transition = {
    duration: 0.3,
    easeInOut
  },
  className = "",
  children
}) {
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

Animate.propTypes = {
  children: PropTypes.node
}

export default Animate
