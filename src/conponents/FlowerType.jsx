import React from "react";
import { useProductFlowers } from '../conponents/context/productcontext'
import '../stylesheets/product.css';
import GridView from "./GridView";


function FlowerType() {
    const { isLoading, flowerType } = useProductFlowers();
    console.log(flowerType);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1 className="flwr-tp">Flower Type</h1>
            <div className="flowerTyp">
                <GridView product={flowerType} />
            </div>
        </div>
    );

}

export default FlowerType
