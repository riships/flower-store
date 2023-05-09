import React from "react";
// import FormatPrice from '../Helper/FormatPrice'

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
                        <div className="price d-flex flex-row align-items-center">
                            <p style={{ color: "green", margin: "0 20px 0 0" }}>In Stock</p>
                            <label>
                                Quantity:
                                <input type="number" value={quantity} onChange={handleQuantityChange} min="1" max="10" />
                            </label>
                        </div>
                    </>
                ) : (
                    <p style={{ color: "red", margin: "0" }}>Out of Stock</p>
                )}
            </div>
        </>
    )
}

export default ProductAvailability