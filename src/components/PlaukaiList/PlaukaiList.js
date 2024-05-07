import React from 'react'
import { Link } from 'react-router-dom'

const PlaukaiList = ({ data }) => {
  return (
    <ul>
        {data.map(priemone => <li key={priemone.id}><Link to="/priemone">{priemone.pavadinimas}</Link></li>)} 
    </ul>
  )
}

export default PlaukaiList