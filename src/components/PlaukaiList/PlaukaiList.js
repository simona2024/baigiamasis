import React from 'react'
import { Link } from 'react-router-dom'
import './PlaukaiList.css'

const PlaukaiList = ({ data }) => {
  return (
    <ul className="list">
        
        {data.map(priemone => <li className="item" key={priemone.id}><Link className="name" to={`/priemone/${priemone.id}`}>{priemone.pavadinimas} <p> <span className="price">Kaina:</span>{" "} {priemone.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default PlaukaiList