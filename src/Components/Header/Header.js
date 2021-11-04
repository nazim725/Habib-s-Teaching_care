import React from 'react';
import { Container, Nav, NavDropdown, Badge } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, error,logout } = useAuth()

    const navStyle = {
        textDecoration: "none",
        margin: "0 8px",
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        textTransform: "Uppercase",
      };

      const active = {
        color: "#ff136f",
        borderBottom: "2px solid #ff136f",
      };

    return (
        <div>

            <Navbar bg="primary" expand="lg">
                <Container>
                    <NavLink
                        className="hoverStyle text-decoration-none sm-mb-3"
                        to="/home"
                    >
                         <Navbar.Brand className="text-white" href="#home">Habib's Teaching Care</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/home"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/about"
                            >
                                About
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/courses"
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                            <div>
                                <NavLink to="/cart" className="btn text-white">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <Badge bg=""></Badge>
                                </NavLink>
                            </div>
                            {user.displayName ? (
                                <div>
                                    <NavDropdown
                                        title={
                                            <>
                                                <img
                                                    style={{ width: "45px", borderRadius: "50%" }}
                                                    src={user.photoURL}
                                                    alt="profile"
                                                />
                                            </>
                                        }
                                    >
                                        <div className="text-center">
                                            <p>{user.displayName}</p>
                                            <p>{user.email}</p>
                                            <div className="text-center">
                                                <button onClick={logout} className="btn btn-primary">
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    </NavDropdown>
                                </div>
                            ) : (
                                <>
                                    <NavLink
                                        className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active}
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active}
                                        to="/signup"
                                    >
                                        Sign up
                                    </NavLink>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand className="text-white" href="#home">Habib's Teaching Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white" to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white" to="/courses">Courses</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white" to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white" to="/cart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <Badge bg="warning">0</Badge></Nav.Link>

                                {
                                   !user.displayName? 
                                   (
                                        <>
                                        <Nav.Link as={NavLink} className="text-white" to="/signUp">Sign Up</Nav.Link>
                                        <Nav.Link as={NavLink} className="text-white" to="/login">Login</Nav.Link>
                                        <>
                                    ):
                                    (
                                        <>
                                        <NavDropdown title="Dropdown">
                                
                            </NavDropdown>
                                        <>
                                    )

                                }
                           
                            {
                            


                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </div>
    );
};

export default Header;