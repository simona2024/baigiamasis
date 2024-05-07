import React from 'react'
import { Link } from 'react-router-dom'

const BalzamaiList = ({ data }) => {
  return (
    <ul>
        {data.map(balzamas => <li key={balzamas.id}><Link to="/balzamai">{balzamas.pavadinimas} <p> <span>Kaina:</span>{" "} {balzamas.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default BalzamaiList