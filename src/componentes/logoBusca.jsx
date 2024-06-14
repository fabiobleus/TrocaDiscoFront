import './logoBusca.css'

const Logo = () => {

    return (

        <div className="containerLogoBusca">
            <div className='bg-light'>
                <nav className="navbar navbar-light bg-light container">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\logotipo.jpeg" width="150" height="150" alt="logo"  />
                    </a>


                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline ">
                            <div className='procuraProdutos col-md-10'>

                            <input className="form-control mr-sm-1 " type="search" placeholder="Procurar Produtos" aria-label="Search" />
                            
                            </div>

                            <div className='buttonBuscar'>

                            <button className="btn btn-outline-success my-1 my-sm-0" type="submit">Buscar</button>

                            </div>
                            
                        </form>

                        

                        <div className='btn-cadastro'>
                            <a className="btn btn-primary" href="#" role="button">Cadastra-se</a>
                        </div>

                        <div className='btn-entrar'>
                            <a className="btn btn-primary" href="#" role="button">Entrar</a>
                        </div>
                    </nav>
                </nav>

            </div>
        </div>


    )
}

export default Logo;