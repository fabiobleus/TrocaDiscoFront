import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className='nav navbar-light bg-light '>
            <ul className="nav navbar-light bg-light container">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Pagina inicial</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/category/vinil">Vinil</Link></li>
                        <li><Link className="dropdown-item" to="/category/cd">CD</Link></li>
                        <li><Link className="dropdown-item" to="/category/dvd">DVD</Link></li>
                        <li><Link className="dropdown-item" to="/category/fita">Fita Cassete</Link></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Itens Colecionaveis
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" to="#">Revistas</a></li>
                        <li><a className="dropdown-item" to="#">Livros de musica</a></li>
                        
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Anuncio</a>
                </li>

            </ul>
        </div>
    );
};

export default Menu;
