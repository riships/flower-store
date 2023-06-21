import React, { useState } from 'react';
import { AddToCart } from './AddToCart'

const ParentComponent = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    return (
        <div>
            <AddToCart item={item} addToCart={handleAddToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default ParentComponent;
