import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductFlowers } from './context/productcontext';
import '../stylesheets/singleProduct.css';
import PageNavigation from './PageNavigation';
import MulImages from './MulImages';
import FormatPrice from '../Helper/FormatPrice'
import StarRating from "./StarRating"
// import { FaLongArrowAltLeft } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { BsFillCartFill } from 'react-icons/bs';


const singleApi = "https://flower-data.onrender.com/flowers"

function Singleproduct() {
    const { getSingleFlower, singleflowers, isSingleLoading, singleError } = useProductFlowers();

    const { id } = useParams();
    const { company, name, price, description, features, category, stock, ratings, reviews, images } = singleflowers;
    useEffect(() => {
        getSingleFlower(`${singleApi}/${id}`);
    }, []);

    // const imgs = [images];
    // console.log(imgs + " - image");
    if (isSingleLoading) {
        return <div>Loading...</div>; // show a loading spinner if data is still loading
    }

    if (singleError) {
        return <div>Error: {singleError}</div>; // show an error message if there's an error fetching data
    }

    return (
        <>
            <PageNavigation title={name} />
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <MulImages imags={images} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Flower</span>
                                            <h5 className="text-uppercase">{name}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <FormatPrice price={price} />
                                                <StarRating className="str-color" star={ratings} />
                                            </div>
                                        </div>
                                        <p className="about">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Singleproduct