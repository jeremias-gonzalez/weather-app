
import { useState } from 'react';
const MenuToggler = () => {
    const [open,setOpen] = useState(false);
    function Open(){
        setOpen(!open);
    }

    
  return (
  <div className='toggler'>
    <button className=' ' onClick={Open}>
     {open == true ? <img className='button' src="src/assets/arrow.png" alt="" />:<img className='open-button ' src="src/assets/menu.png" alt="" />}
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