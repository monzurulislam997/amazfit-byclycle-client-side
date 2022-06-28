import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Product = ({ product }) => {
    const { name, img, description, quantity, supplier, price } = product;
    const handleManage = () => {


    }

    return (

        <Col>
            <Card>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" width="350px" height="250px" src={img} />
                <Card.Body>
                    <p>{description}</p>
                    <h6>Quantity: {quantity}</h6>
                    <p>Supplier : {supplier}</p>
                    <button onClick={handleManage} className='  w-100  border border-none bg-dark text-light'>Manage Product</button>
                    <h5>Price: {price} $</h5>
                </Card.Body>
            </Card>
        </Col>




    );
};

export default Product;