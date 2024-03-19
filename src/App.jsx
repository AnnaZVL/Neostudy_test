import { Routes, Route } from 'react-router-dom';
import {  useState, useEffect } from 'react';

import Home from './Pages/HomePage';
import Cart from './Pages/CartPage';
import NotFound from './Pages/NotFoundPage';
import HeaderMain from './assets/components/HeaderMain';
import FooterMain from './assets/components/FooterMain';

import './App.css'

function App() {  
  const [cartCount, setCartCount] = useState(0); 

  function updateCount() {
    const cartData = sessionStorage.getItem("cart");
    if (cartData) {     
      setCartCount(JSON.parse(cartData).length)
    }    
  }

  useEffect(() => {  
    updateCount();
  }, [])

  return (
    
    <div className="app">  
      <HeaderMain cartCount={ cartCount } ></HeaderMain>
      <main  className='main'>                    
        <Routes>
            <Route path='/' element={<Home updateCount={updateCount} />}/>
            <Route path='/cart' element={<Cart updateCount={updateCount}/>}/>             
            <Route path='*' element={<NotFound/>}/>
        </Routes>               
      </main>   
      <FooterMain></FooterMain>           
    </div>      
  )
}

export default App
