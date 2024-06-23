import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../componentes/imgHome.css";
import React, { useEffect, useState } from "react";


function ImgHome() {
  const { id } = useParams();

  const images = [
    {
      id: 1,
      src: "src/assets/ImgDosProdutos/1.jpg",
      name: "Disco de vinil da Marisa Monte",
    },
    {
      id: 2,
      src: "src/assets/ImgDosProdutos/2.jpg",
      name: "Revista AutoMobile",
    },
    { id: 3, src: "src/assets/ImgDosProdutos/3.jpg", name: "CD anos 80" },
    {
      id: 4,
      src: "src/assets/ImgDosProdutos/4.jpg",
      name: "Disco de vinil dos Beatles",
    },
    {
      id: 5,
      src: "src/assets/ImgDosProdutos/5.jpg",
      name: "DVDs do Legião Urbana",
    },
    {
      id: 6,
      src: "src/assets/ImgDosProdutos/6.jpg",
      name: "Fita cassete da Taylor Swift",
    },
    { id: 7, src: "src/assets/ImgDosProdutos/7.jpg", name: "Livro de música" },
    {
      id: 8,
      src: "src/assets/ImgDosProdutos/8.jpg",
      name: "Disco de vinil do Elvis Presley",
    },
    {
      id: 9,
      src: "src/assets/ImgDosProdutos/9.jpg",
      name: "Disco de vinil do Megadeth",
    },
    {
      id: 10,
      src: "src/assets/ImgDosProdutos/10.jpg",
      name: "Revistas de carros antigos",
    },
    {
      id: 11,
      src: "src/assets/ImgDosProdutos/11.jpg",
      name: "Fita cassete do Guns N' Roses",
    },
    {
      id: 12,
      src: "src/assets/ImgDosProdutos/12.jpg",
      name: "Disco de vinil do Chitãozinho e Xororó",
    },
  ];

  const [imageUrl, setImageUrl] = useState('');         

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get('/api/image');
        setImageUrl(response.data); // Assume que o backend retorna a URL da imagem
      } catch (error) {
        console.error('Erro ao buscar a imagem:', error);
      }
    }

    fetchImage();
  }, []);
  
    return (
      <div className="container">
        
      {images.map((image) => (
        <Link to={`/product/${image.id}`} className="text-decoration-none" key={image.id}>
          <div className="card">
            <img src={image.src} alt={`Imagem ${image.id}`} />
            <p>{image.name}</p>
            <div className="text-center">
              <button className="btn btn-primary shadow-none">
                Saiba mais
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
    ); 
  
}

export default ImgHome;
