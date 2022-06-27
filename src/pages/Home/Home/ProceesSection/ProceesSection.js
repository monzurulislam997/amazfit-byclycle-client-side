import React from 'react';
import img from '../../../../images/procees.png'
const ProceesSection = () => {
    return (
        <div className='bg-dark  p-5'>
            <h1 className='text-center mb-5 text-warning'><span className='text-danger'>Our Super </span> Duper  System <span className='text-danger fs-2'>EMI</span></h1>
            <img src={img} alt="" />
        </div>
    );
};

export default ProceesSection;