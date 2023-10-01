import React from "react";
import styled from "styled-components";
import { useState } from 'react';
function ProductAvailability({ inStock, instockQuantity, product }) {


    const [quantity, setQuantit] = useState(1);

    const incrementQuantity = () => {
        if (quantity < instockQuantity) {
            setQuantit(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantit(quantity - 1);
        }
    }
    return (
        <Waraper>
            {inStock ? (
                <InStock>
                    <div className="first--child--instock">
                        <p style={{ color: "green", margin: "0 0px 0 0" }}>In Stock</p>
                    </div>
                    <div className="second--child--instock">
                        <div className="quantity-select">
                            <InDe onClick={decrementQuantity}>-</InDe>
                            <label>Quantity: {quantity}</label>
                            <InDe onClick={incrementQuantity}>+</InDe>
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
    width: 60%;
    padding:5px;
    }
  .second--child--instock{
    width: 40%
  }
`
const Waraper = styled.div`
    width:100%;
    margin: 15px auto;
    .quantity-select{
        display:flex;
        flext-direction:row;
        
    }
    `
const InDe = styled.button`
padding:4px 0;
width:35px;
border-radius:50px;
`


export default ProductAvailability