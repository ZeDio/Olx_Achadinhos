import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logoLight from '../../assets/logo/logo.svg'
import logoDark from '../../assets/logo/logo Black.svg'

function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setTheme(savedTheme)

    const interval = setInterval(() => {
      const current = localStorage.getItem('theme')
      if (current !== theme) {
        setTheme(current)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [theme])

  return (
    <header>
      <div className="logo">
        <img 
          src={theme === 'light' ? logoDark : logoLight} 
          alt="Simbolo" 
        />
      </div>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/#novidade">Novidades</Link>
      </nav>

      <Link to="/contato">
        <button>Contato</button>
      </Link>
    </header>
  )
}

export default Navbar