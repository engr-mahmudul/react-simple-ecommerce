import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-contaienr'>
            <div className="product-container">
                {
                    products.map(product =><Product key={product.key} product={product}></Product>)
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