import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdReviews } from "react-icons/md";
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/user_review', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Your Review Added.");
                reset();
            }

            
        })
  };
    return (
        <>
            <h2 className="my-3 text-center"> <span className="title-icon"><MdReviews /></span> Add Review</h2>

            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-3" placeholder="Your Name" {...register("name")} />
                        <textarea className="form-control mb-3" placeholder="Type Review" row='8' {...register("description")} />
                        <input className="form-control mb-3" placeholder='Rating (1 to 5)' type="number" {...register("price")} />

                        <input className="btn btn-primary mb-5" type="submit" />
                    </form>
                    </Col>
                </Row>
            </Container>

            
        </>
    );
};

export default AddReview;