import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageItems from '../ManageItems/ManageItems';

const MyitemStore = () => {

    const [products, setProucts] = useProducts();

    return (

        <div>
            <h2 className='text-center'>My Items </h2>
            <div className=" w-50 mx-auto">

                {
                    products.map(product => <ManageItems
                        key={product._id}
                        product={product}
                    ></ManageItems>)
                }
            </div>
        </div>



    );
};

export default MyitemStore;