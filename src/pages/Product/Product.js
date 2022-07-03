import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { name, _id, img, description, quantity, supplier, price } = product;
    const naviagate = useNavigate()
    const handleManage = id => {
        naviagate(`/product/${id}`)


    }

    return (

        <Col >

            <Card className=''>



                <Card.Img variant="top" width="250px" height="220px" src={img} />



                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{description}</p>
                    <h6>Quantity: {quantity}</h6>
                    <p>Supplier : {supplier}</p>
                    <button onClick={() => handleManage(_id)} className='  w-100  border border-none bg-dark text-light'>Manage Product</button>
                    <h5>Price: {price} $</h5>
                </Card.Body>

            </Card>

        </Col>




    );
};

export default Product;