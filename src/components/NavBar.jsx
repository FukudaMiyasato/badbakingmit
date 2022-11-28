import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const NavBar = () => {
    return (
        <>
        <Navbar className='nav' bg="light" expand="lg">
      <Container>
        <Navbar.Brand><img className='logo' src={require('../img/bank.png')}/>BAD BANK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className="nav-link" data-tip="Aquí inicias">Home<ReactTooltip /></NavLink>
            <NavLink to='/deposit' className="nav-link" data-tip="Nos das plata">Deposit</NavLink>
            <NavLink to='/withdraw' className="nav-link" data-tip="Aquí sacas tu dinero">Withdraw</NavLink>
            <NavLink to='/createaccount' className="nav-link" data-tip="Esto está en mantenimiento">Create Account</NavLink>
            <NavLink to='/alldata' className="nav-link" data-tip="Toda la info">All Data</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>       
    );
}

export default NavBar;