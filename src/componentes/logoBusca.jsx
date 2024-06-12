import './logoBusca.css'

const Logo = () => {

    return (

        <div className="containerLogoBusca">
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\logotipo.jpeg" width="100" height="100" alt="logo" />
                    </a>


                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline ">
                            <div className='procuraProdutos' class="col-md-10">

                            <input className="form-control mr-sm-1 "  type="search" placeholder="Procurar Produtos" aria-label="Search" />
                            
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