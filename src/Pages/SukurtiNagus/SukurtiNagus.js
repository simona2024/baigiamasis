import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const SukurtiNagus = () => {

  const navigate = useNavigate()
  const [productName, setProductName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      pavadinimas: productName,
      gamintojas: manufacturer,
      aprasymas: description,
      kaina: parseFloat(price),
      
    };

    try {
      const response = await fetch('http://localhost:3000/nagai', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        
      });

      if (response.ok) {
        console.log('Product created successfully!');
      } else {
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    navigate('/nagai/')
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label>Manufacturer:</label>
          <input
            type="text"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};




export default SukurtiNagus