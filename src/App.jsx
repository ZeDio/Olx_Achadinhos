import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Scroll from './components/Navbar/Scroll'
import ScrollReveal from './components/ScrollReveal/ScrollReveal'

import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'
import Contato from './pages/Contato/Contato'
import Tema from './components/Tema/Tema'

function App() {
  return (
    <>
      <ScrollReveal />
      <Scroll />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      
      <Tema />

      <Footer />
    </>
  )
}

export default App