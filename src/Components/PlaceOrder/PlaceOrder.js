import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { orderId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(
        () => {
            fetch('http://localhost:5000/drones')
                .then(res => res.json())
                .then(data => setServiceDetails(data))
        }, []);

    useEffect(
        () => {
            const foundServices = serviceDetails.find(service => service._id === orderId)
            setSingleService(foundServices);
        }, [serviceDetails]);
        const { user, logOut } = useAuth();
        const username = user.displayName;
        const useremail = user.email;
        const userdestination = singleService?.destination;
        const packageId = singleService?._id;
        const handleOrder = e =>{
            const newOrder = {username, useremail, userdestination};
            console.log(newOrder);
            fetch(`https://possessed-shadow-25086.herokuapp.com/place_order/${packageId}`,{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newOrder)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('We received your order! Please check Manage Order Page.')

                    e.target.reset();
                }
            })
            e.preventDefault();
        }
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="text-center my-5"> Place Order Now! </h2>
                </Row>
                <Row className="my-5">
                    <Col md={6}>
                        
                        <form onSubmit={handleOrder}>
                            <div className="mb-3">
                                <input type="number" placeholder="Mobile Number" required className="form-control" />
                            </div>

                            <div className="mb-3">
                                
                                <textarea  placeholder="Shipping Address" className="form-control" name="" id="" cols="30" rows="5"></textarea>
                            </div>

                            <button type='submit' className="btn btn-primary"> Order Now! </button>

                        </form>
                        
                    </Col>
                    
                    <Col md={6}>
                    
                    <div className="order-details">
                        <h5> Name:  <span className="text-info">{user.displayName}</span> </h5>
                        <h5> Email:  <span className="text-info">{user.email}</span> </h5>
                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;