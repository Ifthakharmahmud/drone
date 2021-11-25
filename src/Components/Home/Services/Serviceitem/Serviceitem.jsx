import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Serviceitem.css';

// Home page single service item components

const Serviceitem = (props) => {
    console.log(props)
    // take data using props 
    const { _id,  destination, img, price, person } = props.service;

    return (
        <Col>
            {/* single service card */}
            <Card className="card">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className="fw-bold">{destination}</Card.Title>
                    <p>Price: <span className="badge bg-warning">{price}</span> </p>
                    <p>Person: <span className="badge bg-info">{person}</span> </p>
                    {/* <Card.Text>{description.slice(0, 150)}</Card.Text> */}

                    <Link to={`service/${_id}`}>
                        <Button variant="primary"> Read More  </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Serviceitem;