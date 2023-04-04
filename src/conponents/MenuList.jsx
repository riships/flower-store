import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { useState } from 'react'
import '../stylesheets/style.css';
import Singleproduct from "./Singleproduct";
import styled from 'styled-components';
import Errorpage from "./Errorpage";
import Cart from "./Cart";

const Wrapper = styled.nav``;


function MenuList() {
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
            text: "Work",
            link: "/work"
        }

    ];
    return (
        <>

            <BrowserRouter>
                <Wrapper className="hamburger-menu hdr_menu">
                    <label onClick={toggleMenu} for="menu_toggle" className="menu_btn">
                        <span className={`menu_btn__inactive ${isOpen ? 'menu_btn__active' : ''}`}></span>
                    </label>

                    <div className={`menu_box ${isOpen ? 'show' : ''}`}>
                        {menuItems.map((menuItem, index) => (
                            <div className="mnu_link" key={index}>
                                <Link to={menuItem.link}>{menuItem.text}</Link>
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
                    <Route path='/work' element={<Work />} />
                    <Route path="/singleproduct/:id" element={<Singleproduct />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Errorpage />} />
                </Routes>

            </BrowserRouter >
        </>
    );

};

export default MenuList;
