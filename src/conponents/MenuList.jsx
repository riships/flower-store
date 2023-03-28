import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


function MenuList() {
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
                <Navbar bg="light" variant="light" expand="lg" >
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {menuItems.map((menuItem, index) => (
                                    <div key={index}>
                                        <Link to={menuItem.link}>{menuItem.text}</Link>
                                    </div>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/work' element={<Work />} />
                </Routes>

            </BrowserRouter >
        </>
    );
};

export default MenuList;
