import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerAdd = () => {
    return (
        <div>
            <Spinner animation="border" role="status">
                <Spinner animation="border" />
            </Spinner>
        </div>
    );
};

export default SpinnerAdd;