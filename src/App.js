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
import SukurtiPriemone from './Pages/SukurtiPriemone/SukurtiPriemone'

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
          <Route path='/kvepalas/:id' element={<KvepalasPages />} />
          <Route path='/lakas/:id' element={<LakasPages />} />
          <Route path='/kremas/:id' element={<KremasPages />} />
          <Route path='/priemone/:id' element={<PriemonePages />} />
          <Route path='/sampunai' element={<SampunaiPages />} />
          <Route path='/balzamai' element={<BalzamaiPages />} />
          <Route path='/aliejai' element={<AliejaiPages />} />
          <Route path='/sukurti-priemone' element={<SukurtiPriemone />} />
          <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes> 
  </>
     
    
  )
}
export default App
