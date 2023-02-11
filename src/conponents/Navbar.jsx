import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


function Navbar() {
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

                <nav>
                    <ul>
                        {menuItems.map((menuItem, index) => (
                            <li key={index}>
                                <Link to={menuItem.link}>{menuItem.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/work' element={<Work />} />
                </Routes>

            </BrowserRouter>
        </>
    );
};

export default Navbar;
