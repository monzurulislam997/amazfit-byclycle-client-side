import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Row from 'react-bootstrap/Row';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('bicycles.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <h2>Explore Our Products</h2>
            <Row xs={1} md={3} className="g-4">

                {
                    products.slice(0, 6).map(product => <Product
                        product={product}
                    ></Product>)
                }
            </Row>
        </>
    );
};

export default Products;