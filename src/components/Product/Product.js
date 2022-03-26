import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { product, handleCart } = props;
    const { name, img, price } = product;
    console.log(props.product)
    return (
        <div className='product '>
            <div> <img src={img} alt="item" />
                <div className='product-description'>
                    <h6>Product: {name}</h6>
                    <h4 >Price: ${price}</h4>
                </div>
                <div className='buy=btn'><button onClick={() => handleCart(product)} className='cart-btn'>Add to cart</button></div>
            </div>


        </div>
    );
};

export default Product;