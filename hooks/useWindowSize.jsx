import { useState, useEffect } from "react"

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(undefined)

  function handleResize() {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
