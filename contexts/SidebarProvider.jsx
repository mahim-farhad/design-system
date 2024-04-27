"use client"

import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback
} from "react"

import PropTypes from "prop-types"

import useWindowSize from "@hooks/useWindowSize"

const SidebarContext = createContext()

export const useSidebarSlider = () => useContext(SidebarContext)

function SidebarProvider({ children }) {
  const windowSize = useWindowSize()

  const sidebarRef = useRef(null)

  const [sidebarSlide, setSidebarSlide] = useState(() => windowSize >= 1024)
  const [showBackdrop, setShowBackdrop] = useState(false)

  const handleClick = () => {
    if (windowSize <= 1024) {
      document.body.classList.add(
        "absolute",
        "w-screen",
        "overflow-hidden"
      )

      setShowBackdrop(!showBackdrop)

      setSidebarSlide(!sidebarSlide)
    }
  }

  const handleClickOutside = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      if (sidebarSlide && windowSize <= 1024) {
        setTimeout(() => {
          setSidebarSlide(false)
        }, 200)

        setTimeout(() => {
          setShowBackdrop(false)

          document.body.classList.remove(
            "absolute",
            "w-screen",
            "overflow-hidden"
          )
        }, 500)
      }
    }
  }, [sidebarSlide, windowSize])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  useEffect(() => {
    setSidebarSlide(windowSize >= 1024)
  }, [windowSize])

  useEffect(() => {
    if (windowSize >= 1024) {
      setShowBackdrop(false)
    }
  }, [windowSize])

  useEffect(() => {
    if (sidebarSlide && windowSize >= 1024) {
      document.body.classList.remove(
        "absolute",
        "w-screen",
        "overflow-hidden"
      )
    }
  }, [sidebarSlide, windowSize])

  const value = {
    sidebarRef,
    sidebarSlide,
    setSidebarSlide,
    showBackdrop,
    setShowBackdrop,
    handleClick
  }

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  )
}

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default SidebarProvider
