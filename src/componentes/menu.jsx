import React from 'react';

const Menu = () => {

    return (
        <div>
            <ul className="nav navbar-light bg-light">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Pagina inicial</a>
                </li>
                <li className="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="">Acao</a>
                        <a className="dropdown-item" href="#">Outra ação</a>
                        <a className="dropdown-item" href="#">Algo mais aqui</a>
                        <div className="dropdown-divider"></div>
                        
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Outras paginas</a>
                </li>

            </ul>
        </div>
    );
};

export default Menu;
