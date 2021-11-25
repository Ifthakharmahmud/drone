import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';

// Review page 

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);
    return (
        <Container>
            <h1 className="text-center py-3">Why we are best ! <span className="text-primary">Read patient stories</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data
                    review.map(service => <SingleReview key={service.id} service={service}></SingleReview>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;