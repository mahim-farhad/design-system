import {
  useState,
  useEffect
} from "react"

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window !== undefined && window.innerWidth,
    height: window !== undefined && window.innerHeight,
  })

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    // handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
