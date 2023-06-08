import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Cart({ product }) {
  const { id, colors, stock } = product;
  const [flower, setflower] = useState(flower[0]);

  return (
    <>
      <Link to="/cart">
        <Button>Add To Cart</Button>
      </Link>
    </>
  )
}

export default Cart