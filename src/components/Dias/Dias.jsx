import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swipeable } from 'react-swipeable';

const Dias = ({imagenes}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleSwipeLeft = () => {
      nextSlide();
    };
  
    const handleSwipeRight = () => {
      prevSlide();
    };
  return (
    <div className='dias-container'>
        <div className='days-texts-container'>
        <div className='today-container'>
            <h1 className='poppins-bold today'>Today</h1>
        </div>
        <div className='container-next-days'>
            <p className='poppins-semibold days'>Next 7  days   </p>
            <img  className='img-arrow-next'  src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png" alt="" />
        </div>
        </div>
        <div className='container-days'>
         <div className='sunday'>
            <p className='poppins-bold sun-am'>10:00</p>
            <img className='sun-day' src="https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png" alt="" />
            <p className='poppins-semibold grados-sun'>23°</p>
         </div>
         <div className='sunday'>
            <p className='poppins-bold sun-am'>10:00</p>
            <img className='sun-day' src="https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png" alt="" />
            <p className='poppins-semibold grados-sun'>23°</p>
         </div>
         <div className='sunday'>
            <p className='poppins-bold sun-am'>10:00</p>
            <img className='sun-day' src="https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png" alt="" />
            <p className='poppins-semibold grados-sun'>23°</p>
         </div>
         <div className='sunday'>
            <p className='poppins-bold sun-am'>10:00</p>
            <img className='sun-day' src="https://png.pngtree.com/png-clipart/20221002/ourmid/pngtree-realistic-yellow-sun-3d-render-png-image_6258916.png" alt="" />
            <p className='poppins-semibold grados-sun'>23°</p>
         </div>
        </div>
    </div>
  )
}

export default Dias