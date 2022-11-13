import React, { useContext } from 'react'
import BannerBar from '../Section/BannerBar';
import ImageBar from '../Section/ImageBar';
import ProductGrid from '../Section/ProductGrid';
import Grid2 from '../Section/Grid2';
import Grid3 from '../Section/Grid3';
import ServicesBar from '../Section/ServicesBar';
import { FeaturedProductsContext, GridProductsContext } from '../Context/Context'

function Home_ () {
  window.top.document.title = 'Fixxo.'
  
  const products = useContext(FeaturedProductsContext);
  const gridProducts = useContext(GridProductsContext)
  return (
    <div>
      <BannerBar/>
      <h3 id="Featured-Product"><b>Featured Product</b></h3>
      <ProductGrid items={products} />
      <ImageBar/>
      <Grid2 items={gridProducts} />
      <Grid3 items={gridProducts} />
      <hr id='hr1'></hr>
      <ServicesBar/> 
      
    </div>
  )
}

export default Home_