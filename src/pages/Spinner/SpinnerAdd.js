import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerAdd = () => {
    return (
        <div style={{ height: "800px" }} className='text-center w-75   my-5 mx-auto'>

            <Spinner className='my-5' animation="border" variant="warning" />

        </div>
    );
};

export default SpinnerAdd;