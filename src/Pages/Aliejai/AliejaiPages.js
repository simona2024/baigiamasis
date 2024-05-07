import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from 'react-router-dom'
import AliejaiList from '../../components/Balzamai/BalzamaiList'

const AliejaiPages = () => {

  const [aliejai, setAliejai] = useState([])
  
  useEffect(() => {
    const getAliejai = async () => {
      const res = await fetch('http://localhost:3000/hairProducts?hairCategoryId=3')
      const data = await res.json();

      setAliejai(data)
    };
    getAliejai()
  }, []);

  return (
    <div>

      <h1>Plaukų Aliejai</h1>

      <AliejaiList data={aliejai} />

      
    </div>

  )
}
export default AliejaiPages