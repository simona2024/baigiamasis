import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from 'react-router-dom'
import SampunaiList from '../../components/Sampunai/SampunaiList'

const SampunaiPages = () => {

  const [sampunai, setSampunai] = useState([])
  
  useEffect(() => {
    const getSampunai = async () => {
      const res = await fetch('http://localhost:3000/hairProducts?hairCategoryId=1')
      const data = await res.json();

      setSampunai(data)
    };
    getSampunai()
  }, []);

  return (
    <div>

      <h1>Plaukų Šampūnai</h1>

      <SampunaiList data={sampunai} />

      
    </div>

  )
}
export default SampunaiPages