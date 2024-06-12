import './logoBusca.css'

const Logo = () => {

    return (

        <div className="containerLogoBusca">
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\logotipo.jpeg" width="90" height="90" alt="logo" />
                    </a>


                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline ">
                            <input className="form-control mr-sm-1" type="search" placeholder="Search Products" aria-label="Search" />
                            <button className="btn btn-outline-success my-1 my-sm-0" type="submit">Search</button>
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