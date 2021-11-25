import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Offer from './Offer';

const Offers = () => {

    const [offers, setOffers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/drones/home')
        .then(res=> res.json())
        .then(data => setOffers(data));
    },[]);

    console.log(offers)

    return (
        <>
            <Container>
                <Row>
                    <h1 className="text-center py-3">Availabel  <span className="text-warning">Drones</span></h1>
                </Row>

                <Row xs={1} md={2} lg={3} className="g-4 py-4">
                    {
                        // mappimg data from offers 
                        offers.map(offer => <Offer key={offer._id} details={offer}></Offer>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Offers;