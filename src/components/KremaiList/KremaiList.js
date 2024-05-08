import React from 'react'
import { Link } from 'react-router-dom'
import './KremaiList.css'

const KremaiList = ({ data }) => {
  return (
    <ul>
        {data.map(kremas => <li key={kremas.id}><Link to={`/kremas/${kremas.id}`}>{kremas.pavadinimas} <p> <span>Kaina:</span>{" "} {kremas.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default KremaiList