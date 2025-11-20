
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import React, { useState } from "react";

export default function Layout(props) {
    // TODO 
    const [loginStatus, setLoginStatus] = useState(() => {
        return true;
    })

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Cover</Nav.Link>
                            <Nav.Link as={Link} to="/front">Front Page</Nav.Link>
                            <Nav.Link as={Link} to="/contents">Contents</Nav.Link>
                            <Nav.Link as={Link} to="/feature">Featured</Nav.Link>

                            {loginStatus ? (
                                <>
                                    <Nav.Link as={Link} to="bookmarks">Bookmarks</Nav.Link>
                                    <Nav.Link as={Link} to="logout">Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <Outlet />
            </div>
        </>
    );
}
