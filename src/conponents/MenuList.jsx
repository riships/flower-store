import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
// import { slide as Menu } from 'react-burger-menu'
// import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
// import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import '../stylesheets/style.css';
import Singleproduct from "./Singleproduct";
import styled from 'styled-components';


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
        }, {
            text: "Signle Product",
            link: "/singleproduct/:id"
        }

    ];
    return (
        <>

            <BrowserRouter>
                <Wrapper className="hamburger-menu hdr_menu">
                    {/* <input name="toggle" type="checkbox" id="menu_toggle" />
                    <label for="menu_toggle" class="menu_btn">
                        <span></span>
                    </label>
                    <div className="menu_box">
                        {menuItems.map((menuItem, index) => (

                            <div className="mnu_link" key={index}>
                                <Link to={menuItem.link}>{menuItem.text}</Link>
                            </div>

                        ))}
                    </div> */}

                    <label onClick={toggleMenu} for="menu_toggle" className="menu_btn">
                        <span></span>
                    </label>
                    {isOpen && (
                        <div className="menu_box">
                            {menuItems.map((menuItem, index) => (

                                <div className="mnu_link" key={index}>
                                    <Link to={menuItem.link}>{menuItem.text}</Link>
                                </div>

                            ))}
                        </div>
                    )}

                </Wrapper>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/work' element={<Work />} />
                    <Route path="/singleproduct/:id" element={<Singleproduct />} />
                </Routes>

            </BrowserRouter >
        </>
    );

};

export default MenuList;
