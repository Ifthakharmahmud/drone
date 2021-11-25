import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

// Doctors List single item component

const Profileitem = (props) => {

    const { name, img, specials } = props.doctor;
    console.log(name);

    return (
        <Col>
            {/* single doctor card */}

            <Card className="card">
                <Card.Body>
                    <Card.Img variant="top" src={img} className="card-img" />
                    <Card.Title className="fw-bold">Dr. {name}</Card.Title>
                    <Card.Title>Specialiest: {specials}</Card.Title>
                    <Button variant="info"> Appointment with {name} </Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Profileitem;