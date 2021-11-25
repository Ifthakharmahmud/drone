import React from 'react';
import { Card, Col } from 'react-bootstrap';

// Review List single item component

const SingleReview = (props) => {
    const { title, description } = props.service;

    return (
        <Col>
            {/* single review card */}
            <Card className="card">
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text>{description.slice(0, 250)}</Card.Text>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default SingleReview;