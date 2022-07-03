import React from 'react';
import useProducts from '../../hooks/useProducts';
import Row from 'react-bootstrap/Row';
import ManageSIngleProduct from '../ManageSingleProduct/ManageSIngleProduct';
import { Link } from 'react-router-dom';
const ManageProducts = () => {
    const [products] = useProducts()
    return (
        <div className=' p-2 mx-4 '>
            <h2 className='text-center w-50 mx-auto  border-bottom border-5 border-info my-3 text-danger'>Explore Our <span className='text-success'> Products </span></h2>
            <div className='d-flex  justify-content-end  align-items-center'>
                <span className='d-inline  fw-5 text-success '> Total Products: {products.length}</span>
            </div>

            <Row xs={1} md={3} className="g-4">

                {
                    products.map(product => <ManageSIngleProduct
                        key={product._id}
                        product={product}
                    ></ManageSIngleProduct>)
                }
            </Row>
            <div className='text-center my-5'> <Link className='link-btn ' to='/addproduct'>Add Product</Link ></div>
        </div>
    );
};

export default ManageProducts;