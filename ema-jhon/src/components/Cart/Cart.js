import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let itemCount = 0; 
    let sum= 0;
    for (const c of cart){
        if (!c.quantity){
            c.quantity =1;
        }
        sum = sum + c.price*c.quantity;
        itemCount = itemCount + c.quantity;
    }
    let shipping = sum>0? 15:0;
    let tax = sum * 0.10
    let grandTotal = sum + shipping + tax;
    return (
        <div className='style'>
            <h2>Order Summary</h2>
                <h3>{itemCount}</h3>
                <h5>Total: {sum.toFixed(2)}</h5>
                <h5>Shipping: {shipping}</h5>
                <h5>Tax: {tax.toFixed(2)}</h5>
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;