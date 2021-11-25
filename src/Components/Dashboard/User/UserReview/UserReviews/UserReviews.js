import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import UserSingleReview from '../UserSingleReview/UserSingleReview';


// Review page 

const UserReviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user_review')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);
    return (
        <Container>
            <h1 className="text-center py-3">Why we are best ! <span className="text-primary">Read User Reviews</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data
                    review.map(service => <UserSingleReview key={service._id} service={service}></UserSingleReview>)
                }
            </Row>
        </Container>
    );
};

export default UserReviews;