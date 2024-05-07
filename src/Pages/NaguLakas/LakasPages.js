import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const LakasPages = () => {
    const {id} = useParams()
    const [lakas, setlakas] = useState([])

    useEffect(() => {
        const getLakas = async () => {
          const res = await fetch(`http://localhost:3000/nagai/${id}`)
          const data = await res.json();
    
          setlakas(data)
        };
        getLakas()
      }, []);

      const { pavadinimas, gamintojas, aprasymas, kaina} = lakas
    
  return (
    <div>
        <h1>{pavadinimas}</h1>
        <span>{gamintojas}</span>
        <p>{aprasymas}</p>
        <span>{kaina}</span>
    </div>
  )
}

export default LakasPages