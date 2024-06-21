import Header from "../componentes/header";
import "./product.css";

const ProductPage = () => {
    return (
      <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Header />
        <div style={{ height: '2rem' }}></div>
        <h1>Cadastre o seu Anúncio</h1>
        <form className="form-container" style={{ maxWidth: '600px', width: '100%' }}>
          <div className="mb-3">
            <label htmlFor="inputProductName" className="form-label">Título do Anúncio:</label>
            <input type="text" className="form-control" id="inputProductName" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputProductDescription" className="form-label">Descrição do Produto:</label>
            <textarea className="form-control" id="inputProductDescription" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="inputProductType" className="form-label">Tipo do Produto:</label>
            <select id="inputProductType" className="form-select">
              <option value="Vinil">Vinil</option>
              <option value="DVD">DVD</option>
              <option value="CD">CD</option>
              <option value="Fita Cassete">Fita Cassete</option>
              <option value="Livros">Livros</option>
              <option value="Revistas">Revistas</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="inputProductStatus" className="form-label">Status do Anúncio:</label>
            <select id="inputProductStatus" className="form-select">
              <option value="Ativo">Ativo</option>
              <option value="Suspenso">Suspenso</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="inputProductPhoto" className="form-label">Foto do Produto:</label>
            <input type="file" className="form-control" id="inputProductPhoto" />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Cadastrar Anúncio</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default ProductPage;