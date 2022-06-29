import React from 'react';
import useProducts from '../../hooks/useProducts';
import Row from 'react-bootstrap/Row';
import ManageSIngleProduct from '../ManageSingleProduct/ManageSIngleProduct';
import { Link } from 'react-router-dom';
const ManageProducts = () => {
    const [products] = useProducts()
    return (
        <div className='px-5 py-3'>
            <h2 className='text-center  mb-4 d-inline my-3'>Explore Our Products </h2>  <h4 className='d-inline me-2'> Total result: {products.length}</h4>
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