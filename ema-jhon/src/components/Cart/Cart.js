import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let sum= 0;
    for (const c of cart){
        sum = sum + c.price;
    }
    return (
        <div>
            <h2>Order Summary</h2>
                <h5>{cart.length}</h5>
                <h5>Total{sum}</h5>
        </div>
    );
};

export default Cart;