
import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';

const Myitems = ({ product }) => {
    const { _id, name, img, supplier, price } = product;

    const handleAdd = () => {
        const orderInfo = {
            id: _id,
            name: name,
            supplier: supplier,
        }

        axios.post("http://localhost:5000/order", orderInfo)
            .then(res => {
                if (res.status === 200) {
                    alert("Product has been added")
                }
                else {
                    alert("Not addeded")
                }

            });
    }



    return (

        <Card className='my-3' border="secondary" style={{ width: '29rem' }}>
            <div className='d-flex  '>
                <img src={img} width="150px" height="150px" alt="" />

                <div className='mt-4 mx-5'>
                    <h5>{name}   </h5>
                    <p>price: {price}</p>
                    <p>Supplier:{supplier}</p>
                </div>
                <div className='mt-5 mx-2'>
                    <button onClick={() => handleAdd()} className='border border-none text-light bg-primary'>Add</button>
                </div>


            </div>
        </Card>


    )
}


export default Myitems;