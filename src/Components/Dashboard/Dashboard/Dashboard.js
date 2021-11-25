import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, useRouteMatch } from 'react-router';
import ManageOrders from '../../ManageOrders/ManageOrders';
import ManageProducts from '../../ManageProducts/ManageProducts';
import MyOrders from '../../MyOrders/MyOrders';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddProduct from '../Admin/AddProduct/AddProduct';
import CreateAdmin from '../Admin/CreateAdmin/CreateAdmin';

import DashboardMenu from '../DashboardMenu/DashboardMenu';

import Payment from '../User/Payment/Payment';
import AddReview from '../User/UserReview/AddReview/AddReview';
import Welcome from '../Welcome/Welcome';

const Dashboard = () => {
    let { path } = useRouteMatch();
    return (
        <>
            <Container className="my-5"> 
                <Row>
                    <Col>
                        <DashboardMenu></DashboardMenu>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch> 
                            {/* User Can Manage  */}
                            <PrivateRoute exact path={`${path}/`}> 
                                <Welcome></Welcome> 
                            </PrivateRoute>
                            <PrivateRoute  path={`${path}/my_orders`}>  
                                {/* <MyDroneOrders></MyDroneOrders>   */}
                                <MyOrders></MyOrders>
                            </PrivateRoute> 
                            <PrivateRoute  path={`${path}/payment`}>            
                                <Payment></Payment> 
                            </PrivateRoute> 
                            <PrivateRoute  path={`${path}/add_review`}>     
                            <AddReview></AddReview>       
                            </PrivateRoute> 

                            {/* Admin Can Manage  */}
                            <PrivateRoute  path={`${path}/add_product`}>     
                                <AddProduct></AddProduct>      
                            </PrivateRoute> 
                            <PrivateRoute  path={`${path}/create_admin`}>     
                                <CreateAdmin></CreateAdmin>     
                            </PrivateRoute> 
                            <PrivateRoute  path={`${path}/manage_orders`}>     
                                <ManageOrders></ManageOrders> 
                            </PrivateRoute> 
                            <PrivateRoute  path={`${path}/manage_products`}>     
                                <ManageProducts></ManageProducts> 
                            </PrivateRoute> 


                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;