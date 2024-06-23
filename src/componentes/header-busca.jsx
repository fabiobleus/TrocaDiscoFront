import './logoBusca.css'
import React,{useState} from 'react';

const Logo = () => {
    
        // Estado inicial com a lista de usuários
        const [users] = useState([
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' },
          { id: 4, name: 'David' },
          { id: 5, name: 'Eve' }
        ]);
    
    // Estado para o termo de busca
    const [searchTerm, setSearchTerm] = useState('');

    // Função para atualizar o termo de busca
    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
        if(setSearchTerm) return;

        // const url = `http://localhost:3000/exmplo?q=${searchTerm}`;

        // fetch(url)

    };

    // Filtra os usuários com base no termo de busca
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <div className="containerLogoBusca">
            <div className='bg-light'>
                <nav className="navbar navbar-light bg-light container">
                    <div className='justify-content col-1 '>
                        <a className="navbar-brand" href="#">
                            <img src="\src\assets\logotipo.jpeg " className='mw-100' alt="logo" />
                        </a>

                    </div>


                    <nav className="navbar navbar-light bg-light">


                        <form className="form-inline ">
                            <div className='procuraProdutos col-md-14'>

                                <input className="form-control mr-sm-1 " type="search" placeholder="Procurar Produtos" aria-label="Search" value={searchTerm} onChange={handleSearch} />
                                <ul>
                                    {filteredUsers.map(user => (
                                        <li key={user.id}>{user.name}</li>
                                    ))}
                                </ul>

                            </div>

                            <div className='buttonBuscar'>

                                <button className="btn btn-outline-success my-1 my-sm-0" type="submit">Buscar</button>

                            </div>

                        </form>



                        <div className='btn-cadastro '>
                            <a className="btn btn-primary " href="/register-user" role="button">Cadastre-se</a>
                        </div>

                        <div className='btn-entrar'>
                            <a className="btn btn-primary" href="/login-user" role="button">Entrar</a>
                        </div>
                    </nav>
                </nav>

            </div>
        </div>


    )
}

export default Logo;