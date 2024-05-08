import React, { useEffect, useState } from 'react';
import './Galeria.css'

const Galeria = () => {
    

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
        .then(response => response.json())
        .then(data => {
          const limitedProducts = data.slice(0, 30);
          setProducts(limitedProducts);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <div className="Home">
        <h1>Makeup Products Gallery</h1>
        <div className="gallery">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image_link} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.brand}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }


    
    

export default Galeria