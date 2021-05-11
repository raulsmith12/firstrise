import React from 'react';
import { Row, Navbar, Nav } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <Navbar fixed="top" bg="white" variant="light" className="border-bottom border-secondary">
            <Navbar.Brand href="/">
                <img src="https://galacticblue.net/firstrisebakery/wp-content/uploads/2021/04/logo.jpg" alt="First Rise Bakery" className="header-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation-navbar" />
            <Navbar.Collapse id="navigation-navbar">
                <Nav className="ml-auto">
                    <Nav.Link href="/order">Order/Menu</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <GoogleAuth />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;