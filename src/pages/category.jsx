// import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../componentes/header"
import Footer from "../componentes/footer"

const Category = ( ) => {
    const { id } = useParams()

    // useEffect(() => {
    //     fetch('/category/' + id)
    // }, [])

    return (
        <div>
            <Header />
            <h1>Pagina de categoria</h1>
            <p> Categoria {id}</p>
            
        </div>
    )

}

export default Category