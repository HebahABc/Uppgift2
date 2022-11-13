import React from 'react'
import {NavLink} from 'react-router-dom';


const ShoppingBarIcons = ({link, icon, quantity}) => {
  return (
    <div className='icons'>
        <NavLink to={link} end>
            <i className={icon}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
            </i>
            </NavLink>

            
    </div>
  )
}
 
export default ShoppingBarIcons