import React, { useEffect, useState } from 'react';
import { addToDb, loadData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect( () => {
        const storedCart = loadData();
        const saveCart = [];
        
            for (const id in storedCart){
               const addedProduct = products.find( product => product.id === id)
               if(addedProduct){
                   const quantity = storedCart[id];
                   addedProduct.quantity = quantity;
                   saveCart.push(addedProduct)
               }
               
            }
            setCart(saveCart)
        

    }
  ,[products])

    const addToButton = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id ===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id); 


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
                <Cart cart = {cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Products;