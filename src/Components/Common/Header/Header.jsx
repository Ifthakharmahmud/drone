import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from './../../../images/DRone.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            {/* Header and navbar area  */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"> <img className="header-logo" src={Logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/drones">All Drones</Link>
                            
                            {user.email && <NavDropdown title="My Profile" id="basic-nav-dropdown">
                                <Link className='nav-link' to='/new_package'>Add New Package</Link>
                                <Link className='nav-link' to='/manage_orders'>Manage Orders</Link>
                                <Link className='nav-link' to='/my_orders'>My Orders</Link>                              
                                
                            </NavDropdown>}
                            
                            {user.email && 
                                <Link className='nav-link' to='/dashboard'>Dashboard</Link>
                                                            
                                
                            }
                            

                            {user.email && <span className="nav-link loginUser" >{user.displayName}</span>}
                            {user.email ? <button onClick={logOut} className="nav-link login" >Logout</button>
                                : <Link className="nav-link login" to="/login">Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;