import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const loginBtn = <FontAwesomeIcon icon={faSignInAlt} />
    const logOutBtn = <FontAwesomeIcon icon={faSignOutAlt} />
    const { users, logOut } = useAuth();
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
                        <Nav.Link className="nav-menu justify-content-end"> {users?.displayName}</Nav.Link>
                        <Nav.Link className="nav-menu justify-content-end">
                            {
                                users.email ?
                                    <button className="btn btn-a fw-bold text-white" onClick={logOut}> Log Out {logOutBtn}</button>
                                    :
                                    <Link to="/login"><button className="btn btn-a fw-bold text-white"> Log In {loginBtn}</button></Link>
                            }</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;