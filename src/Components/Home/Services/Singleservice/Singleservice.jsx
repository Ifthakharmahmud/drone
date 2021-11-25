import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// Single service page details component 

const Singleservice = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(
        () => {
            fetch('https://possessed-shadow-25086.herokuapp.com/new_package')
                .then(res => res.json())
                .then(data => setServiceDetails(data))
        }, []);

    useEffect(
        () => {
            const foundServices = serviceDetails.find(service => service._id === serviceId)
            setSingleService(foundServices);
        }, [serviceDetails])

        const packageId = singleService?._id;
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="my-5 text-primary text-center my-5">   Tour Package</h1>
                    
                    <img src={singleService?.img} alt="service" />
                    <h2 className="my-3"> {singleService?.destination} </h2>
                    <p> Price: <span className="badge bg-warning"> {singleService?.price } </span> //  Person: <span className="badge bg-info">{singleService?.person }</span></p>
                    <p className="my-3"> {singleService?.description} </p>
                    
                    <Link to={`/place_order/${packageId}`}>
                    <Button variant="info" className="mb-5">Book Now</Button>
                    </Link>
                   
                </Col>
            </Row>
        </Container>

    );
};

export default Singleservice;