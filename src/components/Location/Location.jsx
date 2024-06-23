import React from 'react'
import LocationImg from './LocationImg/LocationImg'

const Location = () => {
  return (
    <div className='location'>
        <div className='center'>
        <div className='ubicacion'>
        <div className=''>
            <h1 className='poppins-bold'>Rio Cuarto</h1>
            <p className='poppins-bold'>Córdoba, Argentina.</p>
        </div>
        <div>
            <p className='poppins-semibold fecha'>Thuesday,21 june</p>
        </div>
        </div>
        <div className='container-img-location'>
           <LocationImg/>
        </div>
        </div>
    </div>
        
  )
}

export default Location