import React from 'react'
import { Link } from 'react-router-dom'

const BalzamaiList = ({ data }) => {
  return (
    <ul>
        {data.map(balzamas => <li key={balzamas.id}><Link to="/balzamai">{balzamas.pavadinimas}</Link></li>)} 
    </ul>
  )
}

export default BalzamaiList