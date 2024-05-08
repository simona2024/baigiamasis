import React from 'react'
import { Link } from 'react-router-dom'

const NagaiList = ({ data }) => {
  return (
    <ul className="list">
        {data.map(lakas => <li className="item" key={lakas.id}><Link className='name' to={`/lakas/${lakas.id}`}>{lakas.pavadinimas} <p> <span className='price'>Kaina:</span>{" "} {lakas.kaina} </p>
        </Link></li>)} 
        
        
    </ul>
    

  )
}

export default NagaiList