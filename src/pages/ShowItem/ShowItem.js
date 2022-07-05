import React from 'react';
import { Card } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';

const ShowItem = ({ order }) => {
    const { _id, id, name, img, supplier, price } = order;
    const [products, setProducts] = useProducts();

    const handleOrderDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
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




    // ----------------------------------------------------------
    const handleDelete = (id) => {
        const proceed = window.confirm("Also Want to delete from Database ?");
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
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
        <div>
            <Card className='my-3' border="secondary" style={{ width: '29rem' }}>
                <div className='d-flex  '>
                    <img src={img} width="150px" height="150px" alt="" />

                    <div className='mt-4 mx-5'>
                        <h5> name:{name}   </h5>
                        <p>price: {price}</p>
                        <p>Supplier:{supplier}</p>
                    </div>

                    <div className='mt-5 mx-2'>
                        <button onClick={() => handleDelete(id) || handleOrderDelete(_id)} className='border border-none text-light bg-primary'>Delete</button>
                    </div>

                </div>
            </Card>


        </div>
    );
};

export default ShowItem;