import React from 'react';
import {NavLink} from 'react-router-dom'; 




function Links () {
  
  return (
    <div id="menu">
      <ul>
        <li><NavLink className='menu-link' to='/' end>Home</NavLink></li>
        <li><NavLink className='menu-link' to='/Categories' end>Categories</NavLink></li>
        <li><NavLink className='menu-link' to='/Products' end>Products</NavLink></li>
        <li><NavLink className='menu-link' to='/Contacts' end>Contacts</NavLink></li>
      </ul>
    </div>
  );
}

export default Links;