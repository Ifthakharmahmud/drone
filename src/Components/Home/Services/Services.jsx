import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Serviceitem from './Serviceitem/Serviceitem';

// Home page services component  

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://possessed-shadow-25086.herokuapp.com/new_package')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <Container>
            <h1 className="text-center py-3">Tour  <span className="text-primary">Packages</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <Serviceitem key={service._id} service={service}></Serviceitem>)
                }
            </Row>
        </Container>
    );
};

export default Services;