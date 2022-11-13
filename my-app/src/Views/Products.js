import React, { useContext } from 'react'
import CurrentPage from '../Components/CurrentPage'
import ProductGrid from '../Section/ProductGrid'
import { productContext } from '../Context/Context'

const Products = () => {
  window.top.document.title = 'Products | Fixxo.'
  const products = useContext(productContext);
  return (
    <>
    <CurrentPage cpage=' Products'/>
    <ProductGrid items={products} />
    </>
  )
}

export default Products