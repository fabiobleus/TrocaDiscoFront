import { useState } from "react";
import Header from "../componentes/header"



const RegisterUser = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        address:'',
        city:'',
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    //Receber os dados do formulario
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    //Enviar os dados para o back-end
    const addUser = async e => {
        e.preventDefault();

        if(!validate()) return;

        const saveDataForm = true; //tTentar implementar a requisição para o backend

        if (saveDataForm) {
            setStatus({
                type: 'sucess',
                mensagem: "Usuário cadastro com sucesso!"
            });
            setUser({
                name: '',
                email: '',
                password: '',
                address: '',
                city: '',
            });
        } else {
            setStatus({
                type: 'error',
                mensagem: "Erro: Usuário não cadastrado com sucesso!"
            });

        }
    }

   function validate() {
    if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
    if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
    if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha e confirmar senha!'});
    if(user.password.length < 6) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});
    if(!user.address) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o endereço!'});
    if(!user.city) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher a cidade!'});

    return true;
   }


    return (
        <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Header />
            <div style={{ height: '2rem' }}>
            </div>
            <h1>Cadastro de Usuários</h1>
            {status.type === 'sucess' ? <p style={{color:"green"}}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p style={{color:"#ff0000"}}>{status.mensagem}</p> : ""}
            <form onSubmit={addUser} className="form-container" style={{ maxWidth: '600px', width: '100%' }}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Nome:</label>
                    <input type="text" name="name" className="form-control" onChange={valueInput} value={user.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail4" className="form-label">E-mail</label>
                    <input type="email" name="email" className="form-control" id="inputEmail4" onChange={valueInput} value={user.email} />
                </div>
                <div className="mb-3" style={{ maxWidth: '300px' }}>
                    <label htmlFor="inputPassword4" className="form-label">Senha</label>
                    <input type="password" name="password" className="form-control" id="inputPassword4" onChange={valueInput} value={user.password} />
                </div>
                <div className="mb-3" style={{ maxWidth: '300px' }}>
                    <label htmlFor="inputPassword4" className="form-label">Confirmar Senha</label>
                    <input type="password" name="password" className="form-control" id="inputConfirmPassword4" onChange={valueInput} value={user.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Endereço</label>
                    <input type="text" name="address" className="form-control" id="inputAddress" onChange={valueInput} value={user.address} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress2" className="form-label">Complemento</label>
                    <input type="text" className="form-control" id="inputAddress2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCity" className="form-label">Cidade</label>
                    <input type="text" name="city" className="form-control" id="inputCity" onChange={valueInput} value={user.city} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputState" className="form-label">Estado</label>
                    <select id="inputState" className="form-select">
                        <option selected>Escolha...</option>
                        <option>Acre</option>
                        <option>Alagoas</option>
                        <option>Amapá</option>
                        <option>Amazonas</option>
                        <option>Bahia</option>
                        <option>Ceará</option>
                        <option>Distrito Federal</option>
                        <option>Espírito Santo</option>
                        <option>Goiás</option>
                        <option>Maranhão</option>
                        <option>Mato Grosso</option>
                        <option>Mato Grosso do Sul</option>
                        <option>Minas Gerais</option>
                        <option>Pará</option>
                        <option>Paraíba</option>
                        <option>Paraná</option>
                        <option>Pernanmbuco</option>
                        <option>Piauí</option>
                        <option>Rio De Janeiro</option>
                        <option>Rio Grande do Norte</option>
                        <option>Rio Grande do Sul</option>
                        <option>Rondônia</option>
                        <option>Roaraima</option>
                        <option>Santa Catarina</option>
                        <option>São Paulo</option>
                        <option>Sergipe</option>
                        <option>Tocantis</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="mb-3" style={{ maxWidth: '150px' }}>
                    <label htmlFor="inputZip" className="form-label">Cep</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="d-grid" style={{ maxWidth: '150px', margin: '0 auto' }}>
                    <button type="submit" className="btn btn-primary variant=primary">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterUser;
