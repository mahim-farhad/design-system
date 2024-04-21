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

  const [sidebarSlide, setSidebarSlide] = useState(() => windowSize.width >= 1024)

  const handleClickOutside = useCallback((event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      if (windowSize.width <= 1024) {
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
    setSidebarSlide(windowSize.width >= 1024)
  }, [windowSize.width])

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

// "use client"

// import {
//   useState,
//   useEffect,
//   useRef,
//   createContext,
//   useContext
// } from "react"

// import { debounce } from "lodash"

// import PropTypes from "prop-types"

// import useWindowSize from "@hooks/useWindowSize"

// const SidebarContext = createContext({
//   wrapperRef: null,
//   sidebarSlide: false,
//   setSidebarSlide: () => { }
// })

// export const SidebarSlider = () => useContext(SidebarContext)

// function SidebarProvider({ children }) {
//   const windowSize = useWindowSize()

//   const wrapperRef = useRef(null)

//   const [sidebarSlide, setSidebarSlide] = useState(() => window.innerWidth >= 1024)

//   function handleClickOutside(event) {
//     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//       if (sidebarSlide !== window.innerWidth >= 1024) {
//         setSidebarSlide(false)

//         document.body.classList.remove(
//           "absolute",
//           "w-screen",
//           "overflow-hidden"
//         )
//       }
//     }
//   }

//   useEffect(() => {
//     const handleResize = () => {
//       setSidebarSlide(window.innerWidth >= 1024)
//     }

//     const debouncedHandleResize = debounce(handleResize, 10)

//     window.addEventListener("resize", debouncedHandleResize)
//     document.addEventListener("mousedown", handleClickOutside)

//     return () => {
//       window.removeEventListener("resize", debouncedHandleResize)
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [sidebarSlide])

//   const value = {
//     wrapperRef,
//     sidebarSlide,
//     setSidebarSlide
//   }

//   return (
//     <SidebarContext.Provider value={value}>
//       {children}
//     </SidebarContext.Provider>
//   )
// }

// SidebarProvider.propTypes = {
//   children: PropTypes.node.isRequired
// }

// export default SidebarProvider
