import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const SingleProduct = (product) => {
    const [productDetails, setProductDetails] = useState({});
    const [updateNewQuantity, setUpdateNewQuantity] = useState({})

    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [updateNewQuantity])


    const { _id, name, img, description, price, quantity, supplier } = productDetails;


    const updateInfo = () => {
        const newQuantity = Number(quantity) - 1;
        const updateQuantity = { newQuantity }
        setUpdateNewQuantity(updateQuantity)

        const url = `http://localhost:5000/products/${id}`
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert("Updated")
            })
    }

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

                        <button onClick={updateInfo} className='bg-dark text-light'>Deliverd</button>
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

            <div>
                <h3>Restock Items</h3>
                <form >
                    <input type="number" name="number" />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
            <div className=' text-center my-4  '>
                <Link className='link-btn' to="/manageinventory">Manage Inventories</Link>
            </div>
        </div >


    );
};

export default SingleProduct;