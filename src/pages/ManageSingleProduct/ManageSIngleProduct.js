import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
const ManageSIngleProduct = ({ product }) => {

    const [products, setProucts] = useProducts([])
    const { name, _id, img, description, quantity, supplier, price } = product;
    const naviagate = useNavigate()
    const handleManage = id => {
        naviagate(`/product/${id}`)


    }


    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.send())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    console.log(remaining)
                    setProucts(remaining)

                })
            window.location.reload();
        }
    }


    return (

        <Col>
            <Card>

                <Card.Img variant="top" width="300px" height="220px" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{description.slice(0, 140)}</p>
                    <h6>Quantity: {quantity}</h6>
                    <p>Supplier : {supplier}</p>
                    <button onClick={() => handleManage(_id)} className='  w-100  border border-none bg-dark text-light'>Manage Product</button>
                    <h5>Price: {price} $</h5>
                    <button className='border border-none bg-primary text-light rounded px-5' onClick={() => handleDelete(_id)}>Delete</button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default ManageSIngleProduct;