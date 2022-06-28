import React from 'react';

const SingleProduct = (product) => {
    // const { name } = product;
    return (
        <div>
            {
                product.map(p => <li>{p.name}</li>)
            }

        </div>
    );
};

export default SingleProduct;