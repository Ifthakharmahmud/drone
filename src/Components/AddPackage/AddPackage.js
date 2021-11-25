import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPackage.css';


const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://possessed-shadow-25086.herokuapp.com/new_package', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Package added successfully!");
                reset();
            }
        })
  };
    return (
        <div>
            <Container>
                <Row>
                    <h2 className="text-center mt-5 mb-5"> Add New Package </h2>
                </Row>

                <Row>
                    <Col lg={{ span: 6 , offset: 3 }} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-3" placeholder="Destination Name" {...register("destination")} />
                        <textarea className="form-control mb-3" placeholder="Description" {...register("description")} />
                        <input className="form-control mb-3" placeholder='Price' type="number" {...register("price")} />
                        <input className="form-control mb-3" placeholder='Person' type="number" {...register("person")} />
                        <input className="form-control mb-3" className="form-control mb-3"  placeholder="Image url" {...register("img")} />
                        <input className="btn btn-primary mb-5" type="submit" />
                    </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddPackage;