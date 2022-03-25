import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { name, img, price } = props.product;
    return (
        <div className='product'>
            <div> <img src={img} alt="item" />
                <div className='product-description'>
                    <h6>Product: {name}</h6>
                    <h4 >Price: ${price}</h4>
                </div>
                <div><button className='cart-btn'>Add to cart</button></div>
            </div>


        </div>
    );
};

export default Product;