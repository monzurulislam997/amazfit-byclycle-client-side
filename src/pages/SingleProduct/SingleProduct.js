import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = (product) => {
    const [productDetails, setProductDetails] = useState({});
    const { id } = useParams()


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    const { name } = productDetails;
    return (
        <div>

            <h3>{name}</h3>


        </div>
    );
};

export default SingleProduct;