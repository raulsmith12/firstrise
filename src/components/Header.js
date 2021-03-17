import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="/">First Rise Baking Co.</Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation-navbar" />
            <Navbar.Collapse id="navigation-navbar">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/order">Order/Menu</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;