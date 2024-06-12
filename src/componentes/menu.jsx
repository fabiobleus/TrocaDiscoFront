import React from 'react';

const Menu = () => {

    return (
        <div>
            <ul class="nav navbar-light bg-light">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Pagina inicial</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="">Acao</a>
                        <a class="dropdown-item" href="#">Outra ação</a>
                        <a class="dropdown-item" href="#">Algo mais aqui</a>
                        <div class="dropdown-divider"></div>
                        
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Outras paginas</a>
                </li>

            </ul>
        </div>
    );
};

export default Menu;
