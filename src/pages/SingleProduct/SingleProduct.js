import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const SingleProduct = () => {
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

    const restockItem = (event) => {
        event.preventDefault()
        let number = event.target.number.value;

        if (number < 1) {

            return alert("Please,Input Positive Number");

        }

        const newQuantity = Number(quantity) + parseInt(number);
        const updateQuantity = { newQuantity }
        setUpdateNewQuantity(updateQuantity)

        const url = `http://localhost:5000/products/${id}`

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
                event.target.number.value = " "
                alert("Reaload the page to see the updated result if internet slow😂 ")
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

            <div className='my-5 border border-info px-5 py-3 w-50 mx-auto'>
                <h3 className='text-center'>Restock Items</h3>
                <form className='px-5' onSubmit={restockItem} >
                    <input type="number" min="0" name="number" placeholder='Input Number' />
                    <br />
                    <button className='border boder-none bg-info text-light mt-1 px-3'>Submit</button>
                </form>
            </div>
            <div className=' text-center my-4  '>
                <Link className='link-btn' to="/manageproducts">Manage Products</Link>
            </div>

        </div >


    );
};

export default SingleProduct;