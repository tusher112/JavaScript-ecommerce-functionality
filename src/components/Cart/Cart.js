import React, { useState } from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;

    const [recart, setreCart] = useState([]);
    const handleCart = (cart) => {
        const updateCart = [];
        setreCart(updateCart);
        // console.log(cart)
    }
    

    const test = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const chooselucky = () => {
        let index = test(0, cart.length - 1);

        const tem = cart[index];

        alert("Your Lucky Item is this one : " + tem.name);
        
        return tem;
    }

    



    return (
        <div className='cart'>
            <h3 className='text-info'>Shopping Cart</h3>
            <p>selected item {cart.length}</p>

            {
                cart.map((item, index) => (
                    <h6 key={index}><img className='cart-item-img' src={item.img} alt="item" />  {item.name} { }</h6>
                ))


            }

            <div className='btn'>
                <button onClick={chooselucky} className='choose-lucky-btn'>CHOOSE LUCKY 1</button>
                <button onClick={handleCart} className='choose-again-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;