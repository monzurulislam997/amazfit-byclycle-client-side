import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerAdd = () => {
    return (
        <div className='text-center   my-5 mx-auto'>

            <Spinner className='my-5 ' animation="border" variant="warning" />

        </div>
    );
};

export default SpinnerAdd;