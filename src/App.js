import React from "react";
import About from "../src/conponents/About";
import Contact from "../src/conponents/Contact";
import Home from "../src/conponents/Home";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { useState } from 'react'
import '../src/stylesheets/style.css';
import Singleproduct from "../src/conponents/Singleproduct";
import styled from 'styled-components';
import Errorpage from "../src/conponents/Errorpage";
import Cart from "../src/conponents/Cart";
import AllProduct from "./conponents/AllProduct";

const Wrapper = styled.div`
    height:70px;
`;


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "Store",
      link: "/allproduuct"
    }
    // {
    //   text: "Apidata",
    //   link: "/apidata"
    // }
  ];
  return (
    <>

      <BrowserRouter>
        <Wrapper className="hamburger-menu hdr_menu">
          <label onClick={toggleMenu} className="menu_btn">
            <span className={`menu_btn__inactive ${isOpen ? 'menu_btn__active' : ''}`}></span>
          </label>

          <div className={`menu_box ${isOpen ? 'show' : ''}`}>
            {menuItems.map((menuItem, index) => (
              <div className="mnu_link" key={index}>
                <Link onClick={toggleMenu} to={menuItem.link}>{menuItem.text}</Link>
              </div>
            ))}
            <div className="mnu_link cart-trolley--link">
              <Link to="/cart"><BsFillCartFill className="cart-trolley" />
                <span className="cart-total--item">10</span>
              </Link>
            </div>
          </div>
        </Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/allproduuct' element={<AllProduct />} />
          <Route path="/singleproduct/:id" element={<Singleproduct />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/apidata" element={<ApiData />} /> */}
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter >
    </>
  );

};

export default App;
