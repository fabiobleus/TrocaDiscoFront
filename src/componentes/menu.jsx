import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className='nav navbar-light bg-light '>
            <ul className="nav navbar-light bg-light container">
                <li className="nav-item">
<<<<<<< HEAD
                    <a className="nav-link active" href="/">Pagina inicial</a>
=======
                    <a className="nav-link active" href="#">Pagina inicial</a>
>>>>>>> 36db5d6b49707f464da388dc2a7c3eb2f9aa6891
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
<<<<<<< HEAD
                <li className="nav-item">
                    <a className="nav-link" href="#">Anuncio</a>
                </li>
=======
>>>>>>> 36db5d6b49707f464da388dc2a7c3eb2f9aa6891

            </ul>
        </div>
    );
};

export default Menu;
