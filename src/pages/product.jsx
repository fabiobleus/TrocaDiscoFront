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


            <div className="w-50 h-50">
                <img src="\assets\PaginaProdutosBeatles.jpg" alt="" />
            </div>

            <div className="container">
                <div className="product-card me-50">

                    <h1>Disco Beatles 1966</h1>
                    <p>Disco em excelente qualidade de conservação.</p>
                    <button onClick={handleExchange}>Quero trocar</button>
                </div>
            </div>
        </div>
    )

}

export default Product