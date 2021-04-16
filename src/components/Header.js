import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar fixed="top" bg="white" variant="light">
            <Navbar.Brand href="/">
                <img src="https://galacticblue.net/firstrisebakery/wp-content/uploads/2021/04/logo.jpg" alt="First Rise Bakery" className="header-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation-navbar" />
            <Navbar.Collapse id="navigation-navbar">
                <Nav className="ml-auto">
                    <Nav.Link href="/order">Order/Menu</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;