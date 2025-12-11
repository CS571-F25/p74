
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";

export default function Layout(props) {
    // TODO 

    return (
        <>
            <Navbar className="custom-nav" sticky="top" expand="md" fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/contents">All Recipes</Nav.Link>
                            <Nav.Link as={Link} to="/feature">Featured</Nav.Link>
                            <Nav.Link as={Link} to="/add">Add Recipe</Nav.Link>
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
