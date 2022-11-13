import React from 'react';
import {NavLink} from 'react-router-dom'; 
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { currencyFormatter } from './CurrenyFormat';



function ProductCard ({item}) {
    const {incrementQuantity} = useShoppingCart()

  return (
    
    <div className="col">
            <div className='grid-cells'>
                <div className="Card">
                    <img id='imgCard' src={item.imageName} alt={item.name}></img>
                    <div className="card-menu">
                        <div><a href="#"><i class="fa-regular fa-heart" ></i></a></div>
                        <div><a href="#"><i class="fa-solid fa-code-compare"></i></a></div>
                        <div onClick={() => incrementQuantity({aricleNumber:item.aricleNumber, product:item})}><a href="#"><i class="fa fa-shopping-bag"></i></a></div>
                    </div>
                    
                    <div className="background">
                            <NavLink className="card_body" to="/Products"> QUICK VIEW </NavLink>
                    </div>
                </div>
                <div id="specification">
                    <div id="Category">{item.category}</div>
                    <div id="name"><b>{item.name}</b></div>
                    <div id="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                    <div id="price"><b>{currencyFormatter(item.price)}</b></div>
                </div>
            </div>
        </div>
  );
}

export default ProductCard;