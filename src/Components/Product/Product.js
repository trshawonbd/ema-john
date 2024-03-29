import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller,ratings} = props.product;
    const {addToButton} = props
    return (
        
            <div className="col ">
                <div className='card  cart'>
                    <img src={img} className='card-img-top image' alt="" srcset="" />
                    <div className="card-body body">
                    <div>
                    <h5 class="card-title name">{name}</h5>
                    <h6 className='price'>Price: ${price}</h6>
                    <p>Manufacturer: {seller}</p>
                    <p className='ratings'>Rating: {ratings} stars</p>
                    </div>
                    <div>
                    <button onClick={() =>addToButton(props.product)} className='addToCartBtn'>Add to Cart</button>
                    </div>
                    <button onClick={() =>addToButton(props.product)} className='addToCartBtn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Product;