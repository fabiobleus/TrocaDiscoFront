import './logoBusca.css'

const Logo = () => {

    return (

        <div className="containerLogoBusca">
            <div className='bg-light'>
                <nav className="navbar navbar-light bg-light container">
                    <div className='justify-content col-1 '>
                        <a className="navbar-brand" href="#">
                            <img src="\src\assets\logotipo.jpeg " className='mw-100'   alt="logo" />
                        </a>

                    </div>


                    <nav className="navbar navbar-light bg-light">


                        <form className="form-inline ">
                            <div className='procuraProdutos col-md-14'>

                                <input className="form-control mr-sm-1 " type="search" placeholder="Procurar Produtos" aria-label="Search" />

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