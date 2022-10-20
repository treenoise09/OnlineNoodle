import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Noodle from '../noodle';
import Sweet from '../sweet';
import Drink from '../drink';
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

            <Navbar bg="light" expand="lg">
            <div style={{height:'50px'}}> <Navbar.Brand href="#home"><img src={logo} height="100%"/></Navbar.Brand></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Noodle">Noodle</Nav.Link>
                        <Nav.Link href="/Drink">Drink</Nav.Link>
                        <Nav.Link href="/Sweet">Sweet</Nav.Link>
                        <Nav.Link href="/Cart">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Menu;