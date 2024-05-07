import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const KremasPages = () => {
    const {id} = useParams()
    const [kremas, setKremas] = useState([])

    useEffect(() => {
        const getKremas = async () => {
          const res = await fetch(`http://localhost:3000/kremai/${id}`)
          const data = await res.json();
    
          setKremas(data)
        };
        getKremas()
      }, []);

      const { pavadinimas, gamintojas, aprasymas, kaina} = kremas
    
  return (
    <div>
        <h1>{pavadinimas}</h1>
        <span>{gamintojas}</span>
        <p>{aprasymas}</p>
        <span>{kaina}</span>
    </div>
  )
}

export default KremasPages