import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/drone_orders')
        .then(res=>res.json())
        .then(data => setOrders(data) )
        console.log(orders)
    },[]);

    //DELETING AN USER 
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/drone_orders/${id}`;
        fetch(url, {
            method: 'DELETE'

        })

        .then(res=>res.json())
        .then(data => {
            if( data.deletedCount > 0 ){
                // alert('Data deleted successfully!');
                const remainigUsers = orders.filter(order => order._id !== id );
                setOrders(remainigUsers)
            }
        })
        }
    }

    const handleActiveStatus = () =>{
        alert('Your Order is active now.')
    }
    const handlePendingStatus = () =>{
        alert('Your order is in the queue list. Click active to active this order.')
    }

    return (
        <>
            <Container>
                <Row>
                    <h2 className='text-center my-5'>Manage Orders!</h2>
                </Row>
                <Row>
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                            <th>Title</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        
                        {
                            orders.map(order =><tr key={order._id} order={order} >
                                <td> {order.title} </td>
                                <td> {order.email} </td>
                                <td> {order.mobile} </td>
                                <td> <span onClick={handlePendingStatus} className='badge bg-success'>Pending</span> / <span onClick={handleActiveStatus} className='badge bg-info'>Active</span> </td>
                                <td> <button onClick={()=>handleDeleteUser(order._id)} className='btn btn-danger'>Delete</button> </td>
                            </tr>

                            )
                        }

                       


                      
                    </tbody>
                    </Table>    
                </Row>
            </Container>
        </>
    );
};

export default ManageOrders;