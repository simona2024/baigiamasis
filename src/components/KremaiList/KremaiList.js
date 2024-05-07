import React from 'react'
import { Link } from 'react-router-dom'

const KremaiList = ({ data }) => {
  return (
    <ul>
        {data.map(kremas => <li key={kremas.id}><Link to="/kremas">{kremas.pavadinimas}</Link></li>)} 
    </ul>
  )
}

export default KremaiList