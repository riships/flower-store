import React from "react";
import { useProductFlowers } from '../conponents/context/productcontext'
import '../stylesheets/product.css';
import { Link } from "react-router-dom";
// import FormatPrice from "../Helper/FormatPrice";
// import Rating from 'react-rating';


function FlowerType() {
    // const [rating, setRating] = useState(0);
    const { isLoading, flowerType } = useProductFlowers();
    console.log(flowerType);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // function handleRating(value) {
    //     setRating(value);
    // }
    return (
        <div>
            <h1 className="flwr-tp">Flower Type</h1>
            <div className="flowerTyp">
                {flowerType.map((flower, index) => {
                    return (
                        <div key={index} className="product-card">
                            <Link to={`/singleproduct/${flower.id}`}>
                                <img src={flower.images} alt={flower.category} className="product-image" />
                            </Link>
                            <div className="product-details">
                                <div className="nm-and-prc">
                                    <h2 className="product-name">{flower.name}</h2>
                                    <h2 className="product-price">{flower.sub_category}</h2>
                                </div>
                                <p className="product-dis">{flower.description}</p>
                                {/* <div className="product-rating">
                                    {Array.from(Array(flower.ratings)).map((_, i) => (
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
