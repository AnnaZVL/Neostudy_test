function CartRezalt({totalPrice}) {

    // console.log('object', totalPrice);
    function handlOrder() {
    }
    return (
        <div className="cart__rezalt rezalt">
            <div className="rezalt__content">
                <h3 className="rezalt__title">Итого</h3>
                <span className="rezalt__price ">{ totalPrice } ₽</span>
            </div>
            <button className="rezalt__btn" onClick={handlOrder}>Перейти к оформлению</button>
        </div>
    )
}
export default CartRezalt