import React from "react";
import { useProductFlowers } from '../conponents/context/productcontext'
import '../stylesheets/product.css';
import { Link } from "react-router-dom";


function FlowerType() {
    const { isLoading, flowerType } = useProductFlowers();
    console.log(flowerType);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <section>
            <h1 className="flwr-tp">Flower Type</h1>
            <div className="flowerTyp">
                {flowerType.map((flower, index) => {
                    return (
                        <div key={index} className="product-card">
                            <Link to={`/singleproduct/${flower.id}`}>
                                <img src={flower.images[0].url} alt={flower.category} className="product-image" />
                            </Link>
                            <div className="product-details">
                                <div className="nm-and-prc">
                                    <h2 className="product-name">{flower.name}</h2>
                                    <h2 className="product-price">{flower.sub_category}</h2>
                                </div>
                                <p className="product-dis">{flower.description}</p>
                                <Link to={`/singleproduct/${flower.id}`}>
                                    <button className="product-button">Add to Cart</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default FlowerType
