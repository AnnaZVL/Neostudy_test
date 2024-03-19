// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

function CartItems({id, title, img, price, amount, increment, decrement, removeFromCart}) {

    return (
        <div className="cart__item">
            <button className="cart__delete" onClick={() => {removeFromCart(id)}}>
                <img src="/icons/Delete.svg" alt="Иконка удаления товара" />
            </button>
            <div className="cart__body">
                <img className="cart__img" src={img} alt="Изображение товара" />
                <div className="cart__content">
                    <h3 className="cart__title">{ title }</h3> 
                    <span className="cart__price ">{ price } ₽</span>
                </div>
            </div>
            <div className="cart__action">
                <div className="cart__btns">
                    <button className="cart__btn" onClick={() => {decrement(id)}} disabled={amount <= 1}><span>-</span></button>
                    <span className="cart__amount ">{ amount }</span>
                    <button className="cart__btn" onClick={() => {increment(id)}}><span>+</span></button>
                </div>
                <span className="cart__price-dark ">{ price * amount } ₽</span>
            </div>
        </div>
    )
}

export default CartItems

CartItems.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    amount: PropTypes.number.isRequired, 
    increment: PropTypes.func.isRequired, 
    decrement: PropTypes.func.isRequired, 
    removeFromCart: PropTypes.func.isRequired
    
};