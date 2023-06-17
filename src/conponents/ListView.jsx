import React from 'react'
// import { Row, CardImg, Card, CardText, Col, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";
import StarRating from "./StarRating"
import '../stylesheets/list-view.css'
import FormatPrice from '../Helper/FormatPrice';
import AddToCart from './AddToCart';



function ListView({ product }) {

    return (<div>
        {
            product.map((curEle) => {
                const { images, id, name, description, ratings, price, sub_category } = curEle;
                {/* console.log("description: ", description); */ }
                const indexOfFullStop = name.indexOf('(');
                {/* console.log("indexOfFullStop: ", indexOfFullStop); */ }
                return <div className="container" key={id}>
                    <div className="col-xs-12 col-md-6 bootstrap snippets bootdeys" >
                        <div className="product-content product-wrap clearfix">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 col-xs-12">
                                    <div className="product-image">
                                        <Link to={`/singleproduct/${id}`}>
                                            <img src={images[0].url} alt={name} className="img-responsive img-cust" />
                                        </Link>
                                        <span className="tag2 hot">
                                            Beautiful
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12">
                                    <div className="product-deatil">
                                        <h5 className="name">
                                            <Link to={`/singleproduct/${id}`}>
                                                {name} <span>{sub_category}</span>
                                            </Link>
                                        </h5>
                                        <p className="price-container">
                                            <span>
                                                <FormatPrice price={price * 200} />
                                            </span>
                                        </p>
                                        <span className="tag1"></span>
                                    </div>
                                    <div className="description">
                                        <p>{description.slice(0, 80)}...</p>
                                    </div>
                                    <div className="product-info smart-form">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                <Link to={`/cart`} className='btn btn-success'>
                                                    <AddToCart />
                                                </Link>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                <div className="rating">
                                                    <StarRating className="str-color" star={ratings} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
    )
}

export default ListView