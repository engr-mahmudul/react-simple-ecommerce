import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb,getDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        // Here create the event handler Function and send this as a props 
        let newCart = [...cart, product]; //ekhne setCart array set korbe kintu  product hocche array element 
        setCart(newCart);
        addToDb(product.key)  //Send data to the browser Local Storage 
        // console.log(product);

    }
    useEffect(() =>{
        const cartData = getStoredCart()
        console.log(cartData);
    },[])


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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;