import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="logo">
                        <Link to="/home"><img src="logo.png" alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/home" className="nav-menu">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/services" className="nav-menu">Services</Link></Nav.Link>
                            <Nav.Link><Link to="/doctors" className="nav-menu">Doctors</Link></Nav.Link>
                            <Nav.Link><Link to="/contact" className="nav-menu">Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;