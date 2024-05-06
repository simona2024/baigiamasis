import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from 'react-router-dom'
import KvepalaiList from '../../components/KvepalaiList/KvepalaiList'

const KvepalaiPages = () => {

  const [kvepalai, setKvepalai] = useState([])
  
  useEffect(() => {
    const getKvepalai = async () => {
      const res = await fetch('http://localhost:3000/kvepalai')
      const data = await res.json();

      setKvepalai(data)
    };
    getKvepalai()
  }, []);

  return (
    <div>

      <h1>Kvepalai</h1>

      <KvepalaiList data={kvepalai} />

      
    </div>

  )
}
export default KvepalaiPages
