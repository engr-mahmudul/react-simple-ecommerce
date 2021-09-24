import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // Here create the event handler Function and send this as a props 
    const addToCart = (product) => {
        console.log(product);
    }
    return (
        <div className='shop-contaienr'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        addToCart={addToCart}>{/* function props hisebe pathano hocche */}
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h5>Items ordered</h5>
            </div>
        </div>
    );
};

export default Shop;