
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

        //     const url = "http://localhost:5000/orders";
        //     fetch("http://localhost:5000/order", {
        //         method: "POST",
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(orderInfo)
        //     })
        //         .then(res => res.json())
        //         .then(result => {
        //             console.log(result)
        //         })


        //     alert("Product has been added")
        // }




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






    // const handleDelete = (id) => {
    //     const proceed = window.confirm("Are you sure you want to delete?");
    //     if (proceed) {
    //         fetch(`http://localhost:5000/products/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.send())
    //             .then(data => {
    //                 const remaining = products.filter(product => product._id !== id);
    //                 console.log(remaining)
    //                 setProucts(remaining)

    //             })
    //         window.location.reload();
    //     }
    // }


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
                {/* <div className='mt-5 mx-2'>
                    <button onClick={() => handleDelete(_id)} className='border border-none text-light bg-primary'>Delete</button>
                </div> */}

            </div>
        </Card>


    )
}


export default ManageItems;