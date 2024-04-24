import {
  useState,
  useEffect
} from "react"

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  })

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
