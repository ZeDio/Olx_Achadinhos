import { useState } from "react"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { produtos } from "../../data/produtos"

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [closing, setClosing] = useState(false)

  const categorias = ["todos", "celular", "notebook", "tablets", "watch"]

  const produtosFiltrados =
    categoriaSelecionada === "todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaSelecionada)

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
      <section className="section-5 hidden">
        <div className="blur-fundo-2"></div>

        <h2>Produtos disponíveis</h2>

        <div className="filtros">
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

        <div className="grid">
          {produtosFiltrados
            .filter((p) => p.estado === "disponivel")
            .map((produto) => (
              <ProjectCard
                key={produto.id}
                produto={produto}
                onVerMais={handleOpen}
              />
            ))}
        </div>

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
                <a
                  href={`https://wa.me/seu-numero?text=Olá, tenho interesse no ${produtoSelecionado.nome}`}
                  target="_blank"
                >
                  <button>Comprar</button>
                </a>

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