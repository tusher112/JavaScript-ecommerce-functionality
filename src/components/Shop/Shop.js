import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <div>
            <h1 className='text-warning text-center mt-5'>Magic Shop! <br/> Add to Cart 4 watch we will select perfect match for you.  </h1>
            <div className='shop-container'>

                <div className='product-container'>

                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}

                        ></Product>)
                    }
                </div>
                <div className='card-container '>
                    <h1>Result</h1>
                </div>

            </div>
        </div>


    );
};

export default Shop;