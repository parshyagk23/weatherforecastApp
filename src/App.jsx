
import Geolocation from './Components/GeoLocation/Geolocation'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import WeatherForcast from './Components/WetherForcast/WeatherForcast'
import { useState } from 'react'

function App() {



  return (
    <>
    <Routes>
      <Route path='/' element={<Geolocation />} />
      <Route path='/:cityname' element={<WeatherForcast/>} /> 
      
      
    </Routes>
      
      
    </>
  )
}

export default App
