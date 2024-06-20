import Header from "../componentes/header"
import "/src/index.css"

const LoginUser = () => {
    return (
    <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
        <Header />
        <div style={{ height: '2rem' }}> 

        </div>
    <form className="form-container" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="mb-3">
            <label htmlFor="staticEmail2" className="form-label">Email:</label>
            <input type="email" className="form-control" id="staticEmail2" placeholder="email@example.com" />
        </div>

        <div className="mb-3">
            <label htmlFor="inputPassword2" className="form-label">Senha:</label>
            <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
        </div>

        <div className="d-grid">
            <button type="submit" className="btn btn-primary">Confirmar</button>
        </div>
    </form>
        </div>
    );
}

export default LoginUser;

