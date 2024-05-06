import React from 'react'
import { Link } from 'react-router-dom'

const KvepalaiList = ({ data }) => {
  return (
    <ul>
        {data.map(kvepalas => <li key={kvepalas.id}><Link to="/kvepalas">{kvepalas.pavadinimas}</Link></li>)} 
    </ul>
  )
}

export default KvepalaiList