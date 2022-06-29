import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Row from 'react-bootstrap/Row';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = () => {
    const [products] = useProducts()

    return (
        <>
            <h2>Explore Our Products</h2>
            <Row xs={1} md={3} className="g-4">

                {
                    products.slice(0, 6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </Row>
            <div className=' text-center my-4  '>
                <Link className='link-btn' to="/manageinventory">Manage Inventories</Link>
            </div>
        </>
    );
};

export default Products;