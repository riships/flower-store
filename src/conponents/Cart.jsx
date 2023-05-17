import React from 'react'
// import AddToCart from './AddToCart'
import styled from 'styled-components';

const CartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

// Create a styled component for the cart item
const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }

  p {
    margin: 0;
  }
`;


function Cart() {
    return (
        <>
           <div>Hello</div>
        </>
    )
}

export default Cart