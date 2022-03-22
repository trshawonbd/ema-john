import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props

    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0; 
    for (const product of cart){
        quantity = quantity + product.quantity 
        totalPrice = totalPrice + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping; 

    }
    let tax = (totalPrice + shippingCharge) * 0.1;
    let grandTotal = totalPrice + shippingCharge + parseFloat(tax)
     

    return (
        <div className='cart-info'>
            <h2>Order Summary</h2>
            <h5>Selected Items: {quantity}</h5>
            <h5>Total Price: ${totalPrice}</h5>
            <h5>Total Shipping Charge: ${shippingCharge}</h5>
            <h5>Tax: ${tax.toFixed(2)}</h5>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;