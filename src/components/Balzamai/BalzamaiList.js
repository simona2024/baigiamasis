import React from 'react'
import { Link } from 'react-router-dom'

const BalzamaiList = ({ data }) => {
  return (
    <ul className='list'>
        {data.map(balzamas => <li className='item' key={balzamas.id}><Link to="/balzamai">{balzamas.pavadinimas} <p> <span className='price'>Kaina:</span>{" "} {balzamas.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default BalzamaiList