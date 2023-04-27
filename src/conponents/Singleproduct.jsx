
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductFlowers } from './context/productcontext';
import FormatPrice from '../Helper/FormatPrice';
import PageNavigation from './PageNavigation';
const singleApi = "http://localhost:5000/flowers"

function Singleproduct() {
    const { getSingleFlower, singleflowers, isSingleLoading } = useProductFlowers();

    const { id } = useParams();
    const { company, name, price, description, category, stock, stars, reviews, image } = singleflowers;
    useEffect(() => {
        getSingleFlower(`${singleApi}/${id}`);
    });

    return (
        <>
            <PageNavigation title={name} />
            <div className="product-page">
                <div className="product-image">
                    <img src={image} alt={name} />
                </div>
                <div className="product-details">
                    <h1>{name}</h1>
                    {/* <p className="product-price">${price.toFixed(2)}</p> */}
                    {/* <p className="product-rating">{rating} stars ({reviews} reviews)</p> */}
                    <p className="product-description">{description}</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Singleproduct