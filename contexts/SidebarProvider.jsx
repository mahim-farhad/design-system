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

  const wrapperRef = useRef(null)

  const [sidebarSlide, setSidebarSlide] = useState(() => windowSize >= 1024)

  const handleClickOutside = useCallback((event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      if (sidebarSlide && windowSize <= 1024) {
        setSidebarSlide(false)

        document.body.classList.remove(
          "absolute",
          "w-screen",
          "overflow-hidden"
        )
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
    if (sidebarSlide && windowSize >= 1024) {
      document.body.classList.remove(
        "absolute",
        "w-screen",
        "overflow-hidden"
      )
    }
  }, [sidebarSlide, windowSize])

  const value = {
    wrapperRef,
    sidebarSlide,
    setSidebarSlide
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
