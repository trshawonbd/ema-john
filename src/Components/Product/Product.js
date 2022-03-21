import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, price, seller,ratings} = props.product;
    return (
        
            <div className="col ">
                <div className='card  cart'>
                    <img src={img} className='card-img-top image' alt="" srcset="" />
                    <div className="card-body body">
                    <h5 class="card-title name">{name}</h5>
                    <h6 className='price'>Price: ${price}</h6>
                    <p>Manufacturer: {seller}</p>
                    <p className='ratings'>Rating: {ratings} stars</p>
                    <button className='addToCartBtn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Product;