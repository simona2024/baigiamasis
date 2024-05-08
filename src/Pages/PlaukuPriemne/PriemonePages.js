import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PriemonePages = () => {
    const {id} = useParams()
    const [priemone, setPriemone] = useState([])

    useEffect(() => {
        const getPriemone = async () => {
          const res = await fetch(`http://localhost:3000/hairProducts/${id}`)
          const data = await res.json();
    
          setPriemone(data)
        };
        getPriemone()
      }, []);

      const { pavadinimas, gamintojas, aprasymas, kaina} = priemone
    
  return (
    <div className='prekes-card'>
        <h1 className='prekes-h1'>{pavadinimas}</h1>
        <span className='prekes-span'>{gamintojas}</span>
        <p className='prekes-p'>{aprasymas}</p>
        <span className='price'>{kaina}</span>
    </div>
  )
}

export default PriemonePages