import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="py-2">
            <br /><br /><br />
            <Container>
                {/* Footer area  */}
                <Row>
                    <Col md={4}>
                        <h4>Top Drones</h4> <br />
                        <p>Dji air 2s</p>
                        <p>Mavic Pro</p>
                        <p>DJI Phantom 2</p>
                        <p>DJI Mavic 2</p>
                    </Col>
                    <Col md={4}>
                        <h4>INFORMATION</h4> <br />
                        <p>About Us</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col md={4}>
                        <h4>CONNECT US</h4> <br />
                        <FiLinkedin /><FiFacebook /><FiInstagram /><FiTwitter />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;