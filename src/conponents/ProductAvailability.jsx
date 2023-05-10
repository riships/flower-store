import React from "react";
import styled from "styled-components";
import { useState, useEffect } from 'react';
function ProductAvailability({ inStock, setQuantity, instockQuantity, quantityAvail }) {
    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        if (inStock) {
            setQuantity(newQuantity);
        }
    };
    const [maxQuantity, setMaxQuantity] = useState(1);

    useEffect(() => {
        setMaxQuantity(instockQuantity);
    }, [instockQuantity]);
    return (
        <Waraper>
            {inStock ? (
                <InStock>
                    <div className="first--child--instock">
                        <p style={{ color: "green", margin: "0 0px 0 0" }}>In Stock</p>
                    </div>
                    <div className="second--child--instock">
                        <label>
                            Quantity:
                            <StockQua type="number" value={quantityAvail} onChange={handleQuantityChange} min="1" max={maxQuantity} />
                        </label>
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
const StockQua = styled.input`
    width:40px;
    height:25px;
`
const Waraper = styled.div`
    `


export default ProductAvailability