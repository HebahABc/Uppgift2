import React from 'react';
import {NavLink} from 'react-router-dom'; 

const Cards = () => {
  return (
    <div className="grid-cells">
                <div className="Card">
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
                    <p id="Category">Category</p>
                    <p id="name"><b>Modern Black Blouse</b></p>
                    <div id="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                    <p id="price"><b>$35.00</b></p>
                </div>
            </div>
  );
}

export default Cards;