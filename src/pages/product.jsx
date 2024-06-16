import Header from "../componentes/header";
import "./product.css";

const Product = () => {

    const handleExchange = () => {
        // Simulação de evento de troca na base de dados
        console.log('Evento de troca disparado!');
        // Adicione aqui a lógica para a troca na base de dados
    };


    return (
        <div>
            <Header />

            <h1>Pagina do produto</h1>

            <div>
                <img src="" alt="" />
            </div>
            <div className="container">
                <div className="product-card me-50">
                    <h1>Celular Xiaomi</h1>
                    <p>Celular em excelente qualidade de conservação</p>
                    <button onClick={handleExchange}>Quero trocar</button>
                </div>
            </div>
        </div>
    )

}

export default Product