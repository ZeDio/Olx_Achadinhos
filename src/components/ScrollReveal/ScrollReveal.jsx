import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('.hidden')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          // 👇 aplica delay automático
          const children = entry.target.querySelectorAll('.skill')

          children.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.1}s`
            el.classList.add('show')
          })

          entry.target.classList.add('show')
        }
      })
    }, {
      threshold: 0.1
    })

    elements.forEach((el) => {
      el.classList.remove('show')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

export default ScrollReveal