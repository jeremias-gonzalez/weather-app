import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ModeProvider from './components/ModeContext/ModeContext';
import Navbar from './components/Navbar/Navbar'
import Location from './components/Location/Location';
import Weather from './components/Weather/Weather';
import Precipitaciones from './components/Precipitaciones/Precipitaciones';
import Dias from './components/Dias/Dias';

function App() {
  

  return (
    <ModeProvider >
    <div className='background '>
      <Navbar/>
      <Location/>
      <Weather/>
      {/* <Precipitaciones/> */}
      <Dias/>
    </div>
    </ModeProvider>
  )
}

export default App
