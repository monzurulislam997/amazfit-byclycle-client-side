import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Add2 from '../Add2/Add2';

const AddMyItem = () => {

    const [productDetails, setProductDetails] = useState([]);


    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])

    // const { _id, name, img, description, price, quantity, supplier } = allProduct;





    return (
        <div className='w-75 mx-auto' >








            {/* <h2 className='text-center'>Product Details</h2>

            <div className='d-flex border w-75 mx-auto  p-2' >

                <div className="ms-5 mt-1 " style={{ width: '18rem' }}>
                    <Card.Img variant="top" width="220px" height="150px" src={img} />
                    <h5>ID: {_id}</h5>

                    <ListGroup className="list-group-flush">
                        <h4>Price: {price} $</h4>

                        <p>Suppliear : {supplier}</p>


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

            {/* ---Restock item section---- */}


            <div className=' text-center my-4  '>
                <Link className='link-btn' to="/manageproducts">Manage Products</Link>
            </div>

        </div >


    );
};

export default AddMyItem;