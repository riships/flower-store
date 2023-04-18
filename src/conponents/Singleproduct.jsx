
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductFlowers } from './context/productcontext';
const singleApi = "https://api.pujakaitem.com/api/products"

function Singleproduct() {
    const { getSingleFlower, singleflowers, isSingleLoading } = useProductFlowers();

    const { id } = useParams();
    const { id: ful, company, name, price, description, category, stock, stars, reviews, image } = singleflowers;
    useEffect(() => {
        getSingleFlower(`${singleApi}?id=${id}`);
    });

    return (
        <>
            <div className="product-page">
                <img src={image} alt={name} />
                <h1>{name}</h1>
                <p>{description}</p>
                <p>Price: {price}</p>
                <button>Add to Cart</button>
            </div>
        </>
    )
}

export default Singleproduct