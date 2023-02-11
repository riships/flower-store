import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


function Navbar() {
    return (

        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navbar;
