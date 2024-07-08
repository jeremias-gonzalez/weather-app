import React, { useState } from 'react';
import ClimaDetail from '../ClimaDetail/ClimaDetail';

const Dias = () => {
  const [open, setOpen] = useState(false);

  const abrir = () => {
    setOpen(!open);
  };

  return (
    <div className='dias-container'>
      <div className='days-texts-container'>
        <div className='today-container'>
          <h1 className='poppins-bold today'>Today</h1>
        </div>
        <div className='container-next-days'>
          <button className='next-seven-days' onClick={abrir}>
            {open ? '' : 'Next 7 days'}
          </button>
          <img
            className='img-arrow-next'
            src='https://cdn-icons-png.flaticon.com/512/2989/2989988.png'
            alt='Arrow'
          />
        </div>
      </div>
      {open == true && (
         <ClimaDetail/>
      //   <div className='container-days'>
      //     <div className='sunday'>
      //       <p className='poppins-bold sun-am'>10:00</p>
      //       <img
      //         className='sun-day'
      //         src='https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png'
      //         alt='Sun'
      //       />
      //       <p className='poppins-semibold grados-sun'>23°</p>
      //     </div>
      //     <div className='sunday'>
      //       <p className='poppins-bold sun-am'>10:00</p>
      //       <img
      //         className='sun-day'
      //         src='https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png'
      //         alt='Sun'
      //       />
      //       <p className='poppins-semibold grados-sun'>23°</p>
      //     </div>
      //     <div className='sunday'>
      //       <p className='poppins-bold sun-am'>10:00</p>
      //       <img
      //         className='sun-day'
      //         src='https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png'
      //         alt='Sun'
      //       />
      //       <p className='poppins-semibold grados-sun'>23°</p>
      //     </div>
      //     <div className='sunday'>
      //       <p className='poppins-bold sun-am'>10:00</p>
      //       <img
      //         className='sun-day'
      //         src='https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png'
      //         alt='Sun'
      //       />
      //       <p className='poppins-semibold grados-sun'>23°</p>
      //     </div>
      //   </div>
      )}
    </div>
  );
};

export default Dias;
