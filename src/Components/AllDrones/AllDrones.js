import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleDrone from './SingleDrone';


const AllDrones = () => {

    const [offers, setOffers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/drones')
        .then(res=> res.json())
        .then(data => setOffers(data));
    },[]);

    // console.log(offers)

    return (
        <>
            <Container>
                <Row>
                    <h1 className="text-center py-3">Availabel  <span className="text-warning">Drones</span></h1>
                </Row>

                <Row xs={1} md={2} lg={3} className="g-4 py-4">
                    {
                        // mappimg data from offers 
                        offers.map(offer => <SingleDrone key={offer._id} details={offer}></SingleDrone>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default AllDrones;