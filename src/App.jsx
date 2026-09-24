import Header from './Componentes/Header/Header'

function App() {
  return (
    <div className="pagina">
      <Header />

      <main className="conteudo">
        <h1>Estúdio Alfa</h1>
        <p>Bem-vindo ao nosso site!</p>
      </main>

      <footer className="footer">
        <p>© 2026 Estúdio Alfa</p>
      </footer>
    </div>
  )
}

export default App