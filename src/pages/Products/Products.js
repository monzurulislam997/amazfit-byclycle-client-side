import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Row from 'react-bootstrap/Row';
import useProducts from '../../hooks/useProducts';

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
        </>
    );
};

export default Products;