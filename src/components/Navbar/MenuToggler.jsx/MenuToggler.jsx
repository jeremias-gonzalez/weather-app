
import { useState } from 'react';
import Arrow from './Arrow/Arrow';
import Menu from './Menu/Menu';
const MenuToggler = () => {
    const [open,setOpen] = useState(false);
    function Open(){
        setOpen(!open);
    }

    
  return (
  <div className='toggler'>
    <button className=' ' onClick={Open}>
     {open == true ? <Arrow/>:<Menu/>}
  <nav className=''>
       {open == true &&<ul className='navbar'>
       <li className='poppins-bold li'>Ubicacion favorita</li>
       <li className='poppins-bold li'>Agregar ubicacion</li>
       <li className='poppins-bold li '>Administrar ubicaciones</li>
       
       </ul>}
     </nav>   </button>

   </div>   
  )
}

export default MenuToggler