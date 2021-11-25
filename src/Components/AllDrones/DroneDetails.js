import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

// Single drone details component 

const DroneDetails = () => {
    const { user } = useAuth();
    const { droneId } = useParams();
    const [droneDetails, setDroneDetails] = useState([]);
    const [singleDrone, setSingleDrone] = useState({});
    useEffect(
        () => {
            fetch('http://localhost:5000/drones')
                .then(res => res.json())
                .then(data => setDroneDetails(data))
        }, []);

    useEffect(
        () => {
            const foundDrone = droneDetails.find(drone => drone._id === droneId)
            setSingleDrone(foundDrone);
        }, [droneDetails, droneId])

        console.log(singleDrone)


        // const packageId = singleDrone?.id;
        const mobileRef = useRef();
        const addressRef = useRef();
        const handleOrder = e => {
            e.preventDefault();
            const title = singleDrone?.name;
            const name = user.displayName;
            const price = user.price;
            const email = user.email;
            const mobile = mobileRef.current.value;
            const address = addressRef.current.value;
            const status = "Pending";
    
            const newOrder = { name, email, title, price, mobile, address, status };
    
            fetch('http://localhost:5000/drone_orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newOrder)
            })
            alert('Successfully added your Order.');
            e.target.reset();
    
        }
    return (
        <Container>
            <Row>
                <Col md={{ span: 6 }}>
                    <h1 className="my-5 text-primary text-center my-5">   Drone Details </h1>
                    
                    <img src={singleDrone?.img} alt="service" />
                    <h2 className="my-3"> {singleDrone?.name} </h2>
                    <p> Price: <span className="badge bg-warning"> ${singleDrone?.price } </span> </p>
                    <p className="my-3"> {singleDrone?.description} </p>
                    
                    
                   
                </Col>
                <Col md={{ span: 6 }}>
                    <h1 className="my-5 text-success text-center my-5">   Order Now! </h1>
                    
                    <Form onSubmit={handleOrder}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={user.displayName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" value={user.email} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Write your Mobile number" ref={mobileRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" placeholder="Shipping address" style={{ height: '100px' }} ref={addressRef} />
                            </Form.Group>
                            <Button variant="info" type="submit" >Order Now</Button>
                        </Form>
                   
                </Col>
            </Row>
        </Container>

    );
};

export default DroneDetails;