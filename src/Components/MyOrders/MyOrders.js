import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { FiShoppingCart } from "react-icons/fi";

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/drone_orders')
        .then(res=>res.json())
        .then(data => setOrders(data) )
        console.log(orders)
    },[]);

    console.log(orders)

    useEffect(()=>{
        const foundOrders = orders.filter(order => order.email === user.email );
        
        setMyOrders(foundOrders);
    },[orders])

    //DELETING AN ORDER 
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/drone_orders/${id}`;
        fetch(url, {
            method: 'DELETE'

        })

        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if( data.deletedCount > 0 ){
                alert('Data deleted successfully!');
                const remainigUsers = orders.filter(order => order._id !== id );
                setOrders(remainigUsers)
            }
        })
        }
    }
    return (
        <>
            <Container>
                <Row>
                    <h2 className="my-3 text-center my-5"> <span className="title-icon"><FiShoppingCart /></span> My Orders !!</h2>
                </Row>
                <Row>
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                            <th>Title</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        
                        {
                            myOrders.map(order =><tr key={order._id} order={order} >
                                <td> {order.title} </td>
                                <td> {order.email} </td>
                                <td> {order.mobile} </td>
                                
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

export default MyOrders;