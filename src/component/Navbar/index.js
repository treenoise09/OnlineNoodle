import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Drink from '../Menu';
import Home from '../home';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
//import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap/';
//import Card1 from './Card1';
import logo from './Onlinenoodle-logos_transparent.png';


const Menu = () => {

    return (
        <div>

            <Navbar bg="light" expand="lg" sticky='top'>
            <div style={{height:'50px'}}> <Navbar.Brand href="#home"><img src={logo} height="100%"/></Navbar.Brand></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
<<<<<<< HEAD
                        <Nav.Link href="/Noodle">Noodle</Nav.Link>
                        <Nav.Link href="/Drink">Drink</Nav.Link>
                        <Nav.Link href="/Sweet">Sweet</Nav.Link>
                        <Nav.Link href="/Cart">Cart</Nav.Link>
=======
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Menu/noodle">Noodle</NavDropdown.Item>
          <NavDropdown.Item href="/Menu/drinks">Drink</NavDropdown.Item>
          <NavDropdown.Item href="/Menu/sweet">Sweet</NavDropdown.Item>
        </NavDropdown>
                        
                        
>>>>>>> 09695a921d9223d67c1a1cc4d6b3bfcaebf1518c
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Menu;