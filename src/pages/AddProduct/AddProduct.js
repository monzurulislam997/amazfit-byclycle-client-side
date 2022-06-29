import React from 'react';

const AddProduct = () => {
    return (
        <div className='w-50 mx-auto'>
            <h3>Add Product </h3>
            <form >

                <input type="text" placeholder='Paste an image link to add' name="img" />
            </form>
        </div>
    );
};

export default AddProduct;