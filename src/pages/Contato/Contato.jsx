import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Watch from '../../assets/main/produtos divulgacao/samsung watch.png'
import instagram from '../../assets/main/redes/instagram.png'
import site from '../../assets/logo/logo black.svg'

function Contato() {
  const form = useRef()
  const [tipoContato, setTipoContato] = useState('whatsapp')
  const [nome, setNome] = useState('')
  const numero = '5511975372267'

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'portfolio_email',
      'template_vauwy7a',
      form.current,
      'rSo5eoZW8hj0xAR-F'
    )
    .then(() => {
      toast.success('Email enviado com sucesso!')
      form.current.reset()
    })
    .catch(() => {
      toast.error('Erro ao enviar email')
    })
  }

  const sendWhatsApp = (e) => {
    e.preventDefault()
    if (!nome) {
      toast.error('Digite seu nome primeiro!')
      return
      }
    const mensagem = `Oi José! Me chamo ${nome} e vim pelo seu portfólio!`
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(link, '_blank')
  }

  return (
    <>
      <section className="section-6 hidden" id="contato">
        <div className='blur-fundo-2'></div>
        <div>
          <img src={Watch} alt="Minha pessoa"/>

          <div className="botao_wtts_email">
            <div className={`botao_wtts_email_toggle ${tipoContato === 'email' ? 'right' : 'left'}`}
               onClick={() =>
                setTipoContato(tipoContato === 'email' ? 'whatsapp' : 'email')
              }>
              <div className="botao_wtts_email_toggle-circle"></div>
              <span className="botao_wtts_email_toggle-text">
                {tipoContato === 'email' ? 'Email' : 'WhatsApp'}
              </span>
            </div>
          </div>
        </div>

        <div className={`form-container ${tipoContato}`}>
          {tipoContato === 'email' ? (
            <form key="email" ref={form} onSubmit={sendEmail} className="form-content">
              <h2>Entre em contato</h2>
              <h2>pelo Email</h2>

              <label>
                <h3>- Nome</h3>
                <input type="text" name="name" placeholder="Seu nome" className="input" required onChange={(e) => setNome(e.target.value)}/>
              </label>
              <label>
                <h3>- Gmail</h3>
                <input type="email" name="email" placeholder="gmail@gmail.com" className="input" required/>
              </label>
              <label>
                <h3>- Mensagem</h3>
                <textarea name="message" placeholder="Sua mensagem" className="input" required></textarea>
              </label>

              <input type="submit" value="Enviar :D" className="button_form" />
            </form>
          ) : (
            <form key="whatsapp" onSubmit={sendWhatsApp} className="form-content">
              <h2>Entre em contato</h2>
              <h2>pelo WhatsApp</h2>

              <label>
                <h3>- Nome</h3>
                <input type="text" placeholder="Seu nome" className="input" required onChange={(e) => setNome(e.target.value)}/>
              </label>

              <input type="submit" value="Enviar :D" className="button_form" />
            </form>
          )}
        </div>
        <div className='blur-fundo-1'></div>
      </section>
        
      <section className="section-7" id="redes">
        <h2>Redes Sociais</h2>
        <div className="redes">
          <a href="https://www.instagram.com/olx_achadinhos?igsh=MjVrNWNjMHdkeXpy" className="rede">
            <img src={instagram} alt="Intagram" />
            <div className="text_rede">
              <h3>Intagram</h3>
            </div>
          </a>
          <a href="/" className="rede">
            <img src={site} alt="site" />
            <div className="text_rede">
              <h3>Web Site</h3>
            </div>
          </a>
        </div>
        <div className="blur-fundo-2"></div>
      </section>

      <ToastContainer position="top-right" autoClose={5000} className="meu-toast"/>
    </>
  )
} export default Contato