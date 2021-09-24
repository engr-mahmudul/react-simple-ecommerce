import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import React from 'react';

const Product = (props) => {
    // console.log(props);
    const { name, img, category, seller, stock, price, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
           
                <div className="img-container">
                    <img src={img} alt=""></img>
                </div>
                <div className="description-container">
                    <h4 className="single-h4">{name}</h4>
                    <p><small>by:{seller}</small></p>
                    <p>{price}</p>
                    <p><small>only {stock} left in stock-order soon</small></p>
                    <button onClick={()=>props.addToCart(props.product)} className="button">{element} Add to cart</button>
                </div>
            
        </div>
    );
};

export default Product;