import React from 'react'
import {useShoppingCart} from '../Context/ShoppingCartContext'
import { currencyFormatter } from './CurrenyFormat'

const ShoppingCartItem = ({item}) => {
    const {incrementQuantity, decrementQuantity, removeItem} = useShoppingCart()
    return (
        <div className='shoppingcart-item'>
            <div className='item-image'>
                <img src={item.product.imageName} alt={item.product.name}/>
            </div>
            <div className='item-info'>
                <div className='item-name'>{item.product.name}</div>
                <div className='item-quantity'>
                    <div className='item-quantity-box'>
                        <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                            <button type="button" class="btn btn-outline-dark" onClick={() => decrementQuantity(item)}>-</button>
                            <span>{item.quantity}</span>
                            <button type="button" class="btn btn-outline-dark" onClick={() => incrementQuantity(item)} >+</button>
                        </div>
                    </div>    
                </div>
                <div className='item-price'>
                    <div>{currencyFormatter(item.product.price * item.quantity)}</div>
                    <button onClick={() => removeItem(item.articleNumber)}><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItem