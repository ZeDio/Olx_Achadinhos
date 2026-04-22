import { useEffect, useState } from 'react'

import logoLight from '../../assets/logo/logo.svg'
import logoDark from '../../assets/logo/logo-roxa.svg'

function Footer() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Pega data atual
    const year = new Date().getFullYear()

    // pega tema salvo ao carregar
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setTheme(savedTheme)

    // escuta mudanças (igual Navbar)
    const interval = setInterval(() => {
      const current = localStorage.getItem('theme')
      if (current !== theme) {
        setTheme(current)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [theme])

  return (
    <footer>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      
      <div>
        <img 
          className="logoFooter" 
          src={theme === 'light' ? logoLight : logoDark} 
          alt="Simbolo"
        />
      </div>

      <h4>©{new Date().getFullYear()} Olx Achadinhos, Direitos Reservados</h4>
    </footer>
  )
}

export default Footer