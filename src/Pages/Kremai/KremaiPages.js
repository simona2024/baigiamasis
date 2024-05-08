import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from 'react-router-dom'
import KremaiList from '../../components/KremaiList/KremaiList'
import './KremaiPages.css'

const KremaiPages = () => {

  const [kremai, setKremai] = useState([])
  
  useEffect(() => {
    const getKremai = async () => {
      const res = await fetch('http://localhost:3000/kremai')
      const data = await res.json();

      setKremai(data)
    };
    getKremai()
  }, []);

  return (
    <div className="container">
      <h1>Kremai</h1>
      <div className="kremai-list">
        <KremaiList data={kremai} />
      </div>
    </div>
  );
};

  
export default KremaiPages
