import React from 'react'
import { Link } from 'react-router-dom'
import './KremaiList.css'

const KremaiList = ({ data }) => {
  return (
    <ul className='list'>
        {data.map(kremas => <li className='item' key={kremas.id}><Link to={`/kremas/${kremas.id}`}>{kremas.pavadinimas} <p> <span className='price'>Kaina:</span>{" "} {kremas.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default KremaiList