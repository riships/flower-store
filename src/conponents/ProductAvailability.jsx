import React from "react";
import styled from "styled-components";
import { useState } from 'react';
function ProductAvailability({ inStock, setQuantity, instockQuantity, quantityAvail }) {
    const [quantity, setQuantit] = useState(1);

    const incrementQuantity = () => {
        setQuantit(quantity < instockQuantity);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantit(quantity - 1);
        }
    };
    const addToCart = () => {
        // Perform necessary actions with the quantity, such as adding it to the cart or submitting it to a server.
        console.log(`Added ${quantity} items to the cart.`);
    };
    return (
        <Waraper>
            {inStock ? (
                <InStock>
                    <div className="first--child--instock">
                        <p style={{ color: "green", margin: "0 0px 0 0" }}>In Stock</p>
                    </div>
                    <div className="second--child--instock">
                        <div className="quantity-select">
                            <label>Quantity: {setQuantity}</label>
                            <div>
                                <button onClick={incrementQuantity}>+</button>
                                <button onClick={decrementQuantity}>-</button>
                            </div>
                            <button onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </InStock>
            ) : (
                <p style={{ color: "red", margin: "0" }}>Out of Stock</p>
            )}
        </Waraper>
    )
}
const InStock = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  .first--child--instock{
    width: 50%
    }
  .second--child--instock{
    width: 50%
  }
`
const Waraper = styled.div`
    `


export default ProductAvailability