import React from 'react';

const Menu = () => {

    return (
        <div>
            <ul className="nav navbar-light bg-light">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Pagina inicial</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Vinil</a></li>
                        <li><a className="dropdown-item" href="#">CD</a></li>
                        <li><a className="dropdown-item" href="#">DVD</a></li>
                        <li><a className="dropdown-item" href="#">Fita Cassete</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Itens Colecionaveis
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Revistas</a></li>
                        <li><a className="dropdown-item" href="#">Livros de musica</a></li>
                        
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Produtos</a>
                </li>

            </ul>
        </div>
    );
};

export default Menu;
