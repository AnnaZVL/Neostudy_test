import { useState, useEffect, useCallback } from 'react';

import CartItems from "../assets/components/Cart/CartItems";
import CartRezalt from "../assets/components/Cart/CartRezalt";
import PropTypes from 'prop-types';

function Cart({updateCount}) {
    let [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);  

    const getTotalPrice = useCallback(() => {
        const newTotalPrice = cartItems.reduce((acc, item) => {            
            const price = item.price_discount !== null ? item.price_discount : item.price;
            return acc + price * item.amount;
          }, 0)
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    useEffect(() => {
        const cartData = sessionStorage.getItem("cart");
        
        if (cartData) {                       
            setCartItems(JSON.parse(cartData))                        
        }
    }, []);

    useEffect(() => {
        getTotalPrice();
    }, [cartItems, getTotalPrice]);

    function getCartList() {        
            return cartItems.map(product => (
                <CartItems
                    key={product.id}
                    title={product.title}
                    img={product.img}
                    id={product.id}
                    price={product.price_discount || product.price}
                    amount={product.amount}
                    increment={increment}
                    decrement={decrement}
                    removeFromCart={removeFromCart}                    
                />
            ));        
    }
    
    function removeFromCart(id) {                
        const cartData = JSON.parse(sessionStorage.getItem("cart"));         

        if (cartData) {
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
            getTotalPrice()
            updateCount()            
        }
    }   
    
    function increment(id) {             
        const cartData = JSON.parse(sessionStorage.getItem("cart"));         

        if (cartData) {
            const updatedCartItems = cartItems.map((item) =>
                item.id === id ? { ...item, amount: item.amount + 1 } : item);
            sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);  
            getTotalPrice()
            updateCount()
        }                       
    }

    function decrement(id) {    
        const cartData = JSON.parse(sessionStorage.getItem("cart"));         

        if (cartData) {    
            const updatedCartItems = cartItems.map((item) =>
                item.id === id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item);
            sessionStorage.setItem('cart', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
            getTotalPrice()
            updateCount()
        }         
    }
    
    return (
        <div className="container cart__container">
            <h2 className="section__title" >Корзина</h2>
            <div className="cart__inner">
                {cartItems.length ? (
                    <div className="cart__list">{ getCartList() }</div>
                    
                ) : (
                    <p>Корзина пуста</p>
                )}
            
             
            <CartRezalt totalPrice={totalPrice}></CartRezalt>
            </div>
        </div>
    )
}
export default Cart
Cart.propTypes = {
    updateCount: PropTypes.func.isRequired
};

    