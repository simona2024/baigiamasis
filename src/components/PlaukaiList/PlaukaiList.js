import React from 'react'
import { Link } from 'react-router-dom'

const PlaukaiList = ({ data }) => {
  return (
    <ul>
        {data.map(priemone => <li key={priemone.id}><Link to={`/priemone/${priemone.id}`}>{priemone.pavadinimas} <p> <span>Kaina:</span>{" "} {priemone.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default PlaukaiList