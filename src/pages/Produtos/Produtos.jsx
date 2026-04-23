import { useState } from "react"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { produtos } from "../../data/produtos"

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [closing, setClosing] = useState(false)

  const categorias = ["Todos", "Celulares", "Notebooks", "Tablets", "SmartWatchs"]

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaSelecionada)

  const disponiveis = produtosFiltrados.filter(p => p.estado === "disponivel")
  const indisponiveis = produtosFiltrados.filter(p => p.estado !== "disponivel")

  const handleOpen = (produto) => {
    setProdutoSelecionado(produto)
  }

  const handleClose = () => {
    setClosing(true)

    setTimeout(() => {
      setProdutoSelecionado(null)
      setClosing(false)
    }, 300)
  }

  return (
    <>
      <section className="section-5">
        <div className="blur-fundo-2"></div>

        <h2 className="hidden">Produtos</h2>

        <div className="filtros hidden">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={categoriaSelecionada === cat ? "active" : ""}
              onClick={() => setCategoriaSelecionada(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blur-fundo-1"></div>

        {disponiveis.length > 0 && (
          <>
            <h3 className="subtitulo">Disponíveis agora</h3>

            <div className="grid">
              {disponiveis.map((produto) => (
                <ProjectCard
                  key={produto.id}
                  produto={produto}
                  onVerMais={handleOpen}
                />
              ))}
            </div>
          </>
        )}

        {indisponiveis.length > 0 && (
          <>
            <h3 className="subtitulo vendido">Já vendidos</h3>

            <div className="grid">
              {indisponiveis.map((produto) => (
                <ProjectCard
                  key={produto.id}
                  produto={produto}
                  onVerMais={handleOpen}
                />
              ))}
            </div>
          </>
        )}

        <div className="blur-fundo-2"></div>
      </section>

      {produtoSelecionado && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className={`modal ${closing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={produtoSelecionado.imagem} alt="" />

            <div className="modal-content">
              <h2>{produtoSelecionado.nome}</h2>

              <p><strong>Condição:</strong> {produtoSelecionado.condicao}</p>

              <p>{produtoSelecionado.descricao}</p>

              <strong className="preco">
                R$ {produtoSelecionado.preco.toLocaleString("pt-BR")}
              </strong>
            </div>

            <div className="modal-buttons">
              {produtoSelecionado.estado === "disponivel" && (
                <a
                  href={produtoSelecionado.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Ver anúncio</button>
                </a>
              )}

              <button className="outline" onClick={handleClose}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Produtos