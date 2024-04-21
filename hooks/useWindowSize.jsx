import {
  useState,
  useEffect
} from "react"

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
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

// import {
//   useState,
//   useEffect
// } from "react"

// import { debounce } from "lodash"

// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   })

//   function handleResize() {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     })
//   }

//   useEffect(() => {
//     handleResize()

//     const debouncedHandleResize = debounce(handleResize, 150)

//     window.addEventListener("resize", debouncedHandleResize)

//     return () => {
//       window.removeEventListener("resize", debouncedHandleResize)
//     }
//   }, [])

//   return windowSize
// }

// export default useWindowSize
