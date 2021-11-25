import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleDrone = (props) => {
    const {_id, name, price, description, img} = props.details;
    return (
        <>
            <Col>
            {/* single service card */}
            <Card className="card">
                    <Card.Img variant="top" src={img} className="card-img" />
                    <Card.Body>
                        <Card.Title className="fw-bold">{name}</Card.Title>
                        <p>Price: <span className="badge bg-warning">${price}</span> </p>
                        
                        <Card.Text>{description.slice(0, 150)}</Card.Text>

                        <Link to={`offer/${_id}`}>
                            <Button className="btn btn-primary" variant="primary">Place Order</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleDrone;