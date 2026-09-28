import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          layouts responsivos, rápidos a acessiveis para o seu negócio crescer
        </p>

        <div className="hero-button">
          <a href="#oramento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver portfólio
          </a>
        </div>
      </section>
      <section className="serviços">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
          <div className="servicos-card">
            <span>❤️</span>
            <h3>Desing de interface</h3>
            <p>Telas claras, pensados para o usuario</p>
          </div>
        </div>

        <div className="sercicos-card">
          <span>😊</span>
          <h3>Responsividade</h3>
          <p>O mesmo site em qualquer tela</p>
        </div>

        <div className="servicos-card">
          <span>👍</span>
          <h3>Perfomance</h3>
          <p>Paginas leves que carregam rapido.</p>
        </div>
      </section>
    </main>
  );
}
export default Main;
