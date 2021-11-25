import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from './../../../images/slider1.jpg';
import slider2 from './../../../images/slider2.jpg';
import slider3 from './../../../images/slider3.jpg';
import './Banner.css';

// Home page banner component
const Banner = () => {
    return (
        <Container>
            {/* Home page slider container  */}
            <Carousel className="p-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="first slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;