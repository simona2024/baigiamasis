import React from 'react'
import { Link } from 'react-router-dom'

const SampunaiList = ({ data }) => {
  return (
    <ul className='list'> 
        {data.map(sampunas => <li className='item' key={sampunas.id}><Link to="/sampunai">{sampunas.pavadinimas} <p> <span className='price'>Kaina:</span>{" "} {sampunas.kaina} </p></Link></li>)} 
    </ul>
  )
}

export default SampunaiList