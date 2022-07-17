import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import bg from '../../images/bg-login1.jpg'
import './Addproduct.css'
const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {

        const url = `https://peaceful-shelf-82163.herokuapp.com/products`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

        event.target.reset()
        alert("Product has been added")
    }




    return (
        <div style={{ backgroundImage: `url(${bg})`, height: "100vh" }}>
            <div className='w-50   mx-auto'>
                <h2 className='text-danger text-center  pt-5'>Add  <span className='text-warning'>product</span></h2>
                <form className='d-flex flex-column mt-4 ' onSubmit={handleSubmit(onSubmit)}>

                    <input className='rounded py-2 ' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />

                    <textarea className='rounded mt-2' placeholder='Write Something' {...register("description")} />

                    <input className='rounded py-2 mt-2' placeholder='Add price' type="number" {...register("price",)} />

                    <input className='rounded py-2 mt-2' placeholder='Add Quantity' type="number" {...register("quantity",)} />

                    <input className='rounded py-2 mt-2' placeholder='photo URL' type="text" {...register("img",)} />
                    <input className='rounded py-2 mt-3 text-light fw-5 fs-5 bg-success' type="submit" />
                </form>

            </div>
        </div>
    );










    // return (
    //     <div className='w-50 mx-auto'>
    //         <h3>Add Product </h3>
    //         <Form onSubmit={addProduct} >
    //             <Form.Group className="mb-3" controlId="formBasicEmail">
    //                 <Form.Label>Product Name</Form.Label>
    //                 <Form.Control type="text" name="name" placeholder="Enter Product Name" />
    //             </Form.Group>

    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                 <Form.Label>Quantity</Form.Label>
    //                 <Form.Control type="number" quantity="quantity"  min="1" placeholder="Enter quantity" />
    //             </Form.Group>
    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                 <Form.Label>Description</Form.Label>
    //                 {/* <Form.Control type="textarea" placeholder="Enter Description" /> */}
    //                 <textarea className='w-100' id="subject" name="subject" placeholder="Write something.." style={{ height: "70px" }}></textarea>
    //             </Form.Group>
    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                 <Form.Label>Supplier Name</Form.Label>
    //                 <Form.Control type="password" placeholder="Enter upplier name" />
    //             </Form.Group>


    //             <Button className='w-100' variant="primary" type="submit">
    //                 Submit
    //             </Button>
    //         </Form>
    //     </div>
    // );
};

export default AddProduct;