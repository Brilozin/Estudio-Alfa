import './Header.css'
import reactLogo from '../../assets/react.svg'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img
          src={reactLogo}
          alt="Logo"
          className="logo-icon"
        />

        <span className="logo-text">
          Studio Alfa
        </span>
      </div>

      <nav className="nave">
        <a href="#">Início</a>
        <a href="#">Serviços</a>
        <a href="#">Sobre</a>

        <a href="#" className="btn-contatos">
          Contato
        </a>
      </nav>

    </header>
  )
}

export default Header