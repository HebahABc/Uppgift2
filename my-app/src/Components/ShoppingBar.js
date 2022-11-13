import React, {useState} from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import ShoppingBarIcons from './ShoppingBarIcons'



function ShoppingBar ()  {
  const [toggle, setToggle] = useState(false)
  const {cartQuantity} = useShoppingCart()
  const toggleHandle = () => {
    setToggle(!toggle)
  }
  
  return (
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
  )
}

export default ShoppingBar



