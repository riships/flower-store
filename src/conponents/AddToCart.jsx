import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
function AddToCart({ product,quantityForPurchase }) {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const item = {
      id: id,
      name: product.name,
      price: product.price,
      quantity: quantityForPurchase
    };
    setCart(prevCart => [...prevCart, item]);
  };
  console.log(cart);

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

export default AddToCart;
