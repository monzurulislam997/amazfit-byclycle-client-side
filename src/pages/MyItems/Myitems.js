import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Myitem from '../Myitem/Myitem';

const Myitems = () => {
    const [products] = useProducts()

    return (
        <>
            <h2 className='text-center'>My Items </h2>
            <Row xs={1} md={3} className="mx-2">

                {
                    products.slice(0, 6).map(product => <Myitem
                        key={product._id}
                        product={product}
                    ></Myitem>)
                }
            </Row>
            <div className=' text-center my-4  '>
                <Link className='link-btn' to="/manageproducts">Manage Inventories</Link>
            </div>
        </>
    );
};


export default Myitems;