import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcAddImage } from "react-icons/fc";
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/drones', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Product added successfully! Please Check Manage Product Page.");
                reset();
            }

            
        })
  };
    return (
        <>
            <h2 className="my-3 text-center"> <span className="title-icon"><FcAddImage /></span> Add Product</h2>

            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-3" placeholder="Product Name" {...register("name")} />
                        <textarea className="form-control mb-3" placeholder="Description" row='8' {...register("description")} />
                        <input className="form-control mb-3" placeholder='Price' type="number" {...register("price")} />
                        
                        <input className="form-control mb-3"   placeholder="Image url" {...register("img")} />

                        <input className="btn btn-primary mb-5" type="submit" />
                    </form>
                    </Col>
                </Row>
            </Container>

            
        </>
    );
};

export default AddProduct;