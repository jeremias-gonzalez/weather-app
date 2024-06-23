import React from 'react'

const Weather = () => {
  return (
    <div className='weather-container'>
        <div className='weather-container-container'>
        <div className='rain3d-container'>
            <img className='rain-img' src="src/assets/heavyrain.png" alt="" />
                <div className='heavyrain-container'>
                     <p className='poppins-bold heavyrain'>Heavy Rain</p>
                     <p className='poppins-semibold'>Tonight</p>

                </div>
        </div>
       
        <div>
           <h1 className='poppins-extrabold grados'>27°</h1>
           <div className='sensacion-termica'>
            <p className='poppins-semibold'>Feels like 32°</p>
            <div className='wind-container'>
                <img src="src/assets/wind.png" className='wind' alt="" />
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Weather