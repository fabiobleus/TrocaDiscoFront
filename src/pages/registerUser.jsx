import Header from "../componentes/header"



const RegisterUser = () => {
    return (
        <div>
            <Header />
            <h1>Cadastro de usuarios</h1>

            <form class="row g-3 ms-1 me-1 ">

                <div className="col">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Sobrenome" aria-label="Last name"/>
                </div>

                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" className="form-label">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Avenida Faria Lima" />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Complemento</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, Estudio, ou Andar" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Estado</label>
                    <select id="inputState" className="form-select">
                        <option selected>Escolha...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Cep</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                        Olhe para mim
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </div>
    )

}

export default RegisterUser