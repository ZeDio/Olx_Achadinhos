import { useEffect, useRef } from "react"

function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    let currentX = 0
    let currentY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", moveCursor)

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`
        cursorRef.current.style.top = `${currentY}px`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor"></div>
}

export default Cursor