import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import './UserSingleReview.css';


// Review List single item component

const UserSingleReview = (props) => {
    const { name, description, price } = props.service;

    return (
        <Col>
            {/* single review card */}
            <Card className="card review">
                <Card.Body>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    
                    <Rating 
                    
                        initialRating={price}
                        readonly
                        emptySymbol= {<FaRegStar />}
                        fullSymbol={<FaStar />}
                        
                     />
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default UserSingleReview;