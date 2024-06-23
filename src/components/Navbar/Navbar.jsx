import {useState} from 'react'
import HandleMode from './HandleMode.jsx/HandleMode';
import MenuToggler from './MenuToggler.jsx/MenuToggler';
const Navbar = () => {
const [open,setOpen]= useState(false)  ;

  return (
    <div >
      <header className=' py-5'>
       <div className='myweatherapp'>
        <MenuToggler/>
        <h1 className='poppins-extrabold text'> Wheater App</h1>
        <HandleMode/>
        </div>    
     
      </header>
    </div>
  )
}

export default Navbar