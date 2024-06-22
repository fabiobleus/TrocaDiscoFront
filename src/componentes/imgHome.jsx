import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../componentes/imgHome.css";
import { useEffect, useState } from "react";

function ImgHome() {

  const [useJSON, setUseJSON] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/JSON',
    },
  };


  useEffect(() => {
fetch('http://localhost:3000/api/products') // todos produtos
// fetch('http://localhost:3000/api/product/name/' + busca ) // busca no title 
// fetch('http://localhost:3000/api/product/category' + category ) // filtro da categoria
// fetch('http://localhost:3000/api/product/genere' + generomusical ) // filtro da musical

.then( async(response) => {
  const ret = await response.json();
  const sol = ret.product;
    setUseJSON(sol);

}
)
.catch((err) => {
  console.log(err);
})
    
  }, []);

  const { id } = useParams();

  return (
    <div className="container">
      {useJSON.length && useJSON.map((image) => (
        <div key={image._id} className="card">
          <img src={`src/assets/ImgDosProdutos/${image.photo[0]}`} alt={`Imagem ${image.id}`} />
          <p>{image.title}</p>
          <div>

            <Link to={`/product/${image._id}`}>
              <button>Trocar</button>
            </Link>
          </div>
        </div>
      ))}
    </div>

    // return (

    // <div className='container'>

    //     <div className="image-container">
    //       {images.map((image) => (
    //         <div key={image.id} className="image-item">
    //           <Link to={/product/${image.id}}>
    //             <img src={image.src} alt={Imagem ${image.id}} className="rounded-image" />
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
  );
}


export default ImgHome;