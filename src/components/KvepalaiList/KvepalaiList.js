import React from 'react'
import { Link } from 'react-router-dom'

const KvepalaiList = ({ data }) => {
  return (
    <ul className='list'>
        {data.map(kvepalas => <li className='item' key={kvepalas.id}><Link to={`/kvepalas/${kvepalas.id}`}>{kvepalas.pavadinimas} <p> <span className='price'>Kaina:</span>{" "} {kvepalas.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default KvepalaiList