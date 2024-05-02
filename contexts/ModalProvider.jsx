"use client"

import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
  useMemo
} from "react"

import PropTypes from "prop-types"

const ModalContext = createContext()

export const useToggleModal = () => useContext(ModalContext)

function ModalProvider({ children }) {
  const modalRef = useRef(null)

  const [showModal, setShowModal] = useState(false)
  const [showBackdrop, setShowBackdrop] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const openModal = useCallback(() => {
    if (!showModal && !isTransitioning) {
      setIsTransitioning(true)

      document.body.classList.add(
        "absolute",
        "w-screen",
        "overflow-hidden"
      )

      setShowBackdrop(true)

      setShowModal(true)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }
  }, [showModal, isTransitioning])

  const closeModal = useCallback(() => {
    if (showModal && !isTransitioning) {
      setIsTransitioning(true)

      setShowModal(false)

      setTimeout(() => {
        setShowBackdrop(false)

        document.body.classList.remove(
          "absolute",
          "w-screen",
          "overflow-hidden"
        )
      }, 300)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }
  }, [showModal, isTransitioning])

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal()
    }
  }, [closeModal])

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showModal, handleClickOutside])

  const value = useMemo(() => ({
    modalRef,
    showModal,
    setShowModal,
    showBackdrop,
    setShowBackdrop,
    openModal,
    closeModal,
  }), [
    modalRef,
    showModal,
    setShowModal,
    showBackdrop,
    setShowBackdrop,
    openModal,
    closeModal
  ])

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ModalProvider
