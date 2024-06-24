import './logoBusca.css'
import './menu'

const Logo = () => {

    return (
        <div className="container-fluid bg-primary">
      <nav className="navbar navbar-expand-lg navbar-primary">
        <div className="container bg-primary">
          <a className="navbar-brand" href="#">
            <img src="src/assets/logotipo.png" width="172" height="172" alt="logo" />
          </a>

          <form className="form-inline ml-auto">
            <div className='procuraProdutos'>
              <input className="form-control mr-sm-1" type="search" placeholder="Procurar Produtos" aria-label="Search" />
            </div>

            <button className="btn btn-primary my-1 my-sm-0 ml-2" type="submit">Buscar</button>
          </form>

          <div className='ml-auto'>
            <a className="btn btn-primary ml-2" href="/register-user" role="button">Cadastrar-se</a>
            <a className="btn btn-primary ml-2" href="/login-user" role="button">Entrar</a>
          </div>
        </div>
      </nav>
    </div>
  );
      
        

    
    }

export default Logo;