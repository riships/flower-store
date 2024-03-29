import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductFlowers } from './context/productcontext';
import '../stylesheets/singleProduct.css';
import '../stylesheets/common.css';
import PageNavigation from './PageNavigation';
import MulImages from './MulImages';
import FormatPrice from '../Helper/FormatPrice'
import StarRating from "./StarRating"
// import AddToCart from "./AddToCart"
import Icons from './Icons';
import ProductAvailability from './ProductAvailability';
import Loader from "./Loader";
const singleApi = "https://flower-data.onrender.com/flowers"
function Singleproduct() {
    const { getSingleFlower, singleflowers, isSingleLoading, singleError } = useProductFlowers();
    const { id } = useParams();
    const { name, price, description, availability, ratings, images, quantity } = singleflowers;
    useEffect(() => {
        getSingleFlower(`${singleApi}/${id}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (isSingleLoading) {
        return <Loader /> // show a loading spinner if data is still loading
    }

    if (singleError) {
        return <div>Error: {singleError}</div>; // show an error message if there's an error fetching data
    }

    return (
        <>
            <PageNavigation title={name} />
            <div className="containr mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images single--pro-pad2">
                                        <div className="text-center single--pro-pad">
                                            <MulImages imags={images} rounded />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product single--pro-pad">
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Flower</span>
                                            <h5 className="text-uppercase">{name}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <FormatPrice price={price * 200} />
                                                <StarRating className="str-color" star={ratings} />
                                            </div>
                                            <div className="price d-flex flex-row align-items-center">
                                                <ProductAvailability
                                                    inStock={availability}
                                                    price={price}
                                                    instockQuantity={quantity}

                                                />
                                            </div>
                                        </div>
                                        <p className="about">{description}</p>
                                        <Icons />
                                        {/* <AddToCart
                                            product={singleflowers}
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleproduct