import React, {useState} from 'react'
import ProductCard from '../Components/ProductCard'


const Grid3 = ({items=[]}) => {
  
  return (
    <div className="Grid4">
        <div id="sub-grid2">
        {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
        <div id="right">
            <div className='right-txt'>
              <h2>2 FOR USD $49</h2>
              <button type='button' id='btn2'><b>FLASE SALE</b></button>
            </div>
        </div>
    </div>
  )
}

export default Grid3