import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
    let productIncart = [];


    for (const product of cart) {
        <br />
        productIncart = productIncart + product.name;


    }

    return (
        <div className='cart'>
            <h3 className='text-info'>Shopping Cart</h3>
            <p>selected item {cart.length}</p>
            {
                cart.map((item) => (
                    <h6 key={item.id}><img className='cart-item-img' src={item.img} alt="item" />  {item.name} </h6>
                ))


            }

            <div className='btn'>
                <button className='choose-lucky-btn'>CHOOSE LUCKY 1</button>
                <button className='choose-again-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;