import React, { useState } from 'react';

function AddToCart({ product }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    };
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

export default AddToCart;
