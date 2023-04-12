import React from "react";
import { useProductFlowers } from '../conponents/context/productcontext'
import '../stylesheets/product.css';


function FlowerType() {
    const { isLoading, flowerType } = useProductFlowers();
    // console.log(flowerType);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Flower Type</h1>
            <div className="flowerTyp">
                {flowerType.map((flower, index) => {
                    return (
                        <div key={index} className="product-card">
                            <img src={flower.image} alt={flower.name} className="product-image" />
                            <div className="product-details">
                                <div className="nm-and-prc">
                                    <h2 className="product-name">{flower.name}</h2>
                                    <h2 className="product-price">{flower.price}</h2>
                                </div>

                                <p className="product-dis">{flower.description.slice(0, 100)}</p>
                                {/* <div className="product-rating">
                                    {Array.from(Array(rating)).map((_, i) => (
                                        <span key={i} className="star">
                                            ★
                                        </span>
                                    ))}
                                </div> */}
                                <button className="product-button">Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );

}

export default FlowerType
