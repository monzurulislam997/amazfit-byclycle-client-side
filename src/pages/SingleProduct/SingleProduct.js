import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const SingleProduct = (product) => {
    const [productDetails, setProductDetails] = useState({});
    const { id } = useParams()


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    const { _id, name, img, description, price, quantity, supplier } = productDetails;
    return (
        <div className='w-75 mx-auto' >
            <h2 className='text-center'>Product Details</h2>

            <div className='d-flex border w-75 mx-auto  p-2' >



                <div className="ms-5 mt-1 " style={{ width: '18rem' }}>
                    <Card.Img variant="top" width="220px" height="150px" src={img} />
                    <h5>ID: {_id}</h5>

                    <ListGroup className="list-group-flush">
                        <h4>Price: {price} $</h4>

                        <p>Suppliear : {supplier}</p>
                        <button className='bg-dark text-light'>Deliverd</button>
                    </ListGroup>
                </div>



                <div className='mt-2 mx-4' style={{ width: '18rem' }}>
                    <Card.Title>Product Name: {name}</Card.Title>
                    <h4>Quantity: {quantity}  </h4>
                    <Card.Text>

                        <h6>Description</h6> {description}
                    </Card.Text>
                </div>

            </div>

        </div >


    );
};

export default SingleProduct;