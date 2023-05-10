import React, { useState, useEffect } from "react";

function AddToCart() {
    const [cartItems, setCartItems] = useState([]);

    const [warning, setWarning] = useState("");
    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        if (cartItems.includes(item)) {
            setWarning("This item is already in the cart!");
        } else {
            setCartItems([...cartItems, item]);
            setWarning("");
        }
    };

    return (
        <div>
            <button onClick={() => addToCart("item1")}>Add to Cart</button>
            <button onClick={() => addToCart("item2")}>Add to Cart</button>
            <button onClick={() => addToCart("item3")}>Add to Cart</button>
            <p>Cart Items: {cartItems.join(", ")}</p>
            {warning && <p>{warning}</p>}
        </div>
    );
}

export default AddToCart;
