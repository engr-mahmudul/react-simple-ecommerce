import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getDb, getStoredCart } from '../../utilities/fakedb';

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
    // Here data is downloading from the local storage to show in the cart 
    useEffect(() => { // 
        const cartData = getStoredCart() // local storage theke load kora hoccge.
        
        const cartArray = [];
        if(products.length){ //Check kora hocche fetch korar por data download hoise kina
            for (const key in cartData) { //cart object er moddhe loop chalanu hocche
                const matchedData = products.find(product => product.key === key);// products theke cart er  product golake ber kora hocche checking er maddhome.
                if(matchedData){
                    const  quantity = cartData[key];
                    // console.log(key,quantity);
                    matchedData.quantity = quantity;
                    cartArray.push(matchedData);// noton ekta array te push kora hocche.
                // console.log(key, matchedData);
                }
                
            }
           setCart(cartArray); // cart state e set koar hocche value
        }
        // console.log(cartArray.length);
        
    }, [products]);// useState e products updata howar por abar useEffet er code ta sobta run hobe. ekhne [] just ekbarei run hobe.egola k depencdecy bole.

    useEffect(()=>{
        // console.log(cart);
    },[cart])
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