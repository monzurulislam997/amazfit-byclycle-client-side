import React from 'react';
import Product from '../Product/Product';
import Row from 'react-bootstrap/Row';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = () => {
    const [products] = useProducts()

    return (
        <>
            <h2 className='text-center'>Explore Our Products </h2>
            <Row xs={1} md={3} className="mx-2">

                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Row>
            <div className=' text-center my-4  '>
                <Link className='link-btn' to="/manageitems">Manage Inventories</Link>
            </div>
        </>
    );
};

export default Products;