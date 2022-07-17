import React from 'react';
import { Card } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';

const ShowItem = ({ order }) => {
    const { _id, id, name, img, supplier, price } = order;
    const [products, setProducts] = useProducts();

    // ----------------------------------------------------------
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`https://peaceful-shelf-82163.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.send())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    console.log(remaining)
                    setProducts(remaining)

                })


            window.location.reload();
        }
    }





    const handleOrderDelete = (id) => {
        const proceed = window.confirm("Also Want to delete from Database ? ");
        if (proceed) {
            fetch(`https://peaceful-shelf-82163.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.send())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    console.log(remaining)
                    setProducts(remaining)

                })
            window.location.reload();
        }
    }



    return (
        <div className='w-50 my-3 mx-auto'>

            <Card className='p-2 ' border="secondary" >
                <div className='d-sm-flex  '>
                    <div>
                        <img src={img} width="170px" height="150px" alt="" />
                    </div>

                    <div className='w-50  mx-3  mt-4 '>
                        <h5 className='text-secondary'> {name}   </h5>
                        <p>price: {price}</p>
                        <p>Supplier:{supplier}</p>
                    </div>

                    <div className=' my-5   px-4'>
                        <button onClick={() => handleDelete(id) || handleOrderDelete(_id)} className='border border-none text-light bg-danger px-4 py-1 rounded'>Delete</button>
                    </div>

                </div>
            </Card>


        </div>
    );
};

export default ShowItem;