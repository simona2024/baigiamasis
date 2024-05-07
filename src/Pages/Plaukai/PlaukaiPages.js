import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from 'react-router-dom'
import PlaukaiList from '../../components/PlaukaiList/PlaukaiList'

const PlaukaiPages = () => {

  const [plaukai, setPlaukai] = useState([])
  
  useEffect(() => {
    const getPlaukai = async () => {
      const res = await fetch('http://localhost:3000/hairProducts')
      const data = await res.json();

      setPlaukai(data)
    };
    getPlaukai()
  }, []);

  return (
    <div>

      <h1>Plaukų priemonės</h1>

      <PlaukaiList data={plaukai} />

      
    </div>

  )
}
export default PlaukaiPages
