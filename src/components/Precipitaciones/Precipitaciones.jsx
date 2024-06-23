import React from 'react'

const Precipitaciones = () => {
  return (
    <div className='precipitaciones-container'>
      <div className='precipitaciones-container-container'>
        <div className='porcentaje-de-lluvia'>
          <img className='porcentaje-de-lluvia-img' src="src/assets/rain3d.png" alt="" />
          <p className='poppins-semibold'>100%</p>
        </div>
        <div className='velocidad'>
        <img className='velocidad-img'  src="https://cdn3d.iconscout.com/3d/premium/thumb/windy-7460769-6044096.png" alt="" />
        <p className='poppins-semibold'> 24km/h </p>
        </div>
        <div className='humedad'>
        <img className='humedad-img' src="https://cdn3d.iconscout.com/3d/premium/thumb/humidity-8268786-6612891.png?f=webp" alt="" />
        <p className='poppins-semibold'>64%</p>
        </div>
        </div>
    </div>
  )
}

export default Precipitaciones