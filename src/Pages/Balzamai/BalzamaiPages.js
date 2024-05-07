import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from 'react-router-dom'
import BalzamaiList from '../../components/Balzamai/BalzamaiList'

const BalzamaiPages = () => {

  const [balzamai, setBalzamai] = useState([])
  
  useEffect(() => {
    const getBalzamai = async () => {
      const res = await fetch('http://localhost:3000/hairProducts?hairCategoryId=2')
      const data = await res.json();

      setBalzamai(data)
    };
    getBalzamai()
  }, []);

  return (
    <div>

      <h1>Plaukų Balzamai</h1>

      <BalzamaiList data={balzamai} />

      
    </div>

  )
}
export default BalzamaiPages