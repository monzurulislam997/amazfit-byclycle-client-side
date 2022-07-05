
import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';

const ManageItems = ({ product }) => {
    const { _id, name, img, supplier, price } = product;


    const handleAdd = () => {
        const orderInfo = {
            id: _id,
            name: name,
            price: price,
            img: img,
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

        <Card className='w-100 my-3' border="secondary" >
            <div className='d-lg-flex   '>
                <img src={img} width="180px" height="150px" alt="" />

                <div className='w-50 mt-4 ms-4'>
                    <h5>{name}   </h5>
                    <p>price: {price}</p>
                    <p>Supplier:{supplier}</p>
                </div>
                <div className='mt-5 mx-2'>
                    <button onClick={() => handleAdd()} className='border my-2 px-4  py-1 rounded  border-none text-light bg-success'>Add Item</button>
                </div>


            </div>
        </Card>


    )
}


export default ManageItems;