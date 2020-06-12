import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

export class MenuBar extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">My React Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto justify-content-end" >
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/auth/login">Login</Link>
                        <Link className="nav-link" to="/auth/register">Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}