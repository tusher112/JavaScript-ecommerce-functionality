import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleCart = (product) => {
        const updateCart = [...cart, product];
        setCart(updateCart);
        // console.log(cart)
    }
    return (

        <div >
            <h1 className='text-danger text-center mt-5'>Magic Shop! </h1>
            <h3 className='text-center bg-info'> Add to Cart 4 watch we will select perfect match for you</h3>
            <div className='shop-container'>

                <div className='product-container'>


                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleCart={handleCart}

                        ></Product>)
                    }

                </div>
                <div className='cart-container '>

                    <div className='cart-1'>
                        <Cart cart={cart}></Cart>
                    </div>
                    <div className='cart-2'>

                    </div>

                </div>


            </div>
        </div>


    );
};

export default Shop;