import { json, redirect, useNavigate } from "react-router-dom";
import Header from "../componentes/header"
import React, { useState } from 'react';


const RegisterUser = () => {
    const navigate = useNavigate();

    const [FormUser, setFormUser] = useState({
        name: '',
        email: '',
        password: '',
        cpf: '',
        birthdate: '',
        uf: '',
        city: '',
        cep: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormUser({
            ...FormUser,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const bodyJson = JSON.stringify(FormUser);
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: bodyJson
            };


            const response = await fetch('http://localhost:3000/api/user', options);
            if (response.ok) {
                alert('Usuário Cadastrado com Sucesso! \n Faça o login para prosseguir.');
                navigate('/login-user')
            } else {
                alert('Erro ao cadastrar o usuário');
            }
        } catch (error) {
            alert('Erro! tente novamente.');
        }
    };


    return (
        <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Header />
            <div style={{ height: '2rem' }}>
            </div> 
                <h1>Cadastro de Usuários</h1>
    <form className="form-container" style={{ maxWidth: '600px', width: '100%' }}>
            <div className="mb-3">
    <label htmlFor="inputName" className="form-label">Nome:</label>
    <input type="text" className="form-control" />
        </div>          
        <div className="mb-3">
            <label htmlFor="inputEmail4" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="mb-3" style={{ maxWidth: '300px' }}>
            <label htmlFor="inputPassword4" className="form-label">Senha</label>
            <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="mb-3">
            <label htmlFor="inputAddress2" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="inputAddress2" />
        </div>
        <div className="mb-3">
            <label htmlFor="inputCity" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="inputCity" />
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
            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </div>
    </form>
    </div>
    )
}

export default RegisterUser;
