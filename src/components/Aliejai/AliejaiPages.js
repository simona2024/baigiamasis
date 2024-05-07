import React from 'react'
import { Link } from 'react-router-dom'

const AliejaiList = ({ data }) => {
  return (
    <ul>
        {data.map(aliejus => <li key={aliejus.id}><Link to="/aliejai">{aliejus.pavadinimas} <p> <span>Kaina:</span>{" "} {aliejus.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default AliejaiList