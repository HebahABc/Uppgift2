import React, {useState} from 'react'
import ProductCard from '../Components/ProductCard'


function Grid2({items=[]}) {


  return (
    
    <div className="Grid2 " >
         <div id="left">
          <div className='left_txt'>
            <h2>2 FOR USD $29</h2>
            <button type='button' id='btn2'><b>FLASE SALE</b></button>
          </div>
         </div>
        <div id="sub-grid1">
        {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
    </div>
  )
}

export default Grid2