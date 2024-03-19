// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from 'prop-types';

function ProductItem({product, updateCount}) {
    function handleClick() {    
          
        let cartItems = [];
        const cartData = sessionStorage.getItem("cart");
        if (cartData) {
            try {
                cartItems = JSON.parse(cartData);

                const existingProduct = cartItems.find(item => item.id === product.id)
                    
                if (existingProduct) {
                    existingProduct.amount += 1
                } else {
                    
                    cartItems.push({ ...product, amount: 1 })
                }               
            } catch (error) {
                console.error("Ошибка разбора JSON:", error);
            }
        } else {
            
            cartItems.push({ ...product, amount: 1 })
        }
        
        sessionStorage.setItem("cart", JSON.stringify(cartItems));
        updateCount()
    }
    return (
        <div className="card">
            <a className="card__link" href="#">
                <img className="card__img" src={product.img} alt="Изображение товара" />
            </a>
            <div className="card__body">
                <div className="card__content">
                    <h3 className="card__title">{product.title}</h3>  
                    <div className="card__prices">               
                        <span className="card__price ">{product.price_discount || product.price} ₽</span>
                        {
                        product.price_discount ? (<span className="card__price card__price-old">{product.price} ₽</span>) : ''
                        }
                    </div> 
                </div>
                <div className="card__actions">
                    <span className="card__star">{product.star}</span>
                    <button className="card__btn" onClick={handleClick}>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    updateCount: PropTypes.func.isRequired
};