import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

const DashboardMenu = () => {
    const {url} = useRouteMatch();
    return (
        <>
            <div className="dashboard-nav">
                {/* <Link className='nav-link'   >  </Link> */}
            </div>

            <Navbar bg="light" className="mb-5" expand="lg">
                <Container>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to={`${url}/my_orders`}>My Orders</NavLink>
                        <NavLink className="nav-link" to={`${url}/payment`}>Payment</NavLink>
                        <NavLink className="nav-link" to={`${url}/add_review`}>Add Review</NavLink>

                        {/* Admins can access */}
                        <NavLink className="nav-link" to={`${url}/add_product`}>Add Product</NavLink>
                        <NavLink className="nav-link" to={`${url}/manage_products`}>Manage Product</NavLink>
                        <NavLink className="nav-link" to={`${url}/manage_orders`}>Manage Orders</NavLink>
                        <NavLink className="nav-link" to={`${url}/create_admin`}>Create Admin</NavLink>
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default DashboardMenu;