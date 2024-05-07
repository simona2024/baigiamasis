import React from 'react'
import { Link } from 'react-router-dom'

const NagaiList = ({ data }) => {
  return (
    <ul>
        {data.map(lakas => <li key={lakas.id}><Link to={`/lakas/${lakas.id}`}>{lakas.pavadinimas} <p> <span>Kaina:</span>{" "} {lakas.kaina} </p>
        </Link></li>)} 
        
        
    </ul>

  )
}

export default NagaiList