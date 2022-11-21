import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
       

    <Navbar className="fixed-bottom navbar-bg">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink to='/createaccount' className="nav-link" >
                    <div>
                        <i className="fa fa-user-plus fa-lg"></i>
                    </div>
                    <div className="menu-name"><span data-text="Create Account">Create Acct</span></div>
                </NavLink> 
            </li>
            <li className="nav-item">
                <NavLink to='/deposit' className="nav-link" >
                    <div>
                        <i className="fa fa-square-plus fa-lg"></i>
                    </div>
                    <div className="menu-name"><span data-text="Deposit">Deposit</span></div>
                </NavLink> 
            </li>
            <li className="nav-item">
                <NavLink to='/withdraw' className="nav-link">
                    <div>
                        <i className="fa fa-square-minus fa-lg"></i>
                    </div>
                    <div className="menu-name"><span data-text="Withdraw">Withdraw</span></div>
                </NavLink> 
            </li>
            <li className="nav-item">
                <NavLink to='/alldata' className="nav-link">
                    <div>
                        <i className="fa fa-table fa-lg"></i>
                    </div>
                    <div className="menu-name"><span data-text="All Data">All Data</span></div>
                </NavLink> 
            </li>
        </ul>
    </Navbar>  

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>BAD BANK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className="nav-link">Home</NavLink>
            <NavLink to='/deposit' className="nav-link">Deposit</NavLink>
            <NavLink to='/withdraw' className="nav-link">Withdraw</NavLink>
            <NavLink to='/createaccount' className="nav-link">Create Account</NavLink>
            <NavLink to='/alldata' className="nav-link">All Data</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>       
    );
}

export default NavBar;