"use client"

import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext
} from "react"

import PropTypes from "prop-types"

import useWindowSize from "@hooks/useWindowSize"

const SidebarContext = createContext()

export const SidebarSlider = () => useContext(SidebarContext)

function SidebarProvider({ children }) {
  const wrapperRef = useRef(null)

  const windowSize = useWindowSize()

  const [sidebarSlide, setSidebarSlide] = useState(() => {
    windowSize >= 1024 ? true : false
  })

  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setSidebarSlide(false)

      document.body.style.width = ""
      document.body.style.position = ""
      document.body.style.overflow = ""
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const value = {
    wrapperRef,
    sidebarSlide,
    setSidebarSlide
  }

  return (
    <SidebarContext.Provider
      value={value}
    >
      {children}
    </SidebarContext.Provider>
  )
}

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default SidebarProvider
