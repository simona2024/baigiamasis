import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const KvepalasPages = () => {
    const {id} = useParams()
    const [kvepalas, setKvepalas] = useState([])

    useEffect(() => {
        const getKvepalas = async () => {
          const res = await fetch(`http://localhost:3000/kvepalai/${id}`)
          const data = await res.json();
    
          setKvepalas(data)
        };
        getKvepalas()
      }, []);

      const { pavadinimas, gamintojas, aprasymas, kaina} = kvepalas
    
  return (
    <div>
        <h1>{pavadinimas}</h1>
        <span>{gamintojas}</span>
        <p>{aprasymas}</p>
        <span>{kaina}</span>
    </div>
  )
}

export default KvepalasPages