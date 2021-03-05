import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // console.log(fakeData);
    // const first10 = fakeData.slice(0, 10)
    // console.log(first10);
    const first10 = fakeData.slice(0, 10)
    const [product, setProducts] = useState(first10)
    // using cart
    const [cart, setCart] = useState([])
    console.log(cart);
    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key) //quantity set
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key)
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart)
        addToDatabaseCart(product.key, count)
        // const newCart = [...cart, product]
        // const count = sameProduct.length
        // console.log(newCart);
        // setCart(newCart)
        // store data from the database
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const count = sameProduct.length
        // addToDatabaseCart(product.key, count)


    }
    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    product.map((p, index) =>
                        <Product showAddToCart={true} product={p} key={index} handleAddProduct={handleAddProduct}> </Product>
                    )
                }

            </div>
            <div className="cart-container">
                {/* <h4>this is cart</h4>
                <h6>order summary {cart.length} </h6> */}
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;