import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import ModeProvider from './components/ModeContext/ModeContext';
import Navbar from './components/Navbar/Navbar'
import Location from './components/Location/Location';
import Weather from './components/Weather/Weather';
import Precipitaciones from './components/Precipitaciones/Precipitaciones';
import Dias from './components/Dias/Dias';
import ClimaDetail from './components/ClimaDetail/ClimaDetail';

function App() {
  

  return (
    <Router>
    <ModeProvider >
    <div className='background '>
      <Navbar/>
      <Location/>
      <Weather/>
      {/* <Precipitaciones/> */}
      <Dias/>
      {/* <Routes>
      <Route path="/clima-detail" element={<ClimaDetail/>} />
      </Routes> */}
       
    </div>
    </ModeProvider>
    </Router>
  )
}

export default App
