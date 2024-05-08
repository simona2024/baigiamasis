import React from 'react'
import { Link } from 'react-router-dom'

const AliejaiList = ({ data }) => {
  return (
    <ul className='list'>
        {data.map(aliejus => <li className='item' key={aliejus.id}><Link to="/aliejai">{aliejus.pavadinimas} <p> <span className='price'>Kaina:</span>{" "} {aliejus.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default AliejaiList