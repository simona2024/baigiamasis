import React from 'react'
import { Link } from 'react-router-dom'

const SampunaiList = ({ data }) => {
  return (
    <ul>
        {data.map(sampunas => <li key={sampunas.id}><Link to="/sampunai">{sampunas.pavadinimas}</Link></li>)} 
    </ul>
  )
}

export default SampunaiList