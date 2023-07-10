import React, { useState } from 'react';
import AddToCart from './AddToCart'
import Cart from './Cart'

const ParentComponent = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
        console.log();
    };

    return (
        <div>
            <AddToCart addToCart={handleAddToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default ParentComponent;
