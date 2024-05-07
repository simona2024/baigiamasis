import React from 'react'
import NagaiPages from './Pages/Nagai/NagaiPages'
import PlaukaiPages from './Pages/Plaukai/PlaukaiPages'
import KvepalaiPages from './Pages/Kvepalai/KvepalaiPages'
import KvepalasPages from './Pages/Kvepalas/KvepalasPages'
import { Route, Routes } from 'react-router-dom'
import PageHeader from './components/PageHeader/PageHeader'
import LakasPages from './Pages/NaguLakas/LakasPages'
import KremaiPages from './Pages/Kremai/KremaiPages'
import KremasPages from './Pages/Kremas/KremasPages'
import PriemonePages from './Pages/PlaukuPriemne/PriemonePages'
import SampunaiPages from './Pages/Sampunai/SampunaiPages'
import BalzamaiPages from './Pages/Balzamai/BalzamaiPages'
import AliejaiPages from './Pages/Aliejai/AliejaiPages'

const App = () => {
  return (

  <>
      <PageHeader />
      <Routes>
          <Route path='/' element={<h1>Kosmetika</h1>} />
          <Route path='/nagai' element={<NagaiPages />} />
          <Route path='/plaukai' element={<PlaukaiPages />} /> 
          <Route path='/nagai' element={<NagaiPages />} />
          <Route path='/kremai' element={<KremaiPages />} />
          <Route path='/kvepalai' element={<KvepalaiPages />} />
          <Route path='/kvepalas' element={<KvepalasPages />} />
          <Route path='/lakas' element={<LakasPages />} />
          <Route path='/kremas' element={<KremasPages />} />
          <Route path='/priemone' element={<PriemonePages />} />
          <Route path='/sampunai' element={<SampunaiPages />} />
          <Route path='/balzamai' element={<BalzamaiPages />} />
          <Route path='/aliejai' element={<AliejaiPages />} />
          <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes> 
  </>
     
    
  )
}
export default App
