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
            <Footer/>
           
            
        </div>
    )

}

export default Category