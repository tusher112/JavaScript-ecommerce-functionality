import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
    let productIncart = [];
    for (const product of cart) {
        <br/>
        productIncart=productIncart + product.name;
        <br />
    }
    console.log(cart)
    return (
        <div className='cart'>
            <h1>Result</h1>
            <p>selected item {cart.length}</p>
            {
                cart.map((item)=>(
                    <h5>{item.name}</h5>
                ))
            }

            {/* <p className='item-name'>item: {productIncart} <br /> </p> */}
        </div>
    );
};

export default Cart;