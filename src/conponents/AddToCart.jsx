import React from 'react';
import { useCartContext } from './context/cart-context';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext();
    const handleAddToCart = () => {
        addToCart(product);
    };
    return (
        <div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};
export default AddToCart;