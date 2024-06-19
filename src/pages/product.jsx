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

            <div className="container h-100">
                <div className="product-card me-50">

                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.interest}</p>
                    <button onClick={handleExchange}>Quero trocar</button>
                </div>
            </div>
        </div>
    )

}

export default Product