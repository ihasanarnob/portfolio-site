import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menubar = () => {
    return (
        <>
        <Navbar bg="" variant="light" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand> Aesthetic21 </Navbar.Brand>
                <Navbar.Toggle />
                
                <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto fw-bold">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About Me</Nav.Link>
                <Nav.Link href="#features">Contact Me</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Menubar;