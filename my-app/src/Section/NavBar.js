import React, {useState} from 'react'
import logo from '../Images/logo.svg'
import ShoppingBarIcons from '../Components/ShoppingBarIcons'
import {NavLink} from 'react-router-dom';
import { useShoppingCart } from '../Context/ShoppingCartContext'

function NavBar () {
  const [toggle, setToggle] = useState(false)
  const {cartQuantity} = useShoppingCart()
  const toggleHandle = () => {
    setToggle(!toggle)
  }
  
  return (
    <nav>
        <div className='nav-bar'>
            <div className='container'>
              <NavLink to='/'><img id='logo 'src={logo} alt='Logo'></img></NavLink>
              <div id="menu">
                <ul className={toggle?'activeToggle':'' }>
                  <li><NavLink className='menu-link' to='/' end>Home</NavLink></li>
                  <li><NavLink className='menu-link' to='/Categories' end>Categories</NavLink></li>
                  <li><NavLink className='menu-link' to='/Products' end>Products</NavLink></li>
                  <li><NavLink className='menu-link' to='/Contacts' end>Contacts</NavLink></li>
                </ul>
              </div>
              <div className="shopping-bar">
                <div className='shopping-bar-child'>
                  <ShoppingBarIcons link="/Search" icon="fa-solid fa-search" quantity=''/>
                  <ShoppingBarIcons link="/Compare" icon="fa-solid fa-code-compare" quantity=''/>
                  <ShoppingBarIcons link="/WishList" icon="fa-regular fa-heart" quantity='2'/>
                  <button className="CartBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                  <i className="fa-solid fa-cart-shopping">
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{cartQuantity}</span>
                      </i>
                  </button>
                  <button className='toggle-btn' onClick={toggleHandle}>
                    <i className='fas fa-bars'></i>
                  </button>
                </div>  
              </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar