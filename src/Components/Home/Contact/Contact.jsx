import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

// Home page contact component  

const Contact = () => {
    return (
        <Container>
            <Row className="align-items-center py-5">
                <Col md={6} className="px-5">
                    <h1><span className="text-primary">CONTACT</span> WITH US</h1>
                    <br />
                    <p>Cell: 01789654123</p>
                    <p>Email: support@holiday.com</p>
                    <p>Address: Chasara, Narayanganj, Dhaka, Bangladesh</p>
                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Textarea</Form.Label>
                            <Form.Control as="textarea" placeholder="Write your Description" rows={3} />
                        </Form.Group>
                        <Button variant="success" >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;