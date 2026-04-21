import { useState, useEffect } from 'react'
import sol from '../../assets/Tema/dark.png'
import lua from '../../assets/Tema/light.png'

function Tema() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const link = document.getElementById('theme-style')

    if (savedTheme === 'light') {
      setDark(false)
      if (link) link.href = '/style_light.css'
    } else {
      setDark(true)
      if (link) link.href = '/style_dark.css'
    }
  }, [])

  const toggleTheme = () => {
    const link = document.getElementById('theme-style')

    if (dark) {
      if (link) link.href = '/style_light.css'
      localStorage.setItem('theme', 'light')
    } else {
      if (link) link.href = '/style_dark.css'
      localStorage.setItem('theme', 'dark')
    }

    setDark(!dark)
  }

  return (
    <button className="tema" onClick={toggleTheme}>
      <img src={dark ? sol : lua} alt="Tema" />
    </button>
  )
}

export default Tema