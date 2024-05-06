import React from 'react'
import NagaiPages from './Pages/Nagai/NagaiPages'
import PlaukaiPages from './Pages/Plaukai/PlaukaiPages'
import VeidasPages from './Pages/Veidas/VeidasPages'
import KvepalaiPages from './Pages/Kvepalai/KvepalaiPages'
import { Route, Routes } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'

const App = () => {
  return (

  <>
      <PageHeader />
      <Routes>
          <Route path='/' element={<h1>Kosmetika</h1>} />
          <Route path='/nagai' element={<NagaiPages />} />
          <Route path='/plaukai' element={<PlaukaiPages />} /> 
          <Route path='/nagai' element={<NagaiPages />} />
          <Route path='/veidas' element={<VeidasPages />} />
          <Route path='/kvepalai' element={<KvepalaiPages />} />
          <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes> 
  </>
     
    
  )
}
export default App
