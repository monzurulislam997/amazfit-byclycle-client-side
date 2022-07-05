import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageItems from '../ManageItems/ManageItems';
import "./MyitemStore.css"
const MyitemStore = () => {

    const [products, setProucts] = useProducts();

    return (

        <div className=' w-50  mx-auto'>
            <h2 className='text-center mt-2 '>Manage Items </h2>
            <div className=" ">

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