"use client"

import PropTypes from "prop-types"

import {
  AnimatePresence,
  motion
} from "framer-motion"

function Animate({ children }) {
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

Animate.propTypes = {
  children: PropTypes.node.isRequired
}

export default Animate
