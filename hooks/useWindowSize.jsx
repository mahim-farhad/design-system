// import {
//   useState,
//   useEffect
// } from "react"

// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState(undefined)

//   function handleResize() {
//     setWindowSize(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener("resize", handleResize)

//     handleResize()

//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   return windowSize
// }

// export default useWindowSize

import {
  useState,
  useEffect
} from "react"

function useWindowSize() {
  const isClient = typeof window !== "undefined"

  function getWindowWidth() {
    const width = window.innerWidth

    return width
  }

  const [windowSize, setWindowSize] = useState(getWindowWidth())

  useEffect(() => {
    if (isClient) {
      function handleResize() {
        setWindowSize(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [isClient])

  return windowSize
}

export default useWindowSize
