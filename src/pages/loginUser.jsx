import Header from "../componentes/header"
import "/src/index.css"

const LoginUser = () => {


    return (

        <div className="min-height-500">
            <Header/>
            <form className="row g-3" >
                <div className="col-auto">
                    <h6>Email:</h6>
                    <label for="staticEmail2" className="visually-hidden">Email</label>
                    <input type="text" className="form-control" id="staticEmail2" placeholder="email@example.com"/>
                </div>

                <div class="col-auto">
                    <h6>Senha:</h6>
                    <label for="inputPassword2" className="visually-hidden">Password</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                <div class="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Confirmar</button>
                </div>
            </form>
        </div>
    )
}
 export default LoginUser;

