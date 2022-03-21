import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


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
                        ></Product>)
                    }
                </div>
            </div>
            <div className="order-container">
                <h4>Order Summary</h4>
            </div>
            </div>
        </div>
    );
};

export default Products;