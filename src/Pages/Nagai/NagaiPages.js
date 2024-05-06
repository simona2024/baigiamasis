import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from 'react-router-dom'
import NagaiList from '../../components/NagaiList/NagaiList'

const NagaiPages = () => {

  const [nagai, setNagai] = useState([])
  
  useEffect(() => {
    const getNagai = async () => {
      const res = await fetch('http://localhost:3000/nagai')
      const data = await res.json();

      setNagai(data)
    };
    getNagai()
  }, []);

  return (
    <div>

      <h1>Nagų lakai</h1>

      <NagaiList data={nagai} />

      
    </div>

  )
}
export default NagaiPages
