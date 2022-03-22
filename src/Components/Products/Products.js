import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToButton = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <h2>All Products</h2>

            <div className="all-products container">
            <div className="product-container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map((product)=> <Product
                        key = {product.id}
                        product = {product}
                        addToButton = {addToButton}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="order-container">
                <h4>Order Summary</h4>
                <h5>Selected Item: {cart.length}</h5>
            </div>
            </div>
        </div>
    );
};

export default Products;