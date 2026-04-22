import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { produtos } from "../../data/produtos"
import divulgacao from '../../assets/main/produtos divulgacao/z-flip-5.png'

function Home() {
  const navigate = useNavigate()

  const produtosRecentes = produtos
    .filter(p => p.estado === "disponivel")
    .slice(-3)
    .reverse()

  const texts = ["Olx Achadinhos", " O/A"]

  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const currentText = texts[index]

    let timeout

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 100)
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 50)
    } 
    else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting)

        if (!isDeleting) {
          setIndex((prev) => (prev + 1) % texts.length)
        }
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index])

  return (
    <>
      <section className="section-1 hidden" id="inicio">
        <div className="blur-fundo-1"></div>

        <div className="text">
          <h1>
            Olá! Nós somos a..<br />
            <span>-{text}</span>
          </h1>

          <p>
            Todos os produtos são testados, revisados e prontos para uso.
            Aqui você encontra tecnologia confiável pagando menos.
          </p>

          <Link to="/produtos">
            <button>Ver produtos</button>
          </Link>

          <Link to="/contato" className="contato">
            <button>Entre em contato</button>
          </Link>
        </div>

        <img src={divulgacao} alt="Produto destaque" />
      </section>

      <section className="section-2" id="diferenciais">
        <h2>Por que comprar com a gente?</h2>

        <div className="texts hidden">
          <p>Todos os aparelhos passam por testes completos antes da venda, garantindo funcionamento perfeito.</p>
          <p>Você paga menos por produtos de alta qualidade, com excelente custo-benefício.</p>
          <p>Selecionamos apenas dispositivos em ótimo estado, priorizando desempenho e conservação.</p>
        </div>

        <div className='texts hidden'>
          <p>Atendimento direto e sem complicação via WhatsApp, rápido e eficiente.</p>
          <p>Cada produto é analisado individualmente, incluindo bateria, desempenho e aparência.</p>
          <p>Nosso objetivo é oferecer tecnologia acessível sem abrir mão da qualidade.</p>
        </div>

        <div className='texts hidden'>
          <p>Trabalhamos com transparência: você sabe exatamente o que está comprando.</p>
          <p>Atualizamos constantemente nosso estoque com novos achados e oportunidades.</p>
          <p>Você encontra desde smartphones até outros eletrônicos com preços abaixo do mercado.</p>
        </div>

        <div className="blur-fundo-2"></div>
      </section>

      <section className="section-5 hidden" id="novidade">
        <div className="blur-fundo-1"></div>

        <h2>Novos achados</h2>

        <div className="grid">
          {produtosRecentes.map((produto) => (
            <ProjectCard
              key={produto.id}
              produto={produto}
              onVerMais={() => navigate("/produtos")}
            />
          ))}
        </div>

        <div>
          <Link to="/produtos">
            <p className='btn_produtos'>Ver todos os produtos</p>
          </Link>
        </div>

        <div className="blur-fundo-2"></div>
      </section>
    </>
  )
}

export default Home