import React, { useEffect, useState } from 'react';
import ShowItem from '../ShowItem/ShowItem';

const ShowMyItemStore = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])



    return (
        <div className=''>
            <h2 className='text-center text-success mt-2'>My Ordered Items</h2>

            {
                orders.map(order => <ShowItem

                    key={order._id}
                    order={order}
                >
                </ShowItem>)
            }

        </div>
    );
};

export default ShowMyItemStore;