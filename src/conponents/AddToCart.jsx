import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './Cart';


function AddToCart({ product }) {
    const { id, colors, stock } = product;
    const [flower, setflower] = useState(flower[0]);

    return (
        <>
            <Routes>
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Link to="/cart">
                <Button>Add To Cart</Button>
            </Link>
        </>
    )
}

export default AddToCart