
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand href="#home">Luna Indumentaria</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Tabla de talles</Nav.Link>
                <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sweaters</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blazers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Contacto</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                Carrito
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar
