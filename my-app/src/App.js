import { useEffect, useState } from 'react';
import {productContext, FeaturedProductsContext, GridProductsContext} from './Context/Context'
import './SCSS/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home_ from './Views/Home_';
import Categories from './Views/Categories';
import Products from './Views/Products';
import Contacts from './Views/Contacts';
import NotFound from './Views/NotFound';
import Search from './Views/Search';
import Compare from './Views/Compare';
import WishList from './Views/WishList';
import ShoppingCart from './Views/ShoppingCart';
import NavBar from './Section/NavBar';
import LastBar from './Section/LastBar';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';


function App() {
  
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [gridProducts, setGridProducts] = useState([])
  

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchGridData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setGridProducts(await result.json())
    }
    fetchGridData()

    

  }, [setProducts, setFeatured, setGridProducts])  

  return (
    <div>
        <BrowserRouter>
          
          <productContext.Provider value={products}>
          <FeaturedProductsContext.Provider value={featured}>
          <GridProductsContext.Provider value={gridProducts}>
          <ShoppingCartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home_/>}></Route>
            <Route path='/Categories' element={<Categories/>}></Route>
            <Route path='/Products' element={<Products/>}></Route>
            <Route path='/Contacts' element={<Contacts/>}></Route>
            <Route path='/Search' element={<Search/>}></Route>
            <Route path='/Compare' element={<Compare/>}></Route>
            <Route path='/WishList' element={<WishList/>}></Route>
            <Route path='/ShoppingCart' element={<ShoppingCart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
          <LastBar/>
          </ShoppingCartProvider>
          </GridProductsContext.Provider>
          </FeaturedProductsContext.Provider>
          </productContext.Provider>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
