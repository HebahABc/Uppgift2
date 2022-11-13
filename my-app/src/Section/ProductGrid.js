import React from 'react'
import ProductCard from '../Components/ProductCard'


const ProductGrid = ({items=[]} ) => {
  return (
    
    <div className='gridProduct'>
        <div className='container '>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4'>
            {
                  items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
      </div>
    </div>
  )
}

export default ProductGrid
