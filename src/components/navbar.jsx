import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Mynavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-3">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link as={Link} to="/about" className="text-white fw-bold fs-3">About</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="text-white fw-bold fs-3">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/FormRegistration" className="text-white fw-bold fs-3">Form - Registrations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
