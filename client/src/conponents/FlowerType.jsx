import React from "react";
import { useProductFlowers } from '../conponents/context/productcontext'
import '../stylesheets/product.css';
// import { Link } from "react-router-dom";
import Loader from "./Loader";
import GridView from "./GridView";
import styled from "styled-components";
import { Container } from 'react-bootstrap';



function FlowerType() {
    const { isLoading, flowerType } = useProductFlowers();
    console.log(flowerType);
    if (isLoading) {
        return <Loader />
    }
    return (
        <section>
            <h1 className="flwr-tp">Featured Flowers -</h1>
            <Container>
                <GridView product={flowerType} />
            </Container>
        </section>
    );
}
const ProductCard = styled.div`
height:100%
`

export default FlowerType
