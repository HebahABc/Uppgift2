import React from 'react';
import {NavLink} from 'react-router-dom'; 
import cardImg from '../Images/card-img.jpg';


const Cards = () => {
  return (
    <div className="grid-cells">
                <div className="Card">
                    <img src={cardImg} alt=''></img>
                    <div className="card-menu">
                        <div><a href="#"><i class="fa-regular fa-heart" ></i></a></div>
                        <div><a href="#"><i class="fa-solid fa-code-compare"></i></a></div>
                        <div><a href="#"><i class="fa fa-shopping-bag"></i></a></div>
                    </div>
                    
                    <div className="background">
                            <NavLink className="card_body" to="/Products"> QUICK VIEW </NavLink>
                    </div>
                </div>
                <div id="specification">
                    <div id="Category">Category</div>
                    <div id="name"><b>Modern Black Blouse</b></div>
                    <div id="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                    <div id="price"><b>$35.00</b></div>
                </div>
            </div>
  );
}

export default Cards;