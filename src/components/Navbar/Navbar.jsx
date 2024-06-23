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
        <div className='text'>
        <h1 className='poppins-extrabold '> Welcome!</h1>
        </div>
        <img className='avatar-img' src="https://static.vecteezy.com/system/resources/previews/028/238/588/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png" alt="" />
        </div>    
     
      </header>
    </div>
  )
}

export default Navbar