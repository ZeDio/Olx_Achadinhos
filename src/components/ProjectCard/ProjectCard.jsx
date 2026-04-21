import { useEffect, useState } from "react"

function ProjectCard({ produto, onVerMais }) {
  const {
    nome,
    preco,
    condicao,
    imagem,
    descricao,
    estado,
    link
  } = produto

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nomeLimit = isMobile ? 18 : 21
  const descLimit = isMobile ? 38 : 45

  return (
    <div className="produto-card">
      {estado === "disponivel" && (
        <span className="badge">Disponível</span>
      )}

      <img src={imagem} alt={nome} />

      <div className="info">
        <h3>
          {nome.length > nomeLimit
            ? nome.slice(0, nomeLimit) + "..."
            : nome}
        </h3>

        <p className="condicao">{condicao}</p>

        <p className="descricao">
          {descricao.length > descLimit
            ? descricao.slice(0, descLimit) + "..."
            : descricao}
        </p>

        <strong className="preco">
          R$ {preco.toLocaleString("pt-BR")}
        </strong>

        <div className="buttons">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="link-button"
            >
              Comprar
            </a>
          ) : (
            <button className="comprar disabled">
              Indisponível
            </button>
          )}

          <button
            className="vermais"
            onClick={() => onVerMais && onVerMais(produto)}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard