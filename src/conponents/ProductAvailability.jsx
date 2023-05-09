import React from "react";
import styled from "styled-components";
function ProductAvailability({ inStock, setQuantity, quantity }) {
    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        if (inStock) {
            setQuantity(newQuantity);
        }
    };
    return (
        <>
            <div>
                {inStock ? (
                    <>
                        <InStock>
                            <p style={{ color: "green", margin: "0 20px 0 0" }}>In Stock</p>
                            <label>
                                Quantity:
                                <input type="number" value={quantity} onChange={handleQuantityChange} min="1" max="10" />
                            </label>
                        </InStock>
                    </>
                ) : (
                    <p style={{ color: "red", margin: "0" }}>Out of Stock</p>
                )}
            </div>
        </>
    )
}
const InStock = div.styled`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: green;
`

export default ProductAvailability