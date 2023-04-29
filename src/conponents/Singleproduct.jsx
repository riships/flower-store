import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductFlowers } from './context/productcontext';
import '../stylesheets/singleProduct.css';
import PageNavigation from './PageNavigation';
// import StarRating from './StarRating';
const singleApi = "https://flower-data.onrender.com/flowers"

function Singleproduct() {
    const { getSingleFlower, singleflowers, isSingleLoading, singleError } = useProductFlowers();

    const { id } = useParams();
    const { company, name, price, description, features, category, stock, stars, reviews, image } = singleflowers;
    useEffect(() => {
        getSingleFlower(`${singleApi}/${id}`);
    }, []);
    if (isSingleLoading) {
        return <div>Loading...</div>; // show a loading spinner if data is still loading
    }

    if (singleError) {
        return <div>Error: {singleError}</div>; // show an error message if there's an error fetching data
    }

    return (
        <>
            <PageNavigation title={name} />
            <div className="single-product-container">
                <div className="single-product-image-container">
                    <img src={image} alt={name} className="single-product-image" />
                </div>
                <div className="single-product-details-container">
                    <h1 className="single-product-name">{name}</h1>
                    {/* <div className="single-product-rating-container">
                        <StarRating rating={stars} />
                        <span className="single-product-reviews">{reviews} reviews</span>
                    </div> */}
                    <p className="single-product-description">{description}</p>
                    {/* <p className="single-product-price">${price.toFixed(2)}</p> */}
                    {features && (
                        <div className="single-product-options">
                            {Object.keys(features).map((optionKey) => (
                                <div key={optionKey} className="single-product-option">
                                    <span className="single-product-option-name">{optionKey}: </span>
                                    <span className="single-product-option-value">{features[optionKey]}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="single-product-add-to-cart">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Singleproduct